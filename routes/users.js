var express = require("express");
var router = express.Router();
const userControllers = require("../controllers/user");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("this is user routes");
});

router.post("/", userControllers.Create);
router.get("/all", userControllers.GetAll);
router.get("/view/:userId", userControllers.View); // add params
router.get("/viewone", userControllers.ViewOne);

// get, post, put, delete CRUD

module.exports = router;

// User
// username, email, password
