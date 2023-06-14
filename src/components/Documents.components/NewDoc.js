import React,{useState} from 'react';
import Form from "react-bootstrap/Form";
var DocDataObj;
function NewDoc(props) {
  const[componentData,setComponentData]=useState({});
  const handleInputChange = (e) => {  
    const {id, value} = e.target;  
    setComponentData((prevData) =>({  
      ...prevData,  
      [id]:value,  
    }));  
  };  
  const{ 
    ClaimNumber='',
    documentName='', 
   documentType='', 
    related='', 
      status='', 
      uploadedBy='', 
      uploadedDate='', 
      uploadedTime='',  
  } = componentData || {}; 


  const handleDocumentClick=()=>{
    props.onDocumentClick();
  };
  const handleNext = () => {
    // Access the component data from the state
    DocDataObj = componentData
    console.log(componentData);
    // Perform further actions with the data
  };
  return (
  
      <div>
      <div className="d-flex justify-content-between align-items-center"> 
    <h2>New Document</h2> 
    
    <div>
            
          <button type="button" className="btn btn-dark" onClick={handleDocumentClick}>Back</button>&nbsp;
          <button type="button" className="btn btn-success" onClick={()=>{handleNext();handleDocumentClick()}}>Submit</button>
          </div>
        
      </div><hr/>

     

      <div className="row mb-2">
      <div className="col-3">
          <label htmlFor='ClaimNumber'>ClaimNumber</label>
          <i className="text-danger h5">*</i>
        </div>
        <div className="col-6">
          <input id='ClaimNumber' type="text" value={ClaimNumber} onChange={handleInputChange} className="w-100 form-control" />
        </div>
        </div>
         <div className="row mb-2">
        <div className="col-3">
          <label htmlFor='documentName'>Document Name</label>
          <i className="text-danger h5">*</i>
        </div>
        <div className="col-6">
          <input id='documentName' type="text" value={documentName} onChange={handleInputChange} className="w-100 form-control" />
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor="documentType">Document Type</label>
        </div>
        <div className="col-6">
          <Form.Select id="documentType" value={documentType} onChange={handleInputChange} aria-label="Default select example">
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
          <label htmlFor='related'>Related To</label>
        </div>
        <div className="col-6">
          <Form.Select id="related" value={related} onChange={handleInputChange} aria-label="Default select example">
            <option value="none">None</option>
            <option value="claim">Claim</option>
            <option value="contacts">Contacts</option>
          </Form.Select>
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor='status'>Status</label>
          <i className="text-danger h5">*</i>
        </div>
        <div className="col-6">
          <Form.Select id="status" value={status} onChange={handleInputChange} aria-label="Default select example">
            <option value="none">None</option>
            <option value="any">Any</option>
            <option value="approved">Approved</option>
            <option value="approving">Approving</option>
            <option value="draft">Draft</option>
            <option value="final">Final</option>
          </Form.Select>
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor="uploadedBy">Uploaded By</label>
          <i className="text-danger h5">*</i>
        </div>
        <div className="col-6">
          <input id="uploadedBy" value={uploadedBy} onChange={handleInputChange}className="w-100 form-control" />
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor='uploadedDate'>Uploaded Date</label>
        </div>
        <div className="col-3">
          <input id="uploadedDate" value={uploadedDate} onChange={handleInputChange}type="date" className="w-100 form-control" />
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor='uploadedTime'>Uploaded Time</label>
        </div>
        <div className="col-3">
          <input id="uploadedTime" value={uploadedTime} onChange={handleInputChange} type="time" className="w-100 form-control" />
        </div>
      </div>
    </div>
  );
}

export default NewDoc;
