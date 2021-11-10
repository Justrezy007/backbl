const FormData = require('../models/formData')

// Menampilkan Halaman Input Form Data
const InputPage = (req,res)=>{
    res.render('formData/create',{
        title: 'Create'
    })
}

// Input Form Data User
const inputFormData = (req,res)=>{
    const user = new FormData(req.body)
    
    user.save()
    .then(res.redirect('/admin/formdata'))
    .catch(err => console.log(err))
}

// Mendapatkan Form Data User Secara Keseluruhan
const getAllFormData = (req,res)=>{
    FormData.find()
    .then(result=>{
        res.render('formData/data',{
            title: 'Data',
            data: result
        })
    })
    .catch(err => res.send(err))
 }

//  Mendapatkan Detail dari Form User berdasarkan ID
const getFormDataById = (req,res)=>{
    const id = req.params.id
    FormData.findById(id)
    .then(result=>{
        console.log(result)
        res.render('formData/detail',{title: 'Detail', data: result})
    })
    .catch(err => console.log(err))
}

// Menghapus Form Data berdasarkan ID
const deleteFormDataById = (req,res)=>{
    const id = req.params.id
    FormData.findByIdAndDelete(id)
    .then(
        result=>{
        res.json({ redirect: '/admin/formdata'})
    })
    .catch(err=>console.log(err))
}

module.exports = { InputPage, inputFormData, getAllFormData, getFormDataById, deleteFormDataById}