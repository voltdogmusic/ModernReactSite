import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from "react-bootstrap";
import ModalComponent from "../ModalComponent/ModalComponent";
import brand from '../../img/BrandNoBG.png'

class NavBarRBS extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    {/*<Navbar.Brand href="#home">Your Brand Icon</Navbar.Brand>*/}
                    <img
                        width={225/4}
                        height={225/4}
                        src={brand}
                        alt="Your Brand Icon"
                    />
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="More" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Lights Camera Action</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <ModalComponent/>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

NavBarRBS.propTypes = {};

export default NavBarRBS;
