import React from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

const FieldGroup = ({ id, label, ...props }) => (
  <FormGroup controlId={id}>
    <ControlLabel>{label}</ControlLabel>
    <FormControl {...props} />
  </FormGroup>
);

export default FieldGroup;
