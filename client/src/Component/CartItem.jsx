import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Styles/CartItem.css';

const CartItem = (props) => {
  const [loading, setLoading] = useState(false);
  const [buying, setBuying] = useState(false);



  const handleRemoveFromCart = async (id) => {
    setLoading(true);
    try {
      console.log(id);
      const response = await axios.post("http://localhost:3000/cart/delete", { productId: id }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      console.log('Removed from Cart', response);

      if (props.onRemove) {
        props.onRemove(id);
      }
    } catch (error) {
      console.error('Error removing from cart', error);
    } finally {
      setLoading(false);
    }
  };

  const handleBuyNow = async (id) => {
    setBuying(true);
    try {
      console.log(id);
      const response = await axios.post("http://localhost:3000/cart/buy", { productId: id }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      console.log('Purchased', response);

      if (props.onBuy) {
        props.onBuy(id);
      }
    } catch (error) {
      console.error('Error purchasing item', error);
    } finally {
      setBuying(false);
    }
  };

  return (
    <div className="cart-item">
      <img src={props.item.image} alt={props.item.title} />
      <div className="cart-item-details">
        <h3>{props.item.title}</h3>
        <p className="cart-item-price">Price: ${props.item.price}</p>
        <div className="cart-item-quantity">
          <label htmlFor={`quantity-${props.item.productId}`}>Quantity: </label>
          <input
            type="number"
            id={`quantity-${props.item.productId}`}
            value={props.item.quantity}
            onChange={(e) => props.updateQuantity(props.item.productId, parseInt(e.target.value, 10))}
            min="1"
          />
        </div>
        <button onClick={() => handleRemoveFromCart(props.item.productId)} disabled={loading}>
          {loading ? 'Removing...' : 'Remove'}
        </button>
        <button className="buy" onClick={() => handleBuyNow(props.item.productId)} disabled={buying}>
          {buying ? 'Buying...' : 'Buy'}
        </button>
      </div>
    </div>
  );
};

export default CartItem;