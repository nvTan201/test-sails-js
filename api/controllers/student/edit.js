module.exports = {


  friendlyName: 'Edit',


  description: 'Edit student.',


  inputs: {
    id: {
      type: 'number',
    }
  },


  exits: {
    success: {
      viewTemplatePath: 'pages/editStudent',
    }
  },


  fn: async function (inputs) {

    var rs = await Student.findOne({ id: inputs.id });

    return { rs: rs };

  }


};
