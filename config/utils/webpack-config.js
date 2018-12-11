const helpers = require("./helpers");
// Note: Don't change it to self-executing function as it disrupts the editor's suggest mode
module.exports = function () {
    let entryPoints = {
        // Bundling all the vendor files in one bundle
        vendor: [
            "react",
            "react-dom",
            "react-modal",
            "react-redux-toastr"
        ],
        // Generating App bundle using app.js as a entry point
        app: helpers.getAbsolutePath("index.js"),
        fonts: helpers.getAbsolutePath("webfont.config.js")
    };
    let devServerConfig = {
        host: "127.0.0.1",
        port: 8686,
        compress: true,
        disableHostCheck: true,
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
    };
    let pageInfo = {
        title: "PAGE TITLE",
        faviconPath: "/favicon.ico",
        baseURL: "/"
    };
    return {
        entryPoints,
        devServerConfig,
        pageInfo
    };
};
