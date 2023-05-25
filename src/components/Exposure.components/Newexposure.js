import React from 'react'  
import Form from "react-bootstrap/Form";  
// import Dropdown from 'react-bootstrap/Dropdown';    
    
    
function Newexposure({setComponentData, componentData}){  
  const handleInputChange = (e) => {  
    const {id, value} = e.target;  
    setComponentData((prevData) =>({  
      ...prevData,  
      [id]:value,  
    }));  
  };   
 
  const{ 
    lossparty='', 
    primarycoverage='', 
    adjuster='', 
      status='', 
      creationdate='', 
      claimant='', 
      claimanttype='', 
      primaryphone='', 
      address='', 
  } = componentData || {}; 
  return (
    <div>
      
      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor="lossparty">Loss Party</label>
        </div>
        <div className="col-6">
          <Form.Select
            id="lossparty"
            value={lossparty}
            onChange={handleInputChange}
            aria-label="Default select example"
          >
            <option>None</option>
            <option>Insured's loss</option>
            <option>Third party Liability </option>
            <option> </option>
          </Form.Select>
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor="primarycoverage">Primary Coverage</label>
        </div>
        <div className="col-6">
          <Form.Select
            id="primarycoverage"
            value={primarycoverage}
            onChange={handleInputChange}
            aria-label="Default select example"
          >
            <option>None</option>
            {/* <option>1:900 Madison street </option> */}
            <option> </option>
            <option> </option>
          </Form.Select>
        </div>
      </div>

      {/* <div className="row mb-2">
        <div className="col-3">
          <label htmlFor="Adjuster">Adjuster</label>
        </div>
        <div className="col-6">
          <input
            id="Adjuster-select"
            value={Adjuster}
            onChange={(event) => {
              setAdjuster(event.target.value);
            }}
            type="text"
            className="w-100 form-control"
          />
        </div>
      </div> */}

      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor="adjuster">Adjuster</label>
        </div>
        <div className="col-6">
          <Form.Select
            id="adjuster"
            value={adjuster}
            onChange={handleInputChange}
            aria-label="Default select example"
          >
            <option>None</option>
            <option> </option>
          </Form.Select>
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor="status">Status</label>
        </div>
        <div className="col-6">
          <Form.Select
            id="status"
            value={status}
            onChange={handleInputChange}
            aria-label="Default select example"
          >
            <option>Open</option>
            <option>Closed</option>
          </Form.Select>
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor="creationdate">Creation Date</label>
          <i className="text-danger h5">*</i>
        </div>
        <div className="col-6">
          <input
            id="creationdate"
            value={creationdate}
            onChange={handleInputChange}
            type="date"
            className="w-100 form-control"
          />
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor="claimant">Claimant</label>
        </div>
        <div className="col-6">
          <input
            id="claimant"
            value={claimant}
            onChange={handleInputChange}
            type="text"
            className="w-100 form-control"
          />
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor="claimanttype">Claimant Type</label>
        </div>
        <div className="col-6">
          <Form.Select
            id="claimanttype"
            value={claimanttype}
            onChange={handleInputChange}
            aria-label="Default select example"
          >
            <option>None</option>
            <option>Insured</option>
            <option>Member of insured's household </option>
            <option>Owner of the lost/Damaged property </option>
            <option>Customer </option>
            <option>Employee </option>
            <option>Other Third Party </option>
          </Form.Select>
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor="primaryphone">Primary Phone</label>
        </div>
        <div className="col-6">
          <input
            id="primaryphone"
            value={primaryphone}
            onChange={handleInputChange}
            type="text"
            className="w-100 form-control"
          />
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor="address">Address</label>
          <i className="text-danger h5">*</i>
        </div>
        <div className="col-6">
          <input
            id="address"
            value={address}
            onChange={handleInputChange}
            type="text"
            className="w-100 form-control"
          />
        </div>
      </div>
    </div>
  );    
}    
    
export default Newexposure