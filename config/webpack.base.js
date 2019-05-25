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
