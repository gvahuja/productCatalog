import React from 'react';
import {
  Grid, Col, Row, Button,
} from 'react-bootstrap';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import ProductsList from './ProductsList';
import './Styles.css';
import ProductDetails from './ProductDetails';

const productsData = [
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
    description: 'Bisleri 1000ml',
  },
];

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      details: {},
      state: 'add',
      products: productsData,
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleState = this.handleState.bind(this);
    this.updateProducts = this.updateProducts.bind(this);
  }

  handleAdd() {
    this.setState(state => ({
      show: !state.show,
      state: 'add',
      details: {},
    }));
  }

  handleState(state, details) {
    this.setState({
      show: true,
      state,
      details,
    });
  }

  updateProducts(product) {
    const { details, products } = this.state;
    if (details.sku) {
      const index = products.findIndex(productDetails => productDetails.sku === details.sku);
      const updatedProducts = Object.assign([...products], { [index]: product });
      this.setState({
        products: updatedProducts,
      });
    } else {
      this.setState({
        products: [...products, product],
      });
    }
  }

  render() {
    const {
      show, details, state, products,
    } = this.state;
    return (
      <Router>
        <Grid fluid className="full-height">
          <ProductDetails
            show={show}
            details={details}
            state={state}
            handleClick={this.handleAdd}
            handleState={this.handleState}
            updateProducts={this.updateProducts}
          />
          <Row className="full-height">
            <Col xs={2} className="full-height">
              <Sidebar />
            </Col>
            <Col xs={10}>
              <Row className="color-theme flex-style">
                <Col xs={8}>
                  <Header heading="Catalog Manager" />
                </Col>
                <Col xs={4}>
                  <Button
                    className="pull-right"
                    onClick={this.handleAdd}
                  >
                    {'Add New Product'}
                  </Button>
                </Col>
              </Row>
              <Row className="full-height">
                <Switch>
                  <Route path="/" render={() => <ProductsList handleState={this.handleState} products={products} />} />
                </Switch>
              </Row>
            </Col>
          </Row>
        </Grid>
      </Router>
    );
  }
}

export default Main;
