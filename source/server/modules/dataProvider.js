import fs from 'fs'
import path from 'path'

import exists from './exists'
import readYaml from './readYaml'
import readMarkdown from './readMarkdown'
import getDateTime from './getDateTime'

class dataProvider {
  constructor({name, location, init = null, watch = null, then = null, type = 'yaml'}) {
    console.log(`Building ${name}...`);
    if(then &&!then instanceof Function) throw TypeError('Parameter "Then" must be a function!');
    if(['md', 'yaml'].indexOf(type) === -1) throw TypeError('Parameter "Type" must be md or yaml');

    this.name       = name;
    this.location   = location;
    this.fileExists = exists(location);
    this.isfolder   = this.fileExists && fs.lstatSync(location).isDirectory();
    this.subscriber = [];
    this.then       = then;
    this.extname    = `.${type}`;

    if(this.isfolder) this.fileList = this.listFiles();
    if(init) this.initDataProvider();
    if(watch) this.watchDataModification();
  }

  initDataProvider() {
    this.refreshData({
      error: `${this.name} is initializing.`,
    });

    this.refreshData(this.fetchData());
  }

  listFiles() {
    let dirContent, files;
    
    dirContent = fs.readdirSync(this.location);
    files = dirContent.filter(e => path.extname(e) === this.extname);
    
    return files
  }

  readFile(file) {
    return this.extname === '.yaml' ? readYaml(file) : readMarkdown(file);
  }

  fetchData() {
    if(!this.fileExists) return {error: 'Target not exists'};
    if(!this.isfolder) return this.readFile(this.location);

    return this.listFiles().map(i => {
      let fileContent;

      fileContent = this.readFile(path.join(this.location, i));
      if (typeof(fileContent) === 'object') fileContent.__fileName = path.basename(i, this.extname);

      return fileContent
    });
  }

  refreshData(data) {
    this.data = data;

    if(this.then && !this.data.error) this.data = this.then(data);

    this.dataString = JSON.stringify(this.data);
  }

  update() {
    if(this.then instanceof Function) this.then();
  }

  subscribe (fun, runImmediately = false) {
    if(!fun instanceof Function) throw TypeError('Subscriber must be a function!');
    this.subscriber.push(fun);
    
    if(runImmediately) fun(this.data);
  }

  watchDataModification() {
    fs.watch(this.location, (curr, prev) => {
      console.log(`${this.name} was chagned at ${getDateTime()}.`);
      this.refreshData(this.fetchData());

      this.subscriber.map(fun => fun(this.data));
    });
  }
}

export default dataProvider