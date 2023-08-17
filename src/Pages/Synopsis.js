import React, { useState, useEffect} from 'react'; 
//import {saveAs} from 'file-saver'; 
//import Form from 'react-bootstrap/Form';  
//import Upcomingactivities from '../components/Synopsis.components/upcomingactivities.component';  
  
function Synopsis({ claimNumber }) {  
  const [componentData, setComponentData] = useState(null);  
  const [loading, setLoading] = useState(true);  
  //const [csvContent, setCSVContent] = useState('');
  const[handleButtonClickDisabled, sethandleButtonClickDisabled] = useState('');
  
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

  const generateCSVContent = () => {
    if (componentData) {
      const csvRows = [];

      csvRows.push(Object.keys(componentData[0]).join(','));
      const values = Object.values(componentData);
      csvRows.push(values.join(','));
      return csvRows.join('\n');
  }
  return '';
};
 
 // Function to handle the button click
 const handleButtonClick = async () => {
  try {
    // Send the request to the backend with claimNumber and policynumber as parameters
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
      // Handle success
      console.log('Request sent successfully!');
    } else {
      throw new Error('Failed to send request');
    }
  } catch (error) {
    console.error('Error sending request:', error);
  }
 
    sethandleButtonClickDisabled(true);

};

const handleDownloadClick = () => {
  const csvContent = generateCSVContent();

  if (csvContent) {
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const blobURL = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = blobURL;
    link.download = 'data.csv';
    link.click();

    URL.revokeObjectURL(blobURL);
  } else {
    console.error('CSV content is empty');
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
        <div>
        <button onClick={handleButtonClick} disabled={handleButtonClickDisabled} className="btn btn-primary mb-2">
        Send Claim to Guidewire
      </button>
      <button onClick={handleDownloadClick} className="btn btn-primary mb-2">
          Download CSV
        </button>
      </div>
      {/* <div>
        <button onClick={handleClick} className="btn btn-primary mb-2">Download CSV</button>
      </div> */}
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