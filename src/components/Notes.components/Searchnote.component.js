import React, {useState} from "react"; 
import Form from "react-bootstrap/Form";    
 
// import {DropdownButton, Dropdown} from "antd/es/dropdown/dropdown-button";   
// import { Row } from "reactstrap";   
// import Form from "react-bootstrap/Form"; 
 
function Searchnote(){   
 
    const[topic,settopic] =useState('') 
    const[PolicyNumber,setPolicyNumber] =useState('') 
    const[claimNumber,setclaimNumber] =useState('') 
    const[findText,setfindText] =useState('') 
   const[relatedTo,setrelatedTo] =useState('') 
 
    
 
   const handleClick=(e)=>{ 
    e.preventDefault() 
    const abs={PolicyNumber,claimNumber,topic,relatedTo,findText} 
    console.log(abs) 
    fetch("http://localhost:8080/searchnotefirst/add",{ 
        method:"POST", 
        headers:{"Content-Type":"application/json"}, 
        body:JSON.stringify(abs) 
 
    }).then(()=>{ 
        console.log("New Insured added") 
    }) 
 
 
  } 
 
    return ( 
     
      <div className="ms-3"> 
      <div className="row"> 
        <div className="row mb-2"> 
          <div className="col-4"> 
            <label>PolicyNumber:</label> 
          </div> 
          <div className="col-8"> 
            <input 
              type="text" 
              className="w-100 form-control" 
              id="PolicyNumber-select" 
              value={PolicyNumber} 
              onChange={(event) => { 
                setPolicyNumber(event.target.value); 
              }} 
            /> 
             
          </div> 
        </div> 
     
          <div className="row mb-2"> 
            <div className="col-4"> 
              <label>claimNumber:</label> 
            </div> 
            <div className="col-8"> 
              <input 
                type="text" 
                className="w-100 form-control" 
                id="claimNumber-select" 
                value={claimNumber} 
                onChange={(event) => { 
                  setclaimNumber(event.target.value); 
                }} 
              /> 
            </div> 
          </div> 
           
           
          <div className="row mb-2"> 
            <div className="col-4"> 
              <label>Find Text:</label> 
            </div> 
            <div className="col-8"> 
              <input 
                type="text" 
                className="w-100 form-control" 
                id="FindText-select" 
                value={findText} 
                onChange={(event) => { 
                  setfindText(event.target.value); 
                }} 
              /> 
            </div> 
          </div> 
          
 
          {/* <div className='row mb-2'>    
                    <div className='col-4'><label>Author:</label></div>    
                        <div className='col-8'>    
                            <select className='w-100 form-control'>    
                                <option>Any</option>   
                            </select>    
                        </div>    
                    </div>  */} 
 
          <div className="row mb-2"> 
            <div className="col-4"> 
              <label>Related To:</label> 
            </div> 
            <div className="col-8"> 
              <Form.Select 
                className="w-100 form-control" 
                name="relatedTo" 
                value={relatedTo} 
                onChange={(e) => setrelatedTo(e.target.value)} 
              > 
                <option value="none">None</option> 
                <option value="claim">Claim</option> 
                <option value="contacts">Contacts</option> 
              </Form.Select> 
            </div> 
          </div> 
          <div className="row mb-2"> 
            <div className="col-4"> 
              <label>Topic:</label> 
            </div> 
            <div className="col-8"> 
              <Form.Select 
                className="w-100 form-control" 
                name="topic" 
                value={topic} 
                onChange={(e) => settopic(e.target.value)} 
              > 
                <option value="general">General</option> 
                <option value="firstnoticeofloss">First Notice of Loss</option> 
                <option value="coverage">Coverage</option> 
                <option value="investigation">Investigation</option> 
                <option value="medicalissues">Medical Issues</option> 
                <option value="evaluation">Evaluation</option> 
                <option value="settlement">Settlement</option> 
                <option value="subrogation">Subrogation</option> 
                <option value="salvage">Salvage</option> 
                <option value="litigation">Litigation</option> 
                <option value="denial">Denial</option> 
                <option value="reinsurance">Reinsurance</option> 
              </Form.Select> 
            </div> 
          </div> 
        </div> 
        <input 
          type="submit" 
          className="btn btn-success custom-margin-right-1" 
          value="Submit" 
          onClick={handleClick} 
        />{" "} 
        &nbsp; 
        <input 
          type="reset" 
          className="btn btn-success custom-margin-right-1" 
          value="Reset" 
        /> 
      </div> 
     
       
    ); 
};  
 
