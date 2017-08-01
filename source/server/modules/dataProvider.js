import fs from 'fs'
import path from 'path'

import exists from './exists'
import readYaml from './readYaml'
import getDateTime from './getDateTime'

class dataProvider {
  constructor({name, location, init = null, watch = null, then = null}) {
    if(then &&!then instanceof Function) throw TypeError('Parameter "Then" must be a function!');
    this.name = name;
    this.location = location;
    this.fileExists = exists(location);
    this.isfolder = this.fileExists && fs.lstatSync(location).isDirectory();
    this.subscriber = [];
    this.then = then;

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
    // Code from: https://stackoverflow.com/questions/25460574/find-files-by-extension-html-under-a-folder-in-nodejs
    let dirContent, files;
    
    dirContent = fs.readdirSync(this.location);
    files = dirContent.filter(e => e.match(/.*\.(yaml)/ig));
    
    return files
  }

  fetchData() {
    if(!this.fileExists) return {error: 'Target not exists'};
    if(!this.isfolder) return readYaml(this.location);

    return this.listFiles().map(i => {
      let fileContent;

      fileContent = readYaml(path.join(this.location, i));
      if (typeof(fileContent) === 'object') fileContent.__fileName = path.basename(i, '.yaml');

      return fileContent
    });
  }

  refreshData(data) {
    this.data = data;

    if(this.then && !this.data.error) this.data = this.then(data);

    this.dataString = JSON.stringify(this.data);
  }

  subscribe (fun, runImmediately = false) {
    if(!fun instanceof Function) throw TypeError('Subscriber must be a function!');
    this.subscriber.push(fun);
    
    if(runImmediately) fun(this.data);
  }

  walkSubscriber() {
    subscriber.map(fun => fun(this.data));
  }

  watchDataModification() {
    fs.watch(this.location, (curr, prev) => {
      console.log(`${this.name} was chagned at ${getDateTime()}.`);
      this.refreshData(this.fetchData());

      this.walkSubscriber();
    });
  }
}

export default dataProvider