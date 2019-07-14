const path = require("path");
const webpack = require("webpack");
module.exports = {
    context: __dirname,
    entry: {
        javascript: "./index.js"
    },
    output: {
        filename: "bundle.js",
        path: __dirname +"/dist"
    },
}