const express = require('express')
const router = express.Router()
const {createBlog,getAllblogs,getSingleBlog,editBlog,deleteBlog} = require('../controllers/blog-controller')
const isAuth = require('../middleware/auth-middleware')
const isAdmin = require('../middleware/admin-middleware')


router.route('/blogs').post(isAuth,isAdmin,createBlog)
router.route('/blogs').get(getAllblogs)
router.route('/blog/:id').get(getSingleBlog)
router.route('/blogs/:id').put(isAuth,isAdmin,editBlog)
router.route('/blogs/:id').delete(isAuth,isAdmin,deleteBlog)


module.exports = router;