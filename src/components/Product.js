import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './Styles.css';

const Product = (props) => {
  const { product } = props;
  return (
    <Grid className="product-card">
      <Row>
        <Col xs={2}>
          <img src={product.img} alt={product.sku} className="product-img" />
        </Col>
        <Col xs={10}>
          <Row>
            <Col xs={12}>
              <h4>{product.productName}</h4>
            </Col>
            <Col xs={12}>
              <h5>
                &#8377;
                {product.mrp}
              </h5>
            </Col>
          </Row>
        </Col>
      </Row>
    </Grid>
  );
};

Product.propTypes = {
  product: PropTypes.shape({}).isRequired,
};

export default Product;
