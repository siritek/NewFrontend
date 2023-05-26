import React from 'react'
import Form from "react-bootstrap/Form"; 
 
function Losslocation({ setComponentData, componentData }) {
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setComponentData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };
  const {
    Location = '',
    Address1 = '',
    Address2 = '',
    Address3 = '',
    Country = '',
    City = '',
    State = '',
    Zipcode = '',
    Jurisdiction = '',
   } = componentData || {};
   

  return (
    <div className="ms-3">
      <h5>Loss Location</h5>

      <div className="row">
        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="Location">Location</label>
          </div>
          <div className="col-15">
            <input
              type="text"
              className="w-100 form-control"
              id="Location"
              value={Location}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="Address1">Address 1</label>
          </div>
          <div className="col-15">
            <input
              type="text"
              className="w-100 form-control"
              maxLength={500}
              id="Address1"
              value={Address1}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="Address2">Address 2</label>
          </div>
          <div className="col-15">
            <input
              type="text"
              className="w-100 form-control"
              maxLength={500}
              id="Address2"
              value={Address2}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="Address3">Address 3</label>
          </div>
          <div className="col-15">
            <input
              type="text"
              className="w-100 form-control"
              maxLength={500}
              id="Address3"
              value={Address3}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="Country">Country</label>
          </div>
          <div className="col-8">
            <Form.Select
              className="w-100 form-control"
              id="Country"
              value={Country}
              onChange={handleInputChange}
            >
              <option value="None">None</option>
              <option value="United States">United States</option>
            </Form.Select>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="City">City</label>
          </div>
          <div className="col-8">
            <input
              type="text"
              className="w-100 form-control"
              id="City"
              value={City}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="State">State</label>
          </div>
          <div className="col-8">
            <Form.Select
              className="w-100 form-control"
              id="State"
              value={State}
              onChange={handleInputChange}
            >
              <option value="None">None</option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </Form.Select>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="Zipcode">ZipCode</label>
          </div>
          <div className="col-8">
            <input
              type="text"
              className="w-100 form-control"
              id="Zipcode"
              value={Zipcode}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="Jurisdiction">Jurisdiction</label>
          </div>
          <div className="col-8">
            <Form.Select
              className="w-100 form-control"
              id="Jurisdiction"
              value={Jurisdiction}
              onChange={handleInputChange}
            >
              <option>None</option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </Form.Select>
          </div>
        </div>
      </div>
    </div>
  ); 
} 
 
export default Losslocation




