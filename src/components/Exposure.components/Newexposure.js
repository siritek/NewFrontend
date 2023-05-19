import React from 'react'  
import Form from "react-bootstrap/Form";  
// import Dropdown from 'react-bootstrap/Dropdown';    
    
    
function Newexposure() {
  const [LossParty, setLossParty] = React.useState('None');
  const [PrimaryCoverage, setPrimaryCoverage] = React.useState('None');
  const [Adjuster, setAdjuster] = React.useState('');
  const [Status, setStatus] = React.useState('Open');
  const [CreationDate, setCreationDate] = React.useState('');
  const [Claimant, setClaimant] = React.useState('');
  const [ClaimantType, setClaimantType] = React.useState('None');
  const [PrimaryPhone, setPrimaryPhone] = React.useState('');
  const [Address, setAddress] = React.useState('');

  return (
    <div>
      <div>
        <h1>Exposures</h1>
        <hr />
      </div>

      <div className="row mb-2">
        <div className="col-3">
          <label>Loss Party</label>
        </div>
        <div className="col-6">
          <Form.Select id="LossParty-select"
          value={LossParty}
          onChange={event => {
            setLossParty(event.target.value)
          }}
           aria-label="Default select example">
            <option>None</option>
            <option>Insured's loss</option>
            <option>Third party Liability </option>
            <option> </option>
          </Form.Select>
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-3">
          <label>Primary Coverage</label>
        </div>
        <div className="col-6">
          <Form.Select
            id="PrimaryCoverage-select"
            value={PrimaryCoverage}
            onChange={event => {
              setPrimaryCoverage(event.target.value)
            }}
            aria-label="Default select example">
            <option>None</option>
            <option>1:900 Madison street </option>
            <option> </option>
            <option> </option>
          </Form.Select>
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor="Adjuster">Adjuster</label>
        </div>
        <div className="col-6">
          <input id="Adjuster-select"
            value={Adjuster}
            onChange={event => {
              setAdjuster(event.target.value)
            }} type="text" className="w-100 form-control" />
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-3">
          <label>Status</label>
        </div>
        <div className="col-6">
          <Form.Select 
            id="Status-select"
            value={Status}
            onChange={event => {
              setStatus(event.target.value)
            }}
            aria-label="Default select example">
            <option>Open</option>
            <option>Closed</option>
          </Form.Select>
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor="Creation Date">Creation Date</label>
          <i className="text-danger h5">*</i>
        </div>
        <div className="col-6">
          <input id="Creation Date-select"
            value={CreationDate}
            onChange={event => {
              setCreationDate(event.target.value)
            }} type="date" className="w-100 form-control" />
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor="Claimant">Claimant</label>
        </div>
        <div className="col-6">
          <input id="Claimant-select"
            value={Claimant}
            onChange={event => {
              setClaimant(event.target.value)
            }}  type="text" className="w-100 form-control" />
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor="ClaimantType">Claimant Type</label>
        </div>
        <div className="col-6">
          <Form.Select 
            id="ClaimantType-select"
            value={ClaimantType}
            onChange={event => {
              setClaimantType(event.target.value)
            }}
            aria-label="Default select example">
            <option>None</option>
            <option>Insured</option>
            <option>Member of insured's household </option>
            <option>Owner of the lost/Damaged property </option>
            <option>Customer </option>
            <option>Employee </option>
            <option>Other Third Party </option>
          </Form.Select>
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor="PrimaryPhone">Primary Phone</label>
        </div>
        <div className="col-6">
          <input id="PrimaryPhone-select"
            value={PrimaryPhone}
            onChange={event => {
              setPrimaryPhone(event.target.value)
            }} type="text" className="w-100 form-control" />
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-3">
          <label htmlFor="Address">Address</label>
          <i className="text-danger h5">*</i>
        </div>
        <div className="col-6">
          <input id="Address-select"
            value={Address}
            onChange={event => {
              setAddress(event.target.value)
            }} type="text" className="w-100 form-control" />
        </div>
      </div>
    </div>
  );    
}    
    
export default Newexposure