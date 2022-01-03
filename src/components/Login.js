import React from 'react'
import { withRouter } from 'react-router-dom';
import { useState } from "react";
import './style.css';

function Login(props) {

    let navigateToSignup = () => {
        // console.log(props);
        props.history.push('/signup')
    }


    let updateUserData = (event) => {
        setuserData({
            ...userData,
            [event.target.name]: event.target.value,
        })
    }


    let saveData=()=>{
        //validation
        validateEmail();
        
        validatepassword();
        if(validateEmail()  && validatepassword()){
        props.getUserData(userData);
        setuserData({
            email:'',
            password:'',
        });
    }
};

       const [userData, setuserData] = useState({
        email:'',
        password: ''
    })

    const [emailError, setemailError] = useState("");


    const validateEmail = ()=>
    {
        if(userData.email){
            let regex = /^\S+@\S+$/;
            if(regex.test(userData.email)){
                setemailError("");
                return true;
            } else {
                setemailError("entet valid email id");
            }}
            else{
                setemailError("email id is required");
            }
        return false
    };


    

    const [passwordError, setpasswordError] = useState("");


    const validatepassword = ()=>
    {
        if(userData.password){
            let regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
            if(regex.test(userData.password)){
                setpasswordError("");
                return true;
            } else {
                setpasswordError("enter valid password");
            }}
            else{
                setpasswordError("Password is required");
            }
        return false
    };

    return (
        <div className='container'>
            <h2>Login Form</h2>

            <div className='mb-3'>
                    <input name='email' type="email" className="form-control" placeholder="Enter Email" 
                    value={userData.email} onChange={(event)=>{updateUserData(event)}}/>
                {emailError && <div className="errorMsg">{emailError}</div>}
                </div>

                <div className='mb-3'>
                    <input name='password' type="password" className="form-control" placeholder="Enter Password" 
                    value={userData.password} onChange={(event)=>{updateUserData(event)}}/>
                {passwordError && <div className="errorMsg">{passwordError}</div>}
                </div>
            
                <button type="submit" class="btn btn-primary" onClick={saveData}>Submit</button>


            <h4 style={{ cursor: 'pointer' }} onClick={navigateToSignup}>Don't have an account? Signup here !</h4>
        </div>
    )
}

export default withRouter(Login) 
