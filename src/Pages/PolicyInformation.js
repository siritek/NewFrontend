import { useState, useEffect } from 'react';
import Basic from '../components/Policyinfo.components/basic.component'; 
import Additional from '../components/Policyinfo.components/additionalInsured.component' 
import Excluded from '../components/Policyinfo.components/excludedParties.component'; 
import Policylevel from '../components/Policyinfo.components/policylevelcoverages';
import { FnolData } from './Fnol';

var policyInfoObj;

function Policyinfo(props) { 
  const [componentData, setComponentData] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);


  const validate =
  componentData &&
  componentData.effectiveDate &&
  componentData.effectiveDate.length > 0 &&
  componentData.expirationDate &&
  componentData.expirationDate.length > 0 &&
  componentData.name &&
  componentData.name.length > 0 &&
  componentData.address &&
  componentData.address.length > 0 &&
  componentData.policyType &&
  componentData.policyType.length > 0 &&
  componentData.policyStatus  &&
  componentData.policyStatus.length > 0 ;

    
  useEffect(() => {
    setIsFormValid(validate);
  }, [validate]);
 


  useEffect(() => {
    if (Object.keys(componentData).length === 0 && policyInfoObj !== undefined) {
      setComponentData(policyInfoObj);
    }
  }, [policyInfoObj]);

  const handleFnolClick = () => {
    props.onFnolClick();
  };

  const handleNext = () => {
    policyInfoObj = componentData;
    // Perform further actions with the data
  };

  const handleLossSummaryClick = () => {
    props.onLossSummaryClick();
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
            disabled={!isFormValid}
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
          <Additional setComponentData={setComponentData} componentData={componentData} /> 
          <hr />  
          <Excluded /> 
        </div> 
        <hr /> 
        <div className='col-6'> 
          <Policylevel /> 
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
