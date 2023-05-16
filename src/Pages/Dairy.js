import React from 'react'

function Dairy(){
    return(   
      <div className='row'> 
         <div className='row mb-2'> 
          <div className='col-4'> 
            <label>Subject</label> 
          </div> 
          <div className='col-8'> 
          <input type="text" className='w-100 form-control' maxLength={25}/> 
          </div> 
        </div> 
        <div className='row mb-2'> 
          <div className='col-4'> 
            <label>Description</label> 
          </div> 
          <div className='col-8'> 
          <input type="text" className='w-100 form-control' maxLength={25}/> 
          </div> 
        </div> 
         <div className='col-3'>
         <label>Related To</label></div>  
          <div className='col-4'>  
            <select className='w-100 form-control'>  
              <option></option>  
              <option>Claim</option>  
              <option>Contacts</option>  
            </select>  
          </div>  
          
        <div className='row mb-2'> 
          <div className='col-4'><label>Due Date</label><i className='text-danger h5'>*</i></div> 
          <div className='col-8'> 
            <input type="date" className='w-100 form-control' /> 
          </div> 
        </div> 
        <div className='row mb-2'> 
          <div className='col-4'> 
            <label>Priority</label> 
          </div> 
          <div className='col-8'> 
          <input type="text" className='w-100 form-control' maxLength={25}/> 
          </div> 
        </div> 
        <div className='row mb-2'> 
          <div className='col-4'> 
            <label>Details</label> 
          </div> 
          <div className='col-8'> 
          <input type="text" className='w-100 form-control' maxLength={25}/> 
          </div> 
          <div className='row mb-2'> 
          <div className='col-4'><label>Assigned To</label></div> 
          <div className='col-8'> 
            <select className='w-100 form-control'> 
              <option>None</option>
              <option>Agent</option>  
            </select> 
          </div> 
        </div> 
        <div className='row mb-2'> 
          <div className='col-4'><label>Created By</label></div> 
          <div className='col-8'> 
            <select className='w-100 form-control'> 
              <option>None</option>
              <option>Agent</option>  
            </select> 
          </div> 
        </div> 
        </div> 
        <div className='row mb-2'> 
          <div className='col-4'><label>Date Created</label><i className='text-danger h5'>*</i></div> 
          <div className='col-8'> 
            <input type="date" className='w-100 form-control' /> 
          </div> 
        </div> 
        </div>
       
    )
}
export default Dairy;