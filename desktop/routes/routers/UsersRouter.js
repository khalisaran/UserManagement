var express = require("express");
var router = express.Router();
var controller = require("../../controllers/UserController")

router.get("/getall", controller.get_all_Users);
router.post("/add", controller.savejseportuser);
router.get("/get/:reportname",controller.getjsreport_for_user);
router.get("/getreport/:username",controller.getreport_by_user);

module.exports = router;