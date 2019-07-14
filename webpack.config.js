const path = require("path");
const webpack = require("webpack");

module.exports = {
    // tell webpack lives in __dirName and entry point of the app is index.js
    context: __dirname,
    entry: {
      javascript: "./index.js",
    },
    // tell webpack to output resulting js in /dist
    output: {
      filename: "bundle.js",
      path: __dirname + "/dist",
    },
    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        },
        {
            test: /\.scss$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS, using Node Sass by default
            ],
          }
        ]
    },
  }