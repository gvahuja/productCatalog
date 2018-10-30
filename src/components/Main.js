import React from 'react';
import { Grid, Col, Row } from 'react-bootstrap';

const Main = () => (
  <Grid>
    <Row>
      <Col xs={12}>
        <code>Header</code>
      </Col>
    </Row>
    <Row>
      <Col xs={2}>
        <code>sidebar</code>
      </Col>
      <Col xs={10}>
        <code>Main Content</code>
      </Col>
    </Row>
  </Grid>
);

export default Main;
