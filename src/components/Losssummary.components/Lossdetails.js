import React from 'react'
import Form from "react-bootstrap/Form"; 
 
function Lossdetails() { 

  const [Adjuster, setAdjuster] = React.useState('');
  const [LossDescription, setLossDescription] = React.useState('');
  const [LossCause, setLossCause] = React.useState('');
  const [OtherDescription, setOtherDescription] = React.useState('');
  const [TypeOfLoss, setTypeOfLoss] = React.useState('');
  const [WeatherInvloved, setWeatherInvloved] = React.useState('');
  const [WeatherDescription, setWeatherDescription] = React.useState('');
  const [DateOfLoss, setDateOfLoss] = React.useState('');
  const [TimeOfLoss, setTimeOfLoss] = React.useState('');
  const [ReportedBy, setReportedBy] = React.useState('');
  const [RelationshipToInsured, setRelationshipToInsured] = React.useState('');


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
              onChange={(event) => {
                setAdjuster(event.target.value);
              }}
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
              onChange={(event) => {
                setLossDescription(event.target.value);
              }}
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
              onChange={(event) => {
                setLossCause(event.target.value);
              }}
            >
              <option value="None">None</option>
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
              onChange={(event) => {
                setOtherDescription(event.target.value);
              }}
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
              onChange={(event) => {
                setTypeOfLoss(event.target.value);
              }}
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
              onChange={(event) => {
                setWeatherInvloved(event.target.value);
              }}
            />{" "}
            Yes <span className="ms-3"></span>
            <input
              type="radio"
              name="Weather"
              id="WeatherInvloved-No"
              value="No"
              checked={WeatherInvloved === "No"}
              onChange={(event) => {
                setWeatherInvloved(event.target.value);
              }}
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
              onChange={(event) => {
                setWeatherDescription(event.target.value);
              }}
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
              onChange={(event) => {
                setDateOfLoss(event.target.value);
              }}
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
              onChange={(event) => {
                setTimeOfLoss(event.target.value);
              }}
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
              onChange={(event) => {
                setReportedBy(event.target.value);
              }}
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
              onChange={(event) => {
                setRelationshipToInsured(event.target.value);
              }}
            >
              <option value="None">None</option>
              <option value="Agent">Agent</option>
            </Form.Select>
          </div>
        </div>
      </div>
    </div>
  ); 
} 
 
export default Lossdetails




