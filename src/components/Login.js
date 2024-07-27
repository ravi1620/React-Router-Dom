import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import Signup from './Signup'


function Login() {

  let emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let passwordRegEx = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=[\]{};':"\\|,.<>?/~`])[A-Za-z0-9!@#$%^&*()_+=[\]{};':"\\|,.<>?/~`]{1,8}$/;
 
let emailInputRef=useRef();
let passwordInputRef=useRef();

let emailResultRef=useRef();
let passwordResultRef=useRef();

  let validateEmail=(emailstr,resultRef)=>{
let result = emailRegEx.test(emailstr);
if(result === true){
resultRef.current.innerHTML="Valid";
resultRef.current.style.color="green";
}else{
  resultRef.current.innerHTML="Invalid";
  resultRef.current.style.color="red";
}
  }

let validatePassword=(passwordStr)=>{
  let result = passwordRegEx.test(passwordStr);

  if(result){
passwordResultRef.current.innerHTML="Valid";
passwordResultRef.current.style.color="green"
  }else{
passwordResultRef.current.innerHTML="Inavlid";
passwordResultRef.current.style.color="red";
  }
}
  return (
    <div className='App'>
   
        <form className='form'>
            <div>
                <label className='label'>Email</label>
                <input type='text' ref={emailInputRef}
                onChange={()=>{
                  validateEmail(emailInputRef.current.value,emailResultRef);
                }}></input>
                <span className='span' ref={emailResultRef}></span>
            </div>
            <div>
                <label className='label'>Password</label>
                <input type='text' ref={passwordInputRef}
                onChange={()=>{
                
                  validatePassword(passwordInputRef.current.value,passwordResultRef);
                }}></input>
                <span className='span' ref={passwordResultRef}></span>
            </div>
<br></br>
<br></br>
            <button type='button'>Login </button>
            <br></br>
            <br></br>
            <Link to="/Signup" element={<Signup></Signup>}>Signup</Link> 
        </form>
    </div>
  )
}

export default Login