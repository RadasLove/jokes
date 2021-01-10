import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Logo from '../../assets/img/logo.png'



const Navigation = () => {
    return (
      <Nav className="justify-content-center pt-3" activeKey="/home">
      <Nav.Item>
        <Nav.Link href="/">Přehled Joku</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/pridat-vtip" eventKey="1">Přidat Joke</Nav.Link>
      </Nav.Item>

    </Nav>
    )
}

export default Navigation
