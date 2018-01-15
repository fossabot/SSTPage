import ExtractTextPlugin from 'extract-text-webpack-plugin'
import UglifyJSPlugin from 'uglifyjs-webpack-plugin'

const ExtractCssConfig = new ExtractTextPlugin('assets/bundle.css');

const clientPlugins = process.env.NODE_ENV === 'production'
                      ? [ExtractCssConfig]
                      : [ExtractCssConfig, new UglifyJSPlugin()];

const nodePlugins = [ExtractCssConfig];

export {clientPlugins, nodePlugins}