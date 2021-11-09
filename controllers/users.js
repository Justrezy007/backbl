const Users = require('../models/users')

// Menampilkan Halaman Create User
const CreatePage = (req,res)=>{
    res.render('users/create',{
        title: 'Create'
    })
}

// Membuat User
const createUser = (req,res)=>{
    const user = new Users(req.body)
    
    user.save()
    .then(res.redirect('/dashboard/data'))
    .catch(err => console.log(err))
}

// Mendapatkan Data User Secara Keseluruhan
const getAllUsers = (req,res)=>{
    Users.find()
    .then(result=>{
        res.render('users/data',{
            title: 'Data',
            data: result
        })
    })
    .catch(err => res.send(err))
 }

//  Mendapatkan Detail dari User berdasarkan ID
const getUserById = (req,res)=>{
    const id = req.params.id
    Users.findById(id)
    .then(result=>{
        console.log(result)
        res.render('users/detail',{title: 'Detail', data: result})
    })
    .catch(err => console.log(err))
}

// Menghapus user berdasarkan ID
const deleteUserById = (req,res)=>{
    const id = req.params.id
    Users.findByIdAndDelete(id)
    .then(
        result=>{
        res.json({ redirect: '/dashboard/data'})
    })
    .catch(err=>console.log(err))
}

module.exports = { CreatePage, createUser, getAllUsers, getUserById, deleteUserById}