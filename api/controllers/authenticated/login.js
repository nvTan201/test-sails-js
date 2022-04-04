const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {


  friendlyName: 'Login',


  description: 'Login authenticater.',


  inputs: {
    email: {
      type: 'string'
    },
    password: {
      type: 'string'
    }
  },


  exits: {

  },


  fn: async function (inputs) {

    var student = await Student.findOne({
      email: inputs.email
    });
    if (!student) {
      return "not found";
    }

    var check = bcrypt.compareSync(inputs.password, student.pass);

    if (check) {
      var token = jwt.sign({
        id: student.id,
        name: student.name,
        pass: inputs.password
      }, "sailsjsTest");

      this.res.cookie('token', token);
      return this.res.redirect('/student');
    } else {
      return this.res.redirect('/login');
    }
  }


};
