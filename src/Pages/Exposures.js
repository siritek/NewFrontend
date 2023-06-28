import React, { useState } from 'react';
// import Newexposure from "../components/Exposure.components/Newexposure";  
// import BootstrapTable from 'react-bootstrap-table-next';   
import { FnolData } from './Fnol';
import { policyData } from "./PolicyInformation";
import { LossData } from './LossSummary';
import {ExposureData} from'../components/Exposure.components/Newexposure';
//import { Button } from "react-bootstrap";
import ClaimGeneration from './ClaimGeneration';



function Exposure(props){
  //const [exposuresubmitclick, setExposuresubmitclick] = useState(false);
  //const [componentData, setComponentData] = useState({});

  //var myExposureDataArray = JSON.parse(localStorage.getItem("exposureDataArray"));
  // const myExposureDataArray = JSON.parse(localStorage.getItem("exposureDataArray")) || [];
  const [myExposureDataArray, setMyExposureDataArray] = useState( 
    JSON.parse(localStorage.getItem("exposureDataArray")) || [] 
  ); 
  const handleDelete = () => {
    const updatedDataArray = myExposureDataArray.filter((item) => !item.checked);
    setMyExposureDataArray(updatedDataArray);
    localStorage.setItem("exposureDataArray", JSON.stringify(updatedDataArray));
  };

  
  
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

    const myFnolData = FnolData();
    const myPolicyInfo = policyData();
    const myLossData = LossData();
   //const myExposureData = localStorage.getItem("exposureDataArray");
   const myExposureData = ExposureData();
   
    const finalDataObj = {
      "fnolData": myFnolData,
      "policyInfoData": myPolicyInfo,
      "lossData": myLossData,
      "exposureData":myExposureData
    } 
    //  console.log(finalDataObj); 
    // e.preventDefault()  
    // const abs={myFnolData,myPolicyInfo,myLossData,myExposureData}  
    console.log(finalDataObj)  
    fetch("http://localhost:8080/common/add",{  
        method:"POST",  
        headers:{"Content-Type":"application/json"},  
        body:JSON.stringify(finalDataObj) 
  
    })
    .then(() => {  
      console.log("New claim added");  
     
      generateClaimNumber(); // Call the generateClaimNumber function  
      
    })  
    .catch((error) => {  
      console.error("Error adding new claim:", error);  
    });  
    localStorage.clear();
  }  
  
  // const myExposureData = () => {
  //   const tableRows = document.querySelectorAll('tr[key]');
  // const tableData = [];

  // tableRows.forEach((row) => {
  //   const rowData = {};
  //   const cells = row.querySelectorAll('td');

  //   cells.forEach((cell, index) => {
  //     const columnHeader = document.querySelector(`th:nth-child(${index + 1})`).textContent;
  //     rowData[columnHeader] = cell.textContent;
  //   });

  //   tableData.push(rowData);
  // });
  // console.log("===== >>>>>>", tableData)
  //   return tableData
  // }
 


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
        props.setClaimNumber({ 
          claimNumber: data.claimNumber, 
          policyNumber: policyNumber, 
        }); 
        handleBlankClick(); 
      }) 
      .catch((error) => { 
        console.error("Error generating claim number:", error); 
      }); 
  }; 



  //const [inputarr, setInputarr] = useState([]);
  const [allChecked, setAllChecked] = useState(false);


  // function handleChange(e, index, name) {
  //   const { value } = e.target;
  //   const updatedInputArr = [...inputarr];
  //   updatedInputArr[index][name] = value;
  //   setInputarr(updatedInputArr);
  // }

  //   function handleCheckboxChange(e, index) {
  //   const { checked } = e.target;
  //   const updatedInputArr = [...inputarr];
  //   updatedInputArr[index].checked = checked;
  //   setInputarr(updatedInputArr);
  // }

  // function handleCheckboxChange(e, index) {
  //   const { checked } = e.target;
  //   setInputarr((prevInputArr) => {
  //     const updatedInputArr = [...prevInputArr];
  //     updatedInputArr[index] = { ...updatedInputArr[index], checked };
  //     return updatedInputArr;
  //   });
  // }
  function handleCheckboxChange(e, index) { 
    const { checked } = e.target; 
    const updatedExposureDataArray = [...myExposureDataArray]; 
    updatedExposureDataArray[index] = { 
      ...updatedExposureDataArray[index], 
      checked, 
    }; 
    setMyExposureDataArray(updatedExposureDataArray); 
  } 

  //   function handleAllCheckedChange(e) {
  //   const { checked } = e.target;
  //   setAllChecked(checked);
  //   const updatedInputArr = inputarr.map((item) => ({ ...item, checked: checked }));
  //   setInputarr(updatedInputArr);
  // }
  function handleAllCheckedChange(e) { 
    const { checked } = e.target; 
    setAllChecked(checked); 
    const updatedExposureDataArray = myExposureDataArray.map((item) => ({ 
      ...item, 
      checked: checked, 
    })); 
    setMyExposureDataArray(updatedExposureDataArray); 
  } 

  // function handleDelete() {
  //   const updatedInputArr = inputarr.filter((item) => !item.checked);
  //   setInputarr(updatedInputArr);
  //   setAllChecked(false);
  // }

  // function handleDelete() { 
  //   const updatedInputArr = inputarr.filter((item) => !item.checked); 
  //   setInputarr(updatedInputArr); 
  //   setAllChecked(false); 
  // } 

  

  // function handleSubmit() {
  //   const updatedInputArr = inputarr.map((item) => ({
  //     ...item,
  //     submitted: true,
  //   }));
  //   setInputarr(updatedInputArr);
  //   console.log(updatedInputArr);
  // }

  // function handleAdd() {
  //   setInputarr((prevInputArr) => {
  //     const newRow = {
  //       checked: false,
  //       LossParty: "", // Set the default values here
  //       PrimaryCoverage: "",
  //       ClaimantType: "",
  //       Status: "",
  //       Adjuster: "",
  //       submitted: false,
  //     };
  
  //     return [...prevInputArr, newRow];
  //   });
  // }
  // function handleAdd() {
  //   setInputarr([
  //     ...inputarr,
  //     {
  //       checked: false,
  //       lossParty: "",
  //       primaryCoverage: "",
  //       claimantType: "",
  //       status: "",
  //       adjuster: "",
  //       submitted: false,
  //     },
  //   ]);
  // }
 
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
          //  myExposureData();
          }}
        />
      </div>
    </div>
    <hr />
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
        {
         <button
         type="button"
         className="btn btn-dark"
         onClick={handleDelete}
       >
         Delete
       </button>
        /* <button 
          type="button" 
          className="btn btn-dark" 
          // onClick={handleDelete} 
          // // onClick={handleDeleteRow} 
          onClick={() => { 
            setMyExposureDataArray( 
              myExposureDataArray.filter((item) => !item.checked) 
            ); 
            setAllChecked(false); 
          }} 
          >
          Delete
        </button> */}
      </div>
    </div>
    {/* <BootstrapTable keyField="id" data={tableData} columns={columns} /> */}

     <div className="container">
      {/* <div className="row p-1 m-0">
        <div className="col-4 align-right">
          <Button variant="success" onClick={handleAdd}>
            Add
          </Button>
          &nbsp;
          <Button variant="primary" onClick={handleSubmit}>
            Save
          </Button>
        </div>
      </div>  */}

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
                {/* <th> ID </th> */}
                <th> LossParty </th>
                <th> PrimaryCoverage </th>
                <th> ClaimantType </th>
                <th> status </th>
                <th> adjuster </th>
              </tr>
              
              {
                myExposureDataArray === undefined || myExposureDataArray.length === 0 ? <tr>
                <td colSpan={8} className="text-center">
                  No data Entered yet !
                </td>
              </tr> : (
                myExposureDataArray.map((item,index) => (
                 
                    <tr key={index}>
                      <td>
                        <input
                          type="checkbox"
                          checked={item.checked}
                          onChange={(e) => handleCheckboxChange(e, index)}
                        />
                      </td>
                      {/* <td>{item.id}</td> */}
                      <td>{item.lossParty}</td>
                      <td>{item.primaryCoverage}</td>
                      <td>{item.claimantType}</td>
                      <td>{item.status}</td>
                      <td>{item.adjuster}</td>
                    </tr>
              
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    {props.claimNumber && (
      <ClaimGeneration
        claimNumber={props.claimNumber}
        policyNumber={props.policyNumber}
       // onLinkClick={handleBlankClick}
      />
    )}
  </div>
)}
// const ExposureData = () => {
//   return ExposureDataObj;
// }

export default Exposure 



