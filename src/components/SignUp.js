import React from 'react'
import { useState } from "react";
import { withRouter } from 'react-router-dom'
import './style.css';

function SignUp(props) {

    let navigateToLogin=()=>{
        // console.log(props);
        props.history.push('/login')
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
        validaterepeatpassword();
        if(validateEmail()  && validatepassword() && validaterepeatpassword()){
        props.getUserData(userData);
        setuserData({
            email:'',
            password:'',
            repeatpassword:'',
        });
    }
};

       const [userData, setuserData] = useState({
        email:'',
        password:'',
        repeatpassword: '',
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
                setemailError("enter valid email id");
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

    const [repeatpasswordError, setrepeatpasswordError] = useState("");

    const validaterepeatpassword = ()=>
    {
        if(userData.repeatpassword){
            let regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
            if(regex.test(userData.repeatpassword)){
                setrepeatpasswordError("");
                return true;
            } else {
                setrepeatpasswordError("confirm password");
            }}
            else{
                setrepeatpasswordError("confirmation is required");
            }
        return false
    };
    return (
        <div>
            <h1>i m Signup</h1>
            

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

                <div className='mb-3'>
                    <input name='repeatpassword' type="password" className="form-control" placeholder="Confirm Password" 
                    value={userData.repeatpassword} onChange={(event)=>{updateUserData(event)}}/>
                {repeatpasswordError && <div className="errorMsg">{repeatpasswordError}</div>}
                </div>
            
                <button type="submit" class="btn btn-primary" onClick={saveData}>Submit</button>
            
            <h4 style={{cursor:'pointer'}} onClick={navigateToLogin}>Already have an account? Login here !</h4>
        </div>
    )
}



export default withRouter(SignUp) 
