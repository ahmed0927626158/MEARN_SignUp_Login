const UserService=require("../service/userService")

const loginController=async(req,res,next)=>{
    const {email,password}=req.body
    try{
        const loginSuccess=await UserService.login(email,password)
        res.json({status:true,success:"Login success"})

    }
    catch(error)
    {
        res.json({error})
    }
}

module.exports=loginController