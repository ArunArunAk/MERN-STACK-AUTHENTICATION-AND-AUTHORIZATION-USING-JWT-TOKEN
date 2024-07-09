import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RiLogoutCircleRLine, RiLoginCircleLine } from 'react-icons/ri';


import classes from './Navbar.module.css';
import {  toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import Axios from 'axios'

const Navbar = () => {
   const navigate = useNavigate();
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const [userName, setUserName] = useState('');
 
   useEffect(() => {
     Axios.get('http://localhost:4800/auth/verify')
       .then((res) => {
         if (res.data.status) {
           setIsLoggedIn(true);
           setUserName(res.data.user.firstname); // Assuming `user` contains `firstname`
         } else {
           setIsLoggedIn(false);
         }
       })
       .catch(() => {
         setIsLoggedIn(false);
       });
   }, []);
  const logout=()=>{
    Axios.get('http://localhost:4800/auth/logout')
    .then((res) => {
        if (res.data.status) {
          toast.success("Logout successfully!", {
            position: "top-right", 
          });
            navigate('/login');
            return;
        } 
    })
    .catch((error) => {
        
        toast.error(error, {
            position: "top-right",
        });
       
    });
  }
  return (
    <nav className={`navbar navbar-expand-lg navbar-light  ${classes.navbackground}`}>
      <div className="container-fluid">
        <Link className={`navbar-brand ${classes.headertitle}`} to="/">Hungry Hub</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-white fw-bold" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-bold" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-bold" to="/menu">Menu</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-bold" to="/contact">Contact</Link>
            </li>

           {isLoggedIn ? (
              <>
                <li className="nav-item">
                  <button className='btn btn-primary p-0'> <span className="nav-link text-white fw-bold ">Hi, {userName}</span>
                  </button>
                </li>
                <li className="nav-item">
                  <span className="nav-link text-white fw-bold" onClick={logout}><RiLogoutCircleRLine size={20} /> Logout</span>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link className="nav-link text-white fw-bold" to="/login"><RiLoginCircleLine className="icon" /> Login</Link>
              </li>
            )}
            

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
