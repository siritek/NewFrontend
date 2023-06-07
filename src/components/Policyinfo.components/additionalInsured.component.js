import BootstrapTable from 'react-bootstrap-table-next';  
import Form from "react-bootstrap/Form";
import React, { useState } from 'react'   

//import NewPesron from './newPerson.component';
function Additional({ setComponentData, componentData, fnoldataobj }) { 
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setComponentData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  
  const {
   
    name='',
    
  } = componentData || {};
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
          <input type="checkbox" className="form-check-input" />
        </div>
      ),
      formatter: (cellContent, row) => (
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            checked={row.selected}
            onChange={() => handleCheckboxChange(row.id)}
          />
        </div>
      ),
    },
    {
      dataField: "id",
      text: "Id",
      sort: true,
      headerClasses: "id-header",
      classes: "id-column",
    },
    // {
    //   dataField: "name",
    //   text: "Name",
    //   sort: true,
    //   headerClasses: "name-header",
    //   classes: "name-column",
    //   formatter: (cellContent, row) => (

    //     <div className='row'>
    //       <div className='col-8'>
    //         <DropdownButton variant='success' id={`dropdown-button-${row.id}`} title='select' className='dropdown-type-value'>
    //           <Dropdown.Item onClick={() => alert(`${row.name} selected Type A`)}>
    //             John
    //           </Dropdown.Item>
    //           <Dropdown.Item onClick={() => alert(`${row.name} selected Type B`)}>
    //             Jake
    //           </Dropdown.Item>
    //           {/* <Dropdown.Item onClick={() => alert(`${row.name} selected Type C`)}>
    //             Thomas
    //           </Dropdown.Item> */}
    //         </DropdownButton>
    //       </div>
    //      <div className='col-2'>
    //     <DropdownButton  variant='success' id={`dropdown-button-${row.id}`} title='' className='dropdown-type-value'>
    //           {/* <Dropdown.Item onClick={handleNewPersonClickkEvent}>New User
    //           </Dropdown.Item>
    //           {showNewPersonComponent && <NewPesron />} */}
    //           <Dropdown.Item onClick={() => alert(`${row.name} selected Type B`)}>
    //             New Company
    //           </Dropdown.Item>
    //         </DropdownButton>
    //     </div>
    //   </div>

    //   ),
    // },

    {
      dataField: "name",
      text: "Name",
      sort: true,
      headerClasses: "name",
      classes: "name-column",
      formatter: (cellContent, row) => (
        <div className="row">
          <div className="col-10">
            <input 
            id="name"
            type='text'
            value={name}
            onChange={handleInputChange}
            className="form-control"></input>
          </div>
        </div>
      ),
    },

    {
      dataField: "address",
      text: "Address",
      sort: true,
      headerClasses: "address",
      classes: "address-column",
      formatter: (cellContent, row) => (
        <div className="row">
          <div className="col-12">
            <input className="form-control"></input>
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
        <div className="row">
         
          <div className="col-12">
          <Form.Select aria-label="Default select example">
            <option value="None">None</option>
            <option value="person">Additional Insured (Person)</option>
            <option value="company">Additional Named Insured(Company)</option>
          </Form.Select>
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
      <div className='row p-1 m-0'>  
        <div className='col-6'>  
          <strong>Additional Insured</strong>  
        </div>  
        <div className='col-6 align-right'>  
            <button type="button" className="btn btn-success custom-margin-right-1" onClick={handleAddRow}>Add</button>
            &nbsp;  
            <button type="button" className="btn btn-dark" onClick={handleDeleteRow}>Remove</button>  
        </div>  
      </div>  
      <BootstrapTable keyField='id' data={tableData} columns={columns} />  
    </div>  
  
  )  
}  
  
export default Additional






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
