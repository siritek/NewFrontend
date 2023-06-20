import { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function Policylevel() {
  const [inputarr, setInputarr] = useState([]);
  const [allChecked, setAllChecked] = useState(false);
  const options = ["None", "Fire", "Water", "Accident"];


  function handleChange(e, index, name) {
    const { value } = e.target;
    const updatedInputArr = [...inputarr];
    updatedInputArr[index][name] = value;
    setInputarr(updatedInputArr);
  }

    function handleCheckboxChange(e, index) {
    const { checked } = e.target;
    const updatedInputArr = [...inputarr];
    updatedInputArr[index].checked = checked;
    setInputarr(updatedInputArr);
  }

    function handleAllCheckedChange(e) {
    const { checked } = e.target;
    setAllChecked(checked);
    const updatedInputArr = inputarr.map((item) => ({ ...item, checked: checked }));
    setInputarr(updatedInputArr);
  }

  function handleDelete() {
    const updatedInputArr = inputarr.filter((item) => !item.checked);
    setInputarr(updatedInputArr);
    setAllChecked(false);
  }
  
  function handleSubmit() {
    const updatedInputArr = inputarr.map((item) => ({
      ...item,
      submitted: true,
    }));
    setInputarr(updatedInputArr);
    console.log(updatedInputArr);
  }

  function handleAdd() {
    setInputarr([
      ...inputarr,
      {
        checked: false,
        CoverageType : "",
        IncidentLimits: "",
        PerPersonLimit: "",
        submitted: false, 
      },
    ]);
  }

  return (
    <div className="container">
      <div className="row p-1 m-0">
        <div className="col-6">
          <strong> Policy level Coverages </strong>
        </div>
        <div className="col-6 align-right">
          <Button variant="success" onClick={handleAdd}>
            Add
          </Button>
          &nbsp;
          <Button variant="dark" onClick={handleDelete}>
            Delete
          </Button>
          &nbsp;
          <Button variant="primary" onClick={handleSubmit}>
            Save
          </Button>
        </div>
      </div>

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
                <th> Coverage Type </th>
                <th> Incident Limits </th>
                <th> Per Person Limit </th>
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
                    !info.deleted && (
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
                          {!info.submitted ? (
                            <Form.Select
                              value={info.option}
                              onChange={(e) =>
                                handleChange(e, ind, "CoverageType")
                              }
                            >
                              {options.map((option, index) => (
                                <option key={index} value={option}>
                                  {option}
                                </option>
                              ))}
                            </Form.Select>
                          ) : (
                            info.CoverageType
                          )}
                        </td>

                        <td>
                          {!info.submitted ? (
                            <input
                              type="text"
                              name="IncidentLimits"
                              value={info.IncidentLimits}
                              onChange={(e) =>
                                handleChange(e, ind, "IncidentLimits")
                              }
                              className="form-control"
                            />
                          ) : (
                            info.IncidentLimits
                          )}
                        </td>

                        <td>
                          {!info.submitted ? (
                            <input
                              type="text"
                              name="PerPersonLimit"
                              value={info.PerPersonLimit}
                              onChange={(e) =>
                                handleChange(e, ind, "PerPersonLimit")
                              }
                              className="form-control"
                            />
                          ) : (
                            info.PerPersonLimit
                          )}
                        </td>
                      </tr>
                    )
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Policylevel;

// import React, { useState } from 'react'
// import BootstrapTable from 'react-bootstrap-table-next';
// import Form from "react-bootstrap/Form";

// function Policylevel() {

//   //Coloumns For the Table
//   const columns = [
//     {
//       dataField: "checkbox",
//       text: "Checkbox",
//       headerClasses: "checkbox-header",
//       classes: "checkbox-column",
//       headerFormatter: (cellContent, row) => (
//         <div className="form-check">
//           <input
//             type="checkbox"
//             className="form-check-input"
//             id={row.id}

//           />
//         </div>
//       ),
//       formatter: (cellContent, row) => (
//         <div className="form-check">
//           <input
//             type="checkbox"
//             className="form-check-input"
//             id={row.id}
//             checked={row.selected}
//       onChange={() => handleCheckboxChange(row.id)}
//           />
//         </div>

//       ),
//     },
//     {
//       dataField: "id",
//       text: "#",
//       sort: true,
//       headerClasses: "id-header",
//       classes: "id-column",
//     },
//     {
//       dataField: "Coverage type",
//       text: "Coverage type",
//       sort: true,
//       headerClasses: "Coverage type-header",
//       classes: "Coverage type-column",
//       formatter: (cellContent, row) => (

//         <div className="col-12">
//           <Form.Select aria-label="Default select example">
//             <option value="None">None</option>
//             <option value="Fire">Fire</option>
//             <option value="Water">Water</option>
//             <option value="Accident">Accident</option>
//           </Form.Select>
//         </div>

//       ),
//     },
//     {
//       dataField: "Incident Limits",
//       text: "Incident Limits",
//       sort: true,
//       headerClasses: "Incident Limits-header",
//       classes: "Incident Limits-column",
//       formatter: (cellContent, row) => (
//           <div className='row'>
//             <div className='col-12'>
//               <input type='text' className='form-control'></input>
//             </div>
//           </div>
//       ),
//     },

//      {
//       dataField: "Per Person Limit",
//       text: "Per Person Limit",
//       sort: true,
//       headerClasses: "Per Person Limit-header",
//       classes: "Per Person Limit-column",
//       formatter: (cellContent, row) => (
//           <div className='row'>
//             <div className='col-12'>
//             <input type='text' className='form-control'></input>
//             </div>
//           </div>
//       ),
//     },

//   ];

//   //Test data & State of the table
//   const [tableData, setTableData] = useState([
//     { id: 1, name: 'John Doe', type: 'Type A', selected: false },
//     // { id: 2, name: 'Jane Smith', type: 'Type B', selected: false },
//     // { id: 3, name: 'Bob Johnson', type: 'Type A', selected: false },
//   ]);

//   //Add new row on button click
//   const handleAddRow = () => {
//     const newRow = { id: tableData.length + 1, name: '', type: '' };
//     setTableData([...tableData, newRow]);
//   };

//   //Get the state of checked row
//   const handleCheckboxChange = (rowId) => {
//     setTableData((prevData) =>
//       prevData.map((row) =>
//         row.id === rowId ? { ...row, selected: !row.selected } : row
//       )
//     );
//   };

//   //Delete the checked row from the table
//   const handleDeleteRow = () => {
//     const updatedData = tableData.filter((row) => !row.selected);
//     setTableData(updatedData);
//   };

//   return (
//     <div>
//       <div className='row p-1 m-0'>
//         <div className='col-6'>
//           <strong>Policy-level Coverages</strong>
//         </div>
//         <div className='col-6 align-right'>
//             <button type="button" className="btn btn-success custom-margin-right-1" onClick={handleAddRow}>Add</button>
//             &nbsp;
//             <button type="button" className="btn btn-dark" onClick={handleDeleteRow}>Remove</button>
//         </div>
//       </div>
//       <BootstrapTable keyField='id' data={tableData} columns={columns} />
//     </div>

//   )
// }

// export default Policylevel
