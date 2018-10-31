import React from 'react';
import {
  Modal, Button, Col, FormGroup, ControlLabel,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import FieldGroup from './FieldGroup';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      sku: 'bis1006',
      productName: 'Bisleri 500ml',
      mrp: '10',
      img: './assets/bis1006.png',
      description: 'Bisleri 500ml',
    };
  }

  render() {
    const {
      sku, productName, mrp, img, description,
    } = this.state;
    const { show, handleClick } = this.props;
    return (
      <div className="static-modal">
        <Modal show={show} enforceFocus keyboard>
          <Modal.Header>
            <Modal.Title>Add New Product</Modal.Title>
          </Modal.Header>

          <Modal.Body className="col-xs-12">
            <Col xs={12} className="form-group-style">
              <FieldGroup
                id="sku"
                label="Stock Keeping Unit Code"
                type="text"
                value={sku}
                placeholder="Enter Stock Keeping Unit Code"
                // onChange={event => this.handleChange(event, 'issueTitle')}
              />
            </Col>
            <Col xs={6} className="form-group-style">
              <FieldGroup
                id="name"
                label="Product Name"
                type="text"
                value={productName}
                placeholder="Enter Product Name"
                // onChange={event => this.handleChange(event, 'issueLabels')}
              />
            </Col>
            <Col xs={6} className="form-group-style">
              <FieldGroup
                id="mrp"
                label="M.R.P"
                type="text"
                value={mrp}
                placeholder="Enter M.R.P"
                // onChange={event => this.handleChange(event, 'issueAssignee')}
              />
            </Col>
            <Col xs={6} className="form-group-style">
              <FieldGroup
                id="img"
                label="Upload Image"
                type="file"
                // value={img}
                // placeholder=""
                // onChange={event => this.handleChange(event, 'issueDueDate')}
              />
            </Col>
            <Col xs={12} className="form-group-style">
              <FormGroup
                controlId="issueDescription"
              >
                <ControlLabel>Description</ControlLabel>
                <textarea
                  className="form-control"
                  row={5}
                  value={description}
                  placeholder="Add Description"
                  onChange={event => this.handleChange(event, 'issueDescription')}
                />
              </FormGroup>
            </Col>
            {/* <Col xs={12} className="form-group-style">
              <Button
                type="submit"
                bsStyle="primary"
                onClick={event => this.handleSubmit(event)}
                disabled={
                  description.length < 3
                  || title.length < 3
                  || label.length < 3
                  || assignee.length < 3
                  || dueDate.length < 10
                }
              >
                Add Issue
              </Button>
              <Link to="/">
                <Button
                  type="reset"
                  style={{ marginLeft: '10px' }}
                >
                  Cancel
                </Button>
              </Link>
            </Col> */}
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={handleClick}>Close</Button>
            <Button bsStyle="primary">Save changes</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ProductDetails;
