import React from 'react';
import { useDispatch } from 'react-redux';
import '../Styles/ProductCart.css';
import { addtoitems } from '../redux/userSlice';

const ProductCart = (props) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
     dispatch(addtoitems(props.item));
     console.log(props.item);
    console.log('Added to Cart');
   
  }

  return (
    <div className='product-container'>
      <img src={props.item.cover} alt={props.item.name} className='product-image' />
      <p className='product-name'> {props.item.title}</p>
      {/* <p className='product-description'>Description: {props.item.description}</p> */}
      <p className='product-price'>Price: ${props.item.price.toFixed(2)}</p>
      <p className='product-rating'>Rating: {props.item.rating || 'No rating'} ⭐</p>
      <button className='product-button' onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductCart;