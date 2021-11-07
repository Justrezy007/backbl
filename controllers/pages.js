const Users = require('../models/users')

const HomePage = (req,res)=>{
    Users.find()
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