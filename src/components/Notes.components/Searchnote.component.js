import React, {useState} from "react";  

// import {DropdownButton, Dropdown} from "antd/es/dropdown/dropdown-button";  
// import { Row } from "reactstrap";  
import Form from "react-bootstrap/Form";

function Searchnote(){  

    const[topic,settopic] =useState('')
    const[findtext,setfindtext] =useState('')
   const[relatedto,setrelatedto] =useState('')

   

   const handleClick=(e)=>{
    e.preventDefault()
    const abs={topic,relatedto,findtext}
    console.log(abs)
    fetch("http://localhost:8080/",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(abs)

    }).then(()=>{
        console.log("New Insured added")
    })


  }

    return(  

        
        <div className="ms-3">  
            
            <div className="row">  
                <div className="row mb-2">  
                    <div className="col-4">  
                        <label>Find Text:</label>     
                    </div>  
                    <div className="col-8">  
                        <input type="text" className="w-100 from-control" name ="findtext" value={findtext} onChange={(e)=>setfindtext(e.target.value)} />  
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
                    <div className='row mb-2'>   
                    <div className='col-4'><label>Related To:</label></div>   
                        <div className='col-8'>   
                            <select className='w-100 form-control'name="relatedto" value={relatedto} onChange={(e)=>setrelatedto(e.target.value)}>   
                                <option value="claim">Claim</option>  
                            </select>   
                        </div>   
                    </div>   
                    <div className='row mb-2'>   
                    <div className='col-4'><label>Topic:</label></div>   
                        <div className='col-8'>   
<<<<<<< HEAD
                            <select className='w-100 form-control'name="topic" value={topic} onChange={(e)=>settopic(e.target.value)}>   
                            <option value="general" >-General-</option>  
                            <option value= "firstnoticeofloss">First Notice of Loss</option>  
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
       
                            </select>   
=======
                            <Form.Select aria-label="Default select example">  
                                <option>General</option>  
                                <option>First notice of loss</option>  
                                <option>Coverage</option>  
                                <option>Investigatiin</option>  
                                <option>Medical</option>  
                                <option>Subrogation</option>  
                                <option>Salvage</option>  
                                <option>Litigation</option>  
                                <option>Denial</option>  
                                <option>Reinsurance</option>  
                            </Form.Select>   
>>>>>>> c2b6841080696ad35d57ef9eba17ec48740879e1
                        </div>   
                    </div>   
            </div>  
  
                <input type="submit"class="btn btn-success custom-margin-right-1" value="Submit" onClick={handleClick}/> &nbsp;   
                <input type="reset"class="btn btn-success custom-margin-right-1" value="Reset"/>  
               
        </div>  
          
    );  
}  
export default Searchnote;