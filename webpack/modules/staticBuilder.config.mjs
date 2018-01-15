import path from 'path'

import {script, clientStyle, clientImage} from '../common/loaders'
import {nodeConfig} from '../common/rules'
import config from '../../configuration'

const rule = nodeConfig({
  name: 'staticBuilder',

  module: {
    rules: [].concat(script, clientImage, clientStyle)
  },

  entry:(path.join(config.path.server, 'staticBuilder.js')),
  output: {
    path: config.path.deployment,
    filename: 'staticBuilder.js',
  },
});

export default rule