var express = require("express");
var router = express.Router();
const health_supportController = require("../controllers/health_support");

router.get('/', health_supportController.index)
router.post('/', health_supportController.create)
router.get('/:id', health_supportController.details)
router.put('/:id', health_supportController.update)
router.delete('/:id', health_supportController.delete)

module.exports = router;