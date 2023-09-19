import React, { useState } from "react";
import "../App.css";
import { Collapse, Nav, NavItem, Navbar, NavbarBrand, NavbarToggler } from "reactstrap";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar className="px-3" expand="sm" color="dark" dark style={{backgroundColor:"red"}} >
        <NavbarBrand href="/">
          Nature<i>View</i>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        
        <Collapse isOpen={!collapsed} navbar>
          
          <Nav navbar className="ms-auto">
            <NavItem>
              <NavLink className="nav-link" to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;