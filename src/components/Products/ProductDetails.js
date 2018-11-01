import React from 'react';
import {
  Modal, Button, Grid, Row, Col, FormGroup, ControlLabel, FormControl, InputGroup,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import FieldGroup from '../Basic/FieldGroup';
import '../../styles/Styles.css';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      sku: '',
      productName: '',
      mrp: 0,
      img: '',
      description: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { state, details } = nextProps;
    if (state === 'add') {
      this.setState({
        sku: '',
        productName: '',
        mrp: 0,
        img: '',
        description: '',
      });
    } else {
      this.setState({
        sku: details.sku,
        productName: details.productName,
        mrp: details.mrp,
        img: details.img,
        description: details.description,
      });
    }
  }

  handleChange(event, id) {
    const { value } = event.target;
    this.setState({
      [id]: value,
    });
  }

  handleImageChange(event) {
    this.setState({
      img: window.URL.createObjectURL(event.target.files[0]),
    });
  }

  handleSubmit() {
    // event.preventDefault();
    const {
      state, details, handleClick, handleState, updateProducts,
    } = this.props;
    if (state === 'view') {
      handleState('edit', details);
    } else {
      // onsubmit add or change details
      updateProducts(this.state);
      handleClick();
    }
  }

  render() {
    const {
      sku, productName, mrp, img, description,
    } = this.state;
    const { show, state, handleClick } = this.props;
    return (
      <div className="static-modal">
        <Modal show={show} enforceFocus keyboard>
          <Modal.Header>
            <Modal.Title>
              {
                // eslint-disable-next-line
                state === 'add'
                  ? 'Add new product'
                  : state === 'edit' ? 'Update product details' : productName
              }
            </Modal.Title>
          </Modal.Header>

          <Modal.Body className="col-xs-12">
            <Grid className="col-xs-12">
              <Row>
                <Col
                  xs={state === 'view' ? 6 : 2}
                  xsOffset={state === 'view' ? 3 : 0}
                  hidden={img === ''}
                >
                  <img src={img} alt="Product_Image" className={state === 'view' ? 'view-img' : 'product-img'} />
                </Col>
                <Col xs={10} hidden={state === 'view'} className="form-group-style">
                  <FieldGroup
                    id="img"
                    label={state === 'add' ? 'Upload Product Image' : 'Update Product Image'}
                    type="file"
                    accept="image/*"
                    onChange={event => this.handleImageChange(event)}
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={12} hidden={state === 'view'} className="form-group-style">
                  <FieldGroup
                    id="productName"
                    label="Product Name"
                    type="text"
                    value={productName}
                    placeholder="Enter Product Name"
                    disabled={state === 'view'}
                    onChange={event => this.handleChange(event, 'productName')}
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={6} className="form-group-style">
                  <FieldGroup
                    id="sku"
                    label="Stock Keeping Unit Code"
                    type="text"
                    value={sku}
                    placeholder="Enter Stock Keeping Unit Code"
                    disabled={state === 'view'}
                    onChange={event => this.handleChange(event, 'sku')}
                  />
                </Col>
                <Col xs={6} className="form-group-style">
                  <FormGroup controlId="mrp">
                    <ControlLabel>M.R.P</ControlLabel>
                    <InputGroup>
                      <InputGroup.Addon>&#8377;</InputGroup.Addon>
                      <FormControl
                        type="number"
                        value={mrp}
                        placeholder="Enter M.R.P"
                        min="0"
                        step=".1"
                        disabled={state === 'view'}
                        onChange={event => this.handleChange(event, 'mrp')}
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
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
                      disabled={state === 'view'}
                      onChange={event => this.handleChange(event, 'description')}
                    />
                  </FormGroup>
                </Col>
              </Row>
            </Grid>
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
                || mrp < 1
              }
              onClick={this.handleSubmit}
            >
              {
                state === 'view'
                  ? 'Edit'
                  : 'Save changes'
              }
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  show: PropTypes.bool.isRequired,
  state: PropTypes.string.isRequired,
  details: PropTypes.shape({}).isRequired,
  handleClick: PropTypes.func.isRequired,
  handleState: PropTypes.func.isRequired,
  updateProducts: PropTypes.func.isRequired,
};

export default ProductDetails;
