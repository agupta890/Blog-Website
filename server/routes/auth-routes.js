const express = require('express')
const router = express.Router()
const {register,login,logout} = require('../controllers/auth-controller')
const validate = require('../middleware/validator-middlware')
const registerSchema = require('../schema/user-validator')


router.route('/register').post(register)
router.route('/login').post(login)
router.route('/logout').post(logout)


module.exports = router