const express = require("express"), router = express.Router(), controller = require("../controllers/index");

router.get("*", controller.all)

module.exports = router