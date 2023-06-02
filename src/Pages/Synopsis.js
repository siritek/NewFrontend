import React from 'react';
import Form from "react-bootstrap/Form";
import Exposure from '../components/Synopsis.components/exposure.component';
import Upcomingactivities from '../components/Synopsis.components/upcomingactivities.component';

function Synopsis({setComponentData, componentData})  {
    const handleInputChange = (e) => { 
        const {id, value} = e.target; 
        setComponentData((prevData) =>({ 
          ...prevData, 
          [id]:value, 
        })); 
      }; 
      const { 
        ClaimNumber ='', 
        TypeOfLoss ='', 
        Name ='', 
        Adjuster ='', 
      DateOfReport ='', 
      PolicyNumber ='',
      LossDescription = '',
      DateOfLoss ='',
      LossLocation ='',

      } = componentData || {};

  return (
    <div className="ms-3">
      <h5>Claim Synopsis</h5>
      <hr></hr>

      <div className="row">
        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="ClaimNumber">Claim Number</label>
          </div>
          <div className="col-5">
            <input
              id="ClaimNumber"
              value={ClaimNumber}
              onChange={handleInputChange}
              type="number"
              className="w-100 form-control"
              maxLength={25}
            />
            </div>
          </div>

        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="TypeOfLoss">Type of Loss</label>
          </div>
          <div className="col-5">
            <Form.Select
              className="w-100 form-control"
              id="TypeOfLoss"
              value={TypeOfLoss}
              onChange={handleInputChange}
            >
              <option value="None">None</option>
            </Form.Select>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="PolicyNumber">Policy Number</label>
          </div>
          <div className="col-5">
            <input
              id="PolicyNumber"
              value={PolicyNumber}
              onChange={handleInputChange}
              type="number"
              className="w-100 form-control"
              maxLength={25}
            />
          </div>
         </div>

         <div className="row mb-2">
          <div className="col-4">
            <label htmlFor='Name'>Name</label>
            <i className="text-danger h5">*</i>
          </div>
          <div className="col-5">
            <input id="Name"
              value={Name}
              onChange={handleInputChange} type="text" className="w-100 form-control" />
            {/* <select className='w-200 form-control'> 
              <option>Ray Newton</option> 
              <option>None</option> 
            </select> */}
          </div>
        </div>

        <div className='row mb-2'>
   <div className='col-4'>
     <label htmlFor="DateOfLoss"> Date Of Loss</label>
     
   </div>
   <div className='col-5'>
     <input  id="DateOfLoss" type="date" value={DateOfLoss}  
     onChange={handleInputChange}  className='w-100 form-control' />
   </div>
 </div>

 <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="Adjuster">Adjuster</label>
          </div>
          <div className="col-5">
            <Form.Select 
              className="w-100 form-control"
              id="Adjuster"
              value={Adjuster}
              onChange={handleInputChange}
            >
              <option value="None">None</option>
            </Form.Select>
          </div>
        </div>

        <div className='row mb-2'>
   <div className='col-4'>
     <label htmlFor="DateOfReport"> Date Reported</label>
     
   </div>
   <div className='col-5'>
     <input type="date" id="DateOfReport" value={DateOfReport} 
     onChange={handleInputChange}className='w-100 form-control' />
   </div>
 </div>

 <div className='row mb-2'>
   <div className='col-4'>
     <label htmlFor="LossLocation">Loss Location</label>
   </div>
   <div className='col-5'>
     <input id="LossLocation" type="text" value={LossLocation} 
     onChange={handleInputChange} className='w-100 form-control' />
   </div>
 </div>

 <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="LossDescription">Loss Description</label>
          </div>
          <div className="col-5">
            <input
              type="text"
              className="w-100 form-control"
              maxLength={500}
              id="LossDescription"
              value={LossDescription}
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