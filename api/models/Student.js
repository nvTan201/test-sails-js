/**
 * Student.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
    attributes: {
        id: {
            type: 'number',
            autoIncrement: true,
        },

        name: {
            type: 'string',
            maxLength: 150,
        },

        age: {
            type: 'number',
        },

        email: {
            type: 'string',
            minLength: 5,
            maxLength: 100,
        },

        pass: {
            type: 'string',
            minLength: 8,
            maxLength: 255,
        },

        class: {
            type: 'number',
        },

        img: {
            type: 'json',
        },
    },

    beforeCreate: async function (ins, cb) {
        try {
            let rs = await Student.findOne({ name: ins.name });
            if (rs) {
                throw 'name already exist';
            }
            cb();
        } catch (error) {
            cb({
                code: 1,
                message: 'thất bại',
            });
        }
    },
};
