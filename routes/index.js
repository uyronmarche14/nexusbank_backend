var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/form", function (req, res) {
  res.render("form", { title: "simple form" });
});

router.post("/display", function (req, res) {
  const { name, email } = req.body;
  res.render("display", {
    title: "form result",
    name: name,
    email: email,
  });
});

router.get("/api/auth", function (req, res) {
  res.render("auth", {
    title: "auth",
    name: name,
    email: email,
    contactNumber: contactNumber,
    password: password,
  });
});

module.exports = router;
