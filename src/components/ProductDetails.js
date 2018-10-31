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
      sku: '',
      productName: '',
      mrp: '0',
      img: '',
      description: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, id) {
    const { value } = event.target;
    this.setState({
      [id]: value,
    });
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
                id="productName"
                label="Product Name"
                type="text"
                value={productName}
                placeholder="Enter Product Name"
                onChange={event => this.handleChange(event, 'productName')}
              />
            </Col>
            <Col xs={6} className="form-group-style">
              <FieldGroup
                id="sku"
                label="Stock Keeping Unit Code"
                type="text"
                value={sku}
                placeholder="Enter Stock Keeping Unit Code"
                onChange={event => this.handleChange(event, 'sku')}
              />
            </Col>
            <Col xs={6} className="form-group-style">
              <FieldGroup
                id="mrp"
                label="M.R.P"
                type="text"
                value={mrp}
                placeholder="Enter M.R.P"
                onChange={event => this.handleChange(event, 'mrp')}
              />
            </Col>
            <Col xs={6} className="form-group-style">
              <FieldGroup
                id="img"
                label="Upload Product Image"
                type="file"
                // value={img}
                // placeholder=""
                // onChange={event => this.handleChange(event, 'issueDueDate')}
              />
            </Col>
            <Col xs={12} className="form-group-style">
              <FormGroup
                controlId="description"
              >
                <ControlLabel>Description</ControlLabel>
                <textarea
                  className="form-control"
                  row={5}
                  value={description}
                  placeholder="Add Description"
                  onChange={event => this.handleChange(event, 'description')}
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
            <Button
              onClick={handleClick}
            >
              {'Close'}
            </Button>
            <Button
              bsStyle="primary"
              disabled={
                description.length < 3
                || productName.length < 3
                || sku.length < 3
                || mrp.length < 1
                || parseFloat(mrp) < 1
              }
            >
              {'Save changes'}
            </Button>
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
