const mergeTagService = require("../services/mergeTagService");
const HttpStatus = require('http-status-codes');

const messages = {
    fetchMergeTagsFailed: 'Unable to fetch merge tags data',
    createMergeTagsFailed: 'Unable to create Merge Tag',
    insufficientMergeTagData: 'MergeTag name and value are required to create a Merge Tag',
    mergeTagCreationSuccess: 'Merge Tag created successfully'
};

module.exports = {
    // Controller for getting merge tag from the DB
    getMergeTag: (req, res) => {
        return mergeTagService.getAllMergeTag().then(function (data, err) {
            if (!err) {
                res.send({
                    mergeTags: data
                });
            } else {
                res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
                    message: messages.fetchMergeTagsFailed
                });
            }
        });
    },
    // Controller for creating merge tag from the DB
    createMergeTag: (req, res) => {
        const mergeTagName = req.body.name;
        const mergeTagValue = req.body.value;
        if (mergeTagName !== null && mergeTagName !== '' && mergeTagValue !== null && mergeTagValue !== '') {
            return mergeTagService.createMergeTag(mergeTagName, mergeTagValue).then(function (data, err) {
                if (err) {
                    // Send error if it's an error
                    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
                        message: messages.createMergeTagsFailed
                    });
                } else {
                    res.status(HttpStatus.OK).send({
                        message: messages.mergeTagCreationSuccess
                    });
                }
            }).fail(function () {
                res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
                    message: messages.createMergeTagsFailed
                });
            });
        } else {
            res.status(HttpStatus.BAD_REQUEST).send({
                message: messages.insufficientMergeTagData
            });
        }
    }
};
