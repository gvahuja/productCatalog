import React from 'react';
import { Well } from 'react-bootstrap';
import '../../styles/Styles.css';

const Sidebar = () => (
  <div className="full-height color-theme regular-padding">
    <img
      src="https://s3.ap-south-1.amazonaws.com/mpaani-corp/images/logo-white.png"
      alt="mpaani logo"
      className="logo"
    />
    <hr />
    <Well className="color-theme active">Products</Well>
  </div>
);
export default Sidebar;
