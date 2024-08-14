import React from 'react';
import '../Styles/Header.css'; // Update the path to the correct location
import { Link } from 'react-router-dom';
const Header = () => {
  return (
   <>
   <header className="header">
            <nav className="nav">
                <ul className="ul">
                    <li className="li"><Link to="/">Home</Link></li>
                    <li className="li"><a className="link" href="/about">About</a></li>
                    <li className="li"><a className="link" href="/contact">Contact</a></li>
                    <li className="li"><Link to="/Product" className="link">Product</Link></li>
                </ul>
                <ul className="ul">
                    <li className="li"><Link to="/cart" >Cart</Link></li>
                    <li className="li"><Link to="/login" className="link">Login</Link></li>
                </ul>
            </nav>
        </header>
   </>
  );
};

export default Header;