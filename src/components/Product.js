import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const styleBox = {
  boxShadow: '3px 5px #888888',
  padding: '5px',
  marginTop: '20px',
  border: '1px solid #BBBBBB',
  borderRadius: '20px 20px',
};

const Product = (props) => {
  const { product } = props;
  return (
    <Grid style={styleBox}>
      <Row>
        <Col xs={2}>
          <img src={product.img} alt={product.sku} style={{ alignSelf: 'center', height: '100px' }} />
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
