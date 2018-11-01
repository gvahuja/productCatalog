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
      details: {},
      state: 'add',
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleState = this.handleState.bind(this);
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

  render() {
    const { show, details, state } = this.state;
    return (
      <Router>
        <Grid fluid className="full-height">
          <ProductDetails
            show={show}
            details={details}
            state={state}
            handleClick={this.handleAdd}
            handleState={this.handleState}
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
                  <Route path="/" render={() => <ProductsList handleState={this.handleState} />} />
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
