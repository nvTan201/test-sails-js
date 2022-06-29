module.exports = {


  friendlyName: 'Test',


  description: 'Test test.',


  inputs: {
    name: { type: 'string' }
  },


  exits: {

  },


  fn: async function (inputs) {

    console.log(inputs)
    console.log(1)
    return;

  }


};
