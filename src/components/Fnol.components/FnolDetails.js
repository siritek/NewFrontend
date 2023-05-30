import React from "react";
function FnolDetails({setComponentData, componentData}){
   const handleInputChange = (e) => { 
    const {id, value} = e.target; 
    setComponentData((prevData) =>({ 
      ...prevData, 
      [id]:value, 
    })); 
  }; 
  //const [ClaimNumber, setClaimNumber] = React.useState('');
  const [DateOfLoss, setDateOfLoss] = React.useState('');
  const [LossLocation, setLossLocation] = React.useState('');
  const [LossTime, setLossTime] = React.useState('');
  const [ReportedBy, setReportedBy] = React.useState('');
  const [DateOfReport, setDateOfReport] = React.useState('');
  const [PolicyNumber, setPolicyNumber] = React.useState('');
  
  return(<div>
      
{/* 
 <div className='row mb-2'>
   <div className='col-4'>
     <label htmlFor="ClaimNumber">Claim Number</label>
     <i className='text-danger h5'>*</i>
   </div>
   <div className='col-5'>
     <input id="ClaimNumber" type="text"  maxLength='10' value={ClaimNumber}  
     onChange={event=>{setClaimNumber(event.target.value.replace(/\D/g, ''))}} className='w-100 form-control' />

   </div>
 </div>  */}

  <div className='row mb-2'>
   <div className='col-4'>
     <label htmlFor="PolicyNumber">Policy Number</label>
     <i className='text-danger h5'>*</i>
   </div>
   <div className='col-5'>
     <input id="PolicyNumber" type="number" value={PolicyNumber} onChange={handleInputChange}className='w-100 form-control' />
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
 
 <div className='row mb-2'>
   <div className='col-4'>
     <label htmlFor="LossLocation">Loss Location</label>
   </div>
   <div className='col-5'>
     <input id="LossLocation" type="text" value={LossLocation} 
     onChange={handleInputChange} className='w-100 form-control' />
   </div>
 </div>

<div className='row mb-2'>
   <div className='col-4'>
     <label htmlFor="LossTime">Time Of Loss</label>
  
   </div>
   <div className='col-5'>
     <input id="LossTime" type="time" value={LossTime} 
     onChange={handleInputChange}className='w-100 form-control' />
   </div>
 </div>

<div className='row mb-2'>
   <div className='col-4'>
     <label htmlFor="ReportedBy">Reported By</label>
     
   </div>
   <div className='col-5'>
     <input id="ReportedBy" type="text" value={ReportedBy} 
     onChange={handleInputChange} className='w-100 form-control' />
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

  
  {/* <input type="submit"class="btn btn-success custom-margin-right-1" value="Submit"/> &nbsp; 
  <input type="reset"class="btn btn-dark custom-margin-right-1" value="Reset"/> */}
  
  </div>
  );

}
export default FnolDetails