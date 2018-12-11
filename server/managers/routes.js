const mailController = require('../controllers/mailer');
const mergeTagController = require('../controllers/mergeTagController');
// Binding controller for mailer to routes
module.exports = (app) => {
    app.post("/sendMail", mailController.sendMail);
    app.get("/getMergeTags", mergeTagController.getMergeTag);
    app.post("/createMergeTag", mergeTagController.createMergeTag)
};
