const express = require("express");
const router = express.Router();
const userController = require("../controllers/user_controller");
const passport = require("passport");

router.post("/api/data", userController.createUser);
router.post(
  "/api/login",
  passport.authenticate("local"),
  userController.createSession
);
router.get("/api/logout", userController.destroySession);
router.get("/api/check-auth", userController.checkAuth);

module.exports = router;
