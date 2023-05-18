import React from 'react';
import Form from "react-bootstrap/Form";
function NewDoc(props) {
 
  const handleDocumentClick=()=>{
    props.onDocumentClick();
  };
  return (
    <div>
      <div>

        <div className="d-flex justify-content-between align-items-center">
          <h2>New Document</h2>
          <button type="button" className="btn btn-success" onClick={handleDocumentClick}>
            Back
          </button>
        </div>
        <hr />
      </div>

      <div className="row mb-2">
        <div className="col-3">
          <label>Document Name</label>
          <i className="text-danger h5">*</i>
        </div>
        <div className="col-6">
          <input className="w-100 form-control" />
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-3">
          <label>Document Type</label>
        </div>
        <div className="col-6">
          <Form.Select aria-label="Default select example">
            <option>None</option>
            <option>.JPEG</option>
            <option>.PDF</option>
            <option>.MP4</option>
            <option>.SVG</option>
            <option>.GIF</option>
          </Form.Select>
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-3">
          <label>Related To</label>
        </div>
        <div className="col-6">
          <Form.Select aria-label="Default select example">
            <option>None</option>
            <option>Claim</option>
            <option>Contacts</option>
          </Form.Select>
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-3">
          <label>Status</label>
          <i className="text-danger h5">*</i>
        </div>
        <div className="col-6">
          <Form.Select aria-label="Default select example">
            <option>None</option>
            <option>Any</option>
            <option>Approved</option>
            <option>Approving</option>
            <option>Draft</option>
            <option>Final</option>
          </Form.Select>
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-3">
          <label>Uploaded By</label>
          <i className="text-danger h5">*</i>
        </div>
        <div className="col-6">
          <input className="w-100 form-control" />
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-3">
          <label>Uploaded Date</label>
        </div>
        <div className="col-3">
          <input type="date" className="w-100 form-control" />
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-3">
          <label>Uploaded Time</label>
        </div>
        <div className="col-3">
          <input type="time" className="w-100 form-control" />
        </div>
      </div>
    </div>
  );
}

export default NewDoc;
