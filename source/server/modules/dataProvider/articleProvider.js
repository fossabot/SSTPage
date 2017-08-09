import fs from 'fs'
import path from 'path'

import _ from 'lodash'
import frontMatter from 'front-matter'
import commonmark from 'commonmark'

import configuration from '../../../../configuration'
import queryAuthors from '../queryAuthors'

let files;

const articlePath = path.join(configuration.path.data, 'articles');

const readDir = () => {files = fs.readdirSync(articlePath).filter(e => path.extname(e) === 'md')};

const queryFile = (query) => {
  let fileName, fileContent, fmContent, mdContent, result;

  fileName = `${query.id}.md`;
  if(!_.indexOf(files, fileName)) return {code: 404, error: "Article Not Found"}
  
  try {
    fileContent = fs.readFileSync(path.join(articlePath, fileName), 'utf8');
  } catch (e) {
    return {code: 500, error: e.message}
  }

  fmContent = frontMatter(fileContent);
  fmContent.attributes.authors = queryAuthors(fmContent.attributes.authors);
  
  try {
    const reader = new commonmark.Parser({safe: true});
    const writer = new commonmark.HtmlRenderer();
    mdContent = writer.render(reader.parse(fmContent.body));
  } catch (e) {
    return {code: 500, error: e.message};
  }

  return _.merge(fmContent.attributes, {content: mdContent})
}

const articleProvider = (query) => {
  let data;
  
  data = queryFile(query);
  
  return {data: data, dataString: JSON.stringify(data)}
}

readDir();

fs.watch(articlePath, () => readDir());

export default articleProvider