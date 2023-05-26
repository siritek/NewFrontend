import React, { useState } from 'react';
import Newexposure from "../components/Exposure.components/Newexposure";    
import Searchexposures from "../components/Exposure.components/Searchexposures"
import { FnolData } from './Fnol';
import { policyData } from './PolicyInformation';
import { LossData } from './LossSummary';

var ExposureDataObj;
function Exposure(props){
  const [componentData, setComponentData] = useState({});
  const handleLossSummaryClick=()=>{
    props.onLossSummaryClick();
  };
  const handleClick=(e)=>{  
    ExposureDataObj=componentData 
    // Access the component data from the state 
    const myFnolData = FnolData();  
    const myPolicyInfo = policyData(); 
    const myLossData = LossData(); 
    const myExposureData = ExposureData(); 
 
    console.log('policyinfo-->',myPolicyInfo) 
    console.log('Fnoldata -->', myFnolData) 
    console.log('lossdata-->',myLossData) 
    console.log('exposure--->',myExposureData) 
 
    const finalDataObj = { 
      "fnolData": myFnolData,  
      "policyInfoData": myPolicyInfo, 
      "lossData": myLossData, 
      "exposuredata":myExposureData 
    } 
     console.log(finalDataObj); 
    e.preventDefault()  
    const abs={myFnolData,myPolicyInfo,myLossData,myExposureData}  
    console.log(abs)  
    fetch("http://localhost:8080/fnolfirst/add",{  
        method:"POST",  
        headers:{"Content-Type":"application/json"},  
        body:JSON.stringify(abs)  
  
    }).then(()=>{  
        console.log("New claim added")  
    })  
  }

return (

    <div>
       <div className="d-flex justify-content-between align-items-center"> 
    <h2>New Exposures</h2> 
    <div>
            
          <button type="button" className="btn btn-dark" onClick={handleLossSummaryClick}>Back</button>&nbsp;
          <button type="button" className="btn btn-dark" >Cancel</button>&nbsp;
          <input type="submit"className="btn btn-success custom-margin-right-1" value="Submit" onClick={handleClick}/> 
          </div></div>
    <hr />
        <Newexposure setComponentData={setComponentData} componentData={componentData}/>
       
        <Searchexposures/>

    </div>
  ); 
};
const ExposureData = () => {
  return ExposureDataObj
}
 
export {ExposureData, Exposure};  