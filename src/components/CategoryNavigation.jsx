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
>
  <NavItem>
    <NavLink
      active
      href="#"
    >
      Link
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink href="#">
      Another Link
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink
      href="#"
    >
      Disabled Link
    </NavLink>
  </NavItem>
</Nav>
    </div>
  )
}

export default CategoryNavigation