import path from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import config from '../../configuration'

const clientImageLoader = (test, loader, options = {}) => {
  const defaultOption = {
    publicPath: '/',
    outputPath: 'assets/',
    name: '[hash].[ext]'
  }

  return {
    test: test,
    loader: loader,
    options: Object.assign(defaultOption, options)
  }
}

const script = [{
  test: /\.(js|jsx)$/,
  loader: 'babel-loader',
  query: {
    presets: ['react', 'es2015']
  }
}];

const clientStyle = [{
  test: /\.(less|css)$/,
  use: ExtractTextPlugin.extract({
    use:[
      {
        loader: 'css-loader',
        options: { minimize: true }
      }, 
      'less-loader'
    ],
  }),

  include: path.resolve(config.path.root ,'source')
}];

const nodeStyle = [{
  test: /\.(less|css)$/,
  loader: 'null-loader'
}];

const clientImage = [
  clientImageLoader(/\.(png|jpg|gif)$/, 'url-loader', {limit: 8192}),
  clientImageLoader(/\.svg$/, 'file-loader'),
]

const nodeImage = [
  {
    test: /\.(png|jpg|gif|svg)$/,
    loader: 'null-loader'
  }
]

export {script, clientStyle, nodeStyle, clientImage, nodeImage}