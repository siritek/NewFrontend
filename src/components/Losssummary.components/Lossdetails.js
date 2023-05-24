import React from 'react';
import Form from 'react-bootstrap/Form';

function Lossdetails({ setComponentData, componentData }) {
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setComponentData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const {
    Adjuster = '',
    LossDescription = '',
    LossCause = '',
    OtherDescription = '',
    TypeOfLoss = '',
    WeatherInvloved = '',
    WeatherDescription = '',
    DateOfLoss = '',
    TimeOfLoss = '',
    ReportedBy = '',
    RelationshipToInsured = '',
  } = componentData || {};
  return (
    <div className="ms-3">
      <h5>Loss Details</h5>

      <div className="row">
        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="Adjuster">Adjuster</label>
          </div>
          <div className="col-8">
            <Form.Select 
              className="w-100 form-control"
              id="Adjuster"
              value={Adjuster}
              onChange={handleInputChange}
            >
              <option value="None">None</option>
            </Form.Select>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="LossDescription">Loss Description</label>
          </div>
          <div className="col-8">
            <input
              type="text"
              className="w-100 form-control"
              maxLength={500}
              id="LossDescription"
              value={LossDescription}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="LossCause">Loss Cause</label>
          </div>
          <div className="col-8">
            <Form.Select
              className="w-100 form-control"
              id="LossCause"
              value={LossCause}
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
            <label htmlFor="OtherDescription">Other Description</label>
          </div>
          <div className="col-8">
            <input
              type="text"
              className="w-100 form-control"
              maxLength={500}
              id="OtherDescription"
              value={OtherDescription}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="TypeOfLoss">Type of Loss</label>
          </div>
          <div className="col-8">
            <Form.Select
              className="w-100 form-control"
              id="TypeOfLoss"
              value={TypeOfLoss}
              onChange={handleInputChange}
            >
              <option value="None">None</option>
            </Form.Select>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-4">
            <label>Weather Invloved</label>
          </div>
          <div className="col-8">
            <input
              type="radio"
              name="Weather"
              id="WeatherInvloved-yes"
              value="yes"
              checked={WeatherInvloved === "yes"}
              onChange={handleInputChange}
            />{" "}
            Yes <span className="ms-3"></span>
            <input
              type="radio"
              name="Weather"
              id="WeatherInvloved-No"
              value="No"
              checked={WeatherInvloved === "No"}
              onChange={handleInputChange}
            />{" "}
            No
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="WeatherDescription">Weather Description</label>
          </div>
          <div className="col-8">
            <input
              type="text"
              className="w-100 form-control"
              maxLength={500}
              id="WeatherDescription"
              value={WeatherDescription}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="DateOfLoss">Date of loss</label>
            <i className="text-danger h5">*</i>
          </div>
          <div className="col-8">
            <input
              type="date"
              className="w-100 form-control"
              id="DateOfLoss"
              value={DateOfLoss}
              onChange={handleInputChange}
              
            />
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="TimeOfLoss">Time of loss</label>
            <i className="text-danger h5">*</i>
          </div>
          <div className="col-8">
            <input
              type="time"
              className="w-100 form-control"
              id="TimeOfLoss"
              value={TimeOfLoss}
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
            <label htmlFor="ReportedBy">Reported By</label>
          </div>
          <div className="col-8">
            <input
              type="text"
              className="w-100 form-control"
              maxLength={500}
              id="ReportedBy"
              value={ReportedBy}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="RelationshipToInsured">
              Relationship to Insured
            </label>
          </div>
          <div className="col-8">
            <Form.Select
              className="w-100 form-control"
              id="RelationshipToInsured"
              value={RelationshipToInsured}
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




