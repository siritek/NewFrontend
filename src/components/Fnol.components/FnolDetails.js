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
    const abs={LossLocation,LossTime,ReportedBy,PolicyNumber} 
    console.log(abs) 
    fetch("http://localhost:8080/fnolfirst/add",{ 
        method:"POST", 
        headers:{"Content-Type":"application/json"}, 
        body:JSON.stringify(abs) 
 
    }).then(()=>{ 
        console.log("New Insured added") 
    }) 
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

  
  <input type="submit"className="btn btn-success custom-margin-right-1" value="Submit" onClick={handleClick}/> &nbsp; 
  <input type="reset"className="btn btn-dark custom-margin-right-1" value="Reset"/>
  
  </div>
  );

}
export default FnolDetails