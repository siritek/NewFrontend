import React from 'react' 
//import Dropdown from 'react-bootstrap/Dropdown'; 
 
function NewNote(){ 
 
    return ( 
<div> 
      <div className='ms-3'> 
      <h2>New Note</h2> 
      <hr /> 
      </div> 
 
         
    <div className='row mb-2'> 
    <div className='col-2'><label>Topic</label></div> 
    <div className='col-6'> 
            <select className='w-100 form-control' required> 
        <option >-General-</option>  
        <option >First Notice of Loss</option>  
        <option >Covergae</option>  
        <option >Investigation</option>  
        <option >Medical Issues</option>  
        <option >Evaluation</option> 
        <option >Settlement</option> 
        <option >Subrogation</option> 
        <option >Salvage</option> 
        <option >Litigation</option> 
        <option >Denial</option> 
        <option >Reinsurance</option> 
        </select> 
     </div> 
    </div> 
         
     <div className='row mb-2'> 
      <div className='col-2'><label>Security Type </label></div> 
      <div className='col-6'> 
            <select className='w-100 form-control'> 
        <option>-none- </option> 
        <option>Medical</option> 
        <option>Private</option> 
        <option>Public</option> 
        <option>Sensitive</option> 
        </select> 
       </div> 
       </div> 
 
             
       <div className='row mb-2'> 
          <div className='col-2'><label>Subject</label></div> 
          <div className='col-6'> 
            <input type="text" className='w-100 form-control' /> 
           </div> 
           </div> 
 
 
           <div className='row mb-2'> 
      <div className='col-2'><label>Related To </label></div> 
      <div className='col-6'> 
            <select className='w-100 form-control'> 
        <option>-"Claim"- </option> 
        </select> 
       </div> 
       </div> 
 
 
       <div className='row mb-3'> 
         <div className='col-2' required>Confidential</div> 
         <div className='col-6'> 
           <input type="radio" name = "confidential" /> Yes <span className='ms-3'></span><input type="radio" name = "confidential" /> No 
         </div> 
       </div> 
 
       <div className='row mb-2'> 
        <div className='col-2'><label>Text</label></div> 
        <div className='col-6'> 
          <input type="text" className='w-100 form-control' /> 
         </div> 
        </div> 
         
        <br/> 
        <input type="update"class="btn btn-success " value="Update"/> &nbsp;  
        <input type="cancel"class="btn btn-success " value="Cancel"/> 
 
 
</div> 
 
    ) 
} 
 
export default NewNote