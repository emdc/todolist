const CompressionPlugin = require('compression-webpack-plugin');
const {Config} = require('webpack-config');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');

const ReactChunks = [
  'react',
  'react-router',
  'react-router-dom',
  'react-dom',
  'react-redux',
  'redux',
  'history'
];

module.exports = new Config()
  .extend(path.resolve(__dirname, 'webpack.base.js'))
  .merge({
    devtool: 'source',
    entry: {app: [
        'babel-polyfill',
        './src/index.jsx'
      ]},
    plugins: [
      new webpack.LoaderOptionsPlugin({
        options: {
          context: __dirname,
          postcss: [autoprefixer(
            {browsers: ['last 5 versions']}
          )]
        }
      }),
      new HtmlWebpackPlugin({
        alwaysWriteToDisk: true,
        title: 'ToDo List',
        filename: 'index.html',
        template: 'src/pageTemplates/general.hbs',
        env: '"production"',
        tenantName: process.env.TENANT_NAME,
        hash: true,
        inject: false
      }),
      new HtmlWebpackHarddiskPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'lib',
        filename: 'assets/js/lib.min.js',
        minChunks: ({context}) =>
          context && (/node_modules/).test(context)
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'react',
        filename: 'assets/js/react.min.js',
        minChunks: ({context}) =>
          context && (new RegExp(`/node_modules/(${ReactChunks.join('|')})`)).test(context)
      }),
      new webpack.DefinePlugin({
        'process.env':
          {NODE_ENV: JSON.stringify('production')}
      }),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.optimize.AggressiveMergingPlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new CompressionPlugin({
        asset: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.js$|\.css$|\.html$/,
        threshold: 0,
        minRatio: 0.8
      })
    ]
  });
