const webpack = require('webpack');
const helpers = require('../utils/helpers');
const webpackConfig = require('../utils/webpack-config')();
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const environment = helpers.getEnvironment();
const AssetsPlugin = require('assets-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const assetsPluginInstance = new AssetsPlugin({
    prettyPrint: true
});
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Note: Loaders load from bottom to top and right to left
module.exports = function () {
    return {
        entry: webpackConfig.entryPoints,
        mode: environment,
        resolve: {
            extensions: ['.jsx', '.js', '.json'],
            modules: [
                helpers.getAbsolutePath('app'),
                helpers.getAbsolutePath('node_modules')
            ],
            // This is required for helping webpack read the handlebars file
            alias: {
                handlebars: 'handlebars/dist/handlebars.min.js'
            }
        },
        output: {
            publicPath: '/'
        },
        context: helpers.getAbsolutePath('app/components'),
        devServer: webpackConfig.devServerConfig,
        module: {
            rules: [{
                test: /\.js$/,
                include: /(workers)/,
                use: {
                    loader: 'worker-loader',
                    options: {
                        inline: true
                    }
                }
            }, {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components|webfont.config.js)/,
                use: {
                    loader: 'babel-loader'
                }
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }, {
                test: /\.(jpg|png|gif)$/,
                use: 'file-loader'
            }, {
                test: /\.(eot|woff2?|svg|ttf|woff|otf)([\?]?.*)$/,
                use: 'file-loader?name=[name].[ext]'
            }, {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: ["css-loader", "sass-loader"],
                    fallback: "style-loader"
                })
            }, {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: ["css-loader"],
                    fallback: "style-loader"
                })
            }, {
                test: /\.json$/,
                use: 'json-loader'
            }, {
                test: /webfont\.config\.js/,
                use: [
                    'style-loader',
                    'css-loader',
                    'webfonts-loader'
                ]
            }]
        },
        plugins: [
            new AssetsPlugin({
                path: helpers.getAbsolutePath('dist'),
                filename: 'webpack-assets.json',
                prettyPrint: true
            }),
            new CleanWebpackPlugin([
                helpers.getAbsolutePath('dist')
            ], {
                root: helpers.getAbsolutePath('')
            }),
            new webpack.DefinePlugin({
                // This will be available in your application code
                appEnvironment:  JSON.stringify(environment)
            }),
            new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
            new CompressionPlugin({
                algorithm: 'gzip'
            }),
            new HtmlWebpackPlugin({
                template: '../../index.html'
            }),
            assetsPluginInstance
        ]
    };
};
