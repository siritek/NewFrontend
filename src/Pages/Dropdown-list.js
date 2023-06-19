import React, { useState } from 'react'
import { Divider } from 'rsuite';
import Form from "react-bootstrap/Form";

function Dropdownlist() {
  const [componentData, setComponentData] = useState();


  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setComponentData((prevData) => ({

      ...prevData,
      [id]: value,
    }));
  };



  const {
    policyType = '',
    policyStatus = '',
    adjuster = '',
    lossCause = '',
    typeOfLoss = '',
    relationshipToInsured = '',
    country = '',
    state = '',
    jurisdiction = '',
    lossParty = '',
    primaryCoverage = '',
    claimantType = '',
    topic = '',
    securityType = '',
    relatedTo = '',
    Status = '',
    createdBy = '',
    assignedTo = '',
    documentType = '',
  } = componentData || {};


  return (

    <div>
      <div className="ms-3">
        <h2>Dropdown-list</h2>
        <hr />


        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="policyStatus">Policy Status</label>
          </div>
          <div className="col-4">
            <Form.Select
              className="w-100 form-control"
              id="policyStatus"
              value={policyStatus}
              onChange={handleInputChange}
            >
              <option value="None">None</option>
              <option value="In Effect">In Effect</option>
              <option value="Pre-Cancellation">Pre-Cancellation</option>
              <option value="Expired">Expired</option>
              <option value="Other">Other</option>
            </Form.Select>
          </div>
        </div>





        <div className="row mb-2">
          <div className="col-4">
            <label htmlFor="policyType">Policy Type</label>
          </div>
          <div className="col-4">
            <Form.Select
              id="policyType"
              value={policyType}
              onChange={handleInputChange}
              className="w-100 form-control"
            >
              <option value="None">None</option>
              <option value="Personal Auto">Personal Auto</option>
              <option value="Commercial Auto">Commercial Auto</option>
              <option value="Homeowners">Homeowners</option>
              <option value="Genral Liability">Genral Liability</option>
              <option value="Mutual">Mutual</option>
              <option value="Worker Compensation">Worker Compensation</option>
            </Form.Select>
          </div>
          </div>




          <div className="row mb-2">
            <div className="col-4">
              <label htmlFor="adjuster">Adjuster</label>
            </div>
            <div className="col-4">
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
              <label htmlFor="lossCause">Loss Cause</label>
            </div>
            <div className="col-4">
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
              <label htmlFor="typeOfLoss">Type of Loss</label>
            </div>
            <div className="col-4">
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
              <label htmlFor="relationshipToInsured">
                Relationship to Insured
              </label>
            </div>
            <div className="col-4">
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

          <div className="row mb-2">
            <div className="col-4">
              <label htmlFor="country">Country</label>
            </div>
            <div className="col-4">
              <Form.Select
                className="w-100 form-control"
                id="country"
                value={country}
                onChange={handleInputChange}
              >
                <option value="None">None</option>
                <option value="United States">United States</option>
              </Form.Select>
            </div>
          </div>


          <div className="row mb-2">
            <div className="col-4">
              <label htmlFor="state">State</label>
            </div>
            <div className="col-4">
              <Form.Select
                className="w-100 form-control"
                id="state"
                value={state}
                onChange={handleInputChange}
              >
                <option value="None">None</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </Form.Select>
            </div>
          </div>


          <div className="row mb-2">
            <div className="col-4">
              <label htmlFor="jurisdiction">Jurisdiction</label>
            </div>
            <div className="col-4">
              <Form.Select
                className="w-100 form-control"
                id="jurisdiction"
                value={jurisdiction}
                onChange={handleInputChange}
              >
                <option>None</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </Form.Select>
            </div>
          </div>

          <div className="row mb-2">
            <div className="col-4">
              <label htmlFor="lossParty">Loss party</label>
            </div>
            <div className="col-4">
              <Form.Select
                id="lossParty"
                value={lossParty}
                onChange={handleInputChange}
                aria-label="Default select example"
              >
                <option value="None">None</option>
                <option value="Insured's loss">Insured's loss</option>
                <option value="Third party Liability">Third party Liability</option>
              </Form.Select>
            </div>
          </div>


          <div className="row mb-2">
            <div className="col-4">
              <label htmlFor="primaryCoverage">Primary Coverage</label>
            </div>
            <div className="col-4">
              <Form.Select
                id="primaryCoverage"
                value={primaryCoverage}
                onChange={handleInputChange}
                aria-label="Default select example"
              >
                <option value="None">None</option>
                <option value="yes">yes</option>
                <option value="no">no</option>
              </Form.Select>
            </div>
          </div>



          <div className="row mb-2">
            <div className="col-4">
              <label htmlFor="claimantType">Claimant Type</label>
            </div>
            <div className="col-4">
              <Form.Select
                id="claimantType"
                value={claimantType}
                onChange={handleInputChange}
                aria-label="Default select example"
              >
                <option value="None">None</option>
                <option value="Insured">Insured</option>
                <option value="Member of insured's household">
                  Member of insured's household{" "}
                </option>
                <option value="Owner of the lost/Damaged property">
                  Owner of the lost/Damaged property{" "}
                </option>
                <option value="Customer">Customer </option>
                <option value="Employee ">Employee </option>
                <option value="Other Third Party">Other Third Party </option>
              </Form.Select>
            </div>
          </div>


          <div className='row mb-2'>
            <div className='col-4'><label htmlFor='topic'>Topic</label></div>
            <div className='col-4'>
              <Form.Select aria-label="Default select example" required id="topic" value={topic} onChange={handleInputChange} >
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
            <div className='col-4'><label htmlFor='securitytype'>Security Type </label></div>
            <div className='col-4'>
              <Form.Select aria-label="Default select example" id="securityType" value={securityType} onChange={handleInputChange} >
                <option value="none">-none- </option>
                <option value="medical">Medical</option>
                <option value="private">Private</option>
                <option value="public">Public</option>
                <option value="sensitive">Sensitive</option>
              </Form.Select>
            </div>
          </div>


          <div className='row mb-2'>
            <div className='col-4'><label htmlFor='Related'>Related To</label></div>
            <div className='col-4'>
              <Form.Select id='Related' value={relatedTo} className='w-100 form-control'  /*onChange={event=>{setRelated(event.target.value)}}*/>
                <option value="None">None</option>
                <option value="Claim">Claim</option>
                <option value="Contacts">Contacts</option>
              </Form.Select>
            </div>
          </div>

          <div className='row mb-2'>
            <div className='col-4'><label htmlFor='Status'>Status</label></div>
            <div className='col-4'>
              <Form.Select id="Status" value={Status} className='w-100 form-control'  /*onChange={event=>{setStatus(event.target.value)}}*/>
                <option value="None">None</option>
                <option value="Any">Any</option>
                <option value="Approved">Approved</option>
                <option value="Approving">Approving</option>
                <option value="Draft">Draft</option>
                <option value="Final">Final</option>
              </Form.Select>
            </div>
          </div>

          <div className='row mb-2'>
            <div className='col-4'><label htmlFor='DocumentType'>Document Type</label></div>
            <div className="col-4">
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

          <div className='row mb-2'>
            <div className='col-4'>
              <label htmlFor='assignedTo'>Assigned To</label></div>
            <div className='col-4'>
              <Form.Select id='assignedTo' value={assignedTo} onChange={handleInputChange} className='w-100 form-control'>
                <option value='none'>None</option>
                <option value='agent'>Agent</option>
              </Form.Select>
            </div>
          </div>


          <div className='row mb-2'>
            <div className='col-4'><label htmlFor='createdBy'>Created By</label></div>
            <div className='col-4'>
              <Form.Select id="cratedBy" value={createdBy} className='w-100 form-control'>
                <option value='none'>None</option>
                <option value='agent'>Agent</option>
              </Form.Select>
            </div>
          </div>







        </div>





      </div>
    



  );
}
export default Dropdownlist