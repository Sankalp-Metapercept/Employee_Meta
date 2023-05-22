const express = require("express");
const router = express.Router();
const UserController = require('../controller/Usercontroller')
// User routes 
router
.route('/register')
.post(UserController.register);

module.exports = router;