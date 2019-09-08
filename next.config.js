require('dotenv').config();

const webpack = require('webpack');
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  webpack: config => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      }),

      new webpack.DefinePlugin({
        'process.env.SERVER': JSON.stringify(process.env.SERVER)
      })
    ];

    return config;
  }
};
