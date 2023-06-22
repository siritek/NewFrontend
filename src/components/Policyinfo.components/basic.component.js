
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState, useEffect } from 'react'; 
import axios from 'axios'; 
import Form from "react-bootstrap/Form"; 
// import Dropdown from 'react-bootstrap/Dropdown';  
 
  
function Basic({ setComponentData, componentData, fnoldataobj }) {  

  const [loading, setLoading,] = useState(true); 
  const handleInputChange = (e,date) => { 

    if(date == 'dateOfLoss'){
        setComponentData((prevData) =>({ 
      ...prevData, 
      dateOfLoss:e, 
    }));
    }
   

  
    else if(date=="effectiveDate"){
      setComponentData((prevData) =>({ 
        ...prevData, 
        effectiveDate:e, 
      }));
    }
    else if(date=="expirationDate"){
      setComponentData((prevData) =>({ 
        ...prevData, 
        expirationDate:e, 
      }));
    }
    // else if(id==""){
    //   setComponentData((prevData) =>({ 
    //     ...prevData, 
    //     effectiveDate:e, 
    //   }));
    // }
    else if(date=="cancellationDate"){
      setComponentData((prevData) =>({ 
        ...prevData, 
        cancellationDate:e, 
      }));
    }
    else if(date=="originalEffectiveDate"){
      setComponentData((prevData) =>({ 
        ...prevData, 
        originalEffectiveDate:e, 
      }));
    }
    else{
      const { id, value } = e.target;
     setComponentData((prevData) => ({ 
       ...prevData, 
       [id]: value, 
     }));
    }
  }
  const handleInputChange1 = (e,date) => { 
      if(date == 'dateOfLoss'){
        alert()
          setComponentData((prevData) =>({ 
        ...prevData, 
        dateOfLoss:e, 
      }));
      } 

    //  const { id, value } = e.target;
    // setComponentData((prevData) => ({ 
    //   ...prevData, 
    //   [id]: value, 
    // })); 
 

else if(date=='effectiveDate'){
  setComponentData((prevData) =>({ 
    ...prevData, 
    effectiveDate:e, 
}));
}
// else{
// const {id, value} = e.target; 

// setComponentData((prevData) =>({ 
  
//   ...prevData, 
//   [id]:value, 
// }));
// }
else if(date=='expirationDate'){
  setComponentData((prevData) =>({ 
    ...prevData, 
    expirationDate:e, 
}));
}
else{
// const {id, value} = e.target; 

// setComponentData((prevData) =>({ 
  
//   ...prevData, 
//   [id]:value, 
// }));
}

}; 

    const [policyType, setPolicyType] = useState(''); 
    const [policyTypes, setPolicyTypes] = useState([]); 
    const [policyStatus, setPolicyStatus] = useState(''); 
    const [policyStatuses, setPolicyStatuses] = useState([]); 
     
   
    useEffect(() => { 
      fetchBasicInformationDD(); 
    }, []); 
   
    const fetchBasicInformationDD = async () => { 
      try { 
       
        const response = await axios.get('http://localhost:8080/basicinformationDD'); 
        console.log('Response data:', response.data); 
        const { policyTypes, policyStatuses } = response.data; 
        console.log('Policy Type:', policyTypes); 
        console.log('Policy Status:', policyStatuses); 
        setPolicyTypes(policyTypes); 
        setPolicyStatuses(policyStatuses); 
      } catch (error) { 
        console.error('Error fetching policy types and status:', error); 
      } 
    }; 
   
 
  useEffect(() => { 
    if (fnoldataobj) { 
      const { 
        policyNumber, 
        dateOfLoss, 
        lossTime, 
        // Add other common fields here 
      } = fnoldataobj; 
 
      setComponentData((prevData) => ({ 
        ...prevData, 
        policyNumber: policyNumber || prevData.policyNumber, 
        dateOfLoss : dateOfLoss || prevData.dateOfLoss, 
        lossTime: lossTime || prevData.lossTime, 
        // Update other common fields in componentData 
      })); 
    } 
  }, [fnoldataobj, setComponentData]); 
   
  const handlePolicyTypeChange = (event) => { 
    setPolicyType(event.target.value); 
    handleInputChange(event); 
  }; 
  const handlePolicyStatusChange = (event) => { 
    setPolicyStatus(event.target.value); 
    handleInputChange(event); 
  } 
 
  const { 
    policyNumber = '', 
    policyVerified= '', 
    dateOfLoss= '', 
    lossTime = '', 
    underwriting = '', 
    effectiveDate = '', 
    expirationDate= '', 
    cancellationDate = '', 
    originalEffectiveDate = '', 
   // policyStatus= '', 
    name='', 
    address='', 
    primaryPhone='', 
  } = componentData || {}; 
 
  return ( 
    <div className="ms-3"> 
      <h5>Basic Information</h5> 
 
      <div className="row"> 
        <div className="row mb-2"> 
          <div className="col-4"> 
            <label htmlFor="policyNumber">Policy Number</label> 
          </div> 
          <div className="col-8"> 
            <input 
              id="policyNumber" 
              value={policyNumber} 
              onChange={handleInputChange} 
              type="number" 
              className="w-100 form-control" 
              maxLength={25} 
            /> 
          </div> 
        </div> 
 
        <div className="row mb-2"> 
          <div className="col-4"> 
            <label htmlFor="policyType">Policy Type</label> 
          </div> 
          <div className="col-8"> 
          <Form.Select 
            className="w-100 form-control" 
            id="policyType" 
            value={policyType} 
            onChange={handlePolicyTypeChange} 
            > 
            {policyTypes.map((type,index) => ( 
            <option key={index} value={type}> 
            {type} 
          </option> 
          ))} 
          </Form.Select> 
          </div> 
        </div> 
 
    
 
        <div className="row mb-3"> 
          <div className="col-4">Policy Verified</div> 
          <div className="col-8"> 
            <input 
              type="radio" 
              name="basicRadioGroup" 
              id="policyVerified" 
              value="yes" 
              checked={policyVerified === "yes"} 
              onChange={handleInputChange} 
            />{" "} 
            Yes <span className="ms-3"></span> 
            <input 
              type="radio" 
              name="basicRadioGroup" 
              id="policyVerified" 
              value="no" 
              checked={policyVerified === "no"} 
              onChange={handleInputChange} 
            />{" "} 
            No 
          </div> 
        </div> 
 
        <div className='row mb-2'> 
   <div className='col-4'> 
     <label htmlFor="dateOfLoss"> Date Of Loss</label> 
      
   </div> 
   <div className='col-5'> 
   <DatePicker
              className="w-100 form-control"
              selected={dateOfLoss}
              id="dateOfLoss"
             onChange={(e)=>handleInputChange(e,'dateOfLoss')}
             dateFormat="MM-dd-yyyy"
             placeholderText="MM-DD-YYYY"
           />
   </div> 
 </div> 
 
        <div className='row mb-2'> 
   <div className='col-4'> 
     <label htmlFor="lossTime">Time Of Loss</label> 
   
   </div> 
   <div className='col-5'> 
     <input id="lossTime" type="time" value={lossTime}  
     onChange={handleInputChange}className='w-100 form-control' /> 
   </div> 
 </div> 
 
        <div className="row mb-2"> 
          <div className="col-4"> 
            <label htmlFor="underwriting">Underwriting Company</label> 
          </div> 
          <div className="col-8"> 
            <input 
              type="text" 
              className="w-100 form-control" 
              id="underwriting" 
              value={underwriting} 
              onChange={handleInputChange} 
            /> 
          </div> 
        </div> 
 
        <div className="row mb-2"> 
          <div className="col-4"> 
            <label htmlFor="effectiveDate">Effective Date</label> 
            <i className="text-danger h5">*</i> 
          </div> 
          <div className="col-8"> 
          <DatePicker
      className='w-100 form-control'
        selected={effectiveDate}
         id="effectiveDate"
        onChange={(e)=>handleInputChange(e,'effectiveDate')}
        dateFormat="MM-dd-yyyy"
        placeholderText="MM-DD-YYYY"
      />

            
             
          </div> 
        </div> 
 
        <div className="row mb-2"> 
          <div className="col-4"> 
            <label htmlFor="expirationDate">Expiration Date</label> 
            <i className="text-danger h5">*</i> 
          </div> 
          <div className="col-8"> 
          <DatePicker
              className="w-100 form-control"
              selected={expirationDate}
              id="expirationDate"
             onChange={(e)=>handleInputChange(e,'expirationDate')}
             dateFormat="MM-dd-yyyy"
             placeholderText="MM-DD-YYYY"
           />
            
              
          </div> 
        </div> 
 
        <div className="row mb-2"> 
          <div className="col-4"> 
            <label htmlFor="cancellationDate">Cancellation Date</label> 
          </div> 
          <div className="col-8"> 
          <DatePicker
      className='w-100 form-control'
        selected={cancellationDate}
         id="cancellationDate"
        onChange={(e)=>handleInputChange(e,'cancellationDate')}
        dateFormat="MM-dd-yyyy"
        placeholderText="MM-DD-YYYY"
      />

            
              
          </div> 
        </div> 
 
        <div className="row mb-2"> 
          <div className="col-4"> 
            <label htmlFor="originalEffectiveDate"> 
              Original Effective Date 
            </label> 
          </div> 
          <div className="col-8"> 
          <DatePicker
      className='w-100 form-control'
        selected={originalEffectiveDate}
         id="originalEffectiveDate"
        onChange={(e)=>handleInputChange(e,'originalEffectiveDate')}
        dateFormat="MM-dd-yyyy"
        placeholderText="MM-DD-YYYY"
      />
          </div> 
        </div> 
 
       <div className="row mb-2"> 
          <div className="col-4"> 
            <label htmlFor="policyStatus">Policy Status</label> 
          </div> 
          <div className="col-8"> 
          <Form.Select 
           className="w-100 form-control" 
          id="policyStatus" 
          value={policyStatus} 
          onChange={handlePolicyStatusChange} 
            > 
          {policyStatuses.map((status,index) => ( 
          <option key={index} value={status}> 
            {status} 
          </option> 
          ))} 
          </Form.Select> 
          </div> 
            </div> 
 
        <hr /> 
        <h5>Insured</h5> 
        <div className="row mb-2"> 
          <div className="col-4"> 
            <label htmlFor='name'>Name</label> 
            <i className="text-danger h5">*</i> 
          </div> 
          <div className="col-8"> 
            <input id="name" 
              value={name} 
              onChange={handleInputChange} type="text" className="w-100 form-control" /> 
            
          </div> 
        </div> 
 
        <div className="row mb-2"> 
          <div className="col-4"> 
            <label htmlFor='address'>Address</label> 
          </div> 
          <div className="col-8"> 
            <input id="address" 
              value={address} 
              onChange={handleInputChange}type="text" className="w-100 form-control" /> 
          </div> 
        </div> 
 
        <div className="row mb-2"> 
        <div className="col-4"> 
          <label htmlFor="primaryPhone">Primary Phone</label> 
        </div> 
        <div className="col-8"> 
          <input 
            id="primaryPhone" 
            value={primaryPhone} 
            onChange={handleInputChange} 
            type="text" 
            className="w-100 form-control" 
          /> 
        </div> 
      </div> 
         
      </div> 
    </div> 
  );  
}  
  
export default Basic 
 
 
 
  