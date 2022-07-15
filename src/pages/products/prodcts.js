import React, { useEffect } from 'react';
import { BasePage } from '../../components/base-page/base-page';
import axios from 'axios';

const ProductsPage = () => {
  useEffect(() => {
    axios.get('http://localhost:3001/products').then((res) => {
      console.log(res.data);
    });
  }, []);

  const newProductHandler = () => {
    axios
      .post('http://localhost:3001/products', {
        name: 'Product Name 2',
        price: 34234234,
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  const editProductHandler = () => {
    axios
      .put('http://localhost:3001/products/2', {
        name: 'adfdfd 2',
        price: 34,
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  const deleteProductHandler = () => {
    axios
      .delete('http://localhost:3001/products/2')
      .then((res) => {
        console.log(res.data);
      });
  };
  return (
    <BasePage title={`Products`} className='container'>
      <button onClick={newProductHandler}>New</button>
      <button onClick={editProductHandler}>Edit</button>
      <button onClick={deleteProductHandler}>Delete</button>
    </BasePage>
  );
};

export default ProductsPage;
