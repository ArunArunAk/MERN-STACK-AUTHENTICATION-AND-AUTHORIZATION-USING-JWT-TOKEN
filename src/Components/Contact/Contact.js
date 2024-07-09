import React from 'react';
import classes from './Contact.module.css';

const Contact = () => {
  return (
    <div className={`container ${classes.contactContainer}`}>
      <h2 className={classes.header}>Contact Us</h2>
      <form>
        <div className={`form-group ${classes.formGroup}`}>
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Enter your name" />
        </div>
        <div className={`form-group ${classes.formGroup}`}>
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Enter your email" />
        </div>
        <div className={`form-group ${classes.formGroup}`}>
          <label htmlFor="message">Message</label>
          <textarea className="form-control" id="message" rows="4" placeholder="Enter your message"></textarea>
        </div>
        <button type="submit" className={classes.submitButton}>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
