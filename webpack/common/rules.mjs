import nodeExternals from 'webpack-node-externals'
import {nodePlugins} from './plugins'

const commonResolve = {
  extensions: ['.js', '.jsx', '.json']
}

const nodeConfig = (options) => {
  const template = {
    target: 'node',
    node: {
      console: false,
      global: false,
      process: false,
      Buffer: false,
      __filename: false,
      __dirname: false
    },
  
    externals: [nodeExternals()],
  
    resolve: commonResolve,
  
    plugins: nodePlugins
  }

  return Object.assign(options, template)
}

export {commonResolve, nodeConfig}