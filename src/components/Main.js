import React from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import {
  BrowserRouter as Router, Route,
} from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import ProductsList from './ProductsList';

const Main = () => (
  <Router>
    <Grid fluid style={{ height: '97%', margin: '10px' }}>
      <Row style={{ height: '100%' }}>
        <Col xs={2} style={{ height: '100%' }}>
          <Sidebar />
        </Col>
        <Col xs={10}>
          <Row style={{ backgroundColor: '#000000', color: '#eeeeee' }}>
            <Header heading="Catalog Manager" />
          </Row>
          <Row>
            <Route path="/" component={ProductsList} />
          </Row>
        </Col>
      </Row>
    </Grid>
  </Router>
);

export default Main;
