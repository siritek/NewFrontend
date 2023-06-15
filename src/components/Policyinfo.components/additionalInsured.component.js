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

  function handleChange(e, index, name) {
    const { value } = e.target;
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

  function handleSubmit() {
    const list = inputarr.map((item) => ({
      ...item,
      submitted: true,
    }));
    setInputarr(list);
    console.log(list);
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
              </tr>
              {inputarr.length < 1 ? (
                <tr>
                  <td colSpan={5} className="text-center">
                    No data Entered yet!
                  </td>
                </tr>
              ) : (
                inputarr.map((info, ind) => {
                  return (
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
