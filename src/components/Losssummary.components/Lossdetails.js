import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';

function Lossdetails({ setComponentData, componentData, fnoldataobj}) {
  {/* const handleInputChange = (e) => {
    const { id, value } = e.target;
    setComponentData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };*/}

  const [loading, setLoading,] = useState(true); 
  const handleInputChange = (e,date) => { 
  //     if(date == 'dateOfLoss'){
  //  setComponentData((prevData) =>({ 
  //       ...prevData, 
  //       dateOfLoss:e, 
  //     }));
  //     }
      
  
    const { id, value } = e.target;
      setComponentData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
    
    {/*if (id === "lossCause") {
      setLossCause(value);
      setComponentData((prevData) => ({
        ...prevData,
        lossCause: value,
      }));
      console.log("this is loss cause "+value);
    } else if (id === "typeOfLoss") {
      setTypeOfLoss(value);
      setComponentData((prevData) => ({
        ...prevData,
        typeOfLoss: value,
      }));
      console.log("this is loss type "+value);
    } else if (id === "relationshipToInsured") {
      setRelationshipToInsured(value);
      setComponentData((prevData) => ({
        ...prevData,
        relationshipToInsured: value,
      }));
      console.log("this is realationship "+value);
    } else 
      setComponentData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
    */}
  

  

  };

  const [lossCause, setLossCause] = useState('');
  const [lossCauses, setLossCauses] = useState([]);
  const [typeOfLoss, setTypeOfLoss] = useState('');
  const [typeOfLosses, setTypeOfLosses] = useState([]);
  const [relationshipToInsured, setRelationshipToInsured] = useState('');
  const [relationshipToInsureds, setRelationshipToInsureds] = useState([]);
  const[adjuster, setAdjuster] = useState('');
  const[adjusters, setAdjusters] = useState([]);

  useEffect(() => {
    fetchLossDetailsDD();
  }, []);

  const fetchLossDetailsDD = async () => {
    try {
      //const response = await axios.get('<localhost:8080>/policytypes');
      const response = await axios.get('http://localhost:8080/lossdetailsDD');
      console.log('Response data: ', response.data);
      const { lossCauses, typeOfLosses, relationshipToInsureds,adjusters } = response.data;
      setLossCauses(lossCauses);
      setTypeOfLosses(typeOfLosses);
      setAdjusters(adjusters);
      setRelationshipToInsureds(relationshipToInsureds);

    } catch (error) {
      console.error('Error fetching loss details(loss cause, type of loss, relationship to insured):', error);
    }
  };

  useEffect(() => {
    if (fnoldataobj) {
      const {
        reportedBy,
        dateOfLoss,
        lossTime,
        // Add other common fields here
      } = fnoldataobj;

      setComponentData((prevData) => ({
        ...prevData,
        reportedBy: reportedBy || prevData.reportedBy,
        dateOfLoss: dateOfLoss || prevData.dateOfLoss,
        timeOfLoss: lossTime || prevData.lossTime,
        // Update other common fields in componentData
      }));
    }
  }, [fnoldataobj, setComponentData]);

  const handlelossCauseChange = (event) => {
    const selectedlossCause = event.target.value;
    setLossCause(selectedlossCause);
    handleInputChange(event);
  }
  const handleAdjusterChange = (event) => {
    const selectedadjuster = event.target.value;
    setAdjuster(selectedadjuster);
    handleInputChange(event);
  }
  const handleTypeOfLossChange = (event) => {
    const selectedtypeOfLoss = event.target.value;
    setTypeOfLoss(selectedtypeOfLoss);
    handleInputChange(event);
  }
  const handleRelationshipToInsuredChange = (event) => {
    const selectedrelationshipToInsured = event.target.value;
    setRelationshipToInsured(selectedrelationshipToInsured);
    handleInputChange(event);
  }

  const {
   // adjuster = '',
    lossDescription = '',
    otherDescription = '',
    weatherInvolved = '',
    weatherDescription = '',
    dateOfLoss = '',
    timeOfLoss = '',
    reportedBy = '',
  } = componentData || {};

  return (
    <div className="ms-3">
      <h5>Loss Details</h5>

      <div className="row">
        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="adjuster">Adjuster</label>
          </div>
          <div className="col-8">
            <Form.Select 
              className="w-100 form-control"
              id="adjuster"
              value={adjuster}
              onChange={handleAdjusterChange}
            >
              {adjusters.map((type,index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </Form.Select>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="lossDescription">Loss Description</label>
          </div>
          <div className="col-8">
            <input
              type="text"
              className="w-100 form-control"
              maxLength={500}
              id="lossDescription"
              value={lossDescription}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="lossCause">Loss Cause</label>
          </div>
          <div className="col-8">
            <Form.Select
              className="w-100 form-control"
              id="lossCause"
              value={lossCause}
              onChange={handlelossCauseChange}
            >	
              {lossCauses.map((type,index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </Form.Select>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="otherDescription">Other Description</label>
          </div>
          <div className="col-8">
            <input
              type="text"
              className="w-100 form-control"
              maxLength={500}
              id="otherDescription"
              value={otherDescription}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="typeOfLoss">Type of Loss</label>
          </div>
          <div className="col-8">
            <Form.Select
              className="w-100 form-control"
              id="typeOfLoss"
              value={typeOfLoss}
              onChange={handleTypeOfLossChange}
            >
              {typeOfLosses.map((type,index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </Form.Select>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-4">
            <label>weather Involved</label>
          </div>
          <div className="col-8">
            <input
              type="radio"
              name="Weather"
              id="weatherInvolved"
              value="yes"
              checked={weatherInvolved === "yes"}
              onChange={handleInputChange}
            />{" "}
            Yes <span className="ms-3"></span>
            <input
              type="radio"
              name="Weather"
              id="weatherInvolved"
              value="no"
              checked={weatherInvolved === "no"}
              onChange={handleInputChange}
            />{" "}
            No
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="weatherDescription">Weather Description</label>
          </div>
          <div className="col-8">
            <input
              type="text"
              className="w-100 form-control"
             // maxLength={500}
              id="weatherDescription"
              value={weatherDescription}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="dateOfLoss">Date of loss</label>
            <i className="text-danger h5">*</i>
          </div>
          <div className="col-5"> 
          {/* <DatePicker
              className="w-100 form-control"
              selected={dateOfLoss}
              id="dateOfLoss"
             onChange={(e)=>handleInputChange(e,'dateOfLoss')}
             dateFormat="MM-dd-yyyy"
             placeholderText="MM-DD-YYYY"
           /> */}
           <input id="dateOfLoss" type="date" value={dateOfLoss}  
     onChange={handleInputChange}className='w-100 form-control' />
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="timeOfLoss">Time of loss</label>
            <i className="text-danger h5">*</i>
          </div>
          <div className="col-8">
            <input
              type="time"
              className="w-100 form-control"
              id="timeOfLoss"
              value={timeOfLoss}
              onChange={handleInputChange}
            />
          </div>
        </div>
        
        <hr />

        {/* <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="ReportedBy">Reported By</label>
          </div>
          <div className="col-8">
            <select
              className="w-100 form-control"
              id="ReportedBy"
              value={ReportedBy}
              onChange={(event) => {
                setReportedBy(event.target.value);
              }}
            >
              <option value="None">None</option>
              <option value="Claim">Claim</option>
            </select>
          </div>
        </div> */}

        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="reportedBy">Reported By</label>
          </div>
          <div className="col-8">
            <input
              type="text"
              className="w-100 form-control"
             // maxLength={500}
              id="reportedBy"
              value={reportedBy}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="relationshipToInsured">
              Relationship to Insured
            </label>
          </div>
          <div className="col-8">
            <Form.Select
              className="w-100 form-control"
              id="relationshipToInsured"
              value={relationshipToInsured}
              onChange={handleRelationshipToInsuredChange}
            >
              {relationshipToInsureds.map((type,index) => ( 
              <option key={index} value={type}>
                {type}
              </option>
            ))}        
            </Form.Select>
          </div>
        </div>
      </div>
    </div>
  ); 
} 
 
export default Lossdetails




