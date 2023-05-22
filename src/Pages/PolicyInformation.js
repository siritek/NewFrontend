// import './App.css';
// import Basic from './Components/basic.component';
// import Heading from './Components/header.component'
// import Additional from './Components/additionalInsured.component'
// import Excluded from './Components/excludedParties.component';
// // import Agent from './Components/agent.component';


// function App() {
//   return (
//     <div>
//       <Heading />
//       <div className='row'>
//         <div className='col-6'>
//           <Basic />
//         </div>

//         <div className='col-6'>
//           <Additional />
//           <Excluded />
//           <hr />
//           {/* <Agent /> */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


// import './App.css'; 
import Basic from '../components/Policyinfo.components/basic.component'; 
import Additional from '../components/Policyinfo.components/additionalInsured.component' 
import Excluded from '../components/Policyinfo.components/excludedParties.component'; 
//import Agent from './Components/agent.component'; 
import Policylevel from '../components/Policyinfo.components/policylevelcoverages'
 
 
function Policyinfo(props) { 
    const handleFnolClick=()=>{
      props.onFnolClick();
    };
    const handleLossSummaryClick=()=>{
      props.onLossSummaryClick();
    };
  return ( 
    <div> 
      
      <div className="d-flex justify-content-between align-items-center">
          <h2>Policy: General</h2>
          
          <div>
            
          <button type="button" className="btn btn-dark" onClick={handleFnolClick}>Back</button>&nbsp;
          <button type="button" className="btn btn-success" onClick={handleLossSummaryClick}>
            Next
          </button>
          </div></div>
     <hr/>
      <div className='row'> 
        <div className='col-6'>  
          <Basic /> 
        </div> 
 
        <div className='col-6'> 
          <Additional /> 
          <hr />  
          <Excluded /> 
          </div> 
          <hr /> 
          <div className='col-6'> 
          <Policylevel/> 
          {/* <Agent /> */} 
        </div> 
      </div> 
    </div> 
  ); 
} 
 
export default Policyinfo;