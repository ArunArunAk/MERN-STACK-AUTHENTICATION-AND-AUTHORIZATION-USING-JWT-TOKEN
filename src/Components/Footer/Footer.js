import React from 'react';
import classes from './Footrer.module.css';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Hungry Hub. All rights reserved to Fullstack Developer Arun G.</p>
        <div>
          <a href="/about" className="text-white">About Us</a>
          <a href="/menu" className="text-white">Menu</a>
          <a href="/contact" className="text-white">Contact</a>
          <a href="/privacy" className="text-white">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
