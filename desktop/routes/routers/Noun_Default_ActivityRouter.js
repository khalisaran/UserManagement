var express = require("express");
var router = express.Router();
var controller = require("../../controllers/Noun_Default_ActivityController")
router.post("/Noun", controller.create_Noun);
router.get(/^\/Noun\/(\d+)$/, controller.search_Noun_for_update);
router.put("/Noun", controller.update_Noun);
router.delete(/^\/Noun\/(\d+)$/, controller.delete_Noun);
router.get("/Noun", controller.get_all_Noun);

module.exports = router;