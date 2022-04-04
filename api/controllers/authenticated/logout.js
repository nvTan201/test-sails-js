module.exports = {


  friendlyName: 'Logout',


  description: 'Logout authenticated.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {

    var token = this.req.cookies.token;
    if (token == "") {
      return this.res.redirect("/");
    } else {
      this.res.clearCookie("token");
      return this.res.redirect("/");
    }

  }


};
