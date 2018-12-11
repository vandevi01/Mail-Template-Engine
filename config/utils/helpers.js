let path = require('path');
let rootDirectory = path.resolve(__dirname, '../../');

module.exports = {
    // Function for getting absolute path on the system
    getAbsolutePath: path.join.bind(path, rootDirectory),
    // Get Environment from NODE_ENV > defaults to development
    getEnvironment() {
        return process.env.NODE_ENV || "development";
    }
};
