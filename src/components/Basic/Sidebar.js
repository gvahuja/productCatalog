import React from 'react';
import { Well } from 'react-bootstrap';
import '../../styles/Styles.css';

const Sidebar = () => (
  <div className="full-height color-theme">
    <img
      src="https://s3.ap-south-1.amazonaws.com/mpaani-corp/images/logo-white.png"
      alt="mpaani logo"
    />
    <hr />
    <Well className="active">Products</Well>
  </div>
);
export default Sidebar;
