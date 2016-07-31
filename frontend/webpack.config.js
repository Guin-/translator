var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = function () {
  var config = {};

  // app import chain starts here
  config.entry = {
    app: './app/app.js',
  };

  // location of written bundled files
  config.output = {
    path: __dirname + 'dist/',
    publicPath: 'http:localhost:8080/',
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js'
  };


  config.module = {
    loaders: [
      { test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      { test: /\.html$/,
        loader: 'raw'
      }
    ]
  };

  config.plugins = [];
  config.plugins.push(
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: 'body'
      })
  );

  config.devServer = {
    contentBase: './public',
    stats: 'minimal'
  };

  return config;
  }();
