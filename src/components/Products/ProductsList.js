import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'react-bootstrap';
import Product from './Product';
import '../../styles/Styles.css';

const ProductsList = (props) => {
  const { products } = props;
  return (
    <Grid className="scrollable col-xs-12">
      {
        products.map(product => (
          <Product product={product} key={product.sku} handleState={props.handleState} />
        ))
      }
    </Grid>
  );
};

ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleState: PropTypes.func.isRequired,
};

export default ProductsList;
