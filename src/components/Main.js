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

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      show: !state.show,
    }));
  }

  render() {
    const { show } = this.state;
    return (
      <Router>
        <Grid fluid className="full-height">
          <ProductDetails show={show} handleClick={this.handleClick} />
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
                    onClick={this.handleClick}
                  >
                    {'Add New Product'}
                  </Button>
                </Col>
              </Row>
              <Row className="full-height">
                <Switch>
                  <Route path="/" component={ProductsList} />
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
