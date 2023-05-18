
import React, { useState } from 'react' 
import BootstrapTable from 'react-bootstrap-table-next';  
import { Dropdown, DropdownButton } from "react-bootstrap"; 
// import { AiOutlineUser } from "react-icons/ai";
import logo from './images/logo1-png.png'
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavItem,
  NavLink,
} from "reactstrap";

const Header = () => {
  return (
    
    <div>
      <Navbar color="success" dark expand="md">
  <NavbarBrand className="text-dark">
    <img src={logo} width={50} height={20} />
  </NavbarBrand>
  <Nav className="mr-auto" navbar>
    <NavItem>
      <div className='row'>
        <DropdownButton variant='dark' title='Claim'>
          <Dropdown.Item>
            Claim
          </Dropdown.Item>
          <Dropdown.Item>
            Search
          </Dropdown.Item>
        </DropdownButton>
      </div>
    </NavItem>
  </Nav>
  <NavbarText>
    
  </NavbarText>
  <NavbarText>
    
  </NavbarText>
  <NavbarText>
    
  </NavbarText>
</Navbar>
     </div>
  );
};

export default Header;