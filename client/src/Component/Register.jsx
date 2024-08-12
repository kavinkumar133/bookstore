//filename: Register.jsx
import React, { useState } from 'react';
import '../Styles/Register.css'; 
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
 const [name,setname]=useState('');
 const [email,setemail]=useState(''); 
 const [password,setpassword]=useState('');



  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    const response=await axios.post("http://localhost:5000/api/users/register",{name,email,password}); 
    console.log('Form submitted:', response);
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={(e)=>setname(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e)=>setemail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e)=>setpassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
        <p>OR</p>
        <Link to="/login"><button type="login">Login</button></Link>
      </form>
    </div>
  );
};

export default Register;