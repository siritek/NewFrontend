import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

function Dropdownlist() {
  const [componentData, setComponentData] = useState({

    state: "",
    stateOptions: [] ,
    stateInput: "",

    adjuster: "",
    adjusterOptions:[] ,
    adjusterInput: "",

    relationshiptoinsured: "",
    relationshipToInsuredOptions: [],
    relationshipToInsuredInput: "",

    topics: "",
    topicOptions: [],
    topicInput: "",

    securityType: "",
    securityTypeOptions: [],
    securityTypeInput: "",

    relatedTo: "",
    relatedToOptions: [],
    relatedToInput: "",

    exposureStatus: "",
    exposureStatusOptions: [],
    exposureStatusInput: "",

    assignedTo: "",
    assignedToOptions: [],
    assignedToInput: "",

    createdBy: "",
    createdByOptions: [],
    createdByInput: "",
  });

  const [showInput, setShowInput] = useState({
    state: false,
    adjuster: false,
    relationshipToInsured: false,
    topic: false,
    securityType: false,
    relatedTo: false,
    status: false,
    assignedTo: false,
    createdBy: false,
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setComponentData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

 

  const handleDelete = (id) => {
    const deletedOption = componentData[id];
    const deletedValue = componentData[id + "Options"].find(
      (option) => option === deletedOption
    );

    setComponentData((prevData) => ({
      ...prevData,
      [id + "Options"]: prevData[id + "Options"].filter(
        (option) => option !== deletedOption
      ),
      [id]: "None",
    }));

    const output = {
      id: id,
      deletedValue: deletedValue,
    };
    console.log(output);

    // Perform the appropriate POST request to the server to delete the option

    fetch("http://localhost:8080/modifyDropdown/modify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(output),
    });
  };

  const handleAdd = (id) => {
    const addedOption = componentData[id + "Input"];

    setComponentData((prevData) => ({
      ...prevData,
      [id + "Options"]: [...prevData[id + "Options"], addedOption],
      [id + "Input"]: "",
    }));

    setShowInput((prevShowInput) => ({
      ...prevShowInput,
      [id]: false,
    }));

    const output = {
      id: id,
      addedValue: addedOption,
    };
    console.log(output);

      // Perform the appropriate POST request to the server to add the option
      fetch("http://localhost:8080/modifyDropdown/modify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(output),
      });
 };



  const toggleInput = (id) => {
    setShowInput((prevShowInput) => ({
      ...prevShowInput,
      [id]: true,
    }));
  };
  
const fetchData = async () => {
  try {
    const response = await axios.get("http://localhost:8080/admindropdownsDD");

    console.log("Response data:", response.data);

    const data = response.data;

    //if (method != null && value != null && dropdownValue != null) {
      
    setComponentData((prevData) => ({
      ...prevData,
      stateOptions: data.state || [],
      adjusterOptions: data.adjuster || [],
      relationshipToInsuredOptions: data.relationshiptoinsured || [],
      topicOptions: data.topic || [],
      securityTypeOptions: data.securityType || [],
      relatedToOptions: data.relatedTo || [],
      exposureStatusOptions: data.exposureStatus || [],
    
      assignedToOptions: data.assignedTo || [],
      createdByOptions: data.createdBy || [],
    }));
  }
  //}
   catch (error) {
    console.error("Error fetching data:", error);
    // Add proper error handling, e.g., show error message to the user
  }
 
};

useEffect(() => {
  fetchData();
}, []);

  const {
    stateOptions,
    stateInput,

    adjusterOptions,
    adjusterInput,

    relationshipToInsuredOptions,
    relationshipToInsuredInput,

    topicOptions,
    topicInput,

    securityTypeOptions,
    securityTypeInput,

    relatedToOptions,
    relatedToInput,

    exposureStatusOptions,
    exposureStatusInput,

    assignedToOptions,
    assignedToInput,

    // createdByOptions,
    // createdByInput,

  } = componentData;

  return (
    <div>
      <div className="ms-3">
        <h2>Dropdown-list</h2>
        <hr />

        {/* state */}

        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="state">State</label>
          </div>
          <div className="col-4">
            <Form.Select
              className="w-100 form-control"
              id="state"
              value={componentData.state}
              onChange={handleInputChange}
            >
              {stateOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Form.Select>
          </div>
          <div className="col-4">
            <Button id="state" onClick={() => handleDelete("state")}>
              Delete
            </Button>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-4">
            {showInput.state && (
              <Form.Control
                type="text"
                id="stateInput"
                value={stateInput}
                onChange={handleInputChange}
              />
            )}
          </div>
          <div className="col-4">
            {!showInput.state && (
              <Button id="state" onClick={() => toggleInput("state")}>
                Add
              </Button>
            )}
            {showInput.state && (
              <Button id="state" onClick={() => handleAdd("state")}>
                Confirm
              </Button>
            )}
          </div>
        </div>

        {/* adjuster */}

        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="adjuster">Adjuster</label>
          </div>
          <div className="col-4">
            <Form.Select
              className="w-100 form-control"
              id="adjuster"
              value={componentData.adjuster}
              onChange={handleInputChange}
            >
              {adjusterOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Form.Select>
          </div>
          <div className="col-4">
            <Button id="adjuster" onClick={() => handleDelete("adjuster")}>
              Delete
            </Button>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-4">
            {showInput.adjuster && (
              <Form.Control
                type="text"
                id="adjusterInput"
                value={adjusterInput}
                onChange={handleInputChange}
              />
            )}
          </div>
          <div className="col-4">
            {!showInput.adjuster && (
              <Button id="adjuster" onClick={() => toggleInput("adjuster")}>
                Add
              </Button>
            )}
            {showInput.adjuster && (
              <Button id="adjuster" onClick={() => handleAdd("adjuster")}>
                Confirm
              </Button>
            )}
          </div>
        </div>

        {/* relationshipToInsured */}

        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="relationshiptoinsured">
              Relationship to Insured
            </label>
          </div>
          <div className="col-4">
            <Form.Select
              className="w-100 form-control"
              id="relationshiptoinsured"
              value={componentData.relationshiptoinsured}
              onChange={handleInputChange}
            >
              {relationshipToInsuredOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Form.Select>
          </div>
          <div className="col-4">
            <Button
              id="relationshiptoinsured"
              onClick={() => handleDelete("relationshiptoinsured")}
            >
              Delete
            </Button>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-4">
            {showInput.relationshiptoinsured && (
              <Form.Control
                type="text"
                id="relationshipToInsuredInput"
                value={relationshipToInsuredInput}
                onChange={handleInputChange}
              />
            )}
          </div>
          <div className="col-4">
            {!showInput.relationshiptoinsured && (
              <Button
                id="relationshiptoinsured"
                onClick={() => toggleInput("relationshiptoinsured")}
              >
                Add
              </Button>
            )}
            {showInput.relationshiptoinsured && (
              <Button
                id="relationshiptoinsured"
                onClick={() => handleAdd("relationshiptoinsured")}
              >
                Confirm
              </Button>
            )}
          </div>
        </div>

         {/* topic  */}

        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="topic">Topic</label>
          </div>
          <div className="col-4">
            <Form.Select
              className="w-100 form-control"
              id="topic"
              value={componentData.topic}
              onChange={handleInputChange}
            >
              {topicOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Form.Select>
          </div>
          <div className="col-4">
            <Button id="topic" onClick={() => handleDelete("topic")}>
              Delete
            </Button>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-4">
            {showInput.topic && (
              <Form.Control
                type="text"
                id="topicInput"
                value={topicInput}
                onChange={handleInputChange}
              />
            )}
          </div>
          <div className="col-4">
            {!showInput.topic && (
              <Button id="topic" onClick={() => toggleInput("topic")}>
                Add
              </Button>
            )}
            {showInput.topic && (
              <Button id="topic" onClick={() => handleAdd("topic")}>
                Confirm
              </Button>
            )}
          </div>
        </div>

        {/* securityType */}

        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="securityType">Security Type</label>
          </div>
          <div className="col-4">
            <Form.Select
              className="w-100 form-control"
              id="securityType"
              value={componentData.securityType}
              onChange={handleInputChange}
            >
              {securityTypeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Form.Select>
          </div>
          <div className="col-4">
            <Button
              id="securityType"
              onClick={() => handleDelete("securityType")}
            >
              Delete
            </Button>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-4">
            {showInput.securityType && (
              <Form.Control
                type="text"
                id="securityTypeInput"
                value={securityTypeInput}
                onChange={handleInputChange}
              />
            )}
          </div>
          <div className="col-4">
            {!showInput.securityType && (
              <Button
                id="securityType"
                onClick={() => toggleInput("securityType")}
              >
                Add
              </Button>
            )}
            {showInput.securityType && (
              <Button
                id="securityType"
                onClick={() => handleAdd("securityType")}
              >
                Confirm
              </Button>
            )}
          </div>
        </div>

        {/* relatedTo */}

        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="relatedTo">Related To</label>
          </div>
          <div className="col-4">
            <Form.Select
              className="w-100 form-control"
              id="relatedTo"
              value={componentData.relatedTo}
              onChange={handleInputChange}
            >
              {relatedToOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Form.Select>
          </div>
          <div className="col-4">
            <Button id="relatedTo" onClick={() => handleDelete("relatedTo")}>
              Delete
            </Button>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-4">
            {showInput.relatedTo && (
              <Form.Control
                type="text"
                id="relatedToInput"
                value={relatedToInput}
                onChange={handleInputChange}
              />
            )}
          </div>
          <div className="col-4">
            {!showInput.relatedTo && (
              <Button id="relatedTo" onClick={() => toggleInput("relatedTo")}>
                Add
              </Button>
            )}
            {showInput.relatedTo && (
              <Button id="relatedTo" onClick={() => handleAdd("relatedTo")}>
                Confirm
              </Button>
            )}
          </div>
        </div>

        {/* status (exposure screen) */}

        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="status">Status</label>
          </div>
          <div className="col-4">
            <Form.Select
              className="w-100 form-control"
              id="exposureStatus"
              value={componentData.exposureStatus}
              onChange={handleInputChange}
            >
              {exposureStatusOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Form.Select>
          </div>
          <div className="col-4">
            <Button id="exposureStatus" onClick={() => handleDelete("exposureStatus")}>
              Delete
            </Button>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-4">
            {showInput.exposureStatus  && (
              <Form.Control
                type="text"
                id="exposureStatusInput"
                value={exposureStatusInput}
                onChange={handleInputChange}
              />
            )}
          </div>
          <div className="col-4">
            {!showInput.exposureStatus  && (
              <Button id="status" onClick={() => toggleInput("exposureStatus")}>
                Add
              </Button>
            )}
            {showInput.exposureStatus  && (
              <Button id="status" onClick={() => handleAdd("exposureStatus")}>
                Confirm
              </Button>
            )}
          </div>
        </div>

        {/* assignedTo */}

        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="assignedTo">Assigned To</label>
          </div>
          <div className="col-4">
            <Form.Select
              className="w-100 form-control"
              id="assignedTo"
              value={componentData.assignedTo}
              onChange={handleInputChange}
            >
              {assignedToOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Form.Select>
          </div>
          <div className="col-4">
            <Button id="assignedTo" onClick={() => handleDelete("assignedTo")}>
              Delete
            </Button>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-4">
            {showInput.assignedTo && (
              <Form.Control
                type="text"
                id="assignedToInput"
                value={assignedToInput}
                onChange={handleInputChange}
              />
            )}
          </div>
          <div className="col-4">
            {!showInput.assignedTo && (
              <Button id="assignedTo" onClick={() => toggleInput("assignedTo")}>
                Add
              </Button>
            )}
            {showInput.assignedTo && (
              <Button id="assignedTo" onClick={() => handleAdd("assignedTo")}>
                Confirm
              </Button>
            )}
          </div>
        </div>

        {/* createdBy */}

        {/* <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="createdBy">Created By</label>
          </div>
          <div className="col-4">
            <Form.Select
              className="w-100 form-control"
              id="createdBy"
              value={componentData.createdBy}
              onChange={handleInputChange}
            >
              {createdByOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Form.Select>
          </div>
          <div className="col-4">
            <Button id="createdBy" onClick={() => handleDelete("createdBy")}>
              Delete
            </Button>
          </div>
        </div> */}

        {/* <div className="row mb-2">
          <div className="col-4">
            {showInput.createdBy && (
              <Form.Control
                type="text"
                id="createdByInput"
                value={createdByInput}
                onChange={handleInputChange}
              />
            )}
          </div>
          <div className="col-4">
            {!showInput.createdBy && (
              <Button id="createdBy" onClick={() => toggleInput("createdBy")}>
                Add
              </Button>
            )}
            {showInput.createdBy && (
              <Button id="createdBy" onClick={() => handleAdd("createdBy")}>
                Confirm
              </Button>
            )}
          </div>
        </div> */}
      </div>
    </div>
  );
}
 

export default Dropdownlist;
<<<<<<< HEAD








// useEffect(() => {
  //   const fetchPolicyStatuses = async () => {
  //     try {
  //       const response = await axios.get(
  //         "http://localhost:8080/policystatus/getAll"
  //       );
  //       console.log("Response data:", response.data);
  //       if (response.data && response.data.length > 0) {
  //         setComponentData((prevData) => ({
  //           ...prevData,
  //           policyStatusOptions: response.data,
  //         }));
  //       }
  //     } catch (error) {
  //       console.error("Error fetching policy statuses:", error);
  //     }
  //   };




    //status, adjuster

    // const fetchExposureDDTypes = async () => {
    //   try {
    //     const response = await axios.get("http://localhost:8080/exposuresDD");
    //     console.log("Response data:", response.data);

    //     const { adjuster } = response.data;
    //     const { exposureStatus } = response.data;

    //     if (adjuster && adjuster.length > 0 || exposureStatus && exposureStatus.length > 0) {
    //       setComponentData((prevData) => ({
    //         ...prevData,
    //        exposureStatusOptions: exposureStatus,
    //        exposureStatus: exposureStatus[0], // Set the default selected value   
    //         adjusterOptions: adjuster,
    //         adjuster: adjuster[0], // Set the default selected value
    //       }));
    //     }
    //   } catch (error) {
    //     console.error("Error fetching exposure types:", error);
    //   }
    // };

    //states

    // const fetchLossLocationDD = async () => {
    //   try {
    //     const response = await axios.get("http://localhost:8080/exposuresDD");
    //     console.log("Response data:", response.data);

    //     const { state } = response.data;

    //     if (state && state.length > 0) {
    //       setComponentData((prevData) => ({
    //         ...prevData,
    //         stateOptions: state,
    //         state: state[0], // Set the default selected value
    //       }));
    //     }
    //   } catch (error) {
    //     console.error("Error fetching loss location:", error);
    //   }
    // };


    //relationshiptoinsured

    // const fetchLossDetailsDD = async () => {
    //   try {
    //     const response = await axios.get("http://localhost:8080/exposuresDD");
    //     console.log("Response data:", response.data);

    //     const { relationshiptoinsured } = response.data;

    //     if (relationshiptoinsured && relationshiptoinsured.length > 0) {
    //       setComponentData((prevData) => ({
    //         ...prevData,
    //         relationshipToInsuredOptions: relationshiptoinsured,
    //         relationshiptoinsured: relationshiptoinsured[0], // Set the default selected value
    //       }));
    //     }
    //   } catch (error) {
    //     console.error("Error fetching loss details:", error);
    //   }
    // };

    //topics, securitytype

  //   const fetchnewNoteDD = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:8080/exposuresDD");
  //       console.log("Response data:", response.data);

  //       const { topic } = response.data;
  //       const { securityType } = response.data;


  //       if (topic && topic.length > 0  || securityType && securityType.length > 0) { {
  //         setComponentData((prevData) => ({
  //           ...prevData,
  //           securityTypeOptions: securityType,
  //           securityType: securityType[0], // Set the default selected value
  //           topicOptions: topic,
  //           topic: topic[0], // Set the default selected value
  //         }));
  //       }
  //     }
  //     } catch (error) {
  //       console.error("Error fetching newnote:", error);
  //     }
  //   };

  //       const fetchnewDocumentsDD = async () => {
  //         try {
  //           const response = await axios.get(
  //             "http://localhost:8080/exposuresDD"
  //           );
  //           console.log("Response data:", response.data);

  //           const { relatedTo } = response.data;

  //           if (relatedTo && relatedTo.length > 0) {
  //             setComponentData((prevData) => ({
  //               ...prevData,
  //               relatedToOptions: relatedTo,
  //               relatedTo: relatedTo[0], // Set the default selected value
  //             }));
  //           }
  //         } catch (error) {
  //           console.error("Error fetching new document:", error);
  //         }
  //       };



  //   // fetchPolicyStatuses();
  //   fetchnewDocumentsDD();
  //   fetchnewNoteDD();
  //   fetchLossDetailsDD();
  //   fetchLossLocationDD();
  //   fetchExposureDDTypes();
  // }, []);




















=======
>>>>>>> bd7b8d872b00ab4b9297228eafb58c4cc69d8567