export default Searchnote;




// import React, {useState} from "react";
// import Form from "react-bootstrap/Form";   

// // import {DropdownButton, Dropdown} from "antd/es/dropdown/dropdown-button";  
// // import { Row } from "reactstrap";  
// // import Form from "react-bootstrap/Form";

// function Searchnote(){  

//     const[topic,settopic] =useState('')
//     const[findText,setfindText] =useState('')
//    const[relatedTo,setrelatedTo] =useState('')

   

//    const handleClick=(e)=>{
//     e.preventDefault()
//     const abs={topic,relatedTo,findText}
//     console.log(abs)
//     fetch("http://localhost:8080/searchnotefirst/add",{
//         method:"POST",
//         headers:{"Content-Type":"application/json"},
//         body:JSON.stringify(abs)

//     }).then(()=>{
//         console.log("New Insured added")
//     })


//   }

//     return (
//       <div className="ms-3">
//         <div className="row">
//           <div className="row mb-2">
//             <div className="col-4">
//               <label>Find Text:</label>
//             </div>
//             <div className="col-8">
//               <input
//                 type="text"
//                 className="w-100 form-control"
//                 id="FindText-select"
//                 value={findText}
//                 onChange={(event) => {
//                   setfindText(event.target.value);
//                 }}
//               />
//             </div>
//           </div>

//           {/* <div className='row mb-2'>   
//                     <div className='col-4'><label>Author:</label></div>   
//                         <div className='col-8'>   
//                             <select className='w-100 form-control'>   
//                                 <option>Any</option>  
//                             </select>   
//                         </div>   
//                     </div>  */}

//           <div className="row mb-2">
//             <div className="col-4">
//               <label>Related To:</label>
//             </div>
//             <div className="col-8">
//               <Form.Select
//                 className="w-100 form-control"
//                 name="relatedTo"
//                 value={relatedTo}
//                 onChange={(e) => setrelatedTo(e.target.value)}
//               >
//                 <option value="none">None</option>
//                 <option value="claim">Claim</option>
//                 <option value="contacts">Contacts</option>
//               </Form.Select>
//             </div>
//           </div>
//           <div className="row mb-2">
//             <div className="col-4">
//               <label>Topic:</label>
//             </div>
//             <div className="col-8">
//               <Form.Select
//                 className="w-100 form-control"
//                 name="topic"
//                 value={topic}
//                 onChange={(e) => settopic(e.target.value)}
//               >
//                 <option value="general">General</option>
//                 <option value="firstnoticeofloss">First Notice of Loss</option>
//                 <option value="coverage">Coverage</option>
//                 <option value="investigation">Investigation</option>
//                 <option value="medicalissues">Medical Issues</option>
//                 <option value="evaluation">Evaluation</option>
//                 <option value="settlement">Settlement</option>
//                 <option value="subrogation">Subrogation</option>
//                 <option value="salvage">Salvage</option>
//                 <option value="litigation">Litigation</option>
//                 <option value="denial">Denial</option>
//                 <option value="reinsurance">Reinsurance</option>
//               </Form.Select>
//             </div>
//           </div>
//         </div>
//         <input
//           type="submit"
//           className="btn btn-success custom-margin-right-1"
//           value="Submit"
//           onClick={handleClick}
//         />{" "}
//         &nbsp;
//         <input
//           type="reset"
//           className="btn btn-success custom-margin-right-1"
//           value="Reset"
//         />
//       </div>
//     );  
// }  
// export default Searchnote;