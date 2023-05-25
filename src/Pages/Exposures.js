import React, { useState } from 'react';
import Newexposure from "../components/Exposure.components/Newexposure";    
import Searchexposures from "../components/Exposure.components/Searchexposures"

function Exposure(props){
  const [componentData, setComponentData] = useState({});
  const handleLossSummaryClick=()=>{
    props.onLossSummaryClick();
  };
  const handleNext = () => {
    // Access the component data from the state
    console.log(componentData);
    // Perform further actions with the data
  };
return (

    <div>
       <div className="d-flex justify-content-between align-items-center"> 
    <h2>New Exposures</h2> 
    <div>
            
          <button type="button" className="btn btn-dark" onClick={handleLossSummaryClick}>Back</button>&nbsp;
          <button type="button" className="btn btn-dark" >Cancel</button>&nbsp;
          <input type="submit"className="btn btn-success custom-margin-right-1" value="Submit" onClick={ handleNext}/> 
          </div></div>
    <hr />
        <Newexposure setComponentData={setComponentData} componentData={componentData}/>
       
        <Searchexposures/>

    </div>
  ); 
};
 
export default Exposure;  