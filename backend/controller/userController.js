const UserService=require("../service/userService")
const bcypt=require("bcrypt")

 const register=async(req,res,nex)=>{
    const {name,email,password}=req.body
   
    try{
        const succesRegister= await UserService.register(name,email,password)
        
        return res.status(200).json({status:true,message:"Register user Successful"})

    }
    catch(error){
        return res.status(401).json({message:error.message})
        
    }

}

const loginController=async(req,res,next)=>{
//    Destructure user datas
    const {email,password}=req.body
    try{
        const user= await UserService.login(email)
     
        if(!user){
            return res.status(400).json({status:true,login:"Login failed"})    

        }
        // If the user is present chech the passwrod
        const isMatch=await bcypt.compare(password,user.password)

        if(!isMatch){
           return res.status(400).json({status:true,login:"Login failed"})
            // throw new Error("Password not correct")
        }
        return res.status(200).json({status:true,success:"Login success"})

    }
    catch(error)
    {
        throw error
    }
}

module.exports={register,loginController}