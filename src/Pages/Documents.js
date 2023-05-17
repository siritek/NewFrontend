import React, { useState } from 'react' 
import BootstrapTable from 'react-bootstrap-table-next'; 
import { Dropdown } from "react-bootstrap"; 
import Form from "react-bootstrap/Form";  
 
function Documents(props) { 
  const handleNewDocClick=()=>{
    props.onNewDocClick();
  };
  const handleUploadClick=()=>{
    props.onUploadClick();
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
      dataField: "Name", 
      text: "Name", 
      sort: true, 
      headerClasses: "Name-header", 
      classes: "Name-column", 
      formatter: (cellContent, row) => ( 
 
        <div className='row'> 
          <div className='col-12'> 
            
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
        dataField: "Actions", 
        text: "Actions", 
        sort: true, 
        headerClasses: "Actions-header", 
        classes: "Actions-column", 
        formatter: (cellContent, row) => ( <div className='row'> 
        <div className='col-12'>
         </div></div>
         ),}, 
    { 
        dataField: "Document-Type", 
        text: "Document-Type", 
        sort: true, 
        headerClasses: "Document-Type-header", 
        classes: "Document-Type-column", 
        formatter: (cellContent, row) => ( <div className='row'> 
        <div className='col-12'>
         </div></div>
         ),},
         { 
            dataField: "Status", 
            text: "Status", 
            sort: true, 
            headerClasses: "Status-header", 
            classes: "Status-column", 
            formatter: (cellContent, row) => ( <div className='row'> 
            <div className='col-12'>
             </div></div>
             ),},
             { 
                dataField: "Author", 
                text: "Author", 
                sort: true, 
                headerClasses: "Author-header", 
                classes: "Author-column", 
                formatter: (cellContent, row) => ( <div className='row'> 
                <div className='col-12'>
                 </div></div>
                 ),},
                 { 
                    dataField: "Uploaded", 
                    text: "Uploaded", 
                    sort: true, 
                    headerClasses: "Uploaded-header", 
                    classes: "Uploaded-column", 
                    formatter: (cellContent, row) => ( <div className='row'> 
                    <div className='col-12'>
                     </div></div>
                     ),},
 
   
 
  ]; 
 
  //Test data & State of the table 
  const [tableData, setTableData] = useState([ 
    { id: 1, name: 'John Doe', type: 'Type A', selected: false }, 
    // { id: 2, name: 'Jane Smith', type: 'Type B', selected: false }, 
    // { id: 3, name: 'Bob Johnson', type: 'Type A', selected: false }, 
  ]); 
 
  //Add new row on button click 
  // const handleAddRow = () => {   
  //   const newRow = { id: tableData.length + 1, name: '', type: '' }; 
  //   setTableData([...tableData, newRow]); 
  // }; 
 
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
        <div> 
    <h2> Documents</h2> 
    <hr />
    </div>
    <div className='row mb-2'>  
          <div className='col-3'><label>Related To</label></div>  
          <div className='col-4'>  
            <Form.Select className='w-100 form-control'>  
              <option>None</option>  
              <option>Claim</option>  
              <option>Contacts</option>  
            </Form.Select>  
          </div>  
        </div>
        <div className='row mb-2'>  
          <div className='col-3'><label>Status</label></div>  
          <div className='col-4'>  
            <Form.Select className='w-100 form-control'>  
              <option>None</option>  
              <option>Any</option>  
              <option>Approved</option> 
              <option>Approving</option> 
              <option>Draft</option> 
              <option>Final</option>  
            </Form.Select>  
          </div>  
        </div> 
        <div className='row mb-2'>  
          <div className='col-3'><label>Name (or) Identity</label></div>  
          <div className='col-4'>  
            <input className='w-100 form-control'>   
            </input>  
          </div>  
        </div> 
        <div> <input type="submit"class="btn btn-success custom-margin-right-1" value="Submit"/> &nbsp;
        <input type="reset"class="btn btn-dark custom-margin-right-1" value="Reset"/>
        </div>
<hr/>
<div className='row p-1 m-0'>
  <div className='col-6'>
    <strong>Documents</strong>
  </div>
 
  <div className='col-6 d-flex justify-content-end'>
  <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        New Document 
      </Dropdown.Toggle>
&nbsp;
      <Dropdown.Menu>
        <Dropdown.Item onClick={handleNewDocClick}>
          New Template
        </Dropdown.Item>
        <Dropdown.Item onClick={handleUploadClick}>
          Upload Document
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
 <button type="button" className="btn btn-dark custom-margin-right-1" onClick={handleDeleteRow}>Delete Documents</button>
</div>


</div>
      <BootstrapTable keyField='id' data={tableData} columns={columns} /> 
    </div> 
 
  ) 
} 
 
export default Documents;