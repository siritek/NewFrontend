import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const sendOptionDataToBackend = (optionId, action, optionData) => {
  // Make an API request to send the option data to the backend
  fetch('http://localhost:8080/policystatus', {
    method: 'DELETE',
    body: JSON.stringify({ optionId, action, optionData }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      console.log('Option data sent to backend:', response);
    })
    .catch(error => {
      console.error('Error sending option data to backend:', error);
    });
};

function Dropdownlist() {
  const [componentData, setComponentData] = useState({
    policyStatusOptions: [],
  });

  const [showInput, setShowInput] = useState(false);
  const [policyStatus, setPolicyStatus] = useState('');
  const [policyStatuses, setPolicyStatuses] = useState([]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setComponentData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handlePolicyStatusChange = (event) => {
    const { value } = event.target;
    setPolicyStatus(value);
  };

  const handleOptionAction = (e, action) => {
    const { id } = e.target;
    const optionId = id.split('-')[0];
    const optionValue = componentData[optionId];
    const optionInput = componentData[optionId + 'Input'];

    if (action === 'delete') {
      setComponentData((prevData) => ({
        ...prevData,
        [optionId + 'Options']: prevData[optionId + 'Options'].filter(option => option !== optionValue),
        [optionId]: 'None'
      }));
      sendOptionDataToBackend(optionId, 'delete', optionValue);
    } else if (action === 'add' && optionInput) {
      setComponentData((prevData) => ({
        ...prevData,
        [optionId + 'Options']: [...prevData[optionId + 'Options'], optionInput],
        [optionId + 'Input']: '',
      }));
      sendOptionDataToBackend(optionId, 'add', optionInput);
      setShowInput(false);
    }
  };

  const toggleInput = () => {
    setShowInput(true);
  };

  const DropdownlistDD = async () => {
    try {
      const response = await axios.get('http://localhost:8080/policystatus');
      console.log('Response data:', response.data);
      if (response.data && response.data.length > 0) {
        setPolicyStatuses(response.data);
      }
    } catch (error) {
      console.error('Error fetching policy types and status:', error);
    }
  };

  useEffect(() => {
    DropdownlistDD();
  }, []);

  return (
    <div>
      <div className="ms-3">
        <h2>Dropdown-list</h2>
        <hr />

        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="policyStatus">Policy Status</label>
          </div>
          <div className="col-4">
            <Form.Select
              className="w-100 form-control"
              id="policyStatus"
              value={policyStatus}
              onChange={handlePolicyStatusChange}
            >
              {policyStatuses.map((status, index) => (
                <option key={index}>{status}</option>
              ))}
            </Form.Select>
          </div>
        </div>

        {policyStatuses.map((status, index) => (
          <div key={index} className="row mb-2">
            <div className="col-4">
              <label htmlFor={`${status}Options`}>{status}</label>
            </div>
            <div className="col-4">
              <Form.Select
                className="w-100 form-control"
                id={`${status}Options`}
                value={componentData[`${status}Options`]}
                onChange={handleInputChange}
              >
                {componentData[`${status}Options`].map((option, index) => (
                  <option key={index}>{option}</option>
                ))}
              </Form.Select>
            </div>
            <div className="col-4">
              <Button
                variant="danger"
                id={`${status}Options-delete`}
                onClick={(e) => handleOptionAction(e, 'delete')}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}

        {showInput && (
          <div className="row mb-2">
            <div className="col-4">
              <input
                className="w-100 form-control"
                id={`${policyStatus}OptionsInput`}
                value={componentData[`${policyStatus}OptionsInput`]}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-4">
              <Button
                variant="success"
                id={`${policyStatus}Options-add`}
                onClick={(e) => handleOptionAction(e, 'add')}
              >
                Add
              </Button>
            </div>
          </div>
        )}

        {!showInput && (
          <div className="row mb-2">
            <div className="col-4">
              <Button variant="primary" onClick={toggleInput}>
                Add New Option
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dropdownlist;








// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";

 
// function Dropdownlist() { 
//   const [componentData, setComponentData] = useState({ 
//     policyStatusOptions: [],
//   }); 
 
//    const [showInput, setShowInput] = useState(false); 
//    const [policyStatus, setPolicyStatus] = useState('');
//   const [policyStatuses, setPolicyStatuses] = useState([]); 

 
//   const handleInputChange = (e) => {
//     const { id, value } = e.target;
//     setComponentData((prevData) => ({
//       ...prevData,
//       [id]: value,
//     }));
//   };

//   const handlePolicyStatusChange = (event) => {
//     const { value } = event.target;
//     setComponentData((prevData) => ({
//       ...prevData,
//       policyStatus: value,
//     }));
//   };
 
//   const handleOptionAction = (e, action) => { 
//     const { id } = e.target; 
//     const optionId = id.split('-')[0]; 
//     const optionValue = componentData[optionId]; 
//     const optionInput = componentData[optionId + 'Input']; 
 
//     if (action === 'delete') { 
//       setComponentData((prevData) => ({ 
//         ...prevData, 
//         [optionId + 'Options']: prevData[optionId + 'Options'].filter(option => option !== optionValue), 
//         [optionId]: 'None' 
//       })); 
//       sendOptionDataToBackend(optionId, 'delete', optionValue); 
//     } else if (action === 'add' && optionInput) { 
//       setComponentData((prevData) => ({ 
//         ...prevData, 
//         [optionId + 'Options']: [...prevData[optionId + 'Options'], optionInput], 
//         [optionId + 'Input']: '', 
//       })); 
//       sendOptionDataToBackend(optionId, 'add', optionInput); 
//       setShowInput(false); 
//     } 
//   }; 
 
//   const toggleInput = () => { 
//     setShowInput(true); 
//   } 
 
//   useEffect(() => { 
//     // This effect runs whenever the componentData changes 
//     // You can modify this code to send the added and deleted data to your backend 
   
//     // Prepare the data to be sent 
//     const addedData = { 
//       policyStatusInput: componentData.policyStatusInput, 
//       // Add other added data properties here 
//     }; 
   
//     const deletedData = { 
//       deletedOptions: Object.entries(componentData) 
//         .filter(([key, value]) => key.endsWith("Options") && value === "None") 
//         .map(([key]) => key.slice(0, -7)), 
//       // Add other deleted data properties here 
//     }; 
  
//     // const sendOptionDataToBackend = (optionId, action, optionData) => {
//     // Send the data to the backend 
//     fetch("http:localhost:8080/policystatus", { 
//       method: "POST", 
//       headers: { 
//         "Content-Type": "application/json", 
//       }, 
//       body: JSON.stringify({ addedData, deletedData }), 
//     }) 
//       .then((response) => response.json()) 
//       .then((data) => { 
//         // Handle the response from the backend if needed 
//       }) 
//       .catch((error) => { 
//         // Handle any errors that occurred during the request 
//       }); 
//     // } 
    
//   }, [componentData]); // Run this effect whenever componentData changes  

//   // const sendOptionDataToBackend = (optionId, action, optionData) => { 
//   //   // Make an API request to send the option data to the backend 
//   //   fetch('http:localhost:8080/policystatus', { 
//   //     method: 'POST', 
//   //     body: JSON.stringify({ optionId, action, optionData }), 
//   //     headers: { 
//   //       'Content-Type': 'application/json' 
//   //     } 
//   //   }) 
//   //     .then(response => { 
//   //       console.log('Option data sent to backend:', response); 
//   //     }) 
//   //     .catch(error => { 
//   //       console.error('Error sending option data to backend:', error); 
//   //     }); 
//   // } 

//   useEffect(() => { 
//     DropdownlistDD(); 
//   }, []); 
 
//   const DropdownlistDD = async () => { 
//     try { 
     
//       const response = await axios.get('http://localhost:8080/policystatus'); 
//       console.log('Response data:', response.data); 
//       setPolicyStatuses(response.data);
//       console.log('Policy Statusess:', policyStatuses);
       
//     } catch (error) { 
//       console.error('Error fetching policy types and status:', error); 
//     } 
//   }; 
 
//   // const { 
//   //   policyType = '', 
//   //   //policyStatus = '', 
//   //   adjuster = '', 
//   //   lossCause = '', 
//   //   policyTypeOptions, 
//   //   policyStatuses, 
//   //   adjusterOptions, 
//   //   lossCauseOptions, 
//   //   policyTypeInput = '', 
//   //   policyStatusInput = '', 
//   //   adjusterInput = '', 
//   //   lossCauseInput = '' 
//   // } = componentData || {}; 
 
//   return ( 
//     <div> 
//       <div className="ms-3"> 
//         <h2>Dropdown-list</h2> 
//         <hr /> 


//         <div className="row mb-2">
//   <div className="col-4">
//     <label htmlFor="policyStatus">Policy Status</label>
//   </div>
//   <div className="col-4">
//     <Form.Select
//       className="w-100 form-control"
//       id="policyStatus"
//       value={policyStatus}
//       onChange={handlePolicyStatusChange}
//     >
//       { policyStatuses.map((status,index) => (
//         <option key={index} value={status}>
//           {status}
//         </option>
//       ))}
//     </Form.Select>
//     </div> 
//           <div className="col-4"> 
//             <Button id="policyStatus-delete" onClick={(e) => handleOptionAction(e, 'delete')}>Delete</Button> 
//           </div> 
//         </div> 
 
//         <div className="row mb-2"> 
//           <div className="col-4"> 
//           </div> 
//           <div className="col-4"> 
//             {showInput && ( 
//               <Form.Control 
//                 type="text" 
//                 id="policyStatus" 
//                 value={componentData.policyStatus} 
//                 onChange={handleInputChange} 
//               /> 
//             )} 
//           </div> 
//           <div className="col-4"> 
//             {!showInput && ( 
//               <Button id="policyStatus-add" onClick={toggleInput}>Add</Button> 
//             )} 
//             {showInput && ( 
//               <Button id="policyStatus-add" onClick={(e) => handleOptionAction(e, 'add')}>Confirm</Button> 
//             )} 
//           </div> 
//         </div> 
 

//         {/* <div className="row mb-2"> 
//           <div className="col-4"> 
//             <label htmlFor="policyStatus">Policy Status</label> 
//           </div> 
//           <div className="col-4"> 
//             <Form.Select 
//               className="w-100 form-control" 
//               id="policyStatus" 
//               value={policyStatus} 
//               onChange={handlePolicyStatusChange} 
//             > 
//               {policyStatusOptions.map(option => ( 
//                 <option key={option} value={option}>{option}</option> 
//               ))} 
//             </Form.Select> 
//           </div> 
//           <div className="col-4"> 
//             <Button id="policyStatus-delete" onClick={(e) => handleOptionAction(e, 'delete')}>Delete</Button> 
//           </div> 
//         </div> 
 
//         <div className="row mb-2"> 
//           <div className="col-4"> 
//           </div> 
//           <div className="col-4"> 
//             {showInput && ( 
//               <Form.Control 
//                 type="text" 
//                 id="policyStatusInput" 
//                 value={policyStatusInput} 
//                 onChange={handleInputChange} 
//               /> 
//             )} 
//           </div> 
//           <div className="col-4"> 
//             {!showInput && ( 
//               <Button id="policyStatus-add" onClick={toggleInput}>Add</Button> 
//             )} 
//             {showInput && ( 
//               <Button id="policyStatus-add" onClick={(e) => handleOptionAction(e, 'add')}>Confirm</Button> 
//             )} 
//           </div> 
//         </div>  */}
 
//         {/* Repeat the above pattern for other options */} 
         
//       </div> 
//     </div> 
//   ); 
// } 
 
// export default Dropdownlist;