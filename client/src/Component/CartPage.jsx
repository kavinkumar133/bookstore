import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';


const CartPage = () => {
  const cartItems = useSelector(state => state.user.items);
  const token = useSelector(state => state.user.token);
  const [cart, setCart] = useState([{}]);
  async function fetch(){
    {
      const response = await axios.get("http://localhost:5000/api/cart/get", {
       headers:{
         Authorization: `Bearer ${token}`
       }
     }
     )
     setCart(response.data);
     console.log([cart]);
   }
  }
  useEffect(() => { 
    if(token){
      fetch()
    }

  },[token]);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length==0 ? (
        <p>No items in the cart</p>
      ) : (
        cart.map(item => (
          <CartItem key={item.id} item={item} />
        ))
      )}
    </div>
  );
};

export default CartPage;
