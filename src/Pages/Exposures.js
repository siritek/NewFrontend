import Newexposure from "../components/Exposure.components/Newexposure";    
import Searchexposures from "../components/Exposure.components/Searchexposures"

function Exposure(props){
  const handleLossSummaryClick=()=>{
    props.onLossSummaryClick();
  };
return (

    <div>
       <div className="d-flex justify-content-between align-items-right"> 
    <h2>New Exposures</h2> 
    <div>
            
          <button type="button" className="btn btn-dark" onClick={handleLossSummaryClick}>Back</button>&nbsp;
          <input type="submit"class="btn btn-success custom-margin-right-1" value="Submit"/> 
          </div></div>
    <hr />
        <Newexposure/>
       
        <Searchexposures/>

    </div>
  ); 
};
 
export default Exposure;  