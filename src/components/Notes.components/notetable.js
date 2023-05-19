
import React, { useState } from 'react'    
import BootstrapTable from 'react-bootstrap-table-next';    
import {  DropdownButton } from "react-bootstrap";    
// import Notetable from './policylevelcoverages';  
    
function Notetable() {    
      
  //Coloumns For the Table    
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
      dataField: "Info",    
      text: "Info",    
      sort: true,    
      headerClasses: "Info-header",    
      classes: "Info-column",    
      formatter: (cellContent, row) => (    
    
        <div className='row'>    
          <div className='col-12'>    
            <DropdownButton id={`dropdown-button-${row.id}`} variant='success' title='select' className='dropdown-type-value'>    
                
            </DropdownButton>    
          </div>    
          
      </div>       
    
      ),    
    },    
    {    
      dataField: "Details",    
      text: "Details",    
      sort: true,    
      headerClasses: "Details-header",    
      classes: "Details-column",    
      formatter: (cellContent, row) => (    
          <div className='row'>    
            <div className='col-12'>    
            <DropdownButton id={`dropdown-button-${row.id}`} variant='success' title='select' className='dropdown-type-value'>    
               
            </DropdownButton>    
            </div>    
          </div>            
      ),    
    },  
    
  ];    
    
  //Test data & State of the table    
  const [tableData, setTableData] = useState([    
    // { id: 1, name: 'John Doe', type: 'Type A', selected: false },    
    // { id: 2, name: 'Jane Smith', type: 'Type B', selected: false },    
    // { id: 3, name: 'Bob Johnson', type: 'Type A', selected: false },    
  ]);    
    
  //Add new row on button click    
  const handleAddRow = () => {      
    const newRow = { id: tableData.length + 1, name: '', type: '' };    
    setTableData([...tableData, newRow]);    
  };    
    
  //Get the state of checked row    
  const handleCheckboxChange = (rowId) => {    
    setTableData((prevData) =>    
      prevData.map((row) =>    
        row.id === rowId ? { ...row, selected: !row.selected } : row    
      )    
    );    
  };    
    
  //Delete the checked row from the table    
  const handleDeleteRow = () => {    
    const updatedData = tableData.filter((row) => !row.selected);    
    setTableData(updatedData);    
  };    
    
  return (    
    <div>    
      <div className='row p-1 m-0 text-bg-secondary'>    
        <div className='col-6'>    
          <strong>Notes</strong>    
        </div>    
        <div className='col-6 align-right'>    
            <button type="button" class="btn btn-success custom-margin-right-1" onClick={handleAddRow}>Add</button>  
            &nbsp;  
            <button type="button" class="btn btn-dark" onClick={handleDeleteRow}>Remove</button>    
        </div>    
      </div>    
      <BootstrapTable keyField='id' data={tableData} columns={columns} />    
    </div>    
    
  )    
}    
    
export default Notetable