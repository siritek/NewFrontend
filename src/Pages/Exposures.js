import React, { useState } from 'react';
<<<<<<< HEAD
// import Newexposure from "../components/Exposure.components/Newexposure";  
// import BootstrapTable from 'react-bootstrap-table-next';   
=======
//import Newexposure from "../components/Exposure.components/Newexposure";  
import BootstrapTable from 'react-bootstrap-table-next';   
>>>>>>> 6b2b651bd81cdcc0a2801132629f439385bec8f3
import { FnolData } from './Fnol';
import { policyData, policyInfoObj } from "./PolicyInformation";
import { LossData } from './LossSummary';
<<<<<<< HEAD
import {ExposureData,ExposureDataObj} from'../components/Exposure.components/Newexposure';
import { Button } from "react-bootstrap";

=======
import {ExposureData} from'../components/Exposure.components/Newexposure';
import ClaimGeneration from './ClaimGeneration'; 
>>>>>>> 6b2b651bd81cdcc0a2801132629f439385bec8f3

function Exposure(props){
  //const [exposuresubmitclick, setExposuresubmitclick] = useState(false);
  const [componentData, setComponentData] = useState({});

  const handleLossSummaryClick=()=>{
    props.onLossSummaryClick();
  };
  const handleBlankClick=()=>{
    props.onBlankClick();
  }
  const handleAppClick=()=>{
    props.onAppClick();
  }
  const handleClick=(e)=>{ 

    //ExposureDataObj = {ExposureData}

    const myFnolData = FnolData();
    const myPolicyInfo = policyData();
    const myLossData = LossData();
    const myExposureData = ExposureData();

    const finalDataObj = {
      "fnolData": myFnolData,
      "policyInfoData": myPolicyInfo,
      "lossData": myLossData,
      "exposureData": myExposureData
    } 
<<<<<<< HEAD
    //  console.log(finalDataObj); 
    // e.preventDefault()  
    // const abs={myFnolData,myPolicyInfo,myLossData,myExposureData}  
    console.log(finalDataObj)  
    fetch("http://localhost:8080/common/add",{  
        method:"POST",  
        headers:{"Content-Type":"application/json"},  
        body:JSON.stringify(finalDataObj)  
  
    }).then(()=>{  
        console.log("New claim added")  
    })  
  }
=======
    console.log(finalDataObj) 
    fetch("http://localhost:8080/common/add", { 
      method: "POST", 
      headers: { "Content-Type": "application/json" }, 
      body: JSON.stringify(finalDataObj) 
    }) 
      .then(() => { 
        console.log("New claim added"); 
        generateClaimNumber(); // Call the generateClaimNumber function 
      }) 
      .catch((error) => { 
        console.error("Error adding new claim:", error); 
      }); 
      
      // if (Object.keys(componentData).length === 0 && finalDataObj !== undefined) {
      //   setComponentData(finalDataObj);
      // } else {
      //   setComponentData({}); // Clear the componentData object
      // }
    } 

 
  const generateClaimNumber = () => { 
    const fnolData = FnolData(); // Call FnolData() to retrieve the data 
    const policyNumber = fnolData.policyNumber;  
 
    console.log("Policy Number:", policyNumber); 
    fetch("http://localhost:8080/claim/generateClaimNumber", { 
      method: "POST", 
      headers: { "Content-Type": "application/x-www-form-urlencoded" }, 
      body: `policyNumber=${policyNumber}`, 
    }) 
      .then((response) => response.json()) 
      .then((data) => { 
        console.log("Claim Number:", data.claimNumber); 
        props.setClaimNumber(data.claimNumber); 
        handleBlankClick(); 
      }) 
      .catch((error) => { 
        console.error("Error generating claim number:", error); 
      }); 
  }; 
  const columns = [ 
    { 
      dataField: "checkbox", 
      text: "Checkbox", 
      headerClasses: "checkbox-header", 
      classes: "checkbox-column", 
      headerFormatter: (cellContent, row) => ( 
        <div className="form-check"> 
          <input 
            type="checkbox" 
            className="form-check-input" 
            id={row.id} 
             
          /> 
        </div> 
      ), 
      formatter: (cellContent, row) => ( 
        <div className="form-check"> 
          <input 
            type="checkbox" 
            className="form-check-input" 
            id={row.id} 
            checked={row.selected} 
      onChange={() => handleCheckboxChange(row.id)} 
          /> 
        </div> 
 
      ), 
    }, 
    { 
      dataField: "id", 
      text: "#", 
      sort: true, 
      headerClasses: "id-header", 
      classes: "id-column", 
    }, 
    { 
      dataField: "Type", 
      text: "Type", 
      sort: true, 
      headerClasses: "Type-header", 
      classes: "Type-column", 
      formatter: (cellContent, row) => ( 
 
        <div className='row'> 
          <div className='col-12'> 
           
          </div> 
       
      </div>    
 
      ), 
    }, 
    { 
      dataField: "Coverage", 
      text: "Coverage", 
      sort: true, 
      headerClasses: "Coverage-header", 
      classes: "Coverage-column", 
      formatter: (cellContent, row) => ( 
          <div className='row'> 
            <div className='col-12'>
            </div> 
          </div>         
      ), 
    }, 
 
     { 
      dataField: "Claimant", 
      text: "Claimant", 
      sort: true, 
      headerClasses: "Claimant-header", 
      classes: "Claimant-column", 
      formatter: (cellContent, row) => ( 
          <div className='row'> 
            <div className='col-12'> 
            </div> 
          </div>         
      ), 
    }, 
>>>>>>> 6b2b651bd81cdcc0a2801132629f439385bec8f3


  const [inputarr, setInputarr] = useState([]);
  const [allChecked, setAllChecked] = useState(false);

  function changhandle() {
    setInputarr([
      ...inputarr,
      {
        
        checked: false,
        Type: "",
        Coverage: "",
        Claimant: "",
        Involving: "",
        Status: "",
      },
    ]);
    console.log(inputarr);
  }

  function handleInputChange(e, index) {
    const { name, value } = e.target;
    const list = [...inputarr];
    list[index][name] = value;
    setInputarr(list);
  }

  function handleCheckboxChange(e, index) {
    const { checked } = e.target;
    const list = [...inputarr];
    list[index].checked = checked;
    setInputarr(list);
  }

  function handleAllCheckedChange(e) {
    const { checked } = e.target;
    setAllChecked(checked);
    setInputarr(inputarr.map((item) => ({ ...item, checked })));
  }

  function handleDelete() {
    setInputarr(inputarr.filter((item) => !item.checked));
    setAllChecked(false);
  }
 
 
  const [tableData, setTableData] = useState([ 

  ]); 
 
  //Add new row on button click 
  const handleAddRow = () => {   
    const newRow = { id: tableData.length + 1, name: '', type: '' }; 
    setTableData([...tableData, newRow]); 
  }; 
 
  // //Get the state of checked row 
  // const handleCheckboxChange = (rowId) => { 
  //   setTableData((prevData) => 
  //     prevData.map((row) => 
  //       row.id === rowId ? { ...row, selected: !row.selected } : row 
  //     ) 
  //   ); 
  // }; 
  const handleNewClick=()=>{
    props.onNewClick();
  }
 
  //Delete the checked row from the table 
  // const handleDeleteRow = () => { 
  //   const updatedData = tableData.filter((row) => !row.selected); 
  //   setTableData(updatedData); 
  // }; 
 

return (
  <div>
    <div className="d-flex justify-content-between align-items-center">
      <h2>Exposures</h2>
      <div>
        <button
          type="button"
          className="btn btn-dark"
          onClick={handleLossSummaryClick}
        >
          Back
        </button>
        &nbsp;
        <button type="button" className="btn btn-dark" onClick={handleAppClick}>
          Cancel
        </button>
        &nbsp;
        <input
          type="submit"
          className="btn btn-success custom-margin-right-1"
          value="Submit"
          onClick={() => {
            handleClick();
            handleBlankClick();
          }}
        />
      </div>
    </div>
    <hr />
<<<<<<< HEAD
    {/* <Newexposure setComponentData={setComponentData} componentData={componentData} lossdataobj={LossData()}/> */}

    <div className="row p-1 m-0 ">
      <div className="col-16 d-flex justify-content-end">
        <button
          type="button"
          className="btn btn-success custom-margin-right-2"
          onClick={() => {
            handleAddRow();
            handleNewClick();
          }}
        >
          Add exposures
        </button>
        &nbsp;&nbsp;
        <button
          type="button"
          className="btn btn-dark"
          onClick={handleDelete}
          // onClick={handleDeleteRow}
        >
          Delete
        </button>
      </div>
    </div>
    {/* <BootstrapTable keyField="id" data={tableData} columns={columns} /> */}

    <div className="container">
      <div className="row p-1 m-0">
        <div className="col-4 align-right">
          <Button variant="success" onClick={changhandle}>
            Add
          </Button>
        </div>
      </div>
      <div className="App">
        <div className="table-responsive">
          <table className="table table-hover table-bordered">
            <tbody>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    checked={allChecked}
                    onChange={handleAllCheckedChange}
                  />
                </th>
                <th> ID </th>
                <th> Type </th>
                <th> Coverage </th>
                <th> Claimant </th>
                <th> Invovling </th>
                <th> Status </th>
              </tr>
              {inputarr.length < 1 ? (
                <tr>
                  <td colSpan={8} className="text-center">
                    No data Entered yet !
                  </td>
                </tr>
              ) : (
                inputarr.map((info, ind) => {
                  return (
                    <tr key={ind}>
                      <td>
                        <input
                          type="checkbox"
                          checked={info.checked}
                          onChange={(e) => handleCheckboxChange(e, ind)}
                        />
                      </td>

                      <td>{ind + 1}</td>

                      <td>
                        {policyInfoObj.policyType}
                      </td>

                      <td>
                        {ExposureDataObj.primaryCoverage}
                      </td>

                      <td>
                        {ExposureDataObj.claimant}
                      </td>

                      <td>
                        <input
                          type="text"
                          name="Involving"
                          value={info.Involving}
                          onChange={(e) => handleInputChange(e, ind)}
                          className="form-control"
                        />
                      </td>

                      <td>
                        <input
                          type="text"
                          name="Status"
                          value={info.Status}
                          onChange={(e) => handleInputChange(e, ind)}
                          className="form-control"
                        />
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
); 
=======
        {/* <Newexposure setComponentData={setComponentData} componentData={componentData} lossdataobj={LossData()}/> */}
        
       
        <div className="row p-1 m-0 ">
        
       
        <div className="col-16 d-flex justify-content-end">
          
            <button
              type="button"
              className="btn btn-success custom-margin-right-2"
              onClick={()=>{handleAddRow();handleNewClick();}}
              >
              Add exposures
            </button>
            &nbsp;&nbsp;
            <button
              type="button"
              className="btn btn-dark"
              onClick={handleDeleteRow}
            >
              Delete
            </button>
          
        </div>
      </div>
      <BootstrapTable keyField="id" data={tableData} columns={columns} />
      {props.claimNumber && <ClaimGeneration claimNumber={props.claimNumber} />}
    </div>
    
  ); 
>>>>>>> 6b2b651bd81cdcc0a2801132629f439385bec8f3
};
// const ExposureData = () => {
//   return ExposureDataObj;
// }

export default Exposure 