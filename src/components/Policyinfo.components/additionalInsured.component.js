//import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function Additional() {
  const [inputarr, setInputarr] = useState([]);
  const [allChecked, setAllChecked] = useState(false);
  const options = [
    "None",
    "Additional Insured (Person)",
    "Additional Named Insured (Company)",
  ];

  function changhandle() {
    setInputarr([
      ...inputarr,
      {
        checked: false,
        Name: "",
        Address: "",
        Type: "",
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
    list[index].Type = value;
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
        <div className="col-6">
          <strong>Additional Insured</strong>
        </div>
        <div className="col-6 align-right">
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
                <th>ID</th>
                <th> Name </th>
                <th> Address </th>
                <th> Type </th>
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
                          value={info.name}
                          onChange={(e) => handleInputChange(e, ind)}
                          placeholder="Name"
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="Address"
                          value={info.Address}
                          onChange={(e) => handleInputChange(e, ind)}
                          placeholder="Address"
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

export default Additional;


