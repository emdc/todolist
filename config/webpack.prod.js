const CompressionPlugin = require('compression-webpack-plugin');
const {Config} = require('webpack-config');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const autoprefixer = require('autoprefixer');
const chunkGroups = require('./chunkGroups');
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
    mode: 'production',
    entry: {
      app: [
        '@babel/polyfill',
        '@babel/register',
        './src/index.jsx'
      ]
    },
    optimization: {
      minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
      minimize: true,
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
        template: 'src/html-templates/general.hbs',
        env: '"production"',
        tenantName: process.env.TENANT_NAME,
        hash: true,
        inject: false
      }),
      new HtmlWebpackHarddiskPlugin(),
      new webpack.DefinePlugin({
        'process.env':
          {NODE_ENV: JSON.stringify('production')}
      }),
      new webpack.optimize.AggressiveMergingPlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new CompressionPlugin({
        asset: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.js$|\.css$|\.html$/,
        threshold: 0,
        minRatio: 0.8
      })
    ],
    module: {
      rules: [{
        test: /(\.sass|\.scss|\.css)$/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            hmr: false
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
