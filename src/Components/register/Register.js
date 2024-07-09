import React, { useState } from "react";
import classes from './Register.module.css';  // Importing the CSS module
import { Link ,useNavigate} from 'react-router-dom';
import Axios from 'axios'
import {  toast } from 'react-toastify'; // Import react-toastify



const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [secondname, setSecondname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate() 
               
  const handleSubmit =  async(e) => { 
    e.preventDefault();
    try {
      const response = await Axios.post('http://localhost:4800/auth/singup', {
       
        firstname,
        secondname,
         email,
        password
      });
      if (response.status === 200) {
        console.log("Response:", response.data);
        toast.success("Register successfully!", {
          position: "top-right", 
         
        });
        navigate('/login')
        setFirstname(" ")
        setSecondname(" ")
        setEmail(" ")
        setPassword(" ")
      }
      else{
        toast.error("User already existed", {
          position: "top-right",
        });
      }
    
  } catch (err) {
          toast.error("err", {
            position: "top-right", 
           
          });    
         
        } 

      
       
       
  };

 
  
  return (
    <div>
      <div className={`container `}>

        <div className="row">
          <div className="col-md-6">
            <h1 className={`text-center ${classes.heading}`}>Hungry Hub</h1>
            <p className={`text-center ${classes.para}`}>The best food delivery service in Erode.</p>
          </div>

          <div className="col-md-6 mt-3">
          <h1 className={` text-center ${classes.title}`}>Sing Up </h1>

            <form className="Addpostform" onSubmit={handleSubmit}>
              <label htmlFor="firstname" className={classes.label}>First Name</label>
              <input
                type="text"
                placeholder="Add firstname"
                name="firstname"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                className={classes.input}
              />
              <br />

              <label htmlFor="secondname" className={classes.label}>Second Name</label>
              <input
                type="text"
                placeholder="Add secondname"
                name="secondname"
                value={secondname}
                onChange={(e) => setSecondname(e.target.value)}
                className={classes.input}
              />
              <br />

              <label htmlFor="email" className={classes.label}>Email</label>
              <input
                type="email"
                placeholder="Add email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={classes.input}
              />
              <br />

              <label htmlFor="password" className={classes.label}>Password</label>
              <input
                type="password"
                placeholder="Add password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={classes.input}
              />
              <br />

              <button className={`btn btn-primary mt-2  ${classes.btn}`}>Sign Up</button>
              <p className="text-center mt-3" >
                 If u have already account?{' '}
                  <Link to="/login">
                  <a  className="text-primary">
                    sign In
                  </a></Link>
                  
                </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
