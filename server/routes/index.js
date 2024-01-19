const express = require("express");
const router = express.Router();
const userController = require("../controllers/user_controller");
// const passport = require("passport");

const isAuthenticated = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.send(false);
  }
};
router.post("/api/data", userController.createUser);
router.post("/api/login", userController.createSession);
router.get("/api/logout", userController.destroySession);
// router.get("/api/check-auth", userController.checkAuth);

module.exports = router;
