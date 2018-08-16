"use strict";

const npath = require("path");

module.exports = {
  mode: "development",
  entry: ["./src/main.jsx"],
  output: {
    filename: "bundle.js",
    path: npath.resolve(__dirname, "_build"),
    publicPath: "/_build/"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devtool: process.env.WEBPACK_DEV ? "eval" : false,
  module: {
    rules: [{
      test: /\.js|\.jsx$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: [
            ["babel-preset-env", {modules: false}],
            "babel-preset-react"
          ],
          plugins: [
            "babel-plugin-syntax-dynamic-import"
          ].concat(process.env.WEBPACK_DEV === "hot" ? ["react-hot-loader/babel"] : [])
        }
      }
    }]
  }
};
