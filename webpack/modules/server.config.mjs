import path from 'path'

import {script, nodeImage, nodeStyle} from '../common/loaders'
import {nodeConfig} from '../common/rules'
import config from '../../configuration'

const rule = nodeConfig({
  name: 'server',

  module: {
    rules: [].concat(script, nodeImage, nodeStyle)
  },

  entry: path.join(config.path.server, 'server.jsx'),
  output: {
    path: config.path.deployment,
    filename: 'server.js',
  },
});

export default rule