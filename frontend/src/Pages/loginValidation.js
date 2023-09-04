function validation(values){

    const error={}
    const email_pattern=""
    const password_pattern=""
    if(values.email===""){
        error.email="Email is required"
    }
    else{
        error.email=""
    }
    if(values.password==="")
    {
        error.password="Password is required"
    }
    else if(values.password.length<6){
        error.password="lenght must be greater than  or 6"
    }
    else{
        error.password=""
    }
    return error
}

export default validation;