module.exports = {


  friendlyName: 'Edit process',


  description: '',


  inputs: {
    id: {
      type: "number",
    },
    name: {
      type: "string",
    },
    age: {
      type: "number",
    },
    email: {
      type: "string",
    },
    file: {
      type: "string",
    },

  },


  exits: {

  },


  fn: async function (inputs) {
    var req = this.req;
    var time = new Date().getTime();
    req.file('image').upload({
      saveAs: function(file, cb) {
        cb(null, time + file.filename);
      },
      dirname: '../../assets/images/'
    },async function(error, uploadedFiles) {
      let img = "/images/" + time + uploadedFiles[0].filename
      await Student.update({ id: inputs.id }).set({ name: inputs.name, age: inputs.age, email: inputs.email, img: img })
    });
    return this.res.redirect('/student');
  }


};
