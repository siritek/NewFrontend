import { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function Injuries() {
  const [inputarr, setInputarr] = useState([]);
  const [allChecked, setAllChecked] = useState(false);
  const options = ["None", "Minor", "Moderate", "Major(hospitalization)","Life-threatening","Death"];

  function changhandle() {
    setInputarr([
      ...inputarr,
      {
        checked: false,
        Name: "",
        Severity: "",
        Description: "",
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

  function handleOptionChange(e, index) {
    const { value } = e.target;
    const list = [...inputarr];
    list[index].CoverageType = value;
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

  return (
    <div className="container">
      <div className="row p-1 m-0">
        <div className="col-8">
          <strong> Injuries </strong>
        </div>
        <div className="col-4 align-right">
          <Button variant="success" onClick={changhandle}>
            Add
          </Button>
          &nbsp;
          <Button variant="dark" onClick={handleDelete}>
            Delete
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
                <th> Name </th>
                <th> Severity </th>
                <th> Description </th>
              </tr>
              {inputarr.length < 1 ? (
                <tr>
                  <td colSpan={5} className="text-center">
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
                        <Form.Select
                          value={info.option}
                          onChange={(e) => handleOptionChange(e, ind)}
                        >
                          {options.map((option, index) => (
                            <option key={index} value={option}>
                              {option}
                            </option>
                          ))}
                        </Form.Select>
                      </td>

                      <td>
                        <input
                          type="text"
                          name="Description"
                          value={info.Description}
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
  );
}

export default Injuries;

// import React, { useState } from "react";
// import BootstrapTable from "react-bootstrap-table-next";
// import Form from "react-bootstrap/Form";

// function Injuries() {
//   //Coloumns For the Table
//   const columns = [
//     {
//       dataField: "checkbox",
//       text: "Checkbox",
//       headerClasses: "checkbox-header",
//       classes: "checkbox-column",
//       headerFormatter: (cellContent, row) => (
//         <div className="form-check">
//           <input type="checkbox" className="form-check-input" id={row.id} />
//         </div>
//       ),
//       formatter: (cellContent, row) => (
//         <div className="form-check">
//           <input
//             type="checkbox"
//             className="form-check-input"
//             id={row.id}
//             checked={row.selected}
//             onChange={() => handleCheckboxChange(row.id)}
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
//       dataField: "Name",
//       text: "Name",
//       sort: true,
//       headerClasses: "Name type-header",
//       classes: "Name type-column",
//       formatter: (cellContent, row) => (
//         <div className="row">
//           <div className="col-12">
//             <input className="form-control"></input>
//           </div>
//         </div>
//       ),
//     },
//     {
//       dataField: "Severity",
//       text: "Severity",
//       sort: true,
//       headerClasses: "Severity Limits-header",
//       classes: "Severity-column",
//       formatter: (cellContent, row) => (
//         <div className="row">
//           <div className="col-12">
//           <Form.Select aria-label="Default select example">
//             <option value="None">None</option>
//             <option value="person">Minor</option>
//             <option value="company">Moderate</option>
//             <option value="company">Major(hospitalization)</option>
//             <option value="company">Life-threatening</option>
//             <option value="company">Death</option>
//           </Form.Select>
//           </div>
//         </div>
//       ),
//     },

//     {
//       dataField: "Description",
//       text: "Description",
//       sort: true,
//       headerClasses: "Description",
//       classes: "Description-column",
//       formatter: (cellContent, row) => (
//         <div className="row">
//           <div className="col-12">
//             <input className="form-control"></input>
//           </div>
//         </div>
//       ),
//     },
//   ];

//   //Test data & State of the table
//   const [tableData, setTableData] = useState([
//     { id: 1, name: "John Doe", type: "Type A", selected: false },
//     // { id: 2, name: 'Jane Smith', type: 'Type B', selected: false },
//     // { id: 3, name: 'Bob Johnson', type: 'Type A', selected: false },
//   ]);

//   //Add new row on button click
//   const handleAddRow = () => {
//     const newRow = { id: tableData.length + 1, name: "", type: "" };
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
//       <div className="row p-1 m-0 ">
//         <div className="col-6">
//           <strong>Injuries</strong>
//         </div>
//         <div className="col-6 align-right">
//           <button
//             type="button"
//             className="btn btn-success custom-margin-right-1"
//             onClick={handleAddRow}>
//             Add
//           </button>
//           &nbsp; &nbsp;
//           <button type="button" className="btn btn-dark" onClick={handleDeleteRow}>
//             Remove
//           </button>
//         </div>
//       </div>
//       <BootstrapTable keyField="id" data={tableData} columns={columns} />
//     </div>
//   );
// }

// export default Injuries;
