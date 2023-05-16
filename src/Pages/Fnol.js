//import './App.css'; 
import Basic from '../components/Fnol.components/fnolbasic'; 
import FnolHeading from '../components/Fnol.components/fnolheader' 
import FnolTypeOfPolicy from '../components/Fnol.components/fnoltypeofpolicy'; 
 
 
function Fnol() { 
  return ( 
    <div> 
      <FnolHeading /> 
      <div className='row'> 
        <div className='col-6'> 
          <Basic /> 
        </div> 
 
        <div className='col-6'> 
          
          
          <FnolTypeOfPolicy/> 
        </div> 
      </div> 
    </div> 
  ); 
} 
 
export default Fnol;  