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



//-----------------------------------------------------------------------
// General CRUD
//-----------------------------------------------------------------------
router.get('/', userController.index)
router.get('/:id', userController.details)
router.put('/:id', userController.update)
router.delete('/:id', userController.delete)


//---------------------------------------------------------------------------
//Login
//---------------------------------------------------------------------------
router.post("/signin", userController.signin);

module.exports = router;
