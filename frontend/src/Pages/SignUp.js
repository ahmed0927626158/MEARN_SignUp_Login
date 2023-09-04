import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import validation from './signUpValidation'
import axios from 'axios'
function SignUp() 
{
    const [values,setValues]=useState({
        name:"",
        email:"",
        password:""
    })
    const [error,setError]=useState({})
    const [responseError,setReponseError]=useState('')
    const navigate=useNavigate()

    const handleChange=(event)=>{
        const {name,value}=event.target
        setValues((prev)=>({
            ...prev,
            [name]:value
        }))
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        setError(validation(values))
        if(error.name=="" && error.email=="" && error.password==""){

            axios.post("http://localhost:8081/register",values).then((response)=>{
                navigate("/")

            }).catch((error)=>{
                console.log(error)
                setReponseError(error.response.data.message)

            })

        }

    }
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-35'>
            <h2>Sign-Up</h2>
            <form onSubmit={handleSubmit}>
            <div className='mb-3'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' placeholder='Name'  name='name' id='name'
                    onChange={handleChange}
                    className='form-control rounded-0'></input>
                    {error.name && <span className='text-danger'>{error.name}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' placeholder='Email'  name='email'  onChange={handleChange}
                     id='email'className='form-control rounded-0'></input>
                     {error.email && <span className='text-danger'>{error.email}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' placeholder='Password' name='password' 
                    id='password' onChange={handleChange}
                     className='form-control rounded-0'></input> 
                     {error.password && <span className='text-danger'>{error.password}</span>}
                     {responseError && <span className='text-danger'>{responseError}</span>}
                    
                </div>
                <div className='mb-3'>
                    <button type='submit' className='btn btn-success w-100'> Sign Up</button>
                    <p>You are agree with our terms and policies</p>
                    <Link to="/" className="btn btn-default w-100 bg-light">Login</Link>
                </div>
            </form>

        </div>
        
    </div>
  )
}

export default SignUp