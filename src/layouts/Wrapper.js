import React from 'react';
import Nav from '../components/navbar/Nav';
import Container from 'react-bootstrap/Container';
import Home from '../pages/Home'


const Wrapper = ({ children }) => {
  return (
    <div>
      <Nav />
      <Container>
      {children}
      </Container>
    </div>
  );
};

export default Wrapper;
