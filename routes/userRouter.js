const express = require('express');
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware")
const {createUser, signin, updateuser} = require('../controller/userController')



router.post('/signup', createUser);
router.post('/signin',signin)
router.put('/updateuser',authMiddleware, updateuser);

module.exports = router;