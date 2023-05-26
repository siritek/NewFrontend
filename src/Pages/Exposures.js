import { useState } from "react";
import Newexposure from "../components/Exposure.components/Newexposure";    
import Searchexposures from "../components/Exposure.components/Searchexposures"


function Exposure(props){

  const [componentData, setComponentData] = useState({});
  // const [console, setConsole] = useState([]);

  const handleLossSummaryClick=()=>{
    props.onLossSummaryClick();
  };
  const handleClick = () => {
  
    
   
    console.log(componentData);
  };

    // useEffect(() => {
    //   // Function to fetch console data
    //   const fetchConsoleData = () => {
    //     // Simulating console data
    //     const data1 = 'componentData';
    //     const data2 = 'componentData';
    //     const data3 = 'componentData';
    //     const data4 = 'componentData';
  
    //     // Combining console data into an array
    //     const combinedData = [data1, data2, data3, data4];
  
    //     setConsole(combinedData);
    //   };
  
    //   fetchConsoleData();
    // });

  
  



return (

    <div>
       <div className="d-flex justify-content-between align-items-center"> 
    <h2>New Exposures</h2> 
    <div>
            
          <button type="button" className="btn btn-dark" onClick={handleLossSummaryClick}>Back</button>&nbsp;
          <button type="button" className="btn btn-dark" >Cancel</button>&nbsp;
          {/* <input type="submit"class="btn btn-success custom-margin-right-1" value="Submit"/>  */}
          <button type="Submit" classname="btn btn-success custom-margin-right-1" onClick={handleClick}>Submit</button>
          </div></div>
    <hr />
        <Newexposure setComponentData={setComponentData} componentData={componentData}/>
       
        <Searchexposures/>

    </div>
  ); 
};
 
export default Exposure;  