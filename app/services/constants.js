class Constants {
    // API Configs for both the environments
    // This config decided the url to hit in different environments
    apiServerConfig = {
        development: {
            apiUrl: 'http://localhost:8080'
        },
        production: {
            apiUrl: 'http://localhost:8080',
        }
    };
    getEnvironmentBasedUrl(urlKey) {
        // appEnvironment is coming from NODE_ENV used in package.json
        // This is provided by webpack and injected into scripts
        return this.apiServerConfig[appEnvironment][urlKey];
    }
}

export default new Constants();
