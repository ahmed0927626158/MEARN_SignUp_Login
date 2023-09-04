import axios from "axios";



const authAxios=axios.create({
    baseURL:"http://localhost:8081",
    headers:{
        authorization: `bearer ${"hasdhHADG762HGSDS7JSDOISADUAD"}`
    }
})


// const AuthHeader=()=>{
    

// axios.interceptors.request.use(
//     config=>{
//         config.headers.authorization=`Bearer ${"dsfsfsnfnsjfqNJSA7676bsasbdasd"}`
//         return config
//     },
//     error=>{
//         return Promise.reject(error)
//     }
// )
// }
export default authAxios

