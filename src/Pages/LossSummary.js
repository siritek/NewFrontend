import Injuries from "../components/Losssummary.components/Injuries";
import Lossdetails from "../components/Losssummary.components/Lossdetails";
import Witnesses from "../components/Losssummary.components/Witnesses";
import Losslocation from "../components/Losssummary.components/losslocation";
import Properties from "../components/Losssummary.components/properties";
// import Heading from "./components/header.component";

function Losssummary() { 
    return ( 
      <div> 
        <div> 
    <h1>Loss Summary</h1> 
    <hr />
    </div>
        <div className='row'> 
          <div className='col-6'> 
            < Lossdetails/> 
          </div> 
            
          <div className='col-6'> 
            <Losslocation/> 
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