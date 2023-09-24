import React, { useState } from "react";
import "../App.css";
import { Collapse, Nav, NavItem, Navbar, NavbarBrand, NavbarToggler } from "reactstrap";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";


const mapStateToProps = state =>{
  return {
    token:state.token
  }
}


const Navigation = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

let authOptions = null;
if(props.token !== null){
  authOptions =  <NavItem>
  <NavLink className="nav-link" to="/logout">
    Log out
  </NavLink>
</NavItem>
}else{
  authOptions =  <NavItem>
  <NavLink className="nav-link" to="/auth">
    Sign Up
  </NavLink>
</NavItem>
}


  return (
    <div>
      <Navbar className="px-3" expand="sm" color="dark" dark style={{position:"fixed",width:"100%",zIndex:"10",top:"0"}} >
        <NavbarBrand href="/">
          Nature<i>View</i>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2 text-primary bg-secondary" />
        
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
          {authOptions}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default connect(mapStateToProps)(Navigation);
