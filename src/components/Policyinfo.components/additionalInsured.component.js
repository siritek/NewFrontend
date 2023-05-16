// import React from 'react'

// function Additional() {
//   return (
//     <div className='ms-3'>
//       <table className='table'>
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Username</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>1</td>
//             <td>John</td>
//             <td>Doe</td>
//             <td>@John</td>
//           </tr>

//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default Additional

import React, { useState } from 'react'  
import BootstrapTable from 'react-bootstrap-table-next';  
import { Dropdown, DropdownButton } from "react-bootstrap";  
//import NewPesron from './newPerson.component';
function Additional() {  
    
  //  const [showNewPersonComponent, setShowNewComponent] = useState(false)

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
              
            />  
            id{row.id}  
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
      dataField: "name",  
      text: "Name",  
      sort: true,  
      headerClasses: "name-header",  
      classes: "name-column",  
      formatter: (cellContent, row) => (  
  
        <div className='row'>  
          <div className='col-8'>  
            <DropdownButton variant='success' id={`dropdown-button-${row.id}`} title='select' className='dropdown-type-value'>  
              <Dropdown.Item onClick={() => alert(`${row.name} selected Type A`)}>  
                John  
              </Dropdown.Item>  
              <Dropdown.Item onClick={() => alert(`${row.name} selected Type B`)}>  
                Jake  
              </Dropdown.Item>  
              {/* <Dropdown.Item onClick={() => alert(`${row.name} selected Type C`)}>  
                Thomas  
              </Dropdown.Item> */}  
            </DropdownButton>  
          </div>  
         <div className='col-2'>  
        <DropdownButton  variant='success' id={`dropdown-button-${row.id}`} title='' className='dropdown-type-value'>  
              {/* <Dropdown.Item onClick={handleNewPersonClickkEvent}>New User  
              </Dropdown.Item>  
              {showNewPersonComponent && <NewPesron />} */}
              <Dropdown.Item onClick={() => alert(`${row.name} selected Type B`)}>  
                New Company  
              </Dropdown.Item>               
            </DropdownButton>  
        </div>   
      </div>     
  
      ),  
    },  
    {  
      dataField: "type",  
      text: "Type",  
      sort: true,  
      headerClasses: "type-header",  
      classes: "type-column",  
      formatter: (cellContent, row) => (  
          <div className='row'>  
            <div className='col-12'>  
            <DropdownButton variant='success' id={`dropdown-button-${row.id}`} title='select' className='dropdown-type-value'>  
              <Dropdown.Item onClick={() => alert(`${row.name} selected Type A`)}>  
                Additional insured  
              </Dropdown.Item>  
              <Dropdown.Item onClick={() => alert(`${row.name} selected Type B`)}>  
                Additional named insured  
              </Dropdown.Item>  
              {/* <Dropdown.Item onClick={() => alert(`${row.name} selected Type C`)}>  
                Thomas  
              </Dropdown.Item> */}  
            </DropdownButton>  
            </div>  
          </div>          
      ),  
    },  
  
  ];  

  // const handleNewPersonClickkEvent = () => {
  //   alert('called')
  //   setShowNewComponent(true)
  // }
  
  //Test data & State of the table  
  const [tableData, setTableData] = useState([  
    { id: 1, name: 'John Doe', type: 'Type A', selected: false },  
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
          <strong>Additional Insured</strong>  
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
  
export default Additional