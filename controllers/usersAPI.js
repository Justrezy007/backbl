const Users = require('../models/users')

// Mendapatkan semua users
const getAllUsers = (req,res)=>{
    Users.find()
    .then(result=>res.send(result))
    .catch(err=> res.status(404).send(err))
}

// Mendapatkan users dari ID
const getUserById = (req,res)=>{
    const userId = req.params.id
    Users.findById(userId)
    .then(result=>res.send(result))
    .catch(err=>res.status(404).send(err))
}

// Membuat user
const createUser = (req,res)=>{
    const user = new Users(req.body)
    
    user.save()
    .then(result=>res.send(result))
    .catch(err => console.log(err))
}

// Menghapus user berdasarkan ID
const deleteUserById = (req, res)=>{
    const userId = req.params.id

    Users.findByIdAndDelete(userId)
    .then(result=>res.send(result))
    .catch(err=>res.status(404).send(err))
}


// Mengupdate user berdasarkan ID
// const updateUserById = (res,req)=>{
//     const userId = req.params.id
// }

module.exports = {getAllUsers, getUserById, createUser, deleteUserById}