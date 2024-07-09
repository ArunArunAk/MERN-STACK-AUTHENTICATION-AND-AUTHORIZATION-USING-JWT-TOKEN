import React from 'react';
import classes from './Home.module.css';
import { RiLogoutCircleRLine } from 'react-icons/ri';

const Home = () => {
  return (
    <div>
    
    

      {/* Hero Section */}
      <div className={`jumbotron text-center ${classes.hero}`}>
        <h1 className={`${classes.hungry}`}>Welcome to Hungry Hub</h1>
        <h4 className=" display-10">The best food delivery service in Erode.</h4>
        <a className="btn btn-primary btn-lg " href="#" role="button">Order Now</a>
      </div>

      {/* Features Section */}
      <div className="container mt-5">
        <div className="row text-center">
          <div className="col-md-4">
            <div className="card">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4WH_E5BRY2b8e895xYX1Rd2Gasew6hh4h9og_zDNPkSEUMTH4VApNHwKdrEmYUXklHC4&usqp=CAU" className="card-img-top" alt="Feature 1" />
              <div className="card-body">
                <h5 className="card-title">Fast Delivery</h5>
                <p className="card-text">Get your food delivered in under 30 minutes in Erode.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://t3.ftcdn.net/jpg/06/99/65/56/360_F_699655678_5NsiJ55CGcJXNJ2gpyG3jMTna5zxp6W0.jpg" className="card-img-top" alt="Feature 2" />
              <div className="card-body">
                <h5 className="card-title">Wide Variety</h5>
                <p className="card-text">Choose from a wide range of cuisines and dishes.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV7-i7rHrHnFy_IHbhys0WxfSvUcPI2xiD7TW7yLPUZWr85DGh6c8DDPZPjXpjAD_TTiA&usqp=CAU" className="card-img-top" alt="Feature 3" />
              <div className="card-body">
                <h5 className="card-title">Quality Food</h5>
                <p className="card-text">We ensure the highest quality and hygiene standards.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">How It Works</h2>
        <div className="row text-center">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">1. Browse</h5>
                <p className="card-text">Browse through our extensive menu and select your favorite dishes.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">2. Order</h5>
                <p className="card-text">Place your order online or through our mobile app.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">3. Enjoy</h5>
                <p className="card-text">Sit back and relax while we deliver your food to your doorstep.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className={`container mt-5 ${classes.testimonials}`}>
        <h2 className="text-center mb-4">What Our Customers Say</h2>
        <div className="row text-center">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <p className="card-text">"The delivery was super fast, and the food was hot and delicious. Highly recommended!"</p>
                <p className="card-text"><strong>- John Doe</strong></p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <p className="card-text">"Great variety of dishes and excellent customer service. Will order again."</p>
                <p className="card-text"><strong>- Jane Smith</strong></p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <p className="card-text">"I love the quality and taste of the food. Best food delivery service in Erode!"</p>
                <p className="card-text"><strong>- Raj Kumar</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      
    </div>
  );
};

export default Home;
