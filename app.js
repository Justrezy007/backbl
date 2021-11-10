// Thirdpart Middleware
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

// Router
const users = require('./routes/admin')
const pages = require('./routes/pages')
const formData = require('./routes/form')
const authRouter = require('./routes/auth')


const app = express()

// Allow to CORS Policy
// app.use((req,res,next)=>{
//     res.setHeader('Access-Control-Allow-Origin','*')
//     res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, PATCH, DELETE, OPTIONS')
//     res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization')
//     next()
// })

// connect to mongodb
const dbURI = 'mongodb+srv://justrezy007:ukmrnbjaya@cluster0.pw8t9.mongodb.net/User?retryWrites=true&w=majority'
mongoose.connect(dbURI)
.then(res=>app.listen(3000))
.catch(err=>console.log(err))

// set views
app.set('view engine','ejs')

//  Middleware Body Parser (Thirdpart)
app.use(bodyParser.json())

// middleware & static file
app.use(express.static('public'))
app.use(express.urlencoded({extended : true}))
app.use(morgan('dev'))

// User Routes
app.use('/admin',users)
app.use('/admin',pages)
app.use('/v1/form',formData)
app.use('/v1/auth', authRouter)

// error Handle
app.use((req,res)=>{
    res.status(404).render('404')
})