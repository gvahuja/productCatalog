import React from 'react';
import { Well } from 'react-bootstrap';

const Sidebar = () => (
  <div style={{ backgroundColor: '#000000', color: '#eeeeee', height: '100%' }}>
    <img
      src="https://s3.ap-south-1.amazonaws.com/mpaani-corp/images/logo-white.png"
      alt="mpaani logo"
    />
    <hr />
    <Well style={{ backgroundColor: '#444444' }}>Products</Well>
  </div>
);
export default Sidebar;
