var express = require("express");
var router = express.Router();
const conversationController = require("../controllers/conversation");

router.get('/', conversationController.index)
router.post('/', conversationController.create)
router.get('/:id', conversationController.details)
router.put('/:id', conversationController.update)
router.delete('/:id', conversationController.delete)
router.get('/allChats/:idPerson', conversationController.getChatsFromUser)

module.exports = router;
