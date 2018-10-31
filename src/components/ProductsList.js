import React from 'react';
import Product from './Product';

const products = [
  {
    sku: 'BIS1006',
    productName: 'Bisleri 500ml',
    mrp: '10',
    img: './assets/bis1006.png',
    Description: 'Bisleri 500ml',
  },
  {
    sku: 'BIS1007',
    productName: 'Bisleri 1000ml',
    mrp: '20',
    img: '../assets/bis1007.png',
    Description: 'Bisleri 1000ml',
  },
];

const ProductsList = () => (
  <div>
    {
      products.map(product => (
        <Product product={product} key={product.sku} />
      ))
    }
  </div>
);

export default ProductsList;
