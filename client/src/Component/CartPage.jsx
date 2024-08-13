import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const CartPage = () => {
  const cartItems = useSelector(state => state.user.items);
  console.log(cartItems);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))
      )}
    </div>
  );
};

export default CartPage;
