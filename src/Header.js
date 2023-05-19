
import React, { useState } from 'react' 
import BootstrapTable from 'react-bootstrap-table-next';  
import { Dropdown, DropdownButton } from "react-bootstrap"; 
// import { AiOutlineUser } from "react-icons/ai";
import logo from './images/Logo2png.png.png'
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavItem,
  NavLink,
} from "reactstrap";

const Header = (props) => {
  const handleFnolClick=()=>{
    props.onFnolClick();
  };
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
          <Dropdown.Item type="button" className="btn btn-dark" onClick={handleFnolClick}>
            New Claim
          </Dropdown.Item>
          {/* <Dropdown.Item>
            Search
          </Dropdown.Item> */}
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