//import { FnolData } from "../../Pages/Fnol";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useCallback, useState } from "react";
function FnolDetails({setComponentData, componentData}){ 

 



  const today = new Date();
  const pastYear = new Date();
  pastYear.setFullYear(today.getFullYear() - 1)




  const handleInputChange = (e,date) => {
    if(date == 'date'){
 setComponentData((prevData) =>({ 
      ...prevData, 
      dateOfLoss:e, 
    }));
    }
    else if(date=='datereport'){
       setComponentData((prevData) =>({ 
      ...prevData, 
      dateOfReport:e, 
    }));
    }
    else{
    const {id, value} = e.target; 

 setComponentData((prevData) =>({ 
      
      ...prevData, 
      [id]:value, 
    }));
    }
    
  }; 

  


  const { 
  dateOfLoss ='', 
  lossLocation ='', 
  lossTime ='', 
  reportedBy ='', 
  dateOfReport ='', 
  policyNumber ='',  
  } = componentData || {};

  function App() {
    const [dateVal, setDateVal] = useState(null);
    const handleChange = useCallback(setDateVal, []);
    const formatDate = useCallback((Date) => 
        Date.toLocaleString(), []);
    const parseDate = useCallback((string) => 
        new Date(string), []);
  }

 
  
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
     <label htmlFor="policyNumber">Policy Number</label>
     <i className='text-danger h5'>*</i>
   </div>
   <div className='col-5'>
     <input id="policyNumber" type="number" value={policyNumber} onChange={handleInputChange}className='w-100 form-control' />
   </div>
 </div>
 <div className='row mb-2'>
   <div className='col-4'>
  
   
     <label htmlFor="dateOfLoss"> Date Of Loss</label>
     
   </div>
   <div className='col-5'>
     {/* <input  id="dateOfLoss" type="date" value={dateOfLoss}
      max={new Date().toISOString().split('T')[0]}  
     onChange={handleInputChange}  className='w-100 form-control' /> */}
      
   <DatePicker
   className='w-100 form-control'
        selected={dateOfLoss}
         id="dateOfLoss"
        onChange={(e)=>handleInputChange(e,'date')}
          

             minDate={pastYear}
      maxDate={today}
        dateFormat="MM-dd-yyyy"
        placeholderText="MM-DD-YYYY"
      />


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

<div className='row mb-2'>
   <div className='col-4'>
     <label htmlFor="lossTime">Time Of Loss</label>
  
   </div>
   <div className='col-5'>
     <input id="lossTime" type="time" value={lossTime} 
     onChange={handleInputChange}className='w-100 form-control' />
   </div>
 </div>

<div className='row mb-2'>
   <div className='col-4'>
     <label htmlFor="reportedBy">Reported By</label>
     
   </div>
   <div className='col-5'>
     <input id="reportedBy" type="text" value={reportedBy} 
     onChange={handleInputChange} className='w-100 form-control' />
   </div>
 </div>
 <div className='row mb-2'>
   <div className='col-4'>
     <label htmlFor="dateOfReport"> Date Reported</label>
     
     </div>
<div className='col-5'>
  {/* <input type="date" id="dateOfReport" value={dateOfReport} 
      
    onChange={handleInputChange} className='w-100 form-control' /> */}
    
      <DatePicker
      className='w-100 form-control'
        selected={dateOfReport}
         id="dateOfReport"
        onChange={(e)=>handleInputChange(e,'datereport')}
        dateFormat="MM-dd-yyyy"
        placeholderText="MM-DD-YYYY"
      />

    
</div>
</div>
  
  </div>
  );

}
export default FnolDetails
