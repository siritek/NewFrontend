import React, { useState, useEffect } from 'react'; 
//import Form from 'react-bootstrap/Form'; 
import Upcomingactivities from '../components/Synopsis.components/upcomingactivities.component'; 
 
function Synopsis({ claimNumber }) { 
  const [componentData, setComponentData] = useState(null); 
  const [loading, setLoading] = useState(true); 
 
  useEffect(() => { 
    const fetchData = async () => { 
      try { 
        const response = await fetch(`http://localhost:8080/claim/loss/${claimNumber}`); 
         
 
        if (response.ok) { 
          const data = await response.json(); 
 
          if (Array.isArray(data) && data.length > 0) { 
            const claim = data[0]; 
            claim.dateOfLoss = new Date(claim.dateOfLoss); // Convert date string to Date object 
            claim.dateOfReport = new Date(claim.dateOfReport); // Convert date string to Date object 
            setComponentData(claim); 
          } 
        } else { 
          throw new Error('Failed to fetch data'); 
        } 
 
        setLoading(false); 
      } catch (error) { 
        console.error('Error fetching data:', error); 
        setLoading(false); 
      } 
    }; 
 
    fetchData(); 
  }, [claimNumber]); 
  const claim_temp=claimNumber; 
  if (loading) { 
    return <div>Loading...</div>; 
  } 
 
  return ( 
    <div className="ms-3"> 
      <h5>Claim Synopsis</h5> 
      <hr /> 
 
      <div className="row"> 
      <div className="row mb-2"> 
          <div className="col-4"> 
            <label htmlFor="claim_temp">Claim Number</label> 
          </div> 
          <div className="col-5"> 
            <input 
              id="claim_temp" 
              value={claim_temp} 
              readOnly 
              type="number" 
              className="w-100 form-control" 
              maxLength={25} 
            /> 
          </div> 
          </div> 
        <div className="row mb-2"> 
          <div className="col-4"> 
            <label htmlFor="policyNumber">Policy Number</label> 
          </div> 
          <div className="col-5"> 
            <input 
              id="policyNumber" 
              value={componentData?.policyNumber || ''} 
              readOnly 
              type="number" 
              className="w-100 form-control" 
              maxLength={25} 
            /> 
          </div> 
        </div> 
        <div className="row mb-2"> 
          <div className="col-4"> 
            <label htmlFor="name">Name</label> 
            <i className="text-danger h5">*</i> 
          </div> 
          <div className="col-5"> 
            <input 
              id="name" 
              value={componentData?.name || ''} 
              readOnly 
              type="text" 
              className="w-100 form-control" 
            /> 
          </div> 
        </div> 
        <div className="row mb-2"> 
          <div className="col-4"> 
            <label htmlFor="dateOfLoss">Date Of Loss</label> 
          </div> 
          <div className="col-5"> 
            <input 
              id="dateOfLoss" 
              type="date" 
              value={componentData?.dateOfLoss?.toISOString().split('T')[0] || ''} 
              readOnly 
              className="w-100 form-control" 
            /> 
          </div> 
        </div> 
        <div className="row mb-2"> 
          <div className="col-4"> 
            <label htmlFor="adjuster">Adjuster</label> 
          </div> 
          <div className="col-5"> 
            <input 
              id="adjuster" 
              type="text" 
              value={componentData?.adjuster || ''} 
              readOnly 
              className="w-100 form-control" 
            /> 
          </div> 
        </div> 
        <div className="row mb-2"> 
          <div className="col-4"> 
            <label htmlFor="dateOfReport">Date Reported</label> 
          </div> 
          <div className="col-5"> 
            <input 
              type="date" 
              id="dateOfReport" 
              value={componentData?.dateOfReport?.toISOString().split('T')[0] || ''} 
              readOnly 
              className="w-100 form-control" 
            /> 
          </div> 
        </div> 
        <div className="row mb-2"> 
          <div className="col-4"> 
            <label htmlFor="address1">Loss Location</label> 
          </div> 
          <div className="col-5"> 
            <input 
              id="address1" 
              type="text" 
              value={componentData?.address1 || ''} 
              readOnly 
              className="w-100 form-control" 
            /> 
          </div> 
        </div> 
        <div className="row mb-2"> 
          <div className="col-4"> 
            <label htmlFor="lossDescription">Loss Description</label> 
          </div> 
          <div className="col-5"> 
            <input 
              type="text" 
              className="w-100 form-control" 
              maxLength={500} 
              id="lossDescription" 
              value={componentData?.lossDescription || ''} 
              readOnly 
            /> 
          </div> 
        </div> 
        <div> 
          <Upcomingactivities claimNumber={claimNumber} /> 
        </div> 
        <div> 
          <h2>Recent Notes</h2> 
        </div> 
      </div> 
    </div> 
  ); 
} 
 
export default Synopsis; 