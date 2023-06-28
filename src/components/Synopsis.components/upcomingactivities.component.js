import React, { useState } from 'react' 
import BootstrapTable from 'react-bootstrap-table-next'; 
//import { Dropdown, DropdownButton } from "react-bootstrap"; 
 
function Upcomingactivities() { 
   
  
  //Coloumns For the Table 
  const columns = [ 
    
    { 
      dataField: "Due", 
      text: "Due", 
      sort: true, 
      headerClasses: "Due-header", 
      classes: "Due-column", 
      formatter: (cellContent, row) => ( 
 
        <div className='row'> 
          <div className='col-12'> 
            {/* <DropdownButton id={`dropdown-button-${row.id}`} title='select' className='dropdown-type-value'> 
              <Dropdown.Item onClick={() => alert(`${row.name} selected Type A`)}> 
                John 
              </Dropdown.Item> 
              <Dropdown.Item onClick={() => alert(`${row.name} selected Type B`)}> 
                Jake 
              </Dropdown.Item> 
              <Dropdown.Item onClick={() => alert(`${row.name} selected Type C`)}> 
                Thomas 
              </Dropdown.Item> 
            </DropdownButton>  */}
          </div> 
        {/* <div className='col-4'> 
        <DropdownButton id={`dropdown-button-${row.id}`} title='' className='dropdown-type-value'> 
              <Dropdown.Item onClick={() => alert(`${row.name} selected Type A`)}> 
                New Person 
              </Dropdown.Item> 
              <Dropdown.Item onClick={() => alert(`${row.name} selected Type B`)}> 
                New Company 
              </Dropdown.Item>              
            </DropdownButton> 
        </div> */} 
      </div>    
 
      ), 
    }, 
    { 
      dataField: "Priority", 
      text: "Priority", 
      sort: true, 
      headerClasses: "Priority-header", 
      classes: "Priority-column", 
      formatter: (cellContent, row) => ( 
          <div className='row'> 
            <div className='col-12'>
            </div> 
          </div>         
      ), 
    }, 
 
     { 
      dataField: "Subject", 
      text: "Subject", 
      sort: true, 
      headerClasses: "Subject-header", 
      classes: "Subject-column", 
      formatter: (cellContent, row) => ( 
          <div className='row'> 
            <div className='col-12'> 
            </div> 
          </div>         
      ), 
    }, 

    { 
      dataField: "Assigned To", 
      text: "Assigned To", 
      sort: true, 
      headerClasses: "Assigned To-header", 
      classes: "Assigned To-column", 
      formatter: (cellContent, row) => ( 
          <div className='row'> 
            <div className='col-12'> 
            </div> 
          </div>         
      ), 
    },

    
 
  ]; 
 
  //Test data & State of the table 
  const [tableData] = useState([ 
    // { id: 1, name: 'John Doe', type: 'Type A', selected: false }, 
    // { id: 2, name: 'Jane Smith', type: 'Type B', selected: false }, 
    // { id: 3, name: 'Bob Johnson', type: 'Type A', selected: false }, 
  ]); 
 
  //Add new row on button click 
  // const handleAddRow = () => {   
  //   const newRow = { id: tableData.length + 1, name: '', type: '' }; 
  //   setTableData([...tableData, newRow]); 
  // }; 
 
  //Get the state of checked row 
  // const handleCheckboxChange = (rowId) => { 
  //   setTableData((prevData) => 
  //     prevData.map((row) => 
  //       row.id === rowId ? { ...row, selected: !row.selected } : row 
  //     ) 
  //   ); 
  // }; 
 
  //Delete the checked row from the table 
  // const handleDeleteRow = () => { 
  //   const updatedData = tableData.filter((row) => !row.selected); 
  //   setTableData(updatedData); 
  // }; 
 
  return (
    <div>
      <div className="row p-1 m-0 ">
        <div className="col-6">
          <h2> Upcoming Activities</h2>
        </div>
        <hr />
        <div className="col-16 d-flex justify-content-end">
          
            {/* <button
              type="button"
              className="btn btn-success custom-margin-right-2"
              onClick={handleAddRow}
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
            </button> */}
          
        </div>
      </div>
      <BootstrapTable keyField="id" data={tableData} columns={columns} />
    </div>
  ); 
} 
 
export default Upcomingactivities