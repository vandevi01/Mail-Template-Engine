const helpers = require('../utils/helpers');
const commonConfig = require('./webpack.common')();
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = function () {
    return webpackMerge(commonConfig, {
        devtool: 'nosources-source-map',
        output: {
            path: helpers.getAbsolutePath('dist'),
            filename: '[name].[hash].bundle.js',
            chunkFilename: '[id].[hash].chunk.js'
        },
        optimization: {
            minimize: true,
            minimizer: [
                new UglifyJsPlugin({
                    test: /\.js(\?.*)?$/i,
                    extractComments: true
                })
            ],
            runtimeChunk: true,
            splitChunks: { chunks: 'all' },
        },
        module: {
            rules: []
        },
        plugins: [
            new ExtractTextPlugin('[name].[hash].css')
        ]
    });
};
