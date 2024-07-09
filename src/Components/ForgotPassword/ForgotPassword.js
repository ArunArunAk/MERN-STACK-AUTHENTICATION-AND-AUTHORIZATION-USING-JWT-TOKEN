// ForgotPassword.jsx
import React, { useState } from 'react';
import axios from 'axios';
import styles from './forgot.module.css';
import {  toast } from 'react-toastify'; // Import react-toastify


const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(email)
    try {
      const response = await axios.post('http://localhost:4800/auth/email', { email }).
      then(res=>{
        setEmail(' ')
        if(res.status === 200){
          toast.success("email send successfully!", {
            position: "top-right", 
          });
        }

      })
     
      setError('');
    } catch (error) {
      setMessage('');
    }
  };

  return (
    <div className={styles.container}>
      <h2>Forgot Password</h2>
      
      <form   onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.button} >Submit</button>
      </form>
      {message && <p className={styles.message}>{message}</p>}
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default ForgotPassword;
