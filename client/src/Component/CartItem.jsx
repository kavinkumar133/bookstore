import React from 'react';
import '../Styles/CartItem.css';
const CartItem = (props) => {
  return (
    <div className="cart-item">
      <img src={props.item.cover} alt={props.item.title} />
      <div className="cart-item-details">
        <h3>{props.item.title}</h3>
        <p className="cart-item-price">Price: ${props.item.price}</p>
        <p>Quantity: {props.item.quantity}</p>
      </div>
    </div>
  );
};

export default CartItem;