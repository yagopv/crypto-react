import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <Row>
      <Col xs={2}>Crypto React</Col>
      <Col xs={1}>
        <Link to="/dashboard">Dashboard</Link>
      </Col>
      <Col xs={1}>
        <Link to="/about">About</Link>
      </Col>
    </Row>
  );
};

export default Nav;
