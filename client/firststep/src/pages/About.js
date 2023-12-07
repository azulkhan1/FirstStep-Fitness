import React from 'react';
import "../styles/About.css";
import background from "../images/about.jpg"
const AboutUs = () => {
  return (
    <div className = "about">
      <div className = "aboutTop" 
       style ={{ backgroundImage: `url(${background})`}}>
       </div>
      <div className = "aboutBottom">
      <h1>About Us</h1>
      <p>Welcome to FirstStep Fitness - Your Personal Health Companion!
      
         Here, you can use our web application to do fun things health related such as calculate your BMI, or get 
        exciting, randomized workout plans to spice up your daily routine. 
      
      
      At the core of our service is a simple yet powerful BMI calculator. We understand that health is not one-size-fits-all, and that's
       why our BMI calculator takes into account your unique height and weight to provide you with an accurate measure of your body mass index. 
       It's a crucial step towards understanding your body and taking informed steps towards a healthier lifestyle.
      
      But we don't stop there. FirstStep Fitness goes beyond mere calculations. We're here to inspire and guide you on your fitness journey. 
      Our platform generates personalized, and randomized workout plans tailored to your preferences, and goals. 
      </p>
      </div>
    </div>
  );
};

export default AboutUs;