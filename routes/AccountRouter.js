const express = require("express");
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware')
const {showBalance,transfer} = require("../controller/accountController")

router.get('/balance', authMiddleware, showBalance)

router.post('/transfer', authMiddleware, transfer)


module.exports = router;