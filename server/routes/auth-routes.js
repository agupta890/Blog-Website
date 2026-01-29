const express = require('express')
const router = express.Router()
const {register,login,logout,getMe} = require('../controllers/auth-controller')
const validate = require('../middleware/validator-middlware')
const registerSchema = require('../schema/user-validator')
const isAuth = require('../middleware/auth-middleware')


router.route('/register').post(register)
router.route('/login').post(login)
router.route('/logout').post(logout)
router.route('/me').get(isAuth,getMe)


module.exports = router