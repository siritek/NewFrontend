import { useState } from "react";
import { Button } from "react-bootstrap";

function Witnesses() {
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

  return (
    <div className="container">
      <div className="row p-1 m-0">
        <div className="col-8">
          <strong> Witnesses </strong>
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
                <th> Phone-1 </th>
                <th> Phone-2 </th>
                <th> Email </th>
                <th> Recorded Statement? </th>
              </tr>
              {inputarr.length < 1 ? (
                <tr>
                  <td colSpan={8} className="text-center">
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
                          name="Phone1"
                          value={info.Phone1}
                          onChange={(e) => handleInputChange(e, ind)}
                          className="form-control"
                        />
                      </td>

                      <td>
                        <input
                          type="text"
                          name="Phone2"
                          value={info.Phone2}
                          onChange={(e) => handleInputChange(e, ind)}
                          className="form-control"
                        />
                      </td>

                      <td>
                        <input
                          type="text"
                          name="Email"
                          value={info.Email}
                          onChange={(e) => handleInputChange(e, ind)}
                          className="form-control"
                        />
                      </td>

                      <td>
                        <input
                          type="text"
                          name="RecordedStatement"
                          value={info.RecordedStatement}
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

export default Witnesses;

// import React, { useState } from "react";
// import BootstrapTable from "react-bootstrap-table-next";

// function Witnesses() {
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
//       dataField: "Phone-1",
//       text: "Phone-1",
//       sort: true,
//       headerClasses: "Phone-1 Limits-header",
//       classes: "Phone-1-column",
//       formatter: (cellContent, row) => (
//         <div className="row">
//           <div className="col-12">
//             <input className="form-control"></input>
//           </div>
//         </div>
//       ),
//     },

//     {
//       dataField: "Phone-2",
//       text: "Phone-2",
//       sort: true,
//       headerClasses: "Phone-2",
//       classes: "Phone-2-column",
//       formatter: (cellContent, row) => (
//         <div className="row">
//           <div className="col-12">
//             <input className="form-control"></input>
//           </div>
//         </div>
//       ),
//     },

//     {
//       dataField: "Email",
//       text: "Email",
//       sort: true,
//       headerClasses: "Email",
//       classes: "Email-column",
//       formatter: (cellContent, row) => (
//         <div className="row">
//           <div className="col-12">
//             <input className="form-control"></input>
//           </div>
//         </div>
//       ),
//     },

//     {
//       dataField: "Recorded Statement? ",
//       text: "Recorded Statement?",
//       sort: true,
//       headerClasses: "Recorded Statement?",
//       classes: "Recorded Statement?-column",
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
//           <strong>Witnesses</strong>
//         </div>
//          <div className="col-6 align-right">
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

// export default Witnesses;
