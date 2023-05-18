import React from 'react';
import Form from "react-bootstrap/Form";
function NewDoc(props) {
const[DocName,setDocName]=React.useState('');
const[DocType,setDocType]=React.useState('None')
const[Related,setRelated]=React.useState('None');
const[Status,setStatus]=React.useState('None');
const[UploadedBy,setUploadedBy]=React.useState('')
const[UDate,setUDate]=React.useState('');
const[UTime,setUTime]=React.useState('');

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
          <label htmlFor='DocName'>Document Name</label>
          <i className="text-danger h5">*</i>
        </div>
        <div className="col-6">
          <input id='DocName' type="text" value={DocName} onChange={event=>{setDocName(event.target.value)}} className="w-100 form-control" />
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor="DocType">Document Type</label>
        </div>
        <div className="col-6">
          <Form.Select id="DocType" value={DocType} onChange={event=>{setDocType(event.target.value)}} aria-label="Default select example">
            <option value='None'>None</option>
            <option value='Jpeg'>.JPEG</option>
            <option value='Pdf'>.PDF</option>
            <option value='Mp4'>.MP4</option>
            <option value='Svg'>.SVG</option>
            <option value='Gif'>.GIF</option>
          </Form.Select>
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor='Related'>Related To</label>
        </div>
        <div className="col-6">
          <Form.Select id="Related" value={Related} onChange={event=>{setRelated(event.target.value)}} aria-label="Default select example">
            <option value="None">None</option>
            <option value="Claim">Claim</option>
            <option value="Contacts">Contacts</option>
          </Form.Select>
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor='Status'>Status</label>
          <i className="text-danger h5">*</i>
        </div>
        <div className="col-6">
          <Form.Select id="Status" value={Status} onChange={event=>{setStatus(event.target.value)}} aria-label="Default select example">
            <option value="None">None</option>
            <option value="Any">Any</option>
            <option value="Approved">Approved</option>
            <option value="Approving">Approving</option>
            <option value="Draft">Draft</option>
            <option value="Final">Final</option>
          </Form.Select>
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor="UploadedBy">Uploaded By</label>
          <i className="text-danger h5">*</i>
        </div>
        <div className="col-6">
          <input id="UploadedBy" value={UploadedBy} onChange={event=>{setUploadedBy(event.target.value)}}className="w-100 form-control" />
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor='UDate'>Uploaded Date</label>
        </div>
        <div className="col-3">
          <input id="UDate" value={UDate} onChange={event=>{setUDate(event.target.value)}}type="date" className="w-100 form-control" />
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor='UTime'>Uploaded Time</label>
        </div>
        <div className="col-3">
          <input id="UTime" value={UTime} onChange={event=>{setUTime(event.target.value)}} type="time" className="w-100 form-control" />
        </div>
      </div>
    </div>
  );
}

export default NewDoc;
