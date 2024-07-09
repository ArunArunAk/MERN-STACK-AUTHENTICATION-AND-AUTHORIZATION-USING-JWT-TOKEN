import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Register from './Components/register/Register'
import Login from './Components/login/Login'

import { ToastContainer } from 'react-toastify'; // Import react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for styling
import Home from "./Components/home/Home";
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import UpdatePassword from "./Components/Updatepassword/UpdatePassword ";
import Navbar from './Components/Navbar/Navbar'
import Menu from './Components/Menu/Menu'
import About from './Components/About/About'
// import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Contact from './Components/Contact/Contact'
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Axios from 'axios';



function App() {
  const location=useLocation();
  const hideNavAndFooter = location.pathname === "/login" || location.pathname === "/register" || location.pathname === "/ForgotPassword" || location.pathname.startsWith("/updatepassword/");

 

  return (
    <div>
       <ToastContainer /> 
   {!hideNavAndFooter && <Navbar />}

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/register" element={<Register />} />
  <Route path="/home" element={<Home />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/login" element={<Login />} />
  <Route path="/ForgotPassword" element={<ForgotPassword />} />
  <Route path="/updatepassword/:token" element={<UpdatePassword />} />
  <Route path="/menu" element={<Menu />} />
  <Route path="/about" element={<About />} />
</Routes>

{!hideNavAndFooter && <Footer />}

    </div>
  );
}

export default App;
