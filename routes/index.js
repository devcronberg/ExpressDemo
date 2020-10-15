var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mit site", tid: new Date().toLocaleTimeString() });
});

module.exports = router;
