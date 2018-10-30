import React from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import Header from './Header';

const Main = () => (
  <Grid fluid>
    <Row>
      <Col xs={2}>
        <code>sidebar</code>
      </Col>
      <Col xs={10}>
        <Header heading="Catalog Manager" />
        <code>Main Content</code>
      </Col>
    </Row>
  </Grid>
);

export default Main;
