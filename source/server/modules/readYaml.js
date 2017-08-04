import fs from 'fs'
import path from 'path'
import { safeLoad } from 'js-yaml'

const readYaml = (location) => {
  let data, rawData;

  try { rawData = fs.readFileSync(location, 'utf8') } 
  catch (e) { return {error: 'Can not read file.', msg: e.message} }

  try { data = safeLoad(rawData) } 
  catch (e) { return {error: `Can't resolve ${path.basename(location)}.`, msg: e.msg}}
  
  return data
}

export default readYaml