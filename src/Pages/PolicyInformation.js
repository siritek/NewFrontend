import { useState, useEffect } from 'react';
import Basic from '../components/Policyinfo.components/basic.component'; 
import Additional from '../components/Policyinfo.components/additionalInsured.component' 
import Excluded from '../components/Policyinfo.components/excludedParties.component'; 
import Policylevel from '../components/Policyinfo.components/policylevelcoverages';
import { FnolData } from './Fnol';

var policyInfoObj;

function Policyinfo(props) { 
  const [componentData, setComponentData] = useState({});
  const [excludeData, setExcludeData] = useState([]);
  const [additionalData, setAdditionalData] = useState([]);
  const [policylevelData, setPolicylevelData] = useState([]);

  useEffect(() => {
    if (Object.keys(componentData).length === 0 && policyInfoObj !== undefined) {
      setComponentData(policyInfoObj);
    }
  }, []);

  const handleFnolClick = () => {
    props.onFnolClick();
  };

  const handleNext = () => { 
    policyInfoObj = { 
      ...componentData, 
      exclude : excludeData,
      additional : additionalData,
      policylevel : policylevelData,
    // Perform further actions with the data
  };
  console.log(policyInfoObj);
  };

  const handleLossSummaryClick = () => {
    props.onLossSummaryClick();
  };

  const handleExcludeSave = (excludeData) => { 
    setComponentData((prevData) => ({ 
      ...prevData,
      exclude: excludeData,
    }));
    setExcludeData(excludeData);
    console.log(excludeData); // Do something with the injuries data
  }; 


  const handleAdditionalSave = (additionalData) => { 
    setComponentData((prevData) => ({ 
      ...prevData, 
      additional: additionalData, 
    })); 
    setAdditionalData(additionalData); 
    console.log(additionalData); // Do something with the injuries data 
  }; 
 
  const handlePolicylevelSave = (policylevelData) => { 
    setComponentData((prevData) => ({ 
      ...prevData, 
      policylevel: policylevelData, 
    })); 
    setPolicylevelData(policylevelData); 
    console.log(policylevelData); // Do something with the injuries data 
  }; 

  return ( 
    <div> 
      <div className="d-flex justify-content-between align-items-center">
        <h2>Policy: General</h2>
        <div>
          <button type="button" className="btn btn-dark" onClick={handleFnolClick}>
            Back
          </button>
          &nbsp;
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              handleLossSummaryClick();
              handleNext();
            }}
          >
            Next
          </button>
        </div>
      </div>
      <hr />
      <div className='row'> 
        <div className='col-6'>  
          <Basic setComponentData={setComponentData} componentData={componentData} fnoldataobj={FnolData()} /> 
        </div> 
        <div className='col-6'> 
          <Additional setComponentData={setComponentData} componentData={componentData} onSave={handleAdditionalSave}/> 
          <hr />  
          <Excluded setComponentData={setComponentData} componentData={componentData} onSave={handleExcludeSave} /> 
        </div> 
        <hr /> 
        <div className='col-6'> 
          <Policylevel setComponentData={setComponentData} componentData={componentData} onSave={handlePolicylevelSave} /> 
          {/* <Agent /> */} 
        </div> 
      </div> 
    </div> 
  ); 
}

const policyData = () => {
  return policyInfoObj;
}

export { policyData, policyInfoObj, Policyinfo };
