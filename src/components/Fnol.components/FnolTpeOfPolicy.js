import React, { useState } from "react";  
 
  
  
function FnolTypeOfPolicy() {  
  const [showForm1, setShowForm1] = useState(false);  
  const [showForm2, setShowForm2] = useState(false);  
  const [VIN, setVIN] = React.useState('');
  const [Make, setMake] = React.useState('');
  const [Model, setModel] = React.useState('');
  const [PlateNumber, setPlateNumber] = React.useState('');
  const [PlateSlate, setPlateSlate] = React.useState('');
  const [Driver, setDriver] = React.useState('');
  const [Address, setAddress] = React.useState('');
  const [Notes, setNotes] = React.useState('');

 
 
  const handleRadioChange = (e) => {  
    const value = e.target.value;  
    if (value === "form1") {  
      setShowForm1(true);  
      setShowForm2(false);  
    } else if (value === "form2") {  
      setShowForm1(false);  
      setShowForm2(true);  
    }  
  };  
    
  return (  
     
  <div > 
 <div  className='row mb-3'> 
        <div  className='col-4'>Type of Policy</div  > 
        <div   className='col-8'> 
    <label>  
        <input  
          type="radio"  
          name="form"  
          value="form1"  
          onChange={handleRadioChange}  
        /> Auto Subsection  
        </label>  
       &nbsp; 
       &nbsp; 
      
        <input  
          type="radio"  
          name="form"  
          value="form2"  
          onChange={handleRadioChange} />Homeowners   
      </div>
      <div>
      {showForm1 && (  
          <div>
            <br/>
          <b>Insured Vehicle Auto subsection</b>  
          <br/>
          <div className='row mb-2'>
     <div className='col-4'>
       <label htmlFor="VIN">VIN </label>
     </div>
     <div className='col-5'>
       <input id="VIN" type="text" value={VIN} 
       onChange={event=>{setVIN(event.target.value)}} className='w-100 form-control' />
     </div>
   </div>
   <div className='row mb-2'>
     <div className='col-4'>
       <label htmlFor="Make">Make </label>
     </div>
     <div className='col-5'>
       <input id="Make" type="text" value={Make} onChange={event=>{setMake(event.target.value)}} className='w-100 form-control' />
     </div>
   </div>
   <div className='row mb-2'>
     <div className='col-4'>
       <label htmlFor="Model">Model </label>
     </div>
     <div className='col-5'>
       <input id="Model" type="text" value={Model}onChange={event=>{setModel(event.target.value)}} className='w-100 form-control' />
     </div>
   </div>
   <div className='row mb-2'>
     <div className='col-4'>
       <label htmlFor="PlateNumber">Plate Number </label>
     </div>
     <div className='col-5'>
       <input id="PlateNumber" type="number" value={PlateNumber}onChange={event=>{setPlateNumber(event.target.value)}} className='w-100 form-control' />
     </div>
   </div>
   <div className='row mb-2'>
     <div className='col-4'>
       <label htmlFor="PlateSlate">Plate Slate </label>
     </div>
     <div className='col-5'>
       <input id="PlateSlate" type="text" value={PlateSlate} 
       onChange={event=>{setPlateSlate(event.target.value)}} className='w-100 form-control' />
     </div>
   </div>
   <div className='row mb-2'>
     <div className='col-4'>
       <label htmlFor="Driver">Driver </label>
     </div>
     <div className='col-5'>
       <input id="Driver" type="text" value={Driver} onChange={event=>{setDriver(event.target.value)}} className='w-100 form-control' />
     </div>
   </div>
         </div> 
      )}  
      {showForm2 && (  
       <div>
        <br/> 
          <b>Homeowners subsection</b>  
          <br/>  
          
          <div className='row mb-2'> 
        <div className='col-4'> 
    <label htmlFor="Address"> Address </label>  
     </div> 
     <div className='col-6'>
     <input  name="message" type="text" id="Address"  value={Address} onChange={event=>{setAddress(event.target.value)}} className='w-100 form-control' placeholder="Mention your complete address"/> 
          </div> 
           </div> 
           </div> 
      )}  
 
<br/>
<div className='row mb-2'> 
<div className='col-4'> 
<label htmlFor="Notes"> Notes </label>
 </div>
 <div className='col-5'>
      <input name="Notes" type="text" id="Notes" value={Notes} onChange={event=>{setNotes(event.target.value)}} className='w-100 form-control'  placeholder="Write Here" />
     </div  > 
</div  >
      <label htmlFor="Documents"> Documents  &nbsp;</label> 
    <input type="file" id="Documents" name="Documents" ></input>  
        

</div></div  > </div  >
  );  
            
  
  
  
}  
  
export default FnolTypeOfPolicy;