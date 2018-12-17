const {Config} = require('webpack-config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = new Config().merge({
  output: {
    path: path.resolve(__dirname, '../public/'),
    filename: 'assets/js/[name].min.js',
    publicPath: '/'
  },
  plugins: [
    new ExtractTextPlugin('assets/css/styles.min.css', {allChunks: true})
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.sass'],
    alias: {
      actions: path.resolve(__dirname, '../src/actions'),
      view: path.resolve(__dirname, '../src/view'),
      data: path.resolve(__dirname, '../src/data'),
      reducers: path.resolve(__dirname, '../src/reducers'),
      providers: path.resolve(__dirname, '../src/providers'),
      style: path.resolve(__dirname, '../src/style')
    }
  },
  module: {
    rules: [{
      test: /(\.js|\.jsx)$/,
      use: [{
        loader: 'babel-loader',
        options: {
          compact: false
        }
      }]

    }, {
      test: /(\.sass|\.scss|\.css)$/,
      use: [{
        loader: 'style-loader',
        options: {
          modules: true,
          includePaths: [path.resolve(__dirname, '../src/style')]
        }
      }, {
        loader: 'css-loader',
        options: {
          modules: true,
          includePaths: [path.resolve(__dirname, '../src/style')],
          hashPrefix: `web${Date.now()}`,
          localIdentName: '[local]___[hash:base64:5]'
        }
      }, {
        loader: 'sass-loader',
        options: {
          modules: true,
          includePaths: [path.resolve(__dirname, '../src/style')]
        }
      }]
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader'
    }, {
      test: /\.hbs$/,
      loader: 'handlebars-loader'
    }]
  },
  node: {fs: 'empty'}
});
