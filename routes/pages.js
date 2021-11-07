const express = require('express')
const router = express.Router()
const pageController = require('../controllers/pages')

// Home page
router.get('/', pageController.HomePage)

// About Page
router.get('/about', pageController.AboutPage)

module.exports = router