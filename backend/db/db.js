const mongoose=require("mongoose")
// Create db Connection
const conect=mongoose.createConnection("mongodb://127.0.0.1:27017/register").on("open",()=>{
    console.log("connect success")
}).on("error",()=>{
    console.log(error)
})

module.exports= conect;