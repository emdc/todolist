const {Config} = require('webpack-config');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = new Config()
  .extend(path.resolve(__dirname, 'webpack.base.js'))
  .merge({
    devtool: 'cheap-module-source-map',
    entry: {
      app: [
        'babel-polyfill',
        'react-hot-loader/patch',
        'webpack-hot-middleware/client',
        './src/index.jsx'
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        alwaysWriteToDisk: true,
        title: 'ToDo List',
        filename: 'index.html',
        template: 'src/pageTemplates/general.hbs',
        env: '"development"',
        hash: true,
        inject: false
      }),
      new HtmlWebpackHarddiskPlugin(),
      new webpack.DefinePlugin({
        'process.env':
          {NODE_ENV: JSON.stringify('dev')}
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    ]
  });
