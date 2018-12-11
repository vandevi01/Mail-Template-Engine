const cors = require('cors');
const config = require('../services/config');
const corsOptions = {
    origin: config.allowedOrigins,
    credentials: true
};

// Allowing CORS for client testing
module.exports = (app) => {
    app.use(cors(corsOptions));
};
