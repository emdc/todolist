const {Config} = require('webpack-config');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const chunkGroups = require('./chunkGroups');
const path = require('path');
const webpack = require('webpack');

module.exports = new Config()
  .extend(path.resolve(__dirname, 'webpack.base.js'))
  .merge({
    devtool: 'cheap-module-source-map',
    mode: 'development',
    entry: {
      app: [
        '@babel/polyfill',
        '@babel/register',
        'webpack-hot-middleware/client',
        './src/index.jsx'
      ]
    },
    optimization: {
      minimize: false,
      occurrenceOrder: true,
      mergeDuplicateChunks: true,
      splitChunks: {
        chunks: 'all',
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        name: true,
        cacheGroups: chunkGroups
      }
    },
    resolve: {
      alias: {
        'react-dom': '@hot-loader/react-dom'
      }
    },
    plugins: [
      new HtmlWebpackPlugin({
        alwaysWriteToDisk: true,
        title: 'ToDo List',
        filename: 'index.html',
        template: 'src/html-templates/general.hbs',
        env: '"development"',
        hash: true,
        inject: false
      }),
      new HtmlWebpackHarddiskPlugin(),
      new webpack.DefinePlugin({
        'process.env':
          {NODE_ENV: JSON.stringify('development')}
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    ],
    module: {
      rules: [{
        test: /(\.sass|\.scss|\.css)$/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            hmr: true,
            reloadAll: true
          }
        }, {
          loader: 'css-loader',
          options: {
            url: true,
            modules: true,
            localIdentName: '[local]___[hash:base64:5]'
          }
        }, {
          loader: 'sass-loader',
          options: {
            modules: true,
            hashPrefix: `web${Date.now()}`,
            includePaths: [path.resolve(__dirname, '../src/style')]
          }
        }]
      }]
    }
  });
