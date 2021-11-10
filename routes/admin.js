const express = require('express')
const router = express.Router()
const userController = require('../controllers/admin')


// Page Input Form Data User
router.get('/formdata/input', userController.InputPage)

// Input Form Data User
router.post('/formdata', userController.inputFormData)

// Get Form Data
router.get('/formdata', userController.getAllFormData)

// Get Form Data By Id
router.get('/formdata/:id', userController.getFormDataById)

// Delete Form Data By Id
router.delete('/formdata/:id', userController.deleteFormDataById)

module.exports = router