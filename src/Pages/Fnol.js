import React, { useState,useEffect } from 'react';
//import FnolTypeOfPolicy from "../components/Fnol.components/FnolTpeOfPolicy"
import FnolDetails from "../components/Fnol.components/FnolDetails"
//import { useState } from "react";
 
var FnolDataObj;
function Fnol(props) {
  
  const [componentData, setComponentData] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);


  const handlePIClick=()=>{
    
    props.onPIClick();
  };
  const handleNext = () => {
    // Access the component data from the state
    FnolDataObj = componentData
    console.log(componentData);
    // Perform further actions with the data
  };
  useEffect(() => {
    if (Object.keys(componentData).length === 0 && FnolData !== undefined) {
      setComponentData(FnolDataObj);
    }
  }, []);

  const validate =
  componentData &&
  componentData.dateOfLoss &&
  componentData.dateOfLoss.length > 0 &&
  componentData.lossLocation &&
  componentData.lossLocation.length > 0 &&
  componentData.lossTime &&
  componentData.lossTime.length > 0 &&
  componentData.reportedBy &&
  componentData.reportedBy.length > 0 &&
  componentData.dateOfReport &&
  componentData.dateOfReport.length > 0 &&
  componentData.policyNumber &&
  componentData.policyNumber.length > 0;

      
  useEffect(() => {
    setIsFormValid(validate);
  }, [validate]);
 

 
  return ( 
     <div> 
 <div>
 <div className="d-flex justify-content-between align-items-center">
          <h2>FNOL (First Notice Of Loss)</h2>
          <button type="button" disabled={!isFormValid} className="btn btn-success" onClick={() => { handlePIClick(); handleNext(); }}>
            Next
          </button>
          </div>
     
     <hr />
   </div>
      <div className='row'>
        <div className='col-6'>
          <FnolDetails setComponentData={setComponentData} componentData={componentData} />
        </div>

        <div className='col-6'>
        
          {/* <FnolTypeOfPolicy setComponentData={setComponentData} componentData={componentData} /> */}
          </div>
          
  </div>
      </div>    
 
  ); 
} 
const FnolData = () => {
  return FnolDataObj
}
 
export{Fnol, FnolData } 