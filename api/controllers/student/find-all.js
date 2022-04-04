module.exports = {


  friendlyName: 'Find all',


  description: '',


  inputs: {

  },


  exits: {
    success: {
      viewTemplatePath: 'pages/student',
    }

  },


  fn: async function (inputs) {
    var sql = 'select * from student';
    var rs = await Student.find();


    return { rs: rs };

    
  }


};
