'use strict';

const glob = require('glob');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path')
const Dotenv = require('dotenv-webpack');

// require('dotenv').config({path: './.env'});
// const app = process.env.APP;
let moduleFiles = glob.sync(`./modules/office/**/*.js`);
moduleFiles.push('./modules/utilities.js');
moduleFiles.push('./modules/xhr.js');

let config = {
    mode: 'development',
    entry: {
        modules: moduleFiles
    },
    output: {
        path: path.join(__dirname, 'builds', 'office', 'dist'),
        filename: 'bundle.min.js'
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
    },
    plugins: [
        new Dotenv({
            path: './.env',
            safe: false
        })
    ],
    optimization: {
        minimizer: [
            // we specify a custom UglifyJsPlugin here to get source maps in production
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                uglifyOptions: {
                    compress: false,
                    ecma: 6,
                    mangle: true
                },
                sourceMap: true
            })
        ]
    },
    resolveLoader: {
        modules: [path.join(__dirname, 'node_modules')]
    },
    resolve: {
        modules: [path.join(__dirname, 'node_modules')]
    }
};

module.exports = config;
