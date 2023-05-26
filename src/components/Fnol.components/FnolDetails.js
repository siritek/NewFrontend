import React from "react";

function FnolDetails({setComponentData, componentData}){ 
  const handleInputChange = (e) => { 
    const {id, value} = e.target; 
    setComponentData((prevData) =>({ 
      ...prevData, 
      [id]:value, 
    })); 
  }; 
  const { 
  dateofloss ='', 
  losslocation ='', 
  losstime ='', 
  reportedby ='', 
  dateofreport ='', 
  policynumber ='',  
  } = componentData || {};

  //const [ClaimNumber, setClaimNumber] = React.useState('');
  // const [DateOfLoss, setDateOfLoss] = React.useState('');
  // const [LossLocation, setLossLocation] = React.useState('');
  // const [LossTime, setLossTime] = React.useState('');
  // const [ReportedBy, setReportedBy] = React.useState('');
  // const [DateOfReport, setDateOfReport] = React.useState('');
  // const [PolicyNumber, setPolicyNumber] = React.useState('');

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
     <input id="policynumber" type="number" value={policynumber} onChange={handleInputChange} className='w-100 form-control' />
   </div>
 </div>
 <div className='row mb-2'>
   <div className='col-4'>
     <label htmlFor="DateOfLoss"> Date Of Loss</label>
     
   </div>
   <div className='col-5'>
     <input  id="dateofloss" type="date" value={dateofloss}  
     onChange={handleInputChange}  className='w-100 form-control' />
   </div>
 </div>
 
 <div className='row mb-2'>
   <div className='col-4'>
     <label htmlFor="LossLocation">Loss Location</label>
   </div>
   <div className='col-5'>
     <input id="losslocation" type="text" value={losslocation} 
     onChange={handleInputChange}  className='w-100 form-control' />
   </div>
 </div>

<div className='row mb-2'>
   <div className='col-4'>
     <label htmlFor="LossTime">Time Of Loss</label>
  
   </div>
   <div className='col-5'>
     <input id="losstype" type="time" value={losstime} 
     onChange={handleInputChange} className='w-100 form-control' />
   </div>
 </div>

<div className='row mb-2'>
   <div className='col-4'>
     <label htmlFor="ReportedBy">Reported By</label>
     
   </div>
   <div className='col-5'>
     <input id="reportedby" type="text" value={reportedby} 
     onChange={handleInputChange} className='w-100 form-control' />
   </div>
 </div>
 <div className='row mb-2'>
   <div className='col-4'>
     <label htmlFor="DateOfReport"> Date Reported</label>
     
   </div>
   <div className='col-5'>
     <input type="date" id="dateofreport" value={dateofreport} 
     onChange={handleInputChange} className='w-100 form-control' />
   </div>
 </div>

 
  <input type="submit"class="btn btn-success custom-margin-right-1" value="Submit" onClick={handleClick}/> &nbsp; 
  <input type="reset"class="btn btn-dark custom-margin-right-1" value="Reset"/> 
  
  </div>
  );

}
export default FnolDetails