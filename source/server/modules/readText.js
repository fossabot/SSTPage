import fs from 'fs'
import path from 'path'

const readYaml = (location, callback) => {
  if(!callback instanceof Function) throw TypeError('Parameter "callback" must be a function!');

  let data, rawData;

  try { rawData = fs.readFileSync(location, 'utf8') } 
  catch (e) { return {error: 'Can not read file.', msg: e.message} }

  try { data = callback(rawData) } 
  catch (e) {return {error: `Can't resolve ${path.basename(location)}.`, msg: e.msg}}
  
  return data
}

export default readYaml