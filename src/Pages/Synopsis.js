import React from 'react';
import Form from "react-bootstrap/Form";
import Exposure from '../components/Synopsis.components/exposure.component';
import Upcomingactivities from '../components/Synopsis.components/upcomingactivities.component';
import { useState } from "react";
var SynDataObj;
function Synopsis()  {
  const[componentData,setComponentData]=useState({});
    const handleInputChange = (e) => { 
        const {id, value} = e.target; 
        setComponentData((prevData) =>({ 
          ...prevData, 
          [id]:value, 
        })); 
      }; 
      const { 
        claimNumber ='', 
        typeOfLoss ='', 
        name ='', 
        adjuster ='', 
      dateOfReport ='', 
      policyNumber ='',
      lossDescription = '',
      dateOfLoss ='',
      lossLocation ='',

      } = componentData || {};
      const handleNext = () => {
        // Access the component data from the state
        SynDataObj = componentData
        console.log(componentData);
        // Perform further actions with the data
      };
  return (
    <div className="ms-3">
         <div className="d-flex justify-content-between align-items-center"> 
      <h2>Claim Synopsis</h2>
      <button type="button" className="btn btn-success" onClick={handleNext}>Submit</button>
      </div>
      <hr></hr>

      <div className="row">
        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="claimNumber">Claim Number</label>
          </div>
          <div className="col-5">
            <input
              id="claimNumber"
              value={claimNumber}
              onChange={handleInputChange}
              type="number"
              className="w-100 form-control"
              maxLength={25}
            />
            </div>
          </div>

        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="typeOfLoss">Type of Loss</label>
          </div>
          <div className="col-5">
            <Form.Select
              className="w-100 form-control"
              id="typeOfLoss"
              value={typeOfLoss}
              onChange={handleInputChange}
            >
              <option value="None">None</option>
            </Form.Select>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="policyNumber">Policy Number</label>
          </div>
          <div className="col-5">
            <input
              id="policyNumber"
              value={policyNumber}
              onChange={handleInputChange}
              type="number"
              className="w-100 form-control"
              maxLength={25}
            />
          </div>
         </div>

         <div className="row mb-2">
          <div className="col-4">
            <label htmlFor='name'>Name</label>
            <i className="text-danger h5">*</i>
          </div>
          <div className="col-5">
            <input id="name"
              value={name}
              onChange={handleInputChange} type="text" className="w-100 form-control" />
            {/* <select className='w-200 form-control'> 
              <option>Ray Newton</option> 
              <option>None</option> 
            </select> */}
          </div>
        </div>

        <div className='row mb-2'>
   <div className='col-4'>
     <label htmlFor="dateOfLoss"> Date Of Loss</label>
     
   </div>
   <div className='col-5'>
     <input  id="dateOfLoss" type="date" value={dateOfLoss}  
     onChange={handleInputChange}  className='w-100 form-control' />
   </div>
 </div>

 <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="adjuster">Adjuster</label>
          </div>
          <div className="col-5">
            <Form.Select 
              className="w-100 form-control"
              id="adjuster"
              value={adjuster}
              onChange={handleInputChange}
            >
              <option value="None">None</option>
            </Form.Select>
          </div>
        </div>

        <div className='row mb-2'>
   <div className='col-4'>
     <label htmlFor="dateOfReport"> Date Reported</label>
     
   </div>
   <div className='col-5'>
     <input type="date" id="dateOfReport" value={dateOfReport} 
     onChange={handleInputChange}className='w-100 form-control' />
   </div>
 </div>

 <div className='row mb-2'>
   <div className='col-4'>
     <label htmlFor="lossLocation">Loss Location</label>
   </div>
   <div className='col-5'>
     <input id="lossLocation" type="text" value={lossLocation} 
     onChange={handleInputChange} className='w-100 form-control' />
   </div>
 </div>

 <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="lossDescription">Loss Description</label>
          </div>
          <div className="col-5">
            <input
              type="text"
              className="w-100 form-control"
              maxLength={500}
              id="lossDescription"
              value={lossDescription}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div><Exposure/> </div>
        <div><Upcomingactivities/> </div>
        <div>
        <h2>Recent Notes</h2>
        </div>
        </div>
        </div>
        );
    }

  
  
  export default Synopsis;