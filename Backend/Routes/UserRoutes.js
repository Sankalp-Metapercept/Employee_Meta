//Auth Routes Creation
const express = require("express");
const router = express.Router();
const UserController = require('../controller/Usercontroller')

// Auth Section
router
.route('/register')
.post(UserController.Register);

router
.route("/login")
.post(UserController.Login);

module.exports = router;