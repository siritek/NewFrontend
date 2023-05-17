import React from 'react'

<<<<<<< HEAD:src/Pages/Dairy.js
function Dairy(){
    return(   
      <div>
      <h2>Diary</h2>
      <hr/>
=======
function Diary(){
    return(
      <div>
        <div> 
    <h1> Diary</h1> 
        <hr />
    </div>
       
>>>>>>> e4073a352a44803b21b8dd11f03e1ce17204d40e:src/Pages/Diary.js
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
        <div className='row mb-2'> 
         <div className='col-4'>
         <label>Related To</label></div>  
          <div className='col-8'>  
            <select className='w-100 form-control'>  
              <option></option>  
              <option>Claim</option>  
              <option>Contacts</option>  
            </select>  
          </div> 
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
          </div>

          <div className='row mb-2'> 
          <div className='col-4'>
            <label>Assigned To</label></div> 
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
         


        <div className='row mb-2'> 
          <div className='col-4'><label>Date Created</label><i className='text-danger h5'>*</i></div> 
          <div className='col-8'> 
            <input type="date" className='w-100 form-control' /> 
          </div> 
        </div> 
        </div>
<<<<<<< HEAD:src/Pages/Dairy.js
       </div>
=======
        </div>
          
       
>>>>>>> e4073a352a44803b21b8dd11f03e1ce17204d40e:src/Pages/Diary.js
    )
}
export default Diary;