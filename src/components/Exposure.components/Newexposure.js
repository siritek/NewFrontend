import React, {useEffect, useState} from 'react' 
import axios from 'axios'; 
import Form from "react-bootstrap/Form";  
// import Dropdown from 'react-bootstrap/Dropdown';    
 

var ExposureDataObj
function Newexposure(props,{lossdataobj}){ 

  const [componentData, setComponentData] = useState({});
  const handleBackClick=()=>{
    props.onBackClick();
  }

  const [lossParty, setLossParty] = useState('');
  const [primaryCoverage, setPrimaryCoverage] = useState('');
  const[claimantType, setClaimantType] = useState('');
  const[lossparties, setLossparties] = useState([]);
  const[primaryCoverages, setPrimaryCoverages] = useState([]);
  const[claimantTypes, setClaimantTypes] = useState([]);
  const[status, setStatus] = useState();
  const[statuses, setStatuses] = useState([]);
  const[adjuster, setAdjuster] = useState();
  const[adjusters, setAdjusters] = useState([]);

  const handleInputChange = (e) => {  
    const {id, value} = e.target;
   // if(id==="lossParty"){setLossParty(value);}
    //else if(id==="primaryCoverage"){setPrimaryCoverage(value);}
    //else if(id==="claimantType"){setClaimantType(value);}else{
    setComponentData((prevData) =>({  
      ...prevData,  
      [id]:value,  
    })); 
  
  };   

  const handlelossPartychange = (e) => {
    setLossParty(e.target.value);
    handleInputChange(e);
  }
  const handleprimarycoveragechange = (e) => {
    setPrimaryCoverage(e.target.value);
    handleInputChange(e);
  }
  const handleadjusterchange = (e) => {
    setAdjuster(e.target.value);
    handleInputChange(e);
  }
  const handlestatuschange = (e) => {
    setStatus(e.target.value);
    handleInputChange(e);
  }

  const handleclaimantTypechange = (e) => {
    setClaimantType(e.target.value);
    handleInputChange(e);
  }

  useEffect(() => {
    fetchExposureDDTypes();
  }, []);

 

  const fetchExposureDDTypes = async () => {
    try{
    const response = await axios.get('http://localhost:8080/exposuresDD')
    console.log('Response data:', response.data);
    const {lossParty, primaryCoverage, adjuster, claimantType, exposureStatus} = response.data;
    setLossparties(lossParty);
    setPrimaryCoverages(primaryCoverage);
    setClaimantTypes(claimantType);
    setStatuses(exposureStatus);
    setAdjusters(adjuster);
    console.log('testing  adjusterr values in console '+adjuster);
    }catch(error){
      console.error('Error fetching exposure types:', error);
    }

  }
  useEffect(() => {
    if (lossdataobj) {
      const {
        adjuster
      } = lossdataobj;

      setComponentData((prevData) => ({
        ...prevData,
        adjuster: adjuster || prevData.adjuster,
      }));
    }
  }, [lossdataobj, setComponentData]);
  const{ 
   // lossParty='', 
    //primaryCoverage='', 
   // adjuster='', 
    //  status='', 
      creationDate='', 
      claimant='', 
     // claimantType='',  
      address='', 
  } = componentData || {}; 
  const handleNext = () => {
    // Access the component data from the state
    ExposureDataObj = componentData
    console.log(componentData);
    // Perform further actions with the data
  };
  if(Object.keys(componentData).length === 0 && ExposureDataObj !== undefined) {
    setComponentData(ExposureDataObj)
  }
  

  return (
    <div>
         <div className="d-flex justify-content-between align-items-center"> 
    <h2>New Exposure</h2> 
    
    <div>
            
          <button type="button" className="btn btn-dark" onClick={handleBackClick}>Back</button>&nbsp;
          <button type="button" className="btn btn-success"onClick={()=>{handleNext();handleBackClick();}} >Submit</button>
          </div>
        
      </div><hr/>
      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor="lossParty">Loss party</label>
        </div>
        <div className="col-6">
          <Form.Select
            id="lossParty"
            value={lossParty}
            onChange={handlelossPartychange}
            aria-label="Default select example"
          >
            {lossparties&& lossparties.map ((lossParty,index) => (
              <option key={index} value={lossParty}>
                {lossParty}
                </option>          
            ))}
          </Form.Select>
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor="primaryCoverage">Primary Coverage</label>
        </div>
        <div className="col-6">
          <Form.Select
            id="primaryCoverage"
            value={primaryCoverage}
            onChange={handleprimarycoveragechange}
            aria-label="Default select example"
          >
            { primaryCoverages.map ((primaryCoverage) => (
              <option key={primaryCoverage} value={primaryCoverage}>
                {primaryCoverage}
                </option>          
            ))}
          </Form.Select>
        </div>
      </div>

    

      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor="adjuster">Adjuster</label>
        </div>
        <div className="col-6">
          <Form.Select
            id="adjuster"
            value={adjuster}
            onChange={handleadjusterchange}
            aria-label="Default select example"
          >
            {adjusters && adjusters.map ((adjuster,index) => (
              <option key={index} value={adjuster}>
                {adjuster}
                </option>          
            ))}
          </Form.Select>
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor="status">Status</label>
        </div>
        <div className="col-6">
          <Form.Select
            id="status"
            value={status}
            onChange={handlestatuschange}
            aria-label="Default select example"
          >
            {statuses && statuses.map ((status,index) => (
              <option key={index} value={status}>
                {status}
                </option>          
            ))}
          </Form.Select>
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor="creationDate">Creation Date</label>
          <i className="text-danger h5">*</i>
        </div>
        <div className="col-6">
          <input
            id="creationDate"
            value={creationDate}
            onChange={handleInputChange}
            type="date"
            className="w-100 form-control"
          />
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor="claimant">Claimant</label>
        </div>
        <div className="col-6">
          <input
            id="claimant"
            value={claimant}
            onChange={handleInputChange}
            type="text"
            className="w-100 form-control"
          />
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor="claimantType">Claimant Type</label>
        </div>
        <div className="col-6">
          <Form.Select
            id="claimantType"
            value={claimantType}
            onChange={handleclaimantTypechange}
            aria-label="Default select example"
          >
            {claimantTypes && claimantTypes.map (claimantType => (
              <option key={claimantType} value={claimantType}>
                {claimantType}
                </option>
            ))}
          </Form.Select>
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor="address">Address</label>
          <i className="text-danger h5">*</i>
        </div>
        <div className="col-6">
          <input
            id="address"
            value={address}
            onChange={handleInputChange}
            type="text"
            className="w-100 form-control"
          />
        </div>
      </div>
    </div>
  );    
} 
const ExposureData = () => {
  return ExposureDataObj
}   
    
export  {Newexposure,ExposureData}