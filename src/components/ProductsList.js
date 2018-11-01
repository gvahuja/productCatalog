import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';
import './Styles.css';

const ProductsList = (props) => {
  const { products } = props;
  return (
    <div className="scrollable">
      {
        products.map(product => (
          <Product product={product} key={product.sku} handleState={props.handleState} />
        ))
      }
    </div>
  );
};

ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleState: PropTypes.func.isRequired,
};

export default ProductsList;
