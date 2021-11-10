const FormData = require('../models/formData')

const HomePage = (req,res)=>{
    FormData.find()
    .then(result =>{

        res.render('index',{
            title : 'Home',
            totalUsers : result.length
        })
    })
    .catch(err=>console.log(err))
    
}

const AboutPage = (req,res)=>{
    res.render('about', {
        title: 'About'
    })
}

module.exports = { HomePage, AboutPage}