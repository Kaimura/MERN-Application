import React from 'react';
import styled from 'styled-components';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink, 
} from 'reactstrap';

class NavBar extends React.Component {
    constructor() {
        super();

        this.state = {
            isOpen: false
        }
    }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

    render() {
        const backgroundColor = {
            backgroundImage: "linear-gradient(to bottom right, red, #565649)"
        }

        return(
            <Navbar style={backgroundColor} dark expand="sm" className="mb-5">
                <NavbarBrand href="/">Receipt List</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/Kaimura">GitHub</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        )
    }
}

export default NavBar;