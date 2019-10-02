const path = require('path');
const UglifyJsPlugin = require('uglifyes-webpack-plugin');

const commonJSConfig = {
  entry: ['./index.js'],
  module: {
    rules: [],
  },
  target: 'web',
};

const rawConfig = Object.assign({}, commonJSConfig, {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'npccoincore-message.js',
    library: 'npccoincore-message',
    libraryTarget: 'umd',
  },
});
const uglifiedConfig = Object.assign({}, commonJSConfig, {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'npccoincore-message.min.js',
    library: 'npccoincore-message',
    libraryTarget: 'umd',
  },
  plugins: [
    new UglifyJsPlugin(),
  ],
});

module.exports = [rawConfig, uglifiedConfig];
