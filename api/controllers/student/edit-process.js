const cloudinary = require('cloudinary').v2;
const streamifier = require('streamifier');

module.exports = {
    friendlyName: 'Edit process',

    description: '',

    inputs: {
        id: {
            type: 'number',
        },
        name: {
            type: 'string',
        },
        age: {
            type: 'number',
        },
        email: {
            type: 'string',
        },
        image: {
            type: 'ref',
        },
        test: {
            type: 'ref',
        },
    },

    exits: {},

    fn: async function (inputs) {
        var req = this.req;
        var time = new Date().getTime();
        // req.file('image').upload({
        //   saveAs: function(file, cb) {
        //     cb(null, time + file.filename);
        //     console.log(file)
        //   },
        //   dirname: '../../assets/images/'
        // },async function(error, uploadedFiles) {
        //   let img = "/images/" + time + uploadedFiles[0].filename
        //   // await Student.update({ id: inputs.id }).set({ name: inputs.name, age: inputs.age, email: inputs.email, img: img })
        // });
        // return this.res.redirect('/student');
        console.log(inputs.image);
        // cloudinary.uploader.upload(`${inputs.test}`,
        // function(error, result) {console.log(result, error)});
    },
};
