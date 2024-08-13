import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCart from './ProductCart'


const Product = () => {
  const [products, setProducts] = useState([]);

  

  useEffect(() => {
    ShowProducts();
  }, []);

  const ShowProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/books/get");
      console.log("API Response:", response);
      
      setProducts(response.data.books);
      console.log("Products state:", response.data.books);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  return (
    <div className="product">
     
      {products.length > 0 ? (
        products.map((product, index) => (
          <ProductCart key={index} item={product} />
        ))
      ) : (
        <p>No products available</p>
      )}
      
    </div>
  );
};

export default Product;

