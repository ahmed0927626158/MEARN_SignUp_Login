
const userModel=require("../model/userModel")
const bcrypt=require("bcrypt")


class UserService{
    static async register(name,email,password){
        try {
            const checkUser=await userModel.findOne({email})
            if(checkUser){
                throw new Error("Email allready Exist")
            }
            const createUser=new userModel({name,email,password})             
            return await  createUser.save()
        } catch (error) {
           throw error
            
        }

    }

    static async login(email){
    
        try{
            // Check user Email and return the user document
            const user= await userModel.findOne({email})
            return user
            
        }
        catch(error){
            throw error
        }
    }
   
}

module.exports=UserService