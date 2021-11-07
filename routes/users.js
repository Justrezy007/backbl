const express = require('express')
const router = express.Router()
const userController = require('../controllers/users')


// Page Create User
router.get('/data/create', userController.CreatePage)

// Create User
router.post('/user', userController.createUser)

// Get All Users
router.get('/data', userController.getAllUsers)

// Get User By Id
router.get('/data/:id', userController.getUserById)

// Delete User By Id
router.delete('/user/delete/:id', userController.deleteUserById)

module.exports = router