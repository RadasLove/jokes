import React from 'react'
import {Navbar} from 'react-bootstrap'
import Logo from '../../assets/img/logo.png'



const Nav = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={Logo}
            width="120"
            height="60"
            className="d-inline-block align-top"
          />{' '}
      
        </Navbar.Brand>
      </Navbar>
    )
}

export default Nav
