const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackMerge = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const helpers = require("./helper");

module.exports = webpackMerge(commonConfig, {
  devtool: "source-map",

  output: {
    path: helpers.root('dist'),
    publicPath: `http://localhost:${process.argv[3]}/`,
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css')
  ]
});