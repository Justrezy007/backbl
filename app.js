const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const users = require('./routes/users')
const pages = require('./routes/pages')

const app = express()


// connect to mongodb
const dbURI = 'mongodb+srv://justrezy007:ukmrnbjaya@cluster0.pw8t9.mongodb.net/User?retryWrites=true&w=majority'
mongoose.connect(dbURI)
.then(res=>app.listen(3000))
.catch(err=>console.log(err))

// set views
app.set('view engine','ejs')

// middleware & static file
app.use(express.static('public'))
app.use(express.urlencoded({extended : true}))
app.use(morgan('dev'))

// User Routes
app.use('/dashboard',users)
app.use('/dashboard',pages)

// error Handle
app.use((req,res)=>{
    res.status(404).render('404')
})