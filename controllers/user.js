//import correct model
const User = require("../models/");

//-----------------------------------------------------------------------
// Health professional
//-----------------------------------------------------------------------
exports.create = function (req, res, next) {
  let user = new User({});

  user.save((error) => {
    if (error) return next(error);
    res.send("Health professional user created succesfully!");
  });
};
