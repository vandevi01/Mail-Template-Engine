const Q = require('q');
const MergeTag = require('../models/mergeTag');
/*
    Service for getting merge tag from DB
    For all DB related stuff, we are using MongoDB
    Reason for using: easy to integrate and easy to use
*/
module.exports = {
    getAllMergeTag: () => {
        let deferred = Q.defer();
        MergeTag.find({}, {
            __v: 0
        }, function (err, result) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(result);
            }
        });
        return deferred.promise;
    },
    createMergeTag: (name, value) => {
        let deferred = Q.defer();
        let tag = new MergeTag({
            name: name.trim(),
            value: value.trim()
        });
        tag.save(function (err, result) {
            if (err) {
                deferred.reject(err.message);
            } else {
                deferred.resolve(result);
            }
        });
        return deferred.promise;
    }
};
