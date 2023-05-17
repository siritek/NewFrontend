import React, { useState } from "react";  
 
  
  
function FnolTypeOfPolicy() {  
  const [showForm1, setShowForm1] = useState(false);  
  const [showForm2, setShowForm2] = useState(false);  
  
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
       <label>VIN </label>
     </div>
     <div className='col-5'>
       <input className='w-100 form-control' />
     </div>
   </div>
   <div className='row mb-2'>
     <div className='col-4'>
       <label>Make </label>
     </div>
     <div className='col-5'>
       <input className='w-100 form-control' />
     </div>
   </div>
   <div className='row mb-2'>
     <div className='col-4'>
       <label>Model </label>
     </div>
     <div className='col-5'>
       <input className='w-100 form-control' />
     </div>
   </div>
   <div className='row mb-2'>
     <div className='col-4'>
       <label>Plate Number </label>
     </div>
     <div className='col-5'>
       <input className='w-100 form-control' />
     </div>
   </div>
   <div className='row mb-2'>
     <div className='col-4'>
       <label>Plate Slate </label>
     </div>
     <div className='col-5'>
       <input className='w-100 form-control' />
     </div>
   </div>
   <div className='row mb-2'>
     <div className='col-4'>
       <label>Driver </label>
     </div>
     <div className='col-5'>
       <input className='w-100 form-control' />
     </div>
   </div>
         </div> 
      )}  
      {showForm2 && (  
       <div>
        <br/> 
          <b>Homeowners subsection</b>  
          <br/>  
 
        <div className='col-4'> 
    <label for="Address">Address   </label>  
     
    <textarea name="message" id="message"  rows="5"  placeholder="Mention your complete address" ></textarea>  
           </div> 
           </div> 
          
      )}  
</div  > 
</div  > 
</div  > 
  );  
            
  
  
  
}  
  
export default FnolTypeOfPolicy;