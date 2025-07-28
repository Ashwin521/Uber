const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/user.controller");

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("invalid email"), //yaha pe just check kar rahe hain but error aane pe kuch action perform karna hai to wo user.controller me hai
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 or more characters long"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password  must be at least 6 or more characters long"),
  ],
  userController.registerUser
);

router.post("/login", [
  body("email").isEmail().withMessage("invalid email"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 or more characters long"),
],userController.loginUser);
module.exports = router;
