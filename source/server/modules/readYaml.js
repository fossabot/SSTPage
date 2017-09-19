import { safeLoad } from 'js-yaml'

import readText from './readText'

const readYaml = (text) => {
  return safeLoad(text)
}

export default readYaml