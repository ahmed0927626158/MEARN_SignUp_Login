const mongoose=require("mongoose")
const bcypt=require("bcrypt")
const conect=require("../db/db");
const { use } = require("../routes/userRout");
const {Schema}=mongoose
// User model Schema
const Userchema=new Schema({
    name:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
        unique:true

    },
    password:{
        type:String,
        required:true,
    }
});

// Before saveing user data encrypt the password
Userchema.pre("save",async function(){
    try{
    const user=this;
    const genSalt=await (bcypt.genSalt(10))
    const hashPassowd=await bcypt.hash(user.password,genSalt)
    user.password=hashPassowd
    }
    catch(error){
        throw error
    }

})

// Userchema.methods.comparePassword=async function(userPassword){
//   try{
//     const isMatch=await bcypt.compare(userPassword,this.password)
//     return isMatch
//   }
//   catch(error){
//     throw error
//   }

// }

const userModel=conect.model("register",Userchema)

module.exports=userModel