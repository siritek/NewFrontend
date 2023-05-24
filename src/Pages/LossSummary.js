import React, { useState } from 'react';
import Injuries from "../components/Losssummary.components/Injuries";
import Lossdetails from "../components/Losssummary.components/Lossdetails";
import Witnesses from "../components/Losssummary.components/Witnesses";
import Losslocation from "../components/Losssummary.components/losslocation";
import Properties from "../components/Losssummary.components/properties";
// import Heading from "./components/header.component";

function Losssummary(props) { 
  const [componentData, setComponentData] = useState({});

  const handlePIClick=()=>{
 props.onPIClick();
  };
  const handleNext = () => {
    // Access the component data from the state
    console.log(componentData);
    // Perform further actions with the data
  };
    const handleExposureClick=()=>{
      props.onExposureClick();
    };
    return ( 
      <div> 
        <div className="d-flex justify-content-between align-items-center"> 
    <h2>Loss Summary</h2> 
    <div>
            
          <button type="button" className="btn btn-dark" onClick={handlePIClick}>Back</button>&nbsp;
          <button type="button" className="btn btn-success" onClick={() => { handleExposureClick(); handleNext(); }}>
  Next
</button>
          
          </div></div>
    <hr />
    
        <div className='row'> 
          <div className='col-6'> 
          <Lossdetails setComponentData={setComponentData} componentData={componentData} />
          </div> 
            
          <div className='col-6'> 
            <Losslocation setComponentData={setComponentData} componentData={componentData}/> 
           </div> 
           <hr />  
           <div className='col-6'> 
            <Properties/> 
           </div>
           <div className='col-6'>
            <Injuries/>
           </div>
           <hr/>
           <div className='col-6'>
           <Witnesses/>
           </div>

        </div> 
      </div> 
    ); 
  } 
   
  export default Losssummary;