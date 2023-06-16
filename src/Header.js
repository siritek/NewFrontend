import {React,useState} from 'react';
import { Dropdown, DropdownButton, NavbarBrand } from 'react-bootstrap';
import logo from './images/Logo2png.png.png';
// import Search from "./Pages/Search";
const Header = (props) => {
  const handleFnolClick = () => {
    props.onFnolClick();
  };
  const handleSearchClick=()=>{
    props.onSearchClick();
  }
  const handleBlankClick=()=>{
    props.onBlankClick();
  }

const handleAdminClick = ()=>
{
  props.onAdminClick();
}

  

  // const handleSearch = (event) => {
  //   event.preventDefault();
  //   // Handle search functionality
  //   const searchQuery = event.target.elements.searchQuery.value;
  //   // Perform search based on the searchQuery
  // };
  

  return (
    <div>
      <nav className="navbar navbar-dark bg-success navbar-expand-md">
      
        <NavbarBrand style={{ paddingLeft: "14px" }}>
          <a className="navbar-brand text-dark"  onClick={handleBlankClick}>
            <img src={logo} width={80} height={30} alt="Logo" />
          </a>
        </NavbarBrand>
        <div className="mx-auto">
          <ul className="navbar-nav">
            <li className="nav-item">
              <DropdownButton variant="dark" title="Claim">
                <Dropdown.Item
                  type="button"
                  className="btn btn-dark"
                  onClick={handleFnolClick}
                >
                  New Claim
                </Dropdown.Item>
              </DropdownButton>
            </li>
            &nbsp;
            <button
              type="submit"
              onClick={handleSearchClick}
              className="btn btn-dark"
            >
              Search
            </button>
            {/* <li className="nav-item">
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
            </li> */}

           

            </ul> </div>
          <div className="col-16 d-flex justify-content-end">
          <button
              type="buton"
              onClick={()=>{handleBlankClick(); handleAdminClick()}}
              className="btn btn-dark"
            >
              Edit
            </button>
            &nbsp;   &nbsp;   &nbsp;

          <NavbarBrand>  <a className="btn btn-dark" href="">
         Log Out
        </a></NavbarBrand>
          {/* <NavbarBrand className="btn btn-dark" style={{ paddingRight: "14px" }}><a href=""></a>  Log Out</NavbarBrand> */}
        
      </div>
      
       
      </nav>
    </div>
  );
};

export default Header;
