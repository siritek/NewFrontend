import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function Additional() {
  const [inputarr, setInputarr] = useState([]);
  const [allChecked, setAllChecked] = useState(false);
  const options = [
    "None",
    "Additional Insured (Person)",
    "Additional Named Insured (Company)",
  ];

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
        name: "",
        address: "",
        type: "",
        submitted: false, 
      },
    ]);
  }

  function handleDeleteRow(index) {
    const updatedInputArr = [...inputarr];
    updatedInputArr.splice(index, 1);
    setInputarr(updatedInputArr);
  }

  return (
    <div className="container">
      <div className="row p-1 m-0">
        <div className="col-6">
          <strong>Additional Insured</strong>
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
                <th>ID</th>
                <th>Name</th>
                <th>Address</th>
                <th>Type</th>
                <th>Delete</th> {/* Render the "Delete" column */}
              </tr>
              {inputarr.length < 1 ? (
                <tr>
                  <td colSpan={6} className="text-center">
                    No data entered yet!
                  </td>
                </tr>
              ) : (
                inputarr.map((info, ind) => {
                  return (
                    !info.deleted && (
                      <tr key={ind}>
                        <td>
                          {!info.submitted && (
                            <input
                              type="checkbox"
                              checked={info.checked}
                              onChange={(e) => handleCheckboxChange(e, ind)}
                            />
                          )}
                        </td>
                        <td>{ind + 1}</td>
                        <td>
                          {!info.submitted ? (
                            <input
                              type="text"
                              name="name"
                              value={info.name}
                              onChange={(e) => handleChange(e, ind, "name")}
                              placeholder="Name"
                              className="form-control"
                            />
                          ) : (
                            info.name
                          )}
                        </td>
                        <td>
                          {!info.submitted ? (
                            <input
                              type="text"
                              name="address"
                              value={info.address}
                              onChange={(e) => handleChange(e, ind, "address")}
                              placeholder="Address"
                              className="form-control"
                            />
                          ) : (
                            info.address
                          )}
                        </td>
                        <td>
                          {!info.submitted ? (
                            <Form.Select
                              value={info.type}
                              onChange={(e) => handleChange(e, ind, "type")}
                            >
                              {options.map((option, index) => (
                                <option key={index} value={option}>
                                  {option}
                                </option>
                              ))}
                            </Form.Select>
                          ) : (
                            info.type
                          )}
                        </td>
                        <td>
                          <Button
                            variant="danger"
                            onClick={() => handleDeleteRow(ind)}
                            disabled={info.submitted} 
                          >
                            Delete
                          </Button>
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

export default Additional;
