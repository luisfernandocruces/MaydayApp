var express = require("express");
var router = express.Router();
const userController = require("../controllers/user");

//---------------------------------------------------------------------------
//normal user
//---------------------------------------------------------------------------
router.post("/normalUser", userController.createNormalPerson);

//---------------------------------------------------------------------------
//Health Professional
//---------------------------------------------------------------------------
router.post("/healthProfessional", userController.createHealthProfessional);

//---------------------------------------------------------------------------
//Login
//---------------------------------------------------------------------------

module.exports = router;
