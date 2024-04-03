var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});
router.get("/create", function (req, res) {
  res.render("create");
});
router.get("/readall", function (req, res) {
  res.render("readall");
});
router.get("/about", function (req, res) {
  res.render("about");
});
module.exports = router;
