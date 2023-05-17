import React from 'react'

 import Form from "react-bootstrap/Form";
 
function Basic() { 


  return ( 
    <div className='ms-3'> 
      <h5>Basic Information</h5> 
      <div className='row'> 
        <div className='row mb-2'> 
          <div className='col-4'> 
            <label>Policy Number</label> 
          </div> 
          <div className='col-8'> 
          <input type="number" className='w-100 form-control' maxLength={25}/> 
          </div> 
        </div> 

       
        <div className='row mb-2'> 
          <div className='col-4'><label>Policy Type</label></div> 
          <div className='col-8'> 
          
            <Form.Select className='w-100 form-control'> 
              <option>None</option> 
              <option>Personal Auto</option> 
              <option>Commercial Auto</option> 
              <option>Homeowners</option> 
              <option>Genral Liability</option> 
              <option>Mutual</option> 
              <option>Worker Compensation</option> 
            </Form.Select> 
          </div> 
        </div> 
 
        <div className='row mb-3'> 
        <div className='col-4'>Policy Verified</div> 
        <div className='col-8'> 
          <input type="radio" name="basicRadioGroup"/> Yes <span className='ms-3'></span><input  type="radio" name="basicRadioGroup"/> No  
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
 
        <div className='row mb-2'> 
          <div className='col-4'> 
            <label>Underwriting Company</label> 
          </div> 
          <div className='col-8'> 
          <input type="text" className='w-100 form-control' /> 
          </div> 
          </div> 
 
        <div className='row mb-2'> 
          <div className='col-4'><label>Effective Date</label><i className='text-danger h5'>*</i></div> 
          <div className='col-8'> 
            <input type="date" className='w-100 form-control' /> 
          </div> 
        </div> 
 
        <div className='row mb-2'> 
          <div className='col-4'><label>Expiration Date</label><i className='text-danger h5'>*</i></div> 
          <diiv className='col-8'> 
            <input type="date" className='w-100 form-control' /> 
          </diiv> 
        </div> 
 
        <div className='row mb-2'> 
          <div className='col-4'><label>Cancellation Date</label></div> 
          <div className='col-8'> 
            <input type="date" className='w-100 form-control' /> 
          </div> 
        </div> 
 
        <div className='row mb-2'> 
          <div className='col-4'><label>Original Effective Date</label></div> 
          <div className='col-8'> 
            <input type="date" className='w-100 form-control' /> 
          </div> 
        </div> 
 
        <div className='row mb-2'> 
          <div className='col-4'><label>Policy Status</label></div> 
          <div className='col-8'> 
            <Form.Select className='w-100 form-control'> 
            <option>None</option> 
              <option>In Effect</option> 
              <option>Pre-Cancellation</option> 
              <option>Expired</option> 
              <option>Other</option> 
            </Form.Select> 
          </div> 
        </div> 
 
        <hr /> 
        <h5>Insured</h5> 
        <div className='row mb-2'> 
          <div className='col-4'><label>Name</label><i className='text-danger h5'>*</i></div> 
          <div className='col-8'> 
          <input type="text" className='w-100 form-control' /> 
            {/* <select className='w-200 form-control'> 
              <option>Ray Newton</option> 
              <option>None</option> 
            </select> */} 
          </div> 
        </div> 
 
        <div className='row mb-5'> 
          <div className='col-4'><label>Address</label></div> 
          <div className='col-8'><input type="text" className='w-100 form-control' /></div> 
        </div> 
 
        {/* <div className='row mb-2'> 
          <div className='col-4'><label>Account Name</label></div> 
        </div> 
 
 
        <div className='row mb-2'> 
          <div className='col-4'><label>Account Number</label></div> 
          <div className='col-8'> 
            <input type="number" className='w-100 form-control' /> 
          </div> 
        </div> 
 
        <div className='row mb-2'> 
          <div className='col-4'><label>Service Tier</label></div> 
          <div className='col-8'> 
            <input type="number" className='w-100 form-control' /> 
          </div> 
        </div> */} 
      </div> 
    </div> 
  ) 
} 
 
export default Basic 


















// import React from 'react'
// import Dropdown from 'react-bootstrap/Dropdown';


// function Basic() {
//   return (
//     <div className='ms-3'>
//       <h5>Basic Information</h5>
//       <div className='row'>
//         <div className='row mb-2'>
//           <div className='col-4'>
//             <label>Policy Nmber</label>
//           </div>
//           <div className='col-8'>54-123456</div>
//         </div>
//         <div className='row mb-2'>
//           <div className='col-4'><label>Type</label></div>
//           <div className='col-8'>Personal Auto</div>
//         </div>

//         <div className='row mb-2'>
//           <div className='col-4'><label>Effective Date</label><i className='text-danger h5'>*</i></div>
//           <div className='col-8'>
//             <input type="datetime-local" className='w-100 form-control' />
//           </div>
//         </div>

//         <div className='row mb-2'>
//           <div className='col-4'><label>Expiration Date</label><i className='text-danger h5'>*</i></div>
//           <diiv className='col-8'>
//             <input type="datetime-local" className='w-100 form-control' />
//           </diiv>
//         </div>

//         <div className='row mb-2'>
//           <div className='col-4'><label>Cancellation Date</label></div>
//           <div className='col-8'>
//             <input type="datetime-local" className='w-100 form-control' />
//           </div>
//         </div>

//         <div className='row mb-2'>
//           <div className='col-4'><label>Original Effective Date</label></div>
//           <div className='col-8'>
//             <input type="datetime-local" className='w-100 form-control' />
//           </div>
//         </div>

//         <div className='row mb-2'>
//           <div className='col-4'><label>Status</label></div>
//           <div className='col-8'>
//             <select className='w-100 form-control'>
//               <option>In force</option>
//               <option>None</option>
//             </select>
//           </div>
//         </div>

//         <hr />
//         <h5>Insured</h5>
//         <div className='row mb-2'>
//           <div className='col-4'><label>Name</label><i className='text-danger h5'>*</i></div>
//           <div className='col-8'>
//             <select className='w-100 form-control'>
//               <option>Ray Newton</option>
//               <option>None</option>
//             </select>
//           </div>
//         </div>

//         <div className='row mb-5'>
//           <div className='col-4'><label>Address</label></div>
//           <div className='col-8'>287 Kensigton rd, #1A, South Pasadena, CA 91145</div>
//         </div>

//         <div className='row mb-2'>
//           <div className='col-4'><label>Account Name</label></div>
//         </div>


//         <div className='row mb-2'>
//           <div className='col-4'><label>Account Number</label></div>
//           <div className='col-8'>
//             <input type="number" className='w-100 form-control' />
//           </div>
//         </div>

//         <div className='row mb-2'>
//           <div className='col-4'><label>Service Tier</label></div>
//           <div className='col-8'>
//             <input type="number" className='w-100 form-control' />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Basic


