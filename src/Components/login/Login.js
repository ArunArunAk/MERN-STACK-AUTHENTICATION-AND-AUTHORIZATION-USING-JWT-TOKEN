import React, { useState } from "react";
import classes from './Login.module.css';  // Importing the CSS module
import Axios from 'axios'
import {  toast } from 'react-toastify'; // Import react-toastify
import { Link ,useNavigate} from 'react-router-dom';



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate=useNavigate()

 Axios.defaults.withCredentials=true; //ur cookie need in react frontebd add this axios make true
  const handleSubmit = (e) => {
    e.preventDefault();
  
    Axios.post('http://localhost:4800/auth/singin', {
      email,
      password
    })
      .then((response) => {
        console.log("Response:", response.data);
        if (response.status === 200) {
          toast.success("Login successfully!", {
            position: "top-right", 
          });
        } 
        navigate('/')
        
      })
      .catch((err) => {
        console.error("Error:", err);
        if (err.response && err.response.status === 409) {
          toast.warning("Email is Not Found", {
            position: "top-right",
          });
        } else {
          toast.error("Invalid password!.", {
            position: "top-right",
          });
        }
      });
  };
  
  return (
    <div>
      <div className={`container `}>
       
        <div className="row">
             
    
          <div className={` col-md-6 ${classes.Addpostform}`}>
          <h1 className={` text-center ${classes.title}`}>Sign In </h1>

            <form className="Addpostform" onSubmit={handleSubmit}>
              <label htmlFor="email" className={classes.label}>Email</label>
              <input
                type="email"
                placeholder="Enter email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={classes.input}
              />
              <br />

              <label htmlFor="password" className={classes.label}>Password</label>
              <input
                type="password"
                placeholder="Enter password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={classes.input}
              />
              <br />

              <button className={`btn btn-primary mt-2 ${classes.btn}`}>Sign In</button>

              <p className="text-center mt-3">
                Don't have an account?{' '}
                <Link to="/register">
                  <a className="text-primary">Sign Up</a>
                </Link>
              </p>

              <p className="text-center mt-3">
              Forgot your password? No worries.{' '}
                <Link to="/ForgotPassword">
                  <span className="text-primary">Forgot Password?</span>
                </Link>
              </p>

            </form>
          </div>

          <div className="col-md-6">
            <h1 className={`text-center ${classes.heading}`}>Hungry Hub</h1>
            <p className={`text-center ${classes.para}`}>The best food delivery service in Erode.</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
