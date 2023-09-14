import React, { useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import Form from 'react-bootstrap/Form';
import Synopsis from './Synopsis';

function Search({ setComponentData, componentData }) {
  const columns = [
    {
      dataField: 'claimNumber',
      text: 'Claim Number',
      sort: true,
      formatter: (cell, row) => (
        <button
          onClick={() => handleLinkClick(row)}
          className="claim-link"
        >
          {row.claimNumber}
        </button>
      ),
    },
    {
      dataField: 'policyNumber',
      text: 'Policy Number',
      sort: true,
    },
    {
      dataField: 'insuredName',
      text: 'Insured Name',
      sort: true,
    },
    {
      dataField: 'adjuster',
      text: 'Adjuster',
      sort: true,
    },
    {
      dataField: 'dateOfLoss',
      text: 'Date of Loss',
      sort: true,
    },
    {
      dataField: 'policyStatus',
      text: 'Policy Status',
      sort: true,
    },
  ];

  const [claimList, setClaimList] = useState([]);
  const [claimNumber, setClaimNumber] = useState('');
  const [policyNumber, setPolicyNumber] = useState('');
  const [insuredName, setInsuredName] = useState('');
 // const [synopsisNavigate,setSynopsisNavigate] = useState(0);
  const [claimantName, setClaimantName] = useState('');
  const [redirectToSynopsis, setRedirectToSynopsis] = useState(false); 

  // const history = useHistory();

  const handleLinkClick = (row) => { // Updated to accept 'row' parameter
    setClaimNumber(row.claimNumber); // Set 'claimNumber' to the 'claimNumber' from the clicked row
    setRedirectToSynopsis(true);
  };
 
  if (redirectToSynopsis) { 
    return <Synopsis claimNumber={claimNumber}/>; 
  }
  const handleClaimNumberChange = (e) => {
    setClaimNumber(e.target.value);
  };

  const handlePolicyNumberChange = (e) => {
    setPolicyNumber(e.target.value);
  };

  const handleInsuredNameChange = (e) => {
    setInsuredName(e.target.value);
  };

  const handleClaimantNameChange = (e) => {
    setClaimantName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Prepare the data to be sent to the backend
    const searchData = {
      claimNumber,
      policyNumber,
      insuredName,
      claimantName,
    };

    // Send the data to the backend and handle the response
    fetch('http://localhost:8080/claim/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(searchData),
    })
      .then((response) => {
        // Handle the response from the backend
        console.log(response);
        return response.json();
      })
      .then((data) => {
        // Update the claim list state with the received data
        const responseArray = Array.isArray(data) ? data : data ? [data] : [];
        setClaimList(responseArray); // Set the new search results
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error('Error sending data to backend:', error);
      })
      .finally(() => {
        // Clear the input fields after sending the request
        setClaimNumber('');
        setPolicyNumber('');
        setInsuredName('');
        setClaimantName('');
      });
  };

  // const handleClaimNumberClick = (claimNumber) => {
  //   console.log('Claim number clicked:', claimNumber);
  //  setComponentData({ claimNumber });
  //   setComponentData({ ...componentData, claimNumber }); // Set the claim number in the component data
  //   setSynopsisNavigate(1);
  // };
  //   // Clear the claim list when componentData changes
  //   React.useEffect(() => {
  //     setClaimList([]);
  //   }, [componentData]);

  return (
    <div>
      {/* {synopsisNavigate == 1 ? 
      < Synopsis/> 
      : <>  */}
      <Form onSubmit={handleSubmit}>
        <div className="mb-3 row">
          <div className="col-4">
            <Form.Label>Claim Number:</Form.Label>
          </div>
          <div className="col-4">
            <Form.Control type="text" value={claimNumber} onChange={handleClaimNumberChange} />
          </div>
        </div>
        <div className="mb-3 row">
          <div className="col-4">
            <Form.Label>Policy Number:</Form.Label>
          </div>
          <div className="col-4">
            <Form.Control type="text" value={policyNumber} onChange={handlePolicyNumberChange} />
          </div>
        </div>
        <div className="mb-3 row">
          <div className="col-4">
            <Form.Label>Insured Name:</Form.Label>
          </div>
          <div className="col-4">
            <Form.Control type="text" value={insuredName} onChange={handleInsuredNameChange} />
          </div>
        </div>
        <div className="mb-3 row">
          <div className="col-4">
            <Form.Label>Claimant Name:</Form.Label>
          </div>
          <div className="col-4">
            <Form.Control type="text" value={claimantName} onChange={handleClaimantNameChange} />
          </div>
        </div>
        <div className="mb-3 row">
          <div className="col-4">
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </div>
        </div>
      </Form>   

      <BootstrapTable
        keyField="claimNumber"
        data={claimList}
        columns={columns}
        striped
        hover
        condensed
        bootstrap4
      />
    </div>
  );
}  

      {/* <div>
        {claimList.length > 0 && (
          <BootstrapTable
          keyField={(row, index) => `row_${index}`} // Generate unique key for each row
          data={claimList}
            columns={columns}
            striped
            hover
            condensed
          />
        )}
      </div>
      {/* </> */}
      {/* } */}
//     </div> */}
//   );
// }

export default Search;