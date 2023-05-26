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
<<<<<<< HEAD
            id="LossParty-select"
            value={lossParty}
=======
            id="lossparty"
            value={lossparty}
>>>>>>> 2ebab354f49a979bacb5a531c2d437a032dca82b
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
<<<<<<< HEAD
            id="PrimaryCoverage-select"
            value={primaryCoverage}
=======
            id="primarycoverage"
            value={primarycoverage}
>>>>>>> 2ebab354f49a979bacb5a531c2d437a032dca82b
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
<<<<<<< HEAD
            id="Adjuster-select"
=======
            id="adjuster"
>>>>>>> 2ebab354f49a979bacb5a531c2d437a032dca82b
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
<<<<<<< HEAD
            id="Status-select"
=======
            id="status"
>>>>>>> 2ebab354f49a979bacb5a531c2d437a032dca82b
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
<<<<<<< HEAD
            id="Creation Date-select"
            value={creationDate}
=======
            id="creationdate"
            value={creationdate}
>>>>>>> 2ebab354f49a979bacb5a531c2d437a032dca82b
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
<<<<<<< HEAD
            id="Claimant-select"
=======
            id="claimant"
>>>>>>> 2ebab354f49a979bacb5a531c2d437a032dca82b
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
<<<<<<< HEAD
            id="ClaimantType-select"
            value={claimantType}
=======
            id="claimanttype"
            value={claimanttype}
>>>>>>> 2ebab354f49a979bacb5a531c2d437a032dca82b
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
<<<<<<< HEAD
            id="PrimaryPhone-select"
            value={primaryPhone}
=======
            id="primaryphone"
            value={primaryphone}
>>>>>>> 2ebab354f49a979bacb5a531c2d437a032dca82b
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
<<<<<<< HEAD
            id="Address-select"
=======
            id="address"
>>>>>>> 2ebab354f49a979bacb5a531c2d437a032dca82b
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