import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';

function NewDoc(props) {
  const [componentData, setComponentData] = useState({});

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if(id==="docType"){setDocType(value);}
    else if(id==="related"){setRelated(value);}
    else if(id==="status"){setStatus(value);}
    else{
    setComponentData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  }
  };

const[docType, setDocType] = useState('');
const[docTypes, setDocTypes] = useState([]);
const[related, setRelated] = useState('');
const[relateds, setRelateds] = useState([]);
const[status, setStatus] = useState('');
const[statuses, setStatuses] = useState([]);

useEffect(() => {
  fetchnewDocumentsDD();
}, []);

const fetchnewDocumentsDD = async () => {
  try{
    const response = await axios.get('http://localhost:8080/newDocumentDD');
    console.log('response data from new documentsDD:',response.data);
    const{documentTypes,relatedTos,statuses}=response.data;
    setDocTypes(documentTypes);
    console.log(documentTypes);
    setRelateds(relatedTos);
    console.log(relatedTos);
    setStatuses(statuses);
    console.log(statuses);

    }catch(error){
      console.error('error in new document DD fetching:',error);
  }
};

const handledocTypeChange = (e) => {
  setDocType(e.target.value);
  handleInputChange(e);
}
const handleRelatedChange = (e) => {
  setRelated(e.target.value);
  handleInputChange(e);

}
const handleStatusChange = (e) => {
  setStatus(e.target.value);
  handleInputChange(e);
}


  const handleSubmit = (e) => {
    e.preventDefault();
    const docData = {
      docName,
      docType,
      related,
      status,
      uploadedBy,
      uDate,
      uTime,
    };
    axios
      .post('http://localhost:8080/documentsfirst/add', docData)
      .then((response) => {
        // Handle success response
        console.log(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  };

  const handleDocumentClick = () => {
    props.onDocumentClick();
  };

  const {
    docName = '',
    //docType = '',
    //related = '',
   // status = '',
    uploadedBy = '',
    uDate = '',
    uTime = '',
  } = componentData || {};

  return (
    <>
      <div>
        <div className="d-flex justify-content-between align-items-center">
          <h2>New Document</h2>
          <button type="button" className="btn btn-success" onClick={handleDocumentClick}>
            Back
          </button>
        </div>
        <hr />z
      </div>
      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor='docName'>Document Name</label>
          <i className="text-danger h5">*</i>
        </div>
        <div className="col-6">
          <input
            id='docName'
            type="text"
            value={docName}
            onChange={handleInputChange}
            className="w-100 form-control"
          />
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor="docType">Document Type</label>
        </div>
        <div className="col-6">
          <Form.Select
            id="docType"
            value={docType}
            onChange={handledocTypeChange}
            aria-label="Default select example"
          >
              {docTypes.map((type,index) => (
                <option key={index} value={type}>
                  {type}
                </option>
                ))}
          </Form.Select>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor='related'>Related To</label>
        </div>
        <div className="col-6">
          <Form.Select
            id="related"
            value={related}
            onChange={handleRelatedChange}
            aria-label="Default select example"
          >
              {relateds.map((type,index) => (
                <option key={index} value={type}>
                  {type}
                </option>))}
          </Form.Select>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor='status'>Status</label>
          <i className="text-danger h5">*</i>
        </div>
        <div className="col-6">
          <Form.Select
            id="status"
            value={status}
            onChange={handleStatusChange}
            aria-label="Default select example"
          >
              {statuses.map((type,index) => (
                <option key={index} value={type}>
                  {type}
                </option>
                ))}
          </Form.Select>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor="uploadedBy">Uploaded By</label>
          <i className="text-danger h5">*</i>
        </div>
        <div className="col-6">
          <input
            id="uploadedBy"
            value={uploadedBy}
            onChange={handleInputChange}
            className="w-100 form-control"
          />
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor='uDate'>Uploaded Date</label>
        </div>
        <div className="col-3">
          <input
            id="uDate"
            value={uDate}
            onChange={handleInputChange}
            type="date"
            className="w-100 form-control"
          />
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor='uTime'>Uploaded Time</label>
        </div>
        <div className="col-3">
          <input
            id="uTime"
            value={uTime}
            onChange={handleInputChange}
            type="time"
            className="w-100 form-control"
          />
        </div>
      </div>
    </>
  );
}

export default NewDoc;
