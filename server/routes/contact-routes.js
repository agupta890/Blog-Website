const express = require('express')
const router = express.Router()
const {createContact} = require('../controllers/contact-controller')

router.route('/contact').post(createContact)


module.exports = router