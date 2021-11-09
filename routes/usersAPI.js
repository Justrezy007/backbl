const express = require('express')
const router = express.Router()
const usersAPIControllers = require('../controllers/usersAPI')

// [GET] users
router.get('/users', usersAPIControllers.getAllUsers)

// [GET] users by Id
router.get('/user/:id', usersAPIControllers.getUserById)

// [POST] create user -> conflic
router.post('/user', usersAPIControllers.createUser)

// [DELETE] users by ID
router.delete('/user/:id',usersAPIControllers.deleteUserById)

// [PUT] update users by ID
// router.put('/user/:id', usersAPIControllers.updateUserById)

module.exports = router