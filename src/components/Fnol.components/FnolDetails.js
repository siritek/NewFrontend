<<<<<<< HEAD
import React from "react";

=======
//import { FnolData } from "../../Pages/Fnol";
>>>>>>> 2ebab354f49a979bacb5a531c2d437a032dca82b
function FnolDetails({setComponentData, componentData}){ 
  const handleInputChange = (e) => { 
    const {id, value} = e.target; 
    setComponentData((prevData) =>({ 
      ...prevData, 
      [id]:value, 
    })); 
  }; 
  const { 
  DateOfLoss ='', 
  LossLocation ='', 
  LossTime ='', 
  ReportedBy ='', 
  DateOfReport ='', 
  PolicyNumber ='',  
  } = componentData || {};
  const handleClick=(e)=>{ 
    e.preventDefault() 
    const abs={losslocation,dateofloss,reportedby,policynumber,losstime} 
    console.log(abs) 
    fetch("http://localhost:8080/fnolfirst/add",{ 
        method:"POST", 
        headers:{"Content-Type":"application/json"}, 
        body:JSON.stringify(abs) 
 
    }).then(()=>{ 
        console.log("New Insured added") 
    }) 
  }
  // const myFnoalData = FnolData();
  // console.log('xxxx->', myFnoalData)
  // const myPolicyNo = myFnoalData ? myFnoalData.PolicyNumber : PolicyNumber
  // console.log('ccc-> ', myPolicyNo)
  
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
<<<<<<< HEAD
     <input id="policynumber" type="number" value={policynumber} onChange={handleInputChange} className='w-100 form-control' />
=======
     <input id="PolicyNumber" type="number" value={PolicyNumber} onChange={handleInputChange}className='w-100 form-control' />
>>>>>>> 2ebab354f49a979bacb5a531c2d437a032dca82b
   </div>
 </div>
 <div className='row mb-2'>
   <div className='col-4'>
     <label htmlFor="DateOfLoss"> Date Of Loss</label>
     
   </div>
   <div className='col-5'>
<<<<<<< HEAD
     <input  id="dateofloss" type="date" value={dateofloss}  
=======
     <input  id="DateOfLoss" type="date" value={DateOfLoss}  
>>>>>>> 2ebab354f49a979bacb5a531c2d437a032dca82b
     onChange={handleInputChange}  className='w-100 form-control' />
   </div>
 </div>
 
 <div className='row mb-2'>
   <div className='col-4'>
     <label htmlFor="LossLocation">Loss Location</label>
   </div>
   <div className='col-5'>
<<<<<<< HEAD
     <input id="losslocation" type="text" value={losslocation} 
     onChange={handleInputChange}  className='w-100 form-control' />
=======
     <input id="LossLocation" type="text" value={LossLocation} 
     onChange={handleInputChange} className='w-100 form-control' />
>>>>>>> 2ebab354f49a979bacb5a531c2d437a032dca82b
   </div>
 </div>

<div className='row mb-2'>
   <div className='col-4'>
     <label htmlFor="LossTime">Time Of Loss</label>
  
   </div>
   <div className='col-5'>
<<<<<<< HEAD
     <input id="losstype" type="time" value={losstime} 
     onChange={handleInputChange} className='w-100 form-control' />
=======
     <input id="LossTime" type="time" value={LossTime} 
     onChange={handleInputChange}className='w-100 form-control' />
>>>>>>> 2ebab354f49a979bacb5a531c2d437a032dca82b
   </div>
 </div>

<div className='row mb-2'>
   <div className='col-4'>
     <label htmlFor="ReportedBy">Reported By</label>
     
   </div>
   <div className='col-5'>
<<<<<<< HEAD
     <input id="reportedby" type="text" value={reportedby} 
=======
     <input id="ReportedBy" type="text" value={ReportedBy} 
>>>>>>> 2ebab354f49a979bacb5a531c2d437a032dca82b
     onChange={handleInputChange} className='w-100 form-control' />
   </div>
 </div>
 <div className='row mb-2'>
   <div className='col-4'>
     <label htmlFor="DateOfReport"> Date Reported</label>
     
   </div>
   <div className='col-5'>
<<<<<<< HEAD
     <input type="date" id="dateofreport" value={dateofreport} 
     onChange={handleInputChange} className='w-100 form-control' />
   </div>
 </div>

 
  <input type="submit"class="btn btn-success custom-margin-right-1" value="Submit" onClick={handleClick}/> &nbsp; 
  <input type="reset"class="btn btn-dark custom-margin-right-1" value="Reset"/> 
=======
     <input type="date" id="DateOfReport" value={DateOfReport} 
     onChange={handleInputChange}className='w-100 form-control' />
   </div>
 </div>

  
  <input type="submit"className="btn btn-success custom-margin-right-1" value="Submit" onClick={handleClick}/> &nbsp; 
  <input type="reset"className="btn btn-dark custom-margin-right-1" value="Reset"/>
>>>>>>> 2ebab354f49a979bacb5a531c2d437a032dca82b
  
  </div>
  );

}
export default FnolDetails