import React from 'react';
import Product from './Product';
import './Styles.css';

const products = [
  {
    sku: 'bis1006',
    productName: 'Bisleri 500ml',
    mrp: '10',
    img: './assets/bis1006.png',
    description: 'Bisleri 500ml',
  },
  {
    sku: 'bis1007',
    productName: 'Bisleri 1000ml',
    mrp: '20',
    img: '../assets/bis1007.png',
    Description: 'Bisleri 1000ml',
  },
];

const ProductsList = props => (
  <div className="scrollable">
    {
      products.map(product => (
        <Product product={product} key={product.sku} handleState={props.handleState} />
      ))
    }
  </div>
);

export default ProductsList;
