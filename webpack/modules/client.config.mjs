import path from 'path'

import {script, clientStyle, clientImage} from '../common/loaders'
import {clientPlugins} from '../common/plugins'
import {commonResolve} from '../common/rules'
import config from '../../configuration'

const rule = {
  name: 'browser',

  entry: path.join(config.path.client, 'entry.jsx'),
  output: {
    path: config.path.deployment,
    filename: 'assets/bundle.js',
  },
  resolve: commonResolve,
  module: {
    rules: [].concat(script, clientStyle, clientImage)
  },

  devtool: process.env.NODE_ENV === 'development' ? 'sourcemap' : false,
  plugins: clientPlugins,
}

export default rule