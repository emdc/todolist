const {Config} = require('webpack-config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = new Config().merge({
  output: {
    path: path.resolve(__dirname, '../public/'),
    filename: 'assets/js/[name].min.js',
    publicPath: '/'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].css',
      chunkFilename: 'assets/css/[id].css',
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.sass', '.scss'],
    alias: {
      view: path.resolve(__dirname, '../src/view'),
      data: path.resolve(__dirname, '../src/data'),
      style: path.resolve(__dirname, '../src/style'),
      store: path.resolve(__dirname, '../src/store'),
      i18n: path.resolve(__dirname, '../src/i18n')
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
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader'
    }, {
      test: /\.hbs$/,
      loader: 'handlebars-loader'
    }]
  },
  node: {fs: 'empty'},
  performance: {hints: false},
  stats: {
    cached: false,
    cachedAssets: false,
    children: false,
    chunks: false,
    chunkGroups: false,
    chunkModules: false,
    chunkOrigins: false,
    entrypoints: false,
    modules: false,
    reasons: false
  }
});
