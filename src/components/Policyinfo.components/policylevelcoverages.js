import React, { useState } from 'react'  
import BootstrapTable from 'react-bootstrap-table-next';  
import Form from "react-bootstrap/Form";
  
function Policylevel() {  
    
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
      dataField: "Coverage type",  
      text: "Coverage type",  
      sort: true,  
      headerClasses: "Coverage type-header",  
      classes: "Coverage type-column",  
      formatter: (cellContent, row) => (  
  
        
        <div className="col-12">
          <Form.Select aria-label="Default select example">
            <option value="None">None</option>
            <option value="Fire">Fire</option>
            <option value="Water">Water</option>
            <option value="Accident">Accident</option>
          </Form.Select>
        </div>  
  
      ),  
    },  
    {  
      dataField: "Incident Limits",  
      text: "Incident Limits",  
      sort: true,  
      headerClasses: "Incident Limits-header",  
      classes: "Incident Limits-column",  
      formatter: (cellContent, row) => (  
          <div className='row'>  
            <div className='col-12'>
              <input type='text' className='form-control'></input>
            </div>  
          </div>          
      ),  
    },  
  
     {  
      dataField: "Per Person Limit",  
      text: "Per Person Limit",  
      sort: true,  
      headerClasses: "Per Person Limit-header",  
      classes: "Per Person Limit-column",  
      formatter: (cellContent, row) => (  
          <div className='row'>  
            <div className='col-12'>  
            <input type='text' className='form-control'></input>
            </div>  
          </div>          
      ),  
    },  
  
  ];  
  
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
          <strong>Policy-level Coverages</strong>  
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
  
export default Policylevel