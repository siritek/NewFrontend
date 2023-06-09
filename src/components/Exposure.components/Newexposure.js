import React, { useState,useEffect} from 'react'  
import Form from "react-bootstrap/Form";  
// import Dropdown from 'react-bootstrap/Dropdown';    
 

var ExposureDataObj
function Newexposure(props,{lossdataobj}){ 

  const [componentData, setComponentData] = useState({});
  const handleBackClick=()=>{
    props.onBackClick();
  }
  const handleInputChange = (e) => {  
    const {id, value} = e.target;  
    setComponentData((prevData) =>({  
      ...prevData,  
      [id]:value,  
    }));  
  };   
  useEffect(() => {
    if (lossdataobj) {
      const {
        adjuster
      } = lossdataobj;

      setComponentData((prevData) => ({
        ...prevData,
        adjuster: adjuster || prevData.adjuster,
      }));
    }
  }, [lossdataobj, setComponentData]);
  const{ 
    lossParty='', 
    primaryCoverage='', 
    adjuster='', 
      status='', 
      creationDate='', 
      claimant='', 
      claimantType='',  
      address='', 
  } = componentData || {}; 
  const handleNext = () => {
    // Access the component data from the state
    ExposureDataObj = componentData
    console.log(componentData);
    // Perform further actions with the data
  };

  return (
    <div>
         <div className="d-flex justify-content-between align-items-center"> 
    <h2>New Exposure</h2> 
    
    <div>
            
          <button type="button" className="btn btn-dark" onClick={handleBackClick}>Back</button>&nbsp;
          <button type="button" className="btn btn-success"onClick={()=>{handleNext();handleBackClick();}} >Submit</button>
          </div>
        
      </div><hr/>
      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor="lossParty">Loss party</label>
        </div>
        <div className="col-6">
          <Form.Select
            id="lossParty"
            value={lossParty}
            onChange={handleInputChange}
            aria-label="Default select example"
          >
            <option value="None">None</option>
            <option value="Insured's loss">Insured's loss</option>
            <option value="Third party Liability">Third party Liability</option>
          </Form.Select>
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor="primaryCoverage">Primary Coverage</label>
        </div>
        <div className="col-6">
          <Form.Select
            id="primaryCoverage"
            value={primaryCoverage}
            onChange={handleInputChange}
            aria-label="Default select example"
          >
            <option value="None">None</option>
            <option value="yes">yes</option>
            <option value="no">no</option>
          </Form.Select>
        </div>
      </div>

    

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
            <option value="None">None</option>
            <option value="yes">yes</option>
              <option value="no">no</option>
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
            <option value="Open">Open</option>
            <option value="Closed">Closed</option>
          </Form.Select>
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor="creationDate">Creation Date</label>
          <i className="text-danger h5">*</i>
        </div>
        <div className="col-6">
          <input
            id="creationDate"
            value={creationDate}
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
          <label htmlFor="claimantType">Claimant Type</label>
        </div>
        <div className="col-6">
          <Form.Select
            id="claimantType"
            value={claimantType}
            onChange={handleInputChange}
            aria-label="Default select example"
          >
            <option value="None">None</option>
            <option value="Insured">Insured</option>
            <option value="Member of insured's household">
              Member of insured's household{" "}
            </option>
            <option value="Owner of the lost/Damaged property">
              Owner of the lost/Damaged property{" "}
            </option>
            <option value="Customer">Customer </option>
            <option value="Employee ">Employee </option>
            <option value="Other Third Party">Other Third Party </option>
          </Form.Select>
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
const ExposureData = () => {
  return ExposureDataObj
}   
    
export  {Newexposure,ExposureData}