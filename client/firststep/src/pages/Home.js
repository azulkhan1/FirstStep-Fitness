import React from 'react';

import bg from '../images/home.jpg';

import "../styles/Home.css"
function Home () {

    return (
        <div className="home"  style ={{ backgroundImage: `url(${bg})`}}>
          
          <div className="top">
            <h1> FirstStep</h1>
            <p> Make the first step to a healthier life </p>
          </div>
          
        </div>
      ); 
    }
    
    export default Home