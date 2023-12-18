const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        min:[3,"Must be atleats 3, got {VALUE}"]
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error ("Invalid Email")
            }
        }
    },
    password:{
        type:String,
        required: true,
        min:[3,"Must be atleats 6, got {VALUE}"]
    },
    names:{
        type:String,
        required:true
    },
    phno:{
        type:String,
        required:true
    }
})

const users = mongoose.model("users",userSchema)

module.exports = users