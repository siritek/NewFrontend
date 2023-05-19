import React from 'react';
import { Dropdown, DropdownButton, Form, NavbarBrand } from 'react-bootstrap';
import logo from './images/Logo2png.png.png';

const Header = (props) => {
  const handleFnolClick = () => {
    props.onFnolClick();
  };

  const handleSearch = (event) => {
    event.preventDefault();
    // Handle search functionality
    const searchQuery = event.target.elements.searchQuery.value;
    // Perform search based on the searchQuery
  };
  

  return (
    <div>
     <nav className="navbar navbar-dark bg-success navbar-expand-md">
      <NavbarBrand>  <a className="navbar-brand text-dark" href="">
         <img src={logo} width={80} height={30} alt="Logo" /> 
        </a></NavbarBrand>
        <div className="mx-auto">
          <ul className="navbar-nav">
            <li className="nav-item">
              <DropdownButton variant="dark" title="Claim">
                <Dropdown.Item type="button" className="btn btn-dark" onClick={handleFnolClick}>
                  New Claim
                </Dropdown.Item>
              </DropdownButton>
            </li>&nbsp;
            <li className="nav-item">
              <DropdownButton variant="dark"style={{ width: '300px' }} title="Search">
                <Form onSubmit={handleSearch}>
                  <div className="input-group">
                    <input type="number" name="searchQuery" className="form-control" placeholder="Search" />&nbsp;&nbsp; 
                    <div className="input-group-append">
                      <button type="submit" className="btn btn-dark">Search</button>
                    </div>
                  </div>
                </Form>
              </DropdownButton>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
