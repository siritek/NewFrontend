import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';

function NewDoc(props) {
  const [componentData, setComponentData] = useState({});

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if(id==="docType"){setDocType(value);}
    else if(id==="relatedTo"){setRelatedTo(value);}
    else if(id==="status"){setStatus(value);}
    else{
    setComponentData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  }
  };

const [relatedTo, setRelatedTo] = useState('');
const [subtype, setSubtype] = useState('');
const options = ['Claim', 'Contact', 'None'];

const[docType, setDocType] = useState('');
const[docTypes, setDocTypes] = useState([]);
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

const handleRelatedToChange = (event) => {
  const selectedValue = event.target.value;
  setRelatedTo(selectedValue);
  setSubtype('');
};

const handleSubtypeChange = (event) => {
  const fieldValue = event.target.value;
  setSubtype(fieldValue);
};

const handleStatusChange = (e) => {
  setStatus(e.target.value);
  handleInputChange(e);
}


  const handleSubmit = (e) => {
    e.preventDefault();
    const docData = {
      docName,
      docType,
      relatedTo,
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

  const fileInputRef = useRef(null);
  const [selectedFiles, setSelectedFiles] = useState([]);

  // const handleDocumentClick = () => {
  //   props.onDocumentClick();
  // };

  const handleFileSelection = (event) => {
    const files = Array.from(event.target.files || event.dataTransfer.files);
    setSelectedFiles(files); // Store the entire file objects
  };

  const handleUploadButtonClick = () => {
    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      const reader = new FileReader();

      reader.onload = (e) => {
        const fileData = e.target.result;

        // Generate a unique key for each file, e.g., using a timestamp or file name
        const key = `uploadedFile_${Date.now()}`;

        // Save the file data to local storage using the generated key
        localStorage.setItem(key, fileData);
        console.log(`File ${file.name} uploaded and saved to local storage with key ${key}`);
      };

      reader.readAsDataURL(file);
    }
    
  };


  return (
    <>
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
      <div>
      <div className='row mb-2'>
        <div className='col-3'>
          <label htmlFor='relatedTo'>Related To</label>
        </div>
        <div className='col-6'>
          <select
            id='relatedTo'
            value={relatedTo}
            onChange={handleRelatedToChange}
            className='w-100 form-control'>
            <option value=''>Select an option</option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      {relatedTo !== 'None' && relatedTo !== 'Claim' && relatedTo !== 'Select an option' &&(
        <div className='row mb-2'>
          <div className='col-3'>
            <label htmlFor='subtype'>
              {relatedTo === 'Contact'
                ? 'Related Contact'
                : 'Any Field'}
            </label>
          </div>
          <div className='col-6'>
            <input
              type='text'
              id='subtype'
              value={subtype}
              onChange={handleSubtypeChange}
              className='w-100 form-control'
            />
          </div>
        </div>
      )}
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
<br/>
<br/>
      <div>
      <div className="d-flex justify-content-between align-items-center">
        <h2>Upload Document</h2>
        <div>
          {/* <button type="button" className="btn btn-dark" onClick={handleDocumentClick}>
            Back
          </button> */}
          &nbsp;
       
        </div>
      </div>
      <hr />

      <label htmlFor="Documents">Documents &nbsp;</label>
      <input
        type="file"
        id="Documents"
        name="Documents"
        ref={fileInputRef}
        multiple
        onChange={handleFileSelection}
        onDrop={(e) => e.preventDefault()} // Prevent default behavior of opening the dropped file
      />
         <button type="button" className="btn btn-success" onClick={handleUploadButtonClick}>
            Upload
          </button>
      
    </div>
    </>
  );
}

export default NewDoc;
