import React, { useState } from 'react'


function NewNote() {

  const [topic, settopic] = useState('')
  const [securitytype, setsecuritytype] = useState('')
  const [subject, setsubject] = useState('')
  const [relatedto, setrelatedto] = useState('')
  const [yes, setyes] = useState('')
  const [no, setno] = useState('')
  const [text, settext] = useState('')




  const handleClick = (e) => {
    e.preventDefault()
    const abs = { topic, securitytype, subject, relatedto, text }
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

      <form >
        <div className='row mb-2'>
          <div className='col-2'><label>Topic</label></div>
          <div className='col-6'>
            <select className='w-100 form-control' required name="topic" value={topic} onChange={(e) => settopic(e.target.value)}  >
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
            </select>
          </div>
        </div>

        <div className='row mb-2'>
          <div className='col-2'><label>Security Type </label></div>
          <div className='col-6'>
            <select className='w-100 form-control' name="securitytype" value={securitytype} onChange={(e) => setsecuritytype(e.target.value)} >
              <option value="none">-none- </option>
              <option value="medical">Medical</option>
              <option value="private">Private</option>
              <option value="public">Public</option>
              <option value="sensitive">Sensitive</option>
            </select>
          </div>
        </div>


        <div className='row mb-2'>
          <div className='col-2'><label>Subject</label></div>
          <div className='col-6'>
            <input type="text" className='w-100 form-control' name="subject" value={subject} onChange={(e) => setsubject(e.target.value)} />
          </div>
        </div>


        <div className='row mb-2'>
          <div className='col-2'><label>Related To </label></div>
          <div className='col-6'>
            <select className='w-100 form-control' name="relatedto" value={relatedto} onChange={(e) => setrelatedto(e.target.value)} >
              <option value="claim">-"Claim"- </option>
            </select>
          </div>
        </div>


        <div className='row mb-3'>
          <div className='col-2' required>Confidential</div>
          <div className='col-6'>
            <input type="radio" name="conf" value={yes} onChange={(e) => setyes(e.target.value)} /> Yes <span className='ms-3'></span><input type="radio" name="conf" value={no} onChange={(e) => setno(e.target.value)} /> No
          </div>
        </div>

        <div className='row mb-2'>
          <div className='col-2'><label>Text</label></div>
          <div className='col-6'>
            <input type="text" className='w-100 form-control' name="text" value={text} onChange={(e) => settext(e.target.value)} />
          </div>
        </div>

        <br />
        <input type="submit" className="btn btn-success " value="Create" onClick={handleClick} /> &nbsp;
        <input type="cancel" className="btn btn-success " value="Cancel" onClick={handleClick} />

      </form>
    </div>

  );

}
export default NewNote