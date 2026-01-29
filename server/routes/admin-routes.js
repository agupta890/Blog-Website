const express = require('express')
const router = express.Router()
const {getAllUser} = require('../controllers/admin-controller')
const isAuth = require('../middleware/auth-middleware')
const isAdmin = require('../middleware/admin-middleware')


router.route('/user').get(isAuth,isAdmin,getAllUser)


module.exports = router