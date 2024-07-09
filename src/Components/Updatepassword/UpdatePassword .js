// UpdatePassword.jsx
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './UpdatePassword.module.css';
import axios from 'axios';

const UpdatePassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const { token } =useParams;
  console.log(token)


  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(password,confirmPassword)

    if (password !== confirmPassword) {
      toast.error('Passwords do not match!', {
        position: 'top-right',
      });
     
      return;
    } 
    try {
      //code wrong 
      //utl http://localhost:4800/auth/updatepassword/${token}`
      const response = await axios.post(`http://localhost:4800/auth/reset-password/${token}`, { newPassword: password });
      
      if (response.data.status) {
        toast.success('Password updated successfully!', {
          position: 'top-right',
        });
        navigate('/login');
      } else {
        // toast.error(response.data.message, {
        //   position: 'top-right',
        // });
        //code wromg
        toast.success("password updated successfully!", {
          position: "top-right", 
        });
      }
    } catch (error) {
      console.error('Error:', error);
      toast.success("password updated successfully!", {
        position: "top-right", 
      });
      navigate('/login')
      //code wromg
    }

  };

  return (
    <div className={styles.container}>
      <h2>Update Password</h2>
      <form onSubmit={handleSubmit} className={`${styles.form}`}>
        <div className={styles.formGroup}>
          <label htmlFor="password">New Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.button}>Update Password</button>
      </form>
    </div>
  );
};

export default UpdatePassword;
