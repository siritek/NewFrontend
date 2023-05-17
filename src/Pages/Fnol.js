import FnolTypeOfPolicy from "../components/Fnol.components/FnolTpeOfPolicy"
import FnolDetails from "../components/Fnol.components/FnolDetails"
 
function Fnol() { 
  
   
  return ( 
     <div> 
 <div>
     <h2>FNOL (First Notice Of Loss)</h2>
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