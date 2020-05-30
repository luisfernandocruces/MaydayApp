const User = require("../models/user");

//-----------------------------------------------------------------------
// Normal user
//-----------------------------------------------------------------------

exports.createNormalPerson = function (req, res, next) {
  let user = new User({
    rol: "normal person",
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    birthdate: req.body.birthdate,
    password: req.body.password,
    document_type: req.body.document_type,
    document_number: req.body.document_number,
    phone_number: req.body.phone_number,
    description: req.body.description,
    professional_card_number: "",
    health_area: "",
  });
  console.log(user);

  user.save((error) => {
    if (error) return next(error);
    res.send("Normal user created succesfully!");
  });
};

//-----------------------------------------------------------------------
// Health professional user
//-----------------------------------------------------------------------
exports.createHealthProfessional = function (req, res, next) {
  let user = new User({
    rol: "health professional",
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    birthdate: req.body.birthdate,
    password: req.body.password,
    document_type: req.body.document_type,
    document_number: req.body.document_number,
    phone_number: req.body.phone_number,
    description: req.body.description,
    professional_card_number: req.body.professional_card_number,
    health_area: req.body.health_area,
  });
  console.log(user);

  user.save((error) => {
    if (error) return next(error);
    res.send("Health professional user created succesfully!");
  });
};
