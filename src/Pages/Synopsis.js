import React, { useState, useEffect } from 'react';
import { saveAs } from 'file-saver';

function Synopsis({ claimNumber }) {
  const [componentData, setComponentData] = useState(null);
  const [loading, setLoading] = useState(true);
    const [handleButtonClickDisabled, setHandleButtonClickDisabled] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/claim/loss/${claimNumber}`);

        if (response.ok) {
          const data = await response.json();

          if (Array.isArray(data) && data.length > 0) {
            const claim = data[0];
            claim.dateOfLoss = new Date(claim.dateOfLoss);
            claim.dateOfReport = new Date(claim.dateOfReport);
            claim.effectiveDate=new Date(claim.effectiveDate);
            claim.expirationDate=new Date(claim.expirationDate);
            claim.cancellationDate=new Date(claim.cancellationDate);
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

 
  const handleCsvDownload = async () => {
    try {
      const response = await fetch('http://localhost:8080/download-csv');

      if (response.ok) {
        const blob = await response.blob();
        saveAs(blob, 'nxt_master.csv');
        alert('CSV downloaded successfully!');
      } else {
        console.error('Failed to download CSV');
      }
    } catch (error) {
      console.error('Error downloading CSV:', error);
    }
  };

  const handleButtonClick = async () => {
    if (!handleButtonClickDisabled) {
      try {
        const response = await fetch('http://localhost:8080/claim/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            claimNumber: claimNumber,
            policyNumber: componentData?.policyNumber || '',
          }),
        });

        if (response.ok) {
          console.log('Request sent successfully!');
          setHandleButtonClickDisabled(true);
        } else {
          console.error('Failed to send request');
        }
      } catch (error) {
        console.error('Error sending request:', error);
      }
    }
  };
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
            <label htmlFor="claimNumber">Claim Number</label>
          </div>
          <div className="col-5">
            <input
              id="claimNumber"
              value={claimNumber}
              readOnly
              type="text"
              className="w-100 form-control"
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

      <div className="row mb-2">
        <div className="col-4">
          <label htmlFor="lossTime">Time Of Loss</label>
          <i className="text-danger h5">*</i>
        </div>
        <div className="col-5">
          <input
            id="lossTime"
            type="time"
            value={componentData?.timeOfLoss|| ''}
            className="w-100 form-control"
          />
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-4">
          <label htmlFor="reportedBy">Reported By</label>
          <i className="text-danger h5">*</i>
        </div>
        <div className="col-5">
          <input
            id="reportedBy"
            type="text"
            value={componentData?.reportedBy || ''}
            className="w-100 form-control"
          />
        </div>
      </div>

      <div className="row mb-2"> 
          <div className="col-4"> 
            <label htmlFor="policyType">Policy Type</label> 
          </div> 
          <div className="col-5"> 
          <input
            className="w-100 form-control" 
            id="policyType" 
            value={componentData?.policyType || ''}
          />
        </div>
      </div>  
      <div className="row mb-2"> 
          <div className="col-4"> 
            <label htmlFor="effectiveDate">Effective Date</label> 
            <i className="text-danger h5">*</i> 
          </div> 
          <div className="col-5"> 
          {/* <DatePicker
      className='w-100 form-control'
        selected={effectiveDate}
         id="effectiveDate"
        onChange={(e)=>handleInputChange(e,'effectiveDate')}
        dateFormat="MM-dd-yyyy"
        placeholderText="MM-DD-YYYY"
      /> */}
<input id="effectiveDate" type="Date" value={componentData?.effectiveDate?.toISOString().split('T')[0] || ''}  
     className='w-100 form-control' /> 
             
          </div> 
        </div> 
 
        <div className="row mb-2"> 
          <div className="col-4"> 
            <label htmlFor="expirationDate">Expiration Date</label> 
            <i className="text-danger h5">*</i> 
          </div> 
          <div className="col-5"> 
          {/* <DatePicker
              className="w-100 form-control"
              selected={expirationDate}
              id="expirationDate"
             onChange={(e)=>handleInputChange(e,'expirationDate')}
             dateFormat="MM-dd-yyyy"
             placeholderText="MM-DD-YYYY"
           /> */}
           <input id="expirationDate" type="Date" value={componentData?.expirationDate?.toISOString().split('T')[0] || ''}  
     className='w-100 form-control' /> 
            
              
          </div> 
        </div> 
 
        <div className="row mb-2"> 
          <div className="col-4"> 
            <label htmlFor="cancellationDate">Cancellation Date</label> 
          </div> 
          <div className="col-5"> 
          {/* <DatePicker
      className='w-100 form-control'
        selected={cancellationDate}
         id="cancellationDate"
        onChange={(e)=>handleInputChange(e,'cancellationDate')}
        dateFormat="MM-dd-yyyy"
        placeholderText="MM-DD-YYYY"
      /> */}
       <input id="cancellationDate" type="Date" value={componentData?.cancellationDate?.toISOString().split('T')[0] || ''}  
     className='w-100 form-control' />    
          </div> 
        </div>  

        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="lossCause">Loss Cause</label>
          </div>
          <div className="col-5">
            <input
              className="w-100 form-control"
              id="lossCause"
              value={componentData?.lossCause || ''}
            />	
          </div>
        </div>

        {/* <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="otherDescription">Other Description</label>
          </div>
          <div className="col-8">
            <input
              type="text"
              className="w-100 form-control"
              maxLength={500}
              id="otherDescription"
              value={otherDescription}
              onChange={handleInputChange}
            />
          </div>
        </div> */}

        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="typeOfLoss">Type Of Loss</label>
          </div>
          <div className="col-5">
            <input
              className="w-100 form-control"
              id="typeOfLoss"
              value={componentData?.typeOfLoss || ''}
            />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="lossAddress">Address</label>
            </div>
          <div className="col-5">
            <input
              type="text"
              className="w-100 form-control"
              maxLength={500}
              id="lossAddress"
              value={componentData?.address || ''}
            />
          </div>
        </div>
        <div className="row mb-2">
        <div className="col-4">
          <label htmlFor="lossParty">Loss party</label>
        </div>
        <div className="col-5">
          <input
          type="text"
          className="w-100 form-control"
            id="lossParty"
            value={componentData?.lossParty || ''}
          />
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-4">
          <label htmlFor="primaryCoverage">Primary Coverage</label>
        </div>
        <div className="col-5">
          <input
          type="text"
          className="w-100 form-control"
            id="primaryCoverage"
            value={componentData?.primaryCoverage || ''}
          />
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-4">
          <label htmlFor="status">Exposure Status</label>
        </div>
        <div className="col-5">
          <input
          type="text"
          className="w-100 form-control"
            id="status"
            value={componentData?.exposuresStatus || ''}
          />
        </div>
      </div>


        <div>
        <button onClick={handleButtonClick} disabled={handleButtonClickDisabled} className="btn btn-primary mb-2">
        Send Claim to Guidewire
      </button>
      </div>
      <div>
        
        <button onClick={
          handleCsvDownload} className="btn btn-primary mb-2">Download CSV</button>
      </div>
        {/* <div>  
          <Upcomingactivities claimNumber={claimNumber} />  
        </div>   */}
        {/* <div>  
          <h2>Recent Notes</h2>  
        </div>   */}
      </div>  
    </div>  
  );  
};
  
export default Synopsis;










// import React, { useState, useEffect } from 'react';  
// //import Form from 'react-bootstrap/Form';  
// import Upcomingactivities from '../components/Synopsis.components/upcomingactivities.component';  
  
// function Synopsis({ claimNumber }) {  
//   const [componentData, setComponentData] = useState(null);  
//   const [loading, setLoading] = useState(true);  
  
//   useEffect(() => {  
//     const fetchData = async () => {  
//       try {  
//         const response = await fetch(`http://localhost:8080/claim/loss/${claimNumber}`);  
          
  
//         if (response.ok) {  
//           const data = await response.json();  
  
//           if (Array.isArray(data) && data.length > 0) {  
//             const claim = data[0];  
//             claim.dateOfLoss = new Date(claim.dateOfLoss); // Convert date string to Date object  
//             claim.dateOfReport = new Date(claim.dateOfReport); // Convert date string to Date object  
//             setComponentData(claim);  
//           }  
//         } else {  
//           throw new Error('Failed to fetch data');  
//         }  
  
//         setLoading(false);  
//       } catch (error) {  
//         console.error('Error fetching data:', error);  
//         setLoading(false);  
//       }  
//     };  
  
//     fetchData();  
//   }, [claimNumber]);  
//   const claim_temp=claimNumber; 
 
//   if (loading) {  
//     return <div>Loading...</div>;  
//   }  

//   // useEffect(() => { 
//   //   const fetchData = async () => { 
//   //     try { 
//   //       const response = await fetch('http://localhost:8080/claim/loss', { 
//   //         method: 'POST', 
//   //         headers: { 
//   //           'Content-Type': 'application/json', 
//   //         }, 
//   //         body: JSON.stringify({ 
//   //           claimNumber: claimNumber, 
//   //           policyNumber: '', // Add the policy number if needed 
//   //         }), 
//   //       }); 
 
//   //       if (response.ok) { 
//   //         const data = await response.json(); 
 
//   //         if (Array.isArray(data) && data.length > 0) { 
//   //           const claim = data[0]; 
//   //           claim.dateOfLoss = new Date(claim.dateOfLoss); // Convert date string to Date object 
//   //           claim.dateOfReport = new Date(claim.dateOfReport); // Convert date string to Date object 
//   //           setComponentData(claim); 
//   //         } 
//   //       } else { 
//   //         throw new Error('Failed to fetch data'); 
//   //       } 
 
//   //       setLoading(false); 
//   //     } catch (error) { 
//   //       console.error('Error fetching data:', error); 
//   //       setLoading(false); 
//   //     } 
//   //   }; 
 
//   //   fetchData(); 
//   // }, [claimNumber]); 
 
//   // if (loading) { 
//   //   return <div>Loading...</div>; 
//   // }
  
//   return (  
//     <div className="ms-3">  
//       <h5>Claim Synopsis</h5>  
//       <hr />  
  
//       <div className="row">  
//       <div className="row mb-2">  
//           <div className="col-4">  
//             <label htmlFor="claim_temp">Claim Number</label>  
//           </div>  
//           <div className="col-5">  
//             <input  
//               id="claimNumber"  
//               value={claimNumber}  
//               readOnly  
//               type="number"  
//               className="w-100 form-control"  
//               maxLength={25}  
//             />  
//           </div>  
//           </div>  
//         <div className="row mb-2">  
//           <div className="col-4">  
//             <label htmlFor="policyNumber">Policy Number</label>  
//           </div>  
//           <div className="col-5">  
//             <input  
//               id="policyNumber"  
//               value={componentData?.policyNumber || ''}  
//               readOnly  
//               type="number"  
//               className="w-100 form-control"  
//               maxLength={25}  
//             />  
//           </div>  
//         </div>  
//         <div className="row mb-2">  
//           <div className="col-4">  
//             <label htmlFor="name">Name</label>  
//             <i className="text-danger h5">*</i>  
//           </div>  
//           <div className="col-5">  
//             <input  
//               id="name"  
//               value={componentData?.name || ''}  
//               readOnly  
//               type="text"  
//               className="w-100 form-control"  
//             />  
//           </div>  
//         </div>  
//         <div className="row mb-2">  
//           <div className="col-4">  
//             <label htmlFor="dateOfLoss">Date Of Loss</label>  
//           </div>  
//           <div className="col-5">  
//             <input  
//               id="dateOfLoss"  
//               type="date"  
//               value={componentData?.dateOfLoss?.toISOString().split('T')[0] || ''}  
//               readOnly  
//               className="w-100 form-control"  
//             />  
//           </div>  
//         </div>  
//         <div className="row mb-2">  
//           <div className="col-4">  
//             <label htmlFor="adjuster">Adjuster</label>  
//           </div>  
//           <div className="col-5">  
//             <input  
//               id="adjuster"  
//               type="text"  
//               value={componentData?.adjuster || ''}  
//               readOnly  
//               className="w-100 form-control"  
//             />  
//           </div>  
//         </div>  
//         <div className="row mb-2">  
//           <div className="col-4">  
//             <label htmlFor="dateOfReport">Date Reported</label>  
//           </div>  
//           <div className="col-5">  
//             <input  
//               type="date"  
//               id="dateOfReport"  
//               value={componentData?.dateOfReport?.toISOString().split('T')[0] || ''}  
//               readOnly  
//               className="w-100 form-control"  
//             />  
//           </div>  
//         </div>  
//         <div className="row mb-2">  
//           <div className="col-4">  
//             <label htmlFor="address1">Loss Location</label>  
//           </div>  
//           <div className="col-5">  
//             <input  
//               id="address1"  
//               type="text"  
//               value={componentData?.address1 || ''}  
//               readOnly  
//               className="w-100 form-control"  
//             />  
//           </div>  
//         </div>  
//         <div className="row mb-2">  
//           <div className="col-4">  
//             <label htmlFor="lossDescription">Loss Description</label>  
//           </div>  
//           <div className="col-5">  
//             <input  
//               type="text"  
//               className="w-100 form-control"  
//               maxLength={500}  
//               id="lossDescription"  
//               value={componentData?.lossDescription || ''}  
//               readOnly  
//             />  
//           </div>  
//         </div>  
//         <div>  
//           <Upcomingactivities claimNumber={claimNumber} />  
//         </div>  
//         <div>  
//           <h2>Recent Notes</h2>  
//         </div>  
//       </div>  
//     </div>  
//   );  
// }  
  
// export default Synopsis;














// //import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import React, { useState, useEffect } from 'react'; 
// //import Form from 'react-bootstrap/Form'; 
// import Upcomingactivities from '../components/Synopsis.components/upcomingactivities.component'; 
 
// function Synopsis({ claimNumber }) {
//   const [componentData, setComponentData] = useState(null); 
//   const [loading, setLoading] = useState(true); 

  
//   const handleInputChange = (e,date) => { 
//   //     if(date == 'dateOfLoss'){
//   //  setComponentData((prevData) =>({ 
//   //       ...prevData, 
//   //       dateOfLoss:e, 
//   //     }));
//   //     }

//   //   else if(date=='datereport'){
//   //         setComponentData((prevData) =>({ 
//   //           ...prevData, 
//   //           dateOfReport:e, 
//   //       }));
//   //       }
//   //       else{
//            const { id, value } = e.target;
//            setComponentData((prevData) =>({ 
//             ...prevData, 
//             [id]:value, 
//           }));
//           }
          
//           const { 
//           dateOfLoss= '', 
//           dateOfReport='', 
//           } = componentData || {}; 
  
     
 
//   useEffect(() => { 
//     const fetchData = async () => { 
//       try { 
//         const response = await fetch('http://localhost:8080/claim/loss/${claimNumber}); 
         
 
//         if (response.ok) { 
//           const data = await response.json(); 
 
//           if (Array.isArray(data) && data.length > 0) { 
//             const claim = data[0]; 
//             claim.dateOfLoss = new Date(claim.dateOfLoss); // Convert date string to Date object 
//             claim.dateOfReport = new Date(claim.dateOfReport); // Convert date string to Date object 
//             setComponentData(claim); 
//           } 
//         } else { 
//           throw new Error('Failed to fetch data'); 
//         } 
 
//         setLoading(false); 
//       } catch (error) { 
//         console.error('Error fetching data:', error); 
//         setLoading(false); 
//       } 
//     }; 
 
//     fetchData(); 
//   }, [claimNumber]); 
//   //const claim_temp=claimNumber; 
//   if (loading) { 
//     return <div>Loading...</div>; 
//   } 
 
//   return ( 
//     <div className="ms-3"> 
//       <h5>Claim Synopsis</h5> 
//       <hr /> 
 
//       <div className="row"> 
//       <div className="row mb-2"> 
//           <div className="col-4"> 
//             <label htmlFor="claim_temp">Claim Number</label> 
//           </div> 
//           <div className="col-5"> 
//             <input 
//               id="claimNumber" 
//               value={claimNumber} 
//               readOnly 
//               type="number" 
//               className="w-100 form-control" 
//               maxLength={25} 
//             /> 
//           </div> 
//           </div> 
//         <div className="row mb-2"> 
//           <div className="col-4"> 
//             <label htmlFor="policyNumber">Policy Number</label> 
//           </div> 
//           <div className="col-5"> 
//             <input 
//               id="policyNumber" 
//               value={componentData?.policyNumber || ''} 
//               readOnly 
//               type="number" 
//               className="w-100 form-control" 
//               maxLength={25} 
//             /> 
//           </div> 
//         </div> 
//         <div className="row mb-2"> 
//           <div className="col-4"> 
//             <label htmlFor="name">Name</label> 
//             <i className="text-danger h5">*</i> 
//           </div> 
//           <div className="col-5"> 
//             <input 
//               id="name" 
//               value={componentData?.name || ''} 
//               readOnly 
//               type="text" 
//               className="w-100 form-control" 
//             /> 
//           </div> 
//         </div> 
//         <div className="row mb-2"> 
//           <div className="col-4"> 
//             <label htmlFor="dateOfLoss">Date Of Loss</label> 
//           </div>
//           <div className="col-5"> 
//           {/* <DatePicker
//               className="w-100 form-control"
//               selected={componentData?.dateOfLoss|| ''}
//               id="dateOfLoss"
//              onChange={(e)=>handleInputChange(e,'dateOfLoss')}
//              dateFormat="MM-dd-yyyy"
//              placeholderText="MM-DD-YYYY"
//            /> */}
//            <input id="dateOfLoss" type="date" value={dateOfLoss}  
//      onChange={handleInputChange} className='w-100 form-control' />
        
//           </div> 
//         </div> 
//         <div className="row mb-2"> 
//           <div className="col-4"> 
//             <label htmlFor="adjuster">Adjuster</label> 
//           </div> 
//           <div className="col-5"> 
//             <input 
//               id="adjuster" 
//               type="text" 
//               value={componentData?.adjuster || ''} 
//               readOnly 
//               className="w-100 form-control" 
//             /> 
//           </div> 
//         </div> 
//         <div className="row mb-2"> 
//           <div className="col-4"> 
//             <label htmlFor="dateOfReport">Date Reported</label> 
//             </div>
// <div className='col-5'>
//   <input type="date" id="dateOfReport" value={dateOfReport} 
      
//     onChange={handleInputChange} className='w-100 form-control' />
    
//       {/* <DatePicker
//       className='w-100 form-control'
//         selected={componentData?.dateOfReport || ''}
//          id="dateOfReport"
//         onChange={(e)=>handleInputChange(e,'datereport')}
//         dateFormat="MM-dd-yyyy"
//         placeholderText="MM-DD-YYYY"
//       /> */}
            
//           </div> 
//         </div> 
//         <div className="row mb-2"> 
//           <div className="col-4"> 
//             <label htmlFor="address1">Loss Location</label> 
//           </div> 
//           <div className="col-5"> 
//             <input 
//               id="address1" 
//               type="text" 
//               value={componentData?.address1 || ''} 
//               readOnly 
//               className="w-100 form-control" 
//             /> 
//           </div> 
//         </div> 
//         <div className="row mb-2"> 
//           <div className="col-4"> 
//             <label htmlFor="lossDescription">Loss Description</label> 
//           </div> 
//           <div className="col-5"> 
//             <input 
//               type="text" 
//               className="w-100 form-control" 
//               maxLength={500} 
//               id="lossDescription" 
//               value={componentData?.lossDescription || ''} 
//               readOnly 
//             /> 
//           </div> 
//         </div> 
//         <div> 
//           <Upcomingactivities claimNumber={claimNumber} /> 
//         </div> 
//         <div> 
//           <h2>Recent Notes</h2> 
//         </div> 
//       </div> 
//     </div> 
//   ); 
//   }

      
 
// export default Synopsis; 