import React, { useState } from 'react' 
import BootstrapTable from 'react-bootstrap-table-next'; 
//import { Dropdown, DropdownButton } from "react-bootstrap"; 
 
function Searchexposures() { 
   
  
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
      dataField: "Type", 
      text: "Type", 
      sort: true, 
      headerClasses: "Type-header", 
      classes: "Type-column", 
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

    { 
      dataField: "Involving", 
      text: "Involving", 
      sort: true, 
      headerClasses: "Involving-header", 
      classes: "Involving-column", 
      formatter: (cellContent, row) => ( 
          <div className='row'> 
            <div className='col-12'> 
            </div> 
          </div>         
      ), 
    },

    { 
      dataField: "Status", 
      text: "Status", 
      sort: true, 
      headerClasses: "Status-header", 
      classes: "Status-column", 
      formatter: (cellContent, row) => ( 
          <div className='row'> 
            <div className='col-12'> 
            </div> 
          </div>         
      ), 
    },

    { 
      dataField: "Created Via", 
      text: "Created Via", 
      sort: true, 
      headerClasses: "Created Via-header", 
      classes: "Created Via-column", 
      formatter: (cellContent, row) => ( 
          <div className='row'> 
            <div className='col-12'> 
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
      <div className="row p-1 m-0 ">
        <div className="col-6">
          <h2> Search Exposures</h2>
        </div>
        <hr />
        <div className="col-16 d-flex justify-content-end">
          
            <button
              type="button"
              class="btn btn-success custom-margin-right-2"
              onClick={handleAddRow}
              >
              Add exposures
            </button>
            &nbsp;&nbsp;
            <button
              type="button"
              class="btn btn-dark"
              onClick={handleDeleteRow}
            >
              Delete
            </button>
          
        </div>
      </div>
      <BootstrapTable keyField="id" data={tableData} columns={columns} />
    </div>
  ); 
} 
 
export default Searchexposures