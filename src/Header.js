import React from "react";
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
      <Navbar color="success"  dark expand="md">
        <NavbarBrand class="text-dark" href=""> <img src={logo} width={100} height={59} /><b> </b></NavbarBrand>
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
  );
};

export default Header;