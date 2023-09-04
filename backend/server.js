
require("dotenv").config()  
const express=require("express")
const userRout=require("./routes/userRout")
const bodyParser=require("body-parser")
const cors=require("cors")



const app=express()
// Mwares
app.use(cors())
app.use(bodyParser.json())
app.use("/",userRout)

app.listen(process.env.PORT,()=>{
    console.log("app is runing at port 8081")
})