const express = require('express')
const router = express.Router()
const {getAllUser,getAllMessage,getAllBlogs} = require('../controllers/admin-controller')
const isAuth = require('../middleware/auth-middleware')
const isAdmin = require('../middleware/admin-middleware')


router.route('/user').get(isAuth,isAdmin,getAllUser)
router.route('/blogs').get(isAuth,isAdmin,getAllBlogs)
router.route('/contact').get(isAuth,isAdmin,getAllMessage)


module.exports = router