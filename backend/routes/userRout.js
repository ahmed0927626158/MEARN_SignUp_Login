const router=require("express").Router()

const {register,loginController}=require("../controller/userController")

router.post("/register",register)
router.post("/login",loginController)

module.exports=router