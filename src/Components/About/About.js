import React from 'react';
import classes from './About.module.css';

const About = () => {
  return (
    <div className={`container ${classes.aboutContainer}`}>
      <h1 className={classes.aboutTitle}>About Hungry Hub</h1>
      <p className={classes.aboutText}>
        Welcome to Hungry Hub, your go-to destination for delicious and freshly prepared meals delivered right to your doorstep. 
        Our mission is to provide you with a seamless and delightful food delivery experience.
      </p>
      <p className={classes.aboutText}>
        Whether you're craving traditional Indian dishes, classic pizzas, or delightful desserts, Hungry Hub has something for everyone. 
        Our chefs use the finest ingredients to prepare each dish with utmost care and love.
      </p>
      <img 
        src="https://img.freepik.com/premium-vector/food-delivery-service-fast-food-delivery-scooter-delivery-service-illustration_67394-869.jpg" 
        alt="About Hungry Hub" 
        className={classes.aboutImage}
      />
    </div>
  );
};

export default About;
