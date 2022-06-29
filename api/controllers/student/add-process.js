module.exports = {
    friendlyName: 'Add process',

    description: '',

    inputs: {
        name: {
            type: 'string',
        },
        age: {
            type: 'number',
        },
        email: {
            type: 'string',
        },
    },

    exits: {
        // success:{
        //   viewTemplatePath:
        // }
    },

    fn: async function (inputs) {
        var rs = await Student.create({
            name: inputs.name,
            age: inputs.age,
            email: inputs.email,
            class: 1,
            pass: '$2a$12$6ojDY7ywTbWUbELzNgXuHOAhXAhh3EZXLVyZ7d1SCVtH/snZCCzq6',
        }).fetch();

        console.log(inputs);

        // return this.res.redirect('/student');
        return rs;
    },
};
