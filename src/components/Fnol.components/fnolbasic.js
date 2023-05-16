
import React from 'react' 
// import Dropdown from 'react-bootstrap/Dropdown'; 
 
 
function Basic() { 
  return ( 
    //hi
            <div> 
        <div className='row mb-2'> 
        <div className='col-4'><label>Claim Number</label></div> 
        <div className='col-8'> 
          <input type="text" className='w-100 form-control' /> 
         </div> 
        </div> 
             
         <div className='row mb-2'> 
          <div className='col-4'><label>Loss Date </label></div> 
          <div className='col-8'> 
            <input type="date" className='w-100 form-control' /> 
           </div> 
           </div> 
 
       
            <div className='row mb-2'> 
            <div className='col-4'><label>Loss Location</label></div> 
            <div className='col-8'> 
            <input type="text" className='w-100 form-control' /> 
            </div> 
            </div> 
 
            <div className='row mb-2'> 
          <div className='col-4'><label>Time of Loss </label></div> 
          <div className='col-8'> 
            <input type="time" className='w-100 form-control' /> 
           </div> 
           </div> 
 
            <div className='row mb-2'> 
            <div className='col-4'><label>Reported By</label></div> 
            <div className='col-8'> 
            <input type="text" className='w-100 form-control' /> 
            </div> 
            </div> 
 
            <div className='row mb-2'> 
          <div className='col-4'><label>Date Reported</label></div> 
          <div className='col-8'> 
            <input type="date" className='w-100 form-control' /> 
           </div> 
           </div> 
             
 
 
 
            <div className='row mb-2'> 
            <div className='col-4'><label>Policy Number</label></div> 
            <div className='col-8'> 
            <input type="text" className='w-100 form-control' /> 
            </div> 
            </div> 
 
             
        <div className='row mb-2'> 
        <div className='col-4'>Notes</div> 
        <div className='col-8'> 
          <input type="text" className='w-100 form-control' /> 
        </div> 
      
  
    </div> 
 
 
    <div className='row mb-2'> 
        <div className='col-4'>Documents</div> 
        <div className='col-8'> 
          <input type="text" className='w-100 form-control' /> 
        </div> 
     </div> 
                
                
 
             
     <input type="submit"class="btn btn-success custom-margin-right-1" value="Submit"/> &nbsp; 
        <input type="reset"class="btn btn-dark custom-margin-right-1" value="Reset"/>
      
 
 
            </div> 
 
) 
} 
 
export default Basic