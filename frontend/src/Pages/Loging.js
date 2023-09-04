import React,{useState} from 'react'
import {Link,useNavigate} from "react-router-dom"
import validation from './loginValidation'
import authAxios from '../config/authorization'
import axios from "axios"
function Loging() {
    // const auth=AuthHeader()
const navigate=useNavigate()
const [values,setValues]=useState({
    email:"",
    password:""

})

const [error,setError]=useState({})
const [responsError,setResponse]=useState('')
const handlChange=(event)=>{
    const {name,value}=event.target
   setValues((prev)=>({
    ...prev,
    [name]:value

   }))

}
const handleSubmit=(e)=>{
    e.preventDefault()
    setError(validation(values))

    if(error.email==="" && error.password===""){

        authAxios.post("/login",values)
        .then((res)=>{
            setResponse('')
            navigate("/home")
        }).catch((err)=>{
         console.log(err.response.data.login)
         setResponse(err.response.data.login)
        })
       
    }



}
   
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-35'>
            <h2>Sign-In</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' placeholder='Email'  name='email' id='email'
                    onChange={handlChange} className='form-control rounded-0'></input>

                    {error.email && <span className='text-danger'>{error.email}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' placeholder='Password' name='password' id='password'
                      onChange={handlChange} className='form-control rounded-0'></input>
                    {error.password && <span className='text-danger'>{error.password}</span>}
                    {responsError && <span className='text-danger'>{responsError}</span>}

                </div>
                <div className='mb-3'>
                    <button type='submit' className='btn btn-success w-100'> Log In</button>
                    <p>You are agrre with our terms and policies</p>
                    <Link to="/signup" className="btn btn-default w-100 bg-light">Sign up</Link>
                </div>
            </form>

        </div>
        
    </div>
  )
}

export default Loging