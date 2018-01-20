import process from 'process'

import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import UglifyJSPlugin from 'uglifyjs-webpack-plugin'

const ExtractCssConfig = new ExtractTextPlugin('assets/bundle.css');

const clientPlugins = (process.env.NODE_ENV === 'development')
                      ? [ExtractCssConfig]
                      : [
                          ExtractCssConfig,
                          new UglifyJSPlugin(),
                          new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('production')})
                        ];

console.log(process.env.NODE_ENV);

const nodePlugins = [ExtractCssConfig];

export {clientPlugins, nodePlugins}