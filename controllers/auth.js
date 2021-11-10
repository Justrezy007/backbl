// [POST] - Mengirim Data Registrasi User
const register = (req, res, next) =>{
    const name = req.body.name
    const email = req.body.email
    
    const result = {
        message: "Register Success",
        data: {
            _id : 1,
            name : name,
            email : email,
        }
    }
    res.status(201).json(result)
}

module.exports = {register}