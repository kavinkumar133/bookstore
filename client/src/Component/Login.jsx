//filename: Login.jsx
import React, { useState } from 'react';
import '../Styles/Login.css';  // Ensure the path is correct
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login =  () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle login logic here
    // console.log('Email:', email);
    // console.log('Password:', password);
    const res =  await axios.post("http://localhost:5000/api/users/login",{
         email,
         password
    });
    console.log(">>>",res);
    
    

  };

  return (
    <div className="login-page-unique">
      <form className="login-form-unique" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        <p>OR</p>
        <Link to="/register"><button type="button">Register</button></Link>
      </form>
    </div>
  );
};

export default Login;