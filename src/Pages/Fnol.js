import FnolTypeOfPolicy from "../components/Fnol.components/FnolTpeOfPolicy"
import FnolDetails from "../components/Fnol.components/FnolDetails"
 
function Fnol(props) { 
  const handlePIClick=()=>{
    props.onPIClick();
  };
  return ( 
     <div> 
 <div>
 <div className="d-flex justify-content-between align-items-center">
          <h2>FNOL (First Notice Of Loss)</h2>
          <button type="button" className="btn btn-success" onClick={handlePIClick}>
            Next
          </button>
          </div>
     
     <hr />
   </div>
      <div className='row'>
        <div className='col-6'>
          <FnolDetails/>
        </div>

        <div className='col-6'>
        
          <FnolTypeOfPolicy />
          </div>
          
  </div>
      </div>    
 
  ); 
           
 
 
 
} 
 
export default Fnol;  