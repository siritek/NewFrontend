import React, { useEffect, useState } from "react";
import { Button} from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function Guideware({ onSave }) {
  const [inputarr, setInputarr] = useState([]);
  const [showData, setShowData] = useState(false);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8085/sensor/all");
      const data = response.data;
      const lastInsertedData = data[data.length - 1];

      setInputarr([lastInsertedData]);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleAddButtonClick = async () => {
    await fetchData();
    setShowData(true);
  };


  return (
    <div className="container">
      <div className="row p-1 m-0">
        <div className="col-6">
          <strong>
            <h2>Response :-</h2>
          </strong>
        </div>
        <div className="col-16 d-flex justify-content-end">
          <Button variant="primary" onClick={handleAddButtonClick}>
            Add
          </Button>
        </div>
      </div>

      <div className="App" style={{ marginBottom: "100px" }}>
        <div className="table-responsive">
          <table className="table table-hover table-bordered">
            <tbody>
              <tr>
                <th>Id</th>
                <th>GW's claim number </th>
                <th>GW' create date</th>
                <th>GW' create time</th>
              </tr>
              {showData && inputarr.length < 1 ? (
                <tr>
                  <td colSpan={17} className="text-center">
                    No data available!
                  </td>
                </tr>
              ) : null}
              {showData &&
                inputarr.map((info, ind) => {
                  return (
                    <tr key={ind}>
                      <td>{info.Id}</td>
                      <td>{info.GWclaimnumber}</td>
                      <td>{info.GWclaimdate}</td>
                      <td>{info.GWclaimtime}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Guideware;
