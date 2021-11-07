const Users = require('../models/users')

const CreatePage = (req,res)=>{
    res.render('users/create',{
        title: 'Create'
    })
}

const createUser = (req,res)=>{
    const user = new Users(req.body)
    
    user.save()
    .then(res.redirect('/dashboard/data'))
    .catch(err => console.log(err))
}


const getAllUsers = (req,res)=>{
    Users.find()
    .then(result=>{
        console.log(result[0].name)
        res.render('users/data',{
            title: 'Data',
            data: result
        })
    })
    .catch(err => res.send(err))
 }

const getUserById = (req,res)=>{
    const id = req.params.id
    Users.findById(id)
    .then(result=>{
        console.log(result)
        res.render('users/detail',{title: 'Detail', data: result})
    })
    .catch(err => console.log(err))
}

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