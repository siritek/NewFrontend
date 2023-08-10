import React, { useState } from 'react'; 
import { Button } from 'react-bootstrap'; 
 
 
 var witnessesDataObj; 
function Witnesses({ onSave }) { 
  const [inputarr, setInputarr] = useState([]); 
  const [allChecked, setAllChecked] = useState(false); 
 
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
    setAllChecked(updatedInputArr.every(item => item.checked)); 
  } 
 
  function handleAllCheckedChange(e) { 
    const { checked } = e.target; 
    setAllChecked(checked); 
    const updatedInputArr = inputarr.map((item) => ({ 
      ...item, 
      checked: checked, 
    })); 
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
    onSave(updatedInputArr); 
 
    witnessesDataObj = updatedInputArr; 
 
    console.log(witnessesDataObj); 
  } 
 
  function handleAdd() { 
    setInputarr([ 
      ...inputarr, 
      { 
        checked: false, 
        witnessName: '', 
        witnessPhone1: '', 
        witnessPhone2: '', 
        witnessEmail: '', 
        witnessRecordedStatement: '', 
        submitted: false, 
      }, 
    ]); 
  } 
 
  return ( 
    <div className="container"> 
      <div className="row p-1 m-0"> 
        <div className="col-6"> 
          <strong>Witnesses</strong> 
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
                  <input type="checkbox" checked={allChecked} onChange={handleAllCheckedChange} /> 
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
                  <td colSpan={7} className="text-center"> 
                    No data entered yet! 
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
                            <input 
                              type="text" 
                              name="witnessName" 
                              value={info.witnessName} 
                              onChange={(e) => handleChange(e, ind, 'witnessName')} 
                              className="form-control" 
                            /> 
                          ) : ( 
                            info.witnessName 
                          )} 
                        </td> 
 
                        <td> 
                          {!info.submitted ? ( 
                            <input 
                              type="text" 
                              name="witnessPhone1" 
                              value={info.witnessPhone1} 
                              onChange={(e) => handleChange(e, ind, 'witnessPhone1')} 
                              className="form-control" 
                            /> 
                          ) : ( 
                            info.witnessPhone1 
                          )} 
                        </td> 
 
                        <td> 
                          {!info.submitted ? ( 
                            <input 
                              type="text" 
                              name="witnessPhone2" 
                              value={info.witnessPhone2} 
                              onChange={(e) => handleChange(e, ind, 'witnessPhone2')} 
                              className="form-control" 
                            /> 
                          ) : ( 
                            info.witnessPhone2 
                          )} 
                        </td> 
 
                        <td> 
                          {!info.submitted ? ( 
                            <input 
                              type="text" 
                              name="witnessEmail" 
                              value={info.witnessEmail} 
                              onChange={(e) => handleChange(e, ind, 'witnessEmail')} 
                              className="form-control" 
                            /> 
                          ) : ( 
                            info.witnessEmail 
                          )} 
                        </td> 
 
                        <td> 
                          {!info.submitted ? ( 
                            <input 
                              type="text" 
                              name="witnessRecordedStatement" 
                              value={info.witnessRecordedStatement} 
                              onChange={(e) => handleChange(e, ind, 'witnessRecordedStatement')} 
                              className="form-control" 
                            /> 
                          ) : ( 
                            info.witnessRecordedStatement 
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
 
// const WitnessesData = () => { 
//   return witnessesDataObj 
// } 
 
export default   Witnesses 
// export  {WitnessesData}; 


















// import { useState } from "react";
// import { Button } from "react-bootstrap";

// function Witnesses() {
//   const [inputarr, setInputarr] = useState([]);
//   const [allChecked, setAllChecked] = useState(false);

//   function handleChange(e, index, name) {
//     const { value } = e.target;
//     const updatedInputArr = [...inputarr];
//     updatedInputArr[index][name] = value;
//     setInputarr(updatedInputArr);
//   }

//   function handleCheckboxChange(e, index) {
//     const { checked } = e.target;
//     const updatedInputArr = [...inputarr];
//     updatedInputArr[index].checked = checked;
//     setInputarr(updatedInputArr);
//   }

//   function handleAllCheckedChange(e) {
//     const { checked } = e.target;
//     setAllChecked(checked);
//     const updatedInputArr = inputarr.map((item) => ({
//       ...item,
//       checked: checked,
//     }));
//     setInputarr(updatedInputArr);
//   }

//   function handleDelete() {
//     const updatedInputArr = inputarr.filter((item) => !item.checked);
//     setInputarr(updatedInputArr);
//     setAllChecked(false);
//   }

//   function handleSubmit() {
//     const updatedInputArr = inputarr.map((item) => ({
//       ...item,
//       submitted: true,
//     }));
//     setInputarr(updatedInputArr);
//     console.log(updatedInputArr);
//   }

//   function handleAdd() {
//     setInputarr([
//       ...inputarr,
//       {
//         checked: false,
//         Name: "",
//         Phone1: "",
//         Phone2: "",
//         Email: "",
//         RecordedStatement: "",
//         submitted: false,
//       },
//     ]);
//   }


//   return (
//     <div className="container">
//       <div className="row p-1 m-0">
//         <div className="col-6">
//           <strong> Witnesses </strong>
//         </div>
//         <div className="col-6 align-right">
//           <Button variant="success" onClick={handleAdd}>
//             Add
//           </Button>
//           &nbsp;
//           <Button variant="dark" onClick={handleDelete}>
//             Delete
//           </Button>
//           &nbsp;
//           <Button variant="primary" onClick={handleSubmit}>
//             Save
//           </Button>
//         </div>
//       </div>

//       <div className="App">
//         <div className="table-responsive">
//           <table className="table table-hover table-bordered">
//             <tbody>
//               <tr>
//                 <th>
//                   <input
//                     type="checkbox"
//                     checked={allChecked}
//                     onChange={handleAllCheckedChange}
//                   />
//                 </th>
//                 <th> ID </th>
//                 <th> Name </th>
//                 <th> Phone-1 </th>
//                 <th> Phone-2 </th>
//                 <th> Email </th>
//                 <th> Recorded Statement? </th>
//               </tr>
//               {inputarr.length < 1 ? (
//                 <tr>
//                   <td colSpan={8} className="text-center">
//                     No data Entered yet !
//                   </td>
//                 </tr>
//               ) : (
//                 inputarr.map((info, ind) => {
//                   return (
//                     !info.deleted && (
//                       <tr key={ind}>
//                         <td>
//                           <input
//                             type="checkbox"
//                             checked={info.checked}
//                             onChange={(e) => handleCheckboxChange(e, ind)}
//                           />
//                         </td>

//                         <td>{ind + 1}</td>

//                         <td>
//                           {!info.submitted ? (
//                             <input
//                               type="text"
//                               name="Name"
//                               value={info.Name}
//                               onChange={(e) => handleChange(e, ind, "Name")}
//                               className="form-control"
//                             />
//                           ) : (
//                             info.Name
//                           )}
//                         </td>

//                         <td>
//                           {!info.submitted ? (
//                             <input
//                               type="text"
//                               name="Phone1"
//                               value={info.Phone1}
//                               onChange={(e) => handleChange(e, ind, "Phone1")}
//                               className="form-control"
//                             />
//                           ) : (
//                             info.Phone1
//                           )}
//                         </td>

//                         <td>
//                           {!info.submitted ? (
//                             <input
//                               type="text"
//                               name="Phone2"
//                               value={info.Phone2}
//                               onChange={(e) => handleChange(e, ind, "Phone2")}
//                               className="form-control"
//                             />
//                           ) : (
//                             info.Phone2
//                           )}
//                         </td>

//                         <td>
//                           {!info.submitted ? (
//                             <input
//                               type="text"
//                               name="Email"
//                               value={info.Email}
//                               onChange={(e) => handleChange(e, ind, "Email")}
//                               className="form-control"
//                             />
//                           ) : (
//                             info.Email
//                           )}
//                         </td>

//                         <td>
//                           {!info.submitted ? (
//                             <input
//                               type="text"
//                               name="RecordedStatement"
//                               value={info.RecordedStatement}
//                               onChange={(e) =>
//                                 handleChange(e, ind, "RecordedStatement")
//                               }
//                               className="form-control"
//                             />
//                           ) : (
//                             info.RecordedStatement
//                           )}
//                         </td>
//                       </tr>
//                     )
//                   );
//                 })
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Witnesses;

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
