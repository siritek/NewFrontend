import React from "react";  
// import {DropdownButton, Dropdown} from "antd/es/dropdown/dropdown-button";  
// import { Row } from "reactstrap";  
  
function Searchnote(){  
    return(  
        <div className="ms-3">  
            
            <div className="row">  
                <div className="row mb-2">  
                    <div className="col-4">  
                        <label>Find Text:</label>     
                    </div>  
                    <div className="col-8">  
                        <input type="text" className="w-100 from-control" />  
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
                            <select className='w-100 form-control'>   
                                <option>Claim</option>  
                            </select>   
                        </div>   
                    </div>   
                    <div className='row mb-2'>   
                    <div className='col-4'><label>Topic:</label></div>   
                        <div className='col-8'>   
                            <select className='w-100 form-control'>   
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
                            </select>   
                        </div>   
                    </div>   
            </div>  
  
                <input type="submit"class="btn btn-success custom-margin-right-1" value="Submit"/> &nbsp;   
                <input type="reset"class="btn btn-success custom-margin-right-1" value="Reset"/>  
               
        </div>  
          
    );  
}  
export default Searchnote;