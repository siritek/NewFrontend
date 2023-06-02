//import { FnolData } from "../../Pages/Fnol";
function FnolDetails({setComponentData, componentData}){ 
  const handleInputChange = (e) => { 
    const {id, value} = e.target; 
    setComponentData((prevData) =>({ 
      ...prevData, 
      [id]:value, 
    })); 
  }; 
  const { 
  dateOfLoss ='', 
  lossLocation ='', 
  lossTime ='', 
  reportedBy ='', 
  dateOfReport ='', 
  policyNumber ='',  
  } = componentData || {};
  // const handleClick=(e)=>{ 
  //   e.preventDefault() 
  //   const abs={losslocation,dateofloss,reportedby,policynumber,losstime} 
  //   console.log(abs) 
  //   fetch("http://localhost:8080/fnolfirst/add",{ 
  //       method:"POST", 
  //       headers:{"Content-Type":"application/json"}, 
  //       body:JSON.stringify(abs) 
 
  //   }).then(()=>{ 
  //       console.log("New Insured added") 
  //   }) 
  // }
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
     <input  id="dateOfLoss" type="date" value={dateOfLoss}  
     onChange={handleInputChange}  className='w-100 form-control' />
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
     <input type="date" id="dateOfReport" value={dateOfReport} 
     onChange={handleInputChange}className='w-100 form-control' />
   </div>
 </div>

  
  {/* <input type="submit"className="btn btn-success custom-margin-right-1" value="Submit" onClick={handleClick}/> &nbsp; 
  <input type="reset"className="btn btn-dark custom-margin-right-1" value="Reset"/> */}
  
  </div>
  );

}
export default FnolDetails