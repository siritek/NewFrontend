//import { FnolData } from "../../Pages/Fnol";
function FnolDetails({setComponentData, componentData}){ 

  const today = new Date();
  const pastYear = new Date();
  pastYear.setFullYear(today.getFullYear() - 1);

  const handleInputChange = (e) => { 
    const {id, value} = e.target; 
    setComponentData((prevData) =>({ 
      ...prevData, 
      [id]:value, 
    })); 
  }; 
 

  const { 
<<<<<<< HEAD
  DateOfLoss ='',
  LossLocation ='', 
  LossTime ='', 
  ReportedBy ='', 
  DateOfReport ='', 
  PolicyNumber ='',  
=======
  dateOfLoss ='', 
  lossLocation ='', 
  lossTime ='', 
  reportedBy ='', 
  dateOfReport ='', 
  policyNumber ='',  
>>>>>>> 0aa0adef6ffc3cbbee6ec91b5654fa686a275392
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

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  
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
<<<<<<< HEAD
   <div className="col-5">
   <input type="Date"   min={formatDate(pastYear)}
        max={formatDate(today)} ></input>
=======
   <div className='col-5'>
     <input  id="dateOfLoss" type="date" value={dateOfLoss}  
     onChange={handleInputChange}  className='w-100 form-control' />
>>>>>>> 0aa0adef6ffc3cbbee6ec91b5654fa686a275392
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