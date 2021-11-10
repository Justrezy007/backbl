const FormData = require('../models/formData')
const {validationResult} = require('express-validator')

// Mendapatkan semua users
const getAllFormData = (req,res)=>{
    FormData.find()
    .then(result=>res.status(200).json({
            message   : "Get Data Success",
            data      : result
    }))
    .catch(err=> res.status(404).send(err))
}

// Mendapatkan users dari ID
const getFormDataById = (req,res)=>{
    const userId = req.params.id
    FormData.findById(userId)
    .then(result=>res.status(200).json({
        message   : "Get Data Success",
        data      : result
}))
    .catch(err=>res.status(404).send(err))
}

// Membuat user
const inputFormData = (req,res)=>{
    const user = new FormData(req.body)
    
    const error = validationResult(req)

    if(!error.isEmpty()){
        res.status(400).json({
            message: 'Invalid Input',
            data : null
        })
    }
    else{
        user.save()
    .then(result=>res.status(201).json({
        message   : "Input Data Success",
        data      : result
    }))
    .catch(err => console.log(err))
    }
    
}

// Menghapus user berdasarkan ID
const deleteFormDataById = (req, res)=>{
    const userId = req.params.id

    FormData.findByIdAndDelete(userId)
    .then(result=>res.status(200).json({
        message   : "Delete Data Success",
        data      : result
}))
    .catch(err=>res.status(404).send(err))
}


// Mengupdate user berdasarkan ID
// const updateUserById = (res,req)=>{
//     const userId = req.params.id
// }

module.exports = {getAllFormData, getFormDataById, inputFormData, deleteFormDataById}