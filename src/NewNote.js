import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Form from "react-bootstrap/Form";
    
function NewNote({setComponentData, componentData}){  
  const handleInputChange = (e) => {  
    const {id, value} = e.target; 
   // if(id==='topic'){setTopic(value);}
    //else if (id==='securityType'){setSecurityType(value);}
    //else{
    setComponentData((prevData) =>({  
      ...prevData,  
      [id]:value,  
    }));  
  //}
  };   
 
const[topic, setTopic] = useState('');
const[topics, setTopics] = useState([]);
const[securityType, setSecurityType] = useState('');
const[securityTypes, setSecurityTypes] = useState([]);

  const {
    claimNumber='',
    //topic = '',
    //securityType = '',
    subject= '',
    relatedTo= '',
    text = '',
    confidential=''
  } = componentData || {};

  const handleTopicChange = (event) => {
    setTopic(event.target.value);
    handleInputChange(event);
  }
  const handleSecurityTypeChange = (event) => {
    setSecurityType(event.target.value);
    handleInputChange(event);
  }

  useEffect(() => {
    fetchnewNoteDD();
  }, []);

  const fetchnewNoteDD = async () => {
    try {
      const response = await axios.get('http://localhost:8080/newnoteDD');
      console.log('Response data:', response.data);
      const { topics, securityTypes } = response.data;
      setTopics(topics);
      setSecurityTypes(securityTypes);
    } catch (error) {
      console.error('Error fetching new note(dd):', error);
    }
  }



  const handleClick = (e) => {
    e.preventDefault()
    const abs = { topic, securityType, subject, relatedTo, text,claimNumber,confidential }
    console.log(abs)
    fetch("http://localhost:8080/newnotefirst/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(abs)

    }).then(() => {
      console.log("New Insured added")
    })
  }
  
  const handleBlankClick = (e) => {
    e.preventDefault()
    setTopic(''); 
    setSecurityType(''); 
    setComponentData({});
    }
  
  return (
    <div>
      <div className="ms-3">
        <h2>New Note</h2>
        <hr />
      </div>

      <div className="row mb-2">
        <div className="col-2">
          <label htmlFor="claimNumber">Claim Number</label>
        </div>
        <div className="col-6">
          <input
            type="text"
            className="w-100 form-control"
            id="claimNumber"
            value={claimNumber}
            onChange={handleInputChange}
          />
        </div>
      </div>

        <div className='row mb-2'>
          <div className='col-2'><label htmlFor='securitytype'>Security Type </label></div>
          <div className='col-6'>
            <Form.Select aria-label="Default select example" id="securityType" value={securityType}  onChange={handleSecurityTypeChange} >
               {securityTypes.map((securityType,index) => (
                <option key={index} value={securityType}>
                  {securityType}
                </option>
              ))}

            </Form.Select>
          </div>
        </div>

        <div className='row mb-2'>
          <div className='col-2'><label htmlFor='topic'>Topic </label></div>
        <div className="col-6">
          <Form.Select
            aria-label="Default select example"
            required
            id="topic"
            value={topic}
            onChange={handleTopicChange}
          >
            {topics.map((topic,index) => (
              <option key={index} value={topic}>
                {topic}
              </option>
            ))}
            {/* <option value="general">General</option>
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
            <option value="reinsurance">Reinsurance</option> */}
          </Form.Select>
        </div>
      </div>
      
      <div className="row mb-2">
        <div className="col-2">
          <label htmlFor="subject">Subject</label>
        </div>
        <div className="col-6">
          <input
            type="text"
            className="w-100 form-control"
            id="subject"
            value={subject}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-2">
          <label htmlFor="relatedto">Related To </label>
        </div>
        <div className="col-6">
          <Form.Select
            aria-label="Default select example"
            id="relatedTo"
            value={relatedTo}
            onChange={handleInputChange}
          >
            <option value="none"> None </option>
            <option value="claim"> Claim </option>
            <option value="claim"> Contacts </option>
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

      
      <div className="row mb-2">
        <div className="col-2">
          <label htmlFor="text">Text</label>
        </div>
        <div className="col-6">
          <input
            type="text"
            className="w-100 form-control"
            id="text"
            value={text}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <br />
      <input
        type="submit"
        className="btn btn-success "
        value="Create"
        onClick={handleClick}
      />{" "}
      &nbsp;
      <input
        type="reset"
        className="btn btn-dark "
        value="reset"
        onClick={handleBlankClick}
      />
    </div>
   
  );
}

export default NewNote;