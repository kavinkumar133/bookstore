// src/components/Home.js
import React from 'react';
import '../Styles/Homepage.css';
import { useSelector } from 'react-redux';

const Homepage = () => {
  const token=useSelector(state=>state.user.token);
  console.log(token);
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <h4>Welcome To Pages!!!</h4>
          <h1>Your Books From The Best Writer.</h1>
          <p>We believe that reading books are essential to a healthy culture. They’re where authors can connect with readers.</p>
          <div className="cta-buttons">
            <button className="order-button">Order Today</button>
            <button className="demo-button">Order more!</button>
          </div>
          <div className="book-info">
            <div><strong>Pages:</strong> 250 pages</div>
            <div><strong>Length:</strong> 10 Hours</div>
            <div><strong>Rating:</strong> 4.5/5 (305 ratings)</div>
          </div>
        </div>
        <div className="book-cover">
          <img src="https://assets-global.website-files.com/615aa2992a14b77739e3c502/61f3969ea11958180b4908ca_hero-book.png" alt="The Dark Light" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
