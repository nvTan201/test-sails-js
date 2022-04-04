const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    var token = req.cookies.token;
    if (token) {
        try {
            var check = jwt.verify(token, "sailsjsTest")
            req.token = check;
            // console.log(total = Math.round(new Date().getTime() / 1000))
            next();
        } catch (error) {
            console.log(error);
        }
    } else {
        res.redirect("/");
    }
}
