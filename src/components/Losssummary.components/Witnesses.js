import React, { useState } from "react"; 
import BootstrapTable from "react-bootstrap-table-next"; 
 
function Witnesses() { 
  //Coloumns For the Table 
  const columns = [ 
    { 
      dataField: "checkbox", 
      text: "Checkbox", 
      headerClasses: "checkbox-header", 
      classes: "checkbox-column", 
      headerFormatter: (cellContent, row) => ( 
        <div className="form-check"> 
          <input type="checkbox" className="form-check-input" id={row.id} /> 
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
      dataField: "Name", 
      text: "Name", 
      sort: true, 
      headerClasses: "Name type-header", 
      classes: "Name type-column", 
      formatter: (cellContent, row) => ( 
        <div className="row"> 
          <div className="col-12"> 
            <input className="form-control"></input> 
          </div> 
        </div> 
      ), 
    }, 
    { 
      dataField: "Phone-1", 
      text: "Phone-1", 
      sort: true, 
      headerClasses: "Phone-1 Limits-header", 
      classes: "Phone-1-column", 
      formatter: (cellContent, row) => ( 
        <div className="row"> 
          <div className="col-12"> 
            <input className="form-control"></input> 
          </div> 
        </div> 
      ), 
    }, 
 
    { 
      dataField: "Phone-2", 
      text: "Phone-2", 
      sort: true, 
      headerClasses: "Phone-2", 
      classes: "Phone-2-column", 
      formatter: (cellContent, row) => ( 
        <div className="row"> 
          <div className="col-12"> 
            <input className="form-control"></input> 
          </div> 
        </div> 
      ), 
    }, 
 
    { 
      dataField: "Email", 
      text: "Email", 
      sort: true, 
      headerClasses: "Email", 
      classes: "Email-column", 
      formatter: (cellContent, row) => ( 
        <div className="row"> 
          <div className="col-12"> 
            <input className="form-control"></input> 
          </div> 
        </div> 
      ), 
    }, 
 
    { 
      dataField: "Recorded Statement? ", 
      text: "Recorded Statement?", 
      sort: true, 
      headerClasses: "Recorded Statement?", 
      classes: "Recorded Statement?-column", 
      formatter: (cellContent, row) => ( 
        <div className="row"> 
          <div className="col-12"> 
            <input className="form-control"></input> 
          </div> 
        </div> 
      ), 
    }, 
  ]; 
 
  //Test data & State of the table 
  const [tableData, setTableData] = useState([ 
    { id: 1, name: "John Doe", type: "Type A", selected: false }, 
    // { id: 2, name: 'Jane Smith', type: 'Type B', selected: false }, 
    // { id: 3, name: 'Bob Johnson', type: 'Type A', selected: false }, 
  ]); 
 
  //Add new row on button click 
  const handleAddRow = () => { 
    const newRow = { id: tableData.length + 1, name: "", type: "" }; 
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
      <div className="row p-1 m-0 text-bg-secondary"> 
        <div className="col-6"> 
          <strong>Witnesses</strong> 
        </div> 
         <div className="col-6 align-right"> 
          <button 
            type="button" 
            className="btn btn-success custom-margin-right-1" 
            onClick={handleAddRow}> 
            Add 
          </button> 
          &nbsp; &nbsp; 
          <button type="button" className="btn btn-dark" onClick={handleDeleteRow}> 
            Remove 
          </button> 
        </div> 
      </div> 
      <BootstrapTable keyField="id" data={tableData} columns={columns} /> 
    </div> 
  ); 
} 
 
export default Witnesses;  