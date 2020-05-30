const User = require("../models/user");
var jwt = require("jsonwebtoken");
const config = require("../config/auth.config");

//-----------------------------------------------------------------------
// Normal user
//-----------------------------------------------------------------------
exports.createNormalPerson = function (req, res, next) {
  let user = new User({
    rol: "normal person",
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    _id: req.body.email,
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
    _id: req.body.email,
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

//-----------------------------------------------------------------------
// General CRUD
//-----------------------------------------------------------------------

exports.details = function (req,res,next){
  User.findById(req.params.id, function(err, user){
      if(err){
          return next(err);
      }else{
          res.send(user)
      }
  })
}

exports.update = function (req,res,next){
  User.findByIdAndUpdate(req.params.id, { $set: req.body} , function(err, user){
      if(err){
          return next(err);
      }else{
          res.send('User Updated Succesfully')
      }
  })
}
exports.delete = function (req,res,next){
  User.findByIdAndDelete(req.params.id, function(err, user){
      if(err){
          return next(err);
      }else{
          res.send('User Deleted Succesfully')
      }
  })
}

exports.index = function (req,res,next){
  let users =User.find({}, function(err, users){
      if(err){
          return next(err);
      }else{
          res.send(users)
      }
  })
}






//-----------------------------------------------------------------------
// Sign in
//-----------------------------------------------------------------------
exports.signin = function (req, res, next) {
  let { email, password } = req.body;
  User.findById(email, function (err, user) {
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    if (user.password != password) {
      return res.status(401).send({
        message: "Incorrect password",
      });
    }

    var token = jwt.sign({ id: user.email }, config.secret, {
      expiresIn: 86400, // 24 hours
    });

    res.status(200).send({
      currentUser: user,
      accessToken: token,
    });

    if (err) return next(err);
  });
};
