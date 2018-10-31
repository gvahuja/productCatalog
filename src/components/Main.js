import React from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import {
  BrowserRouter as Router, Route,
} from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import ProductsList from './ProductsList';
import './Styles.css';

const Main = () => (
  <Router>
    <Grid fluid className="full-height">
      <Row className="full-height">
        <Col xs={2} className="full-height">
          <Sidebar />
        </Col>
        <Col xs={10}>
          <Row className="color-theme">
            <Header heading="Catalog Manager" />
          </Row>
          <Row className="full-height">
            <Route path="/" component={ProductsList} />
          </Row>
        </Col>
      </Row>
    </Grid>
  </Router>
);

export default Main;
