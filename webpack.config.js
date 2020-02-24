const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',

  plugins: [
    new webpack.EnvironmentPlugin({
      API_KEY: process.env.API_KEY,
      PORT: process.env.PORT
    })
  ],

  entry: {
    login: './public/js/login.js',
    index: './public/js/index.js',
    success: './public/js/success.js',
    logout: './public/js/logout.js'
  },

  output: {
    filename: "[name].js",

    path: path.join(__dirname, 'public/dist')
  }
};
