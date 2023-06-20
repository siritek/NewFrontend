import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React,{useState} from 'react'
import Form from "react-bootstrap/Form";
var DairyDataObj;
function Dairy()
{
  const[componentData,setComponentData]=useState({});
  const handleInputChange = (e,date) => { 
  if(date=='dueDate'){
    setComponentData((prevData) =>({ 
   ...prevData, 
   dateOfReport:e, 
 }));
 } 
 else if(date=='DateCreated'){
  setComponentData((prevData) =>({ 
    ...prevData, 
    dateCreated:e, 
}));
}
else{

  const {id, value} = e.target;  
  setComponentData((prevData) =>({  
    ...prevData,  
    [id]:value,  
  }));  
};  
const{ 
  ClaimNumber='',
  subject='', 
 description='', 
  related='', 
    dueDate='', 
    priority='', 
    details='', 
    assignedTo='',
    createdBy='',
    dateCreated='',  
} = componentData || {}; 


const handleNext = () => {
  // Access the component data from the state
  DairyDataObj = componentData
  console.log(componentData);
  // Perform further actions with the data
};
    return(   
      <div>
        <div className="d-flex justify-content-between align-items-center"> 
      <h2>Diary</h2>
      <button type="button" className="btn btn-success" onClick={handleNext}>Submit</button>
      </div>
      <hr/>
      <div className='row'>
      <div className='row mb-2'>
          <div className='col-4'><label htmlFor='Claim Number'>Claim Number</label></div>
          <div className='col-5'>
            <input type="text" className='w-100 form-control' id="Claim Number" value={ClaimNumber}  onChange={handleInputChange} />
          </div>
        </div> 

         <div className='row mb-2'> 
          <div className='col-4'> 
            <label htmlFor='subject' >Subject</label> 
          </div> 
          <div className='col-5'> 
          <input type="text" id='subject' value={subject} onChange={handleInputChange} className='w-100 form-control' maxLength={25}/> 
          </div> 
        </div> 

        <div className='row mb-2'> 
          <div className='col-4'> 
            <label htmlFor='description'>Description</label> 
          </div> 
          <div className='col-5'> 
          <input type="text" id='description' value={description} onChange={handleInputChange} className='w-100 form-control' maxLength={25}/> 
          </div> 
        </div> 

        <div className='row mb-2'> 
         <div className='col-4'>
         <label htmlFor='related'>Related To</label></div>  
          <div className='col-5'>  
            <Form.Select id="related" value={related} onChange={handleInputChange} className='w-100 form-control'>  
              <option value='none'> None</option>  
              <option value='claim'>Claim</option>  
              <option value="contacts">Contacts</option>  
            </Form.Select>  
          </div> 
          </div>

          <div className='row mb-2'>
   <div className='col-4'>
     <label htmlFor="dueDate">Due Date</label>
     
   </div>
   <div className='col-5'>
     {/*<input  id="dueDate" type="date" value={dueDate}  
     onChange={handleInputChange}  className='w-100 form-control' />*/}
 
        <DatePicker
       className='w-100 form-control'
       selected={dueDate}
        id="dueDate"
       onChange={(e)=>handleInputChange(e,'dueDate')}
       dateFormat="MM-dd-yyyy"
       placeholderText="MM-DD-YYYY"
     />
     </div>
      </div>
          
        
        


        <div className='row mb-2'> 
          <div className='col-4'> 
            <label htmlFor='details'>Details</label> 
          </div> 
          <div className='col-5'> 
          <input type="text" id="details" value={details}onChange={handleInputChange}  className='w-100 form-control' maxLength={25}/> 
          </div> 
          </div>

          <div className='row mb-2'> 
          <div className='col-4'>
            <label htmlFor='assignedTo'>Assigned To</label></div> 
          <div className='col-5'> 
            <Form.Select id='assignedTo' value={assignedTo} onChange={handleInputChange}  className='w-100 form-control'> 
              <option value='none'>None</option>
              <option value='agent'>Agent</option>  
            </Form.Select> 
          </div> 
        </div> 
        

        <div className='row mb-2'> 
          <div className='col-4'><label htmlFor='createdBy'>Created By</label></div> 
          <div className='col-5'> 
            <Form.Select  id="cratedBy" value={createdBy} className='w-100 form-control'> 
              <option value='none'>None</option>
              <option value='agent'>Agent</option>  
            </Form.Select> 
          </div> 
        </div> 

        <div className='row mb-2'>
   <div className='col-4'>
     <label htmlFor="dateCreated">Date Created</label>
     
   </div>
   <div className='col-5'>
   <DatePicker
   className='w-100 form-control'
        selected={dateCreated}
         id="dateCreated"
        onChange={(e)=>handleInputChange(e,'dateCreated')}
        dateFormat="MM-dd-yyyy"
        placeholderText="MM-DD-YYYY"
      />
   
   </div>
 </div>
        
        </div>
        </div>
          
       
    )
}
}
export default Dairy;