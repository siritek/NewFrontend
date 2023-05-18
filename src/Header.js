
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

const Header = () => {
  return (
    
    <div>
<<<<<<< HEAD
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
=======
      <Navbar color="success"  dark expand="md">
        <NavbarBrand class="text-dark" href=""> <img src={logo} width={80} height={30} /><b> </b></NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink class="text-dark" href="/components/"> <b> Components </b></NavLink>
            
          </NavItem>
         
        </Nav>
        <NavbarText>
          <div>
            {/* <AiOutlineUser >
         
            </AiOutlineUser> */}
          </div>
        </NavbarText>
      </Navbar>
    </div>
>>>>>>> 66e23ee888992aa690ceeb34a6f3f56ba588c957
  );
};

export default Header;