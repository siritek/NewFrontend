import React, { useEffect } from 'react';
import Form from 'react-bootstrap/Form';


function Lossdetails({ setComponentData, componentData, fnoldataobj}) {
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setComponentData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
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

  const {
    adjuster = '',
    lossDescription = '',
    lossCause = '',
    otherDescription = '',
    typeOfLoss = '',
    weatherInvolved = '',
    weatherDescription = '',
    dateOfLoss = '',
    timeOfLoss = '',
    reportedBy = '',
    relationshipToInsured ='',
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
              onChange={handleInputChange}
            >
              <option value="None">None</option>
              <option value="yes">yes</option>
              <option value="no">no</option>
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
              onChange={handleInputChange}
            >
              <option value="None">None</option>
              <option value="Personalauto">Personal Auto</option>
              <option value="Homeowners">Homeowners </option>
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
              onChange={handleInputChange}
            >
              <option value="None">None</option>
              <option value="Nohomene">home</option>
              <option value="fire">fire</option>
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
          <div className="col-8">
            <input
              type="date"
              className="w-100 form-control"
              id="dateOfLoss"
              value={dateOfLoss}
              onChange={handleInputChange}
              
            />
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
              onChange={handleInputChange}
            >
              <option value="None">None</option>
              <option value="Agent">Agent</option>
              <option value="Insured">Insured</option>
              <option value="Householdmember">Household Member</option>
              <option value="Friend">Friend</option>
              <option value="Otherparty">Other Party Involved</option>
              <option value="Attorney">Attorney</option>
            </Form.Select>
          </div>
        </div>
      </div>
    </div>
  ); 
} 
 
export default Lossdetails




