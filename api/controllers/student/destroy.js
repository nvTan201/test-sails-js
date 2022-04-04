
module.exports = {


  friendlyName: 'Destroy',


  description: 'Destroy student.',


  inputs: {
    id: {
      type: "number",
    }
  },


  exits: {

  },


  fn: async function (inputs) {

    await Student.destroy({ id: inputs.id })
    return this.res.redirect('/student');
  }


};
