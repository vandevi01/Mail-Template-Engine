import React from 'react';

export default {
    getIn: function(keyList) {
        let baseObject = this;
        try {
            keyList.forEach((key) => {
                baseObject = baseObject[key];
            });
            return baseObject;
        } catch(e) {
            return null;
        }
    }
};
