
import React from 'react'

 
function Lossdetails() { 


  return ( 
    <div className='ms-3'> 
      <h5>Loss Details</h5> 
      <div className='row'> 
      <div className='row mb-2'> 
          <div className='col-4'><label>Adjuster</label></div> 
          <div className='col-8'> 
            <select className='w-100 form-control'> 
              <option>None</option> 
            </select> 
            </div>
            </div>
        <div className='row mb-2'> 
          <div className='col-4'> 
            <label>Loss Description</label> 
          </div> 
          <div className='col-8'> 
          <input type="text" className='w-100 form-control' maxLength={500}/> 
          </div> 
        </div> 
        <div className='row mb-2'> 
          <div className='col-4'><label>Loss Cause</label></div> 
          <div className='col-8'> 
            <select className='w-100 form-control'> 
              <option>None</option> 
            </select> 
          </div> 
        </div> 
        <div className='row mb-2'> 
          <div className='col-4'> 
            <label>Other Description</label> 
          </div> 
          <div className='col-8'> 
          <input type="text" className='w-100 form-control' maxLength={500}/> 
          </div> 
        </div> 
        <div className='row mb-2'> 
          <div className='col-4'><label>Type of Loss</label></div> 
          <div className='col-8'> 
            <select className='w-100 form-control'> 
              <option>None</option> 
            </select> 
          </div> 
        </div> 
        <div className='row mb-2'> 
        <div className='col-4'>Weather Invloved</div> 
        <div className='col-8'> 
          <input type="radio" name="Weather"/> Yes <span className='ms-3'></span><input  type="radio" name="Weather"/> No  
        </div> 
      </div>  
      <div className='row mb-2'> 
          <div className='col-4'> 
            <label>Weather Description</label> 
          </div> 
          <div className='col-8'> 
          <input type="text" className='w-100 form-control' maxLength={500}/> 
          </div> 
        </div> 
        <div className='row mb-2'> 
          <div className='col-4'><label>Date of loss</label><i className='text-danger h5'>*</i></div> 
          <div className='col-8'> 
            <input type="date" className='w-100 form-control' /> 
          </div> 
        </div> 
        <div className='row mb-2'> 
          <div className='col-4'><label>Time of loss</label><i className='text-danger h5'>*</i></div> 
          <div className='col-8'> 
            <input type="time" className='w-100 form-control' /> 
          </div> 
        </div> 
        <hr/>
        <div className='row mb-2'> 
          <div className='col-4'><label>Reported By</label></div> 
          <div className='col-8'> 
            <select className='w-100 form-control'> 
              <option>None</option> 
              <option>Claim</option> 
            </select> 
          </div> 
        </div> 
        <div className='row mb-2'> 
          <div className='col-4'><label>Relationship to Insured</label></div> 
          <div className='col-8'> 
            <select className='w-100 form-control'> 
              <option>None</option>
              <option>Agent</option>  
            </select> 
          </div> 
        </div> 
      </div> 
    </div> 
  ) 
} 
 
export default Lossdetails




