import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from "react-bootstrap/Form"; 
 
function Losslocation({ setComponentData, componentData }) {
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setComponentData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

const [country, setcountry] = useState('');
const [countries, setcountries] = useState([]);
const [state, setState] = useState('');
const [states, setstates] = useState([]);


useEffect(() => {
  fetchLossLocationDD();
}, []);

const fetchLossLocationDD = async () => {
  try {
    //const response = await axios.get('<localhost:8080>/policytypes');
    const response = await axios.get('http://localhost:8080/losslocationsDD');
    console.log('Response data:', response.data);
    const { countries, states } = response.data;
    setcountries(countries);
    setstates(states);
  } catch (error) {
    console.error('Error fetching loss location(country, state):', error);
  }  
} 
  const {
    // location = '',
    lossAddress = '',
    // address2 = '',
    // address3 = '',
    //country = '',
    city = '',
   // state = '',
    zipCode = '',
    //jurisdiction = '',
   } = componentData || {};
   
   const handleStateChange = (event) => {
    const selectedState = event.target.value;
    setState(selectedState);
    handleInputChange(event);
  };
   const handleCountryChange = (event) => {
    setcountry(event.target.value);
    handleInputChange(event);
  };


  return (
    <div className="ms-3">
      <h5>Loss Location</h5>

       <div className="row">
      {/*  <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="location">Location</label>
          </div>
          <div className="col-15">
            <input
              type="text"
              className="w-100 form-control"
              id="location"
              value={location}
              onChange={handleInputChange}
            />
          </div>
        </div> */}

        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="lossAddress">Address</label>
            <i className="text-danger h5">*</i>
            </div>
          <div className="col-15">
            <input
              type="text"
              className="w-100 form-control"
              maxLength={500}
              id="lossAddress"
              value={lossAddress}
              onChange={handleInputChange}
            />
          </div>
        </div>
        
        {/* <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="address2">Address 2</label>
          </div>
          <div className="col-15">
            <input
              type="text"
              className="w-100 form-control"
              maxLength={500}
              id="address2"
              value={address2}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="address3">Address 3</label>
          </div>
          <div className="col-15">
            <input
              type="text"
              className="w-100 form-control"
              maxLength={500}
              id="address3"
              value={address3}
              onChange={handleInputChange}
            />
          </div>
        </div> */}

        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="country">Country</label>
          </div>
          <div className="col-8">
            <Form.Select
              className="w-100 form-control"
              id="country"
              value={country}
              onChange={handleCountryChange}
            >
              <option value="None">None</option>
              {countries.map((country,index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </Form.Select>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="city">City</label>
            <i className="text-danger h5">*</i>
          </div>
          <div className="col-8">
            <input
              type="text"
              className="w-100 form-control"
              id="city"
              value={city}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="state">State</label>
            <i className="text-danger h5">*</i>
          </div>
          <div className="col-8">
            <Form.Select
              className="w-100 form-control"
              id="state"
              value={state}
              onChange={handleStateChange}
            >
              <option value="None">None</option>
              {states.map((state,index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
            </Form.Select>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="zipCode">ZipCode</label>
          </div>
          <div className="col-8">
            <input
              type="text"
              className="w-100 form-control"
              id="zipCode"
              value={zipCode}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
    </div>
  ); 
} 
 
export default Losslocation




