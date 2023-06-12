import React, { useState } from 'react' 
//import BootstrapTable from 'react-bootstrap-table-next'; 
import { Dropdown,Button } from "react-bootstrap"; 
import Form from "react-bootstrap/Form";  
 
function Documents(props) { 
  const[Related,setRelated]=React.useState('None');
  const[Status,setStatus]=React.useState('None');
  const[Identity,setIdentity]=React.useState('')

  const [inputarr, setInputarr] = useState([]);
  const [allChecked, setAllChecked] = useState(false);

    function changhandle() {
    setInputarr([
      ...inputarr,
      {
        checked: false,
        Name: "",
        Phone1: "",
        Phone2: "",
        Email: "",
        RecordedStatement: "",
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

  const handleNewDocClick=()=>{
    props.onNewDocClick();
  };
  const handleUploadClick=()=>{
    props.onUploadClick();
  };
  
  // const columns = [ 
  //   { 
  //     dataField: "checkbox", 
  //     text: "Checkbox", 
  //     headerClasses: "checkbox-header", 
  //     classes: "checkbox-column", 
  //     headerFormatter: (cellContent, row) => ( 
  //       <div className="form-check"> 
  //         <input 
  //           type="checkbox" 
  //           className="form-check-input" 
  //           id={row.id} 
             
  //         /> 
  //       </div> 
  //     ), 
  //     formatter: (cellContent, row) => ( 
  //       <div className="form-check"> 
  //         <input 
  //           type="checkbox" 
  //           className="form-check-input" 
  //           id={row.id} 
  //           checked={row.selected} 
  //     onChange={() => handleCheckboxChange(row.id)} 
  //         /> 
  //       </div> 
 
  //     ), 
  //   }, 
  //   { 
  //     dataField: "id", 
  //     text: "#", 
  //     sort: true, 
  //     headerClasses: "id-header", 
  //     classes: "id-column", 
  //   }, 
  //   { 
  //     dataField: "Name", 
  //     text: "Name", 
  //     sort: true, 
  //     headerClasses: "Name-header", 
  //     classes: "Name-column", 
  //     formatter: (cellContent, row) => ( 
 
  //       <div className='row'> 
  //         <div className='col-12'> 
            
  //         </div> 
    
  //     </div>    
 
  //     ), 
  //   }, 
 
  //   { 
  //       dataField: "Document-Type", 
  //       text: "Document-Type", 
  //       sort: true, 
  //       headerClasses: "Document-Type-header", 
  //       classes: "Document-Type-column", 
  //       formatter: (cellContent, row) => ( <div className='row'> 
  //       <div className='col-12'>
  //        </div></div>
  //        ),},
  //        { 
  //           dataField: "Status", 
  //           text: "Status", 
  //           sort: true, 
  //           headerClasses: "Status-header", 
  //           classes: "Status-column", 
  //           formatter: (cellContent, row) => ( <div className='row'> 
  //           <div className='col-12'>
  //            </div></div>
  //            ),},
            
  //                { 
  //                   dataField: "Uploaded By", 
  //                   text: "Uploaded By", 
  //                   sort: true, 
  //                   headerClasses: "Uploaded-header", 
  //                   classes: "Uploaded-column", 
  //                   formatter: (cellContent, row) => ( <div className='row'> 
  //                   <div className='col-12'>
  //                    </div></div>
  //                    ),},
 
   
 
  // ]; 
 
  // //Test data & State of the table 
  // const [tableData, setTableData] = useState([ 
  //   { id: 1, name: 'John Doe', type: 'Type A', selected: false }, 
  //   // { id: 2, name: 'Jane Smith', type: 'Type B', selected: false }, 
  //   // { id: 3, name: 'Bob Johnson', type: 'Type A', selected: false }, 
  // ]); 
 
  // //Add new row on button click 
  // // const handleAddRow = () => {   
  // //   const newRow = { id: tableData.length + 1, name: '', type: '' }; 
  // //   setTableData([...tableData, newRow]); 
  // // }; 
 
  // //Get the state of checked row 
  // const handleCheckboxChange = (rowId) => { 
  //   setTableData((prevData) => 
  //     prevData.map((row) => 
  //       row.id === rowId ? { ...row, selected: !row.selected } : row 
  //     ) 
  //   ); 
  // }; 
 
  // //Delete the checked row from the table 
  // const handleDeleteRow = () => { 
  //   const updatedData = tableData.filter((row) => !row.selected); 
  //   setTableData(updatedData); 
  // }; 
 
  return ( 
    <div> 
        <div> 
    <h2> Documents</h2> 
    <hr />
    </div>
    <div className='row mb-2'>  
          <div className='col-3'><label htmlFor='Related'>Related To</label></div>  
          <div className='col-4'>  
            <Form.Select id='Related' value={Related} onChange={event=>{setRelated(event.target.value)}} className='w-100 form-control'>  
              <option value="None">None</option>  
              <option value="Claim">Claim</option>  
              <option value="Contacts">Contacts</option>  
            </Form.Select>  
          </div>  
        </div>

        <div className='row mb-2'>  
          <div className='col-3'><label htmlFor='Status'>Status</label></div>  
          <div className='col-4'>  
            <Form.Select id="Status" value={Status} onChange={event=>{setStatus(event.target.value)}}  className='w-100 form-control'>  
              <option value="None">None</option>  
              <option value="Any">Any</option>  
              <option value="Approved">Approved</option> 
              <option value="Approving">Approving</option> 
              <option value="Draft">Draft</option> 
              <option value="Final">Final</option>  
            </Form.Select>  
          </div>  
        </div> 
        <div className='row mb-2'>  
          <div className='col-3'><label htmlFor='Identity'>Name (or) Identity</label></div>  
          <div className='col-4'>  
            <input id="Identity" type="text"value={Identity} onChange={event=>{setIdentity(event.target.value)}} className='w-100 form-control'>   
            </input>  
          </div>  
        </div> 
       
        <div> <input type="submit"className="btn btn-success custom-margin-right-1" value="Submit"/> &nbsp;
        <input type="reset"className="btn btn-dark custom-margin-right-1" value="Reset"/>
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
 <button type="button" className="btn btn-dark " >Delete Documents</button>
</div>


</div>
      {/* <BootstrapTable keyField='id' data={tableData} columns={columns} />  */}
          <div className="container">
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
                <th> Name </th>
                <th> Document-Type </th>
                <th> Status </th>
                <th> Uploaded by </th>
              </tr>
              {inputarr.length < 1 ? (
                <tr>
                  <td colSpan={6} className="text-center">
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
                        <input
                          type="text"
                          name="Name"
                          value={info.Name}
                          onChange={(e) => handleInputChange(e, ind)}
                          className="form-control"
                        />
                      </td>

                      <td>
                        <input
                          type="text"
                          name="DocumentType"
                          value={info.DocumentType}
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

                      <td>
                        <input
                          type="text"
                          name="UploadedBy"
                          value={info.UploadedBy}
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
 
  ) 
} 
 
export default Documents;