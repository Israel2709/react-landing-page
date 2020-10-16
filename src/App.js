import React, { useState } from 'react';
import './App.css';

import HeaderCard from './Components/HeaderCard/HeaderCard'
import ContactForm from './Components/ContactForm/ContactForm'

import {
  Container,
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  Form, 
  FormGroup, 
  Label, 
  Input
} from 'reactstrap'

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const cardsArray = [
    {
      title:"Hola",
      subTitle:"soy subtítulo 1",
      text:"Soy el texto 1",
      bgImg:"https://picsum.photos/id/50/600"
    },
    {
      title:"Ciao",
      subTitle:"soy subtítulo 2",
      text:"Soy el texto 2",
      bgImg:"https://picsum.photos/id/70/600"
    }
  ]

  return (
    <div className="App">
      <Navbar expand="md" fixed="top">
        <NavbarBrand href="/">
          <img src="https://picsum.photos/id/50/100/50" alt="" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Our Work</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Manifesto</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <Container fluid>
        <Row>
          {
            cardsArray.map( ( card, index ) => {
              return (
                <HeaderCard
                  key={ index } 
                  title={ card.title }
                  subTitle={ card.subTitle }
                  text={ card.text }
                  bgImg={ card.bgImg }
                />
              )
            })
          }
        </Row>
        <Row className="bg-warning">
          <Col xs="12">
            <p>Ingrenia is located in two major business & government hubs in the Americas</p>
            <h2><a href="">Contact us</a></h2>
            <p>Send us an e-mail and we will get back to you;</p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={{ size: '8', offset: 2 }}>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
