import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Home from "../home/Home";


function Layout() {
 
  return (
    <Router>

      <Navbar bg="light" expand="lg">
      <Navbar.Brand className="navbar__brand" href="#home">The YAY Company</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="navbar__collapse" id="basic-navbar-nav">
    <Nav className="mr-auto navbar__nav active">
      <Nav.Link className="nav__item" href="#home"><a className="nav__link" href="/">Home</a> </Nav.Link>
      <Nav.Link className="nav__item" href="#link"><a className="nav__link" href="">News</a></Nav.Link>
      <Nav.Link className="nav__item" href="#link"><a className="nav__link" href="">Contact</a></Nav.Link>
    </Nav>
  </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default Layout;