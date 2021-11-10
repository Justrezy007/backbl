const express = require('express')
const router = express.Router()
const formControllers = require('../controllers/form')
const {body} = require('express-validator')

// [GET] form Data
router.get('/formdata', formControllers.getAllFormData)

// [GET] users by Id
router.get('/formdata/:id', formControllers.getFormDataById)

// [POST] create user -> conflic
router.post('/formdata',[body('name').isLength({min:5,max:50}), body('email').normalizeEmail().isEmail(),body('WANumber').isLength({min:10,max:14})], formControllers.inputFormData)

// [DELETE] users by ID
router.delete('/formdata/:id',formControllers.deleteFormDataById)

// [PUT] update users by ID
// router.put('/user/:id', formControllers.updateUserById)

module.exports = router