var path = require("path");
var webpack = require("webpack");
var autoprefixer = require("autoprefixer");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = function () {
  var config = {};

  // app import chain starts here
  config.entry = {
    app: './src/app/app.js',
  };

  // location of written bundled files
  config.output = {
    path: __dirname + 'dist/',
    publicPath: 'http://localhost:8080/',
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js'
  };


  config.module = {
    loaders: [
      { test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
      },
      { test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      { test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      { test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        loader: 'file'
      },
      { test: /\.html$/,
        loader: 'raw'
      }
    ]
  };

  config.plugins = [];
  config.plugins.push(
    new HtmlWebpackPlugin({
      template: './src/public/index.html',
      inject: 'body'
      }),
    new ExtractTextPlugin('[name].[hash].css')
  );

  config.postcss = [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ];

  config.devServer = {
    contentBase: './src/public',
    stats: 'minimal'
  };

  return config;
  }();
