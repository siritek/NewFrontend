import React from 'react'
import Form from "react-bootstrap/Form";
    
function NewNote({setComponentData, componentData}){  
  const handleInputChange = (e) => {  
    const {id, value} = e.target;  
    setComponentData((prevData) =>({  
      ...prevData,  
      [id]:value,  
    }));  
  };   
 

  const {
    ClaimNumber='',
    topic = '',
    securityType = '',
    subject= '',
    relatedTo= '',

    text = '',
    confidential="",
  } = componentData || {};


  const handleClick = (e) => {
    e.preventDefault()
    const abs = { topic, securityType, subject, relatedTo, text }
    console.log(abs)
    fetch("http://localhost:8080/newnotefirst/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(abs)

    }).then(() => {
      console.log("New Insured added")
    })


  }

  return (
    <div>
      <div className='ms-3'>
        <h2>New Note</h2>
        <hr />
      </div>

      <div className='row mb-2'>
          <div className='col-2'><label htmlFor='Claim Number'>Claim Number</label></div>
          <div className='col-6'>
            <input type="text" className='w-100 form-control' id="Claim Number" value={ClaimNumber}  onChange={handleInputChange} />
          </div>
        </div>

     
        <div className='row mb-2'>
          <div className='col-2'><label htmlFor='topic'>Topic</label></div>
          <div className='col-6'>
            <Form.Select  aria-label="Default select example" required id="topic" value={topic}  onChange={handleInputChange} >
              <option value="general" >-General-</option>
              <option value="firstnoticeofloss">First Notice of Loss</option>
              <option value="coverage">Coverage</option>
              <option value="investigation">Investigation</option>
              <option value="medicalissues">Medical Issues</option>
              <option value="evaluation">Evaluation</option>
              <option value="settlement">Settlement</option>
              <option value="subrogation">Subrogation</option>
              <option value="salvage">Salvage</option>
              <option value="litigation">Litigation</option>
              <option value="denial">Denial</option>
              <option value="reinsurance">Reinsurance</option>
            </Form.Select>
          </div>
        </div>

        <div className='row mb-2'>
          <div className='col-2'><label htmlFor='securitytype'>Security Type </label></div>
          <div className='col-6'>
            <Form.Select aria-label="Default select example" id="securityType" value={securityType}  onChange={handleInputChange} >
              <option value="none">-none- </option>
              <option value="medical">Medical</option>
              <option value="private">Private</option>
              <option value="public">Public</option>
              <option value="sensitive">Sensitive</option>
            </Form.Select>
          </div>
        </div>


        <div className='row mb-2'>
          <div className='col-2'><label htmlFor='subject'>Subject</label></div>
          <div className='col-6'>
            <input type="text" className='w-100 form-control' id="subject" value={subject}  onChange={handleInputChange} />
          </div>
        </div>


        <div className='row mb-2'>
          <div className='col-2'><label htmlFor='relatedto'>Related To </label></div>
          <div className='col-6'>
            <Form.Select  aria-label="Default select example" id="relatedTo" value={relatedTo}  onChange={handleInputChange} >
            <option value="none"> None </option>
              <option value="claim"> Claim </option>
            </Form.Select>
          </div>
        </div>




        <div className="row mb-3">
          <div className="col-4">Confidential</div>
          <div className="col-8">
            <input
              type="radio"
              name="basicRadioGroup"
              id="confidential"
              value="yes"
              checked={confidential === "yes"}
              onChange={handleInputChange}
            />{" "}
            Yes <span className="ms-3"></span>
            <input
              type="radio"
              name="basicRadioGroup"
              id="confidential"
              value="no"
              checked={confidential === "no"}
              onChange={handleInputChange}
            />{" "}
            No
          </div>
        </div>


        <div className='row mb-2'>
          <div className='col-2'><label htmlFor='text'>Text</label></div>
          <div className='col-6'>
            <input type="text" className='w-100 form-control' id="text" value={text}  onChange={handleInputChange} />
          </div>
        </div>

        <br />
        <input type="submit" className="btn btn-success " value="Create" onClick={handleClick} /> &nbsp;
        <input type="Reset" className="btn btn-dark " value="Reset" onClick={handleClick} />
        

      
    </div>

  );

}
export default NewNote;