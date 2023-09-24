import React from 'react'
import { NavLink } from 'react-router-dom'
import { Nav, NavItem } from 'reactstrap'

const CategoryNavigation = () => {



  return (
    <div>
      <Nav
  justified
  pills
  tabs
  


  style={{position:"fixed",width:"100%",zIndex:"9",top:"5rem"}}
>

  <NavItem>
    <NavLink
      to="/jungle"
      className="nav-link text-white"
     
    >
      jungle
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink 
     className="nav-link text-white" to="/ocean"
    
     >
ocean
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink
      to="/hills"
      className="nav-link text-white"
     
    >
      hills
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink
      to="/sunset"
      className="nav-link text-white"
     
    >
      sunset
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink
      to="/waterfalls"
      className="nav-link text-white"
     
    >
      waterfalls
    </NavLink>
  </NavItem>
</Nav>
    </div>
  )
}

export default CategoryNavigation