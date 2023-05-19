import React from 'react'

function Heading(props) {
  const handleFnolClick=()=>{
    props.onFnolClick();
  };
  const handleLossSummaryClick=()=>{
    props.onLossSummaryClick();
  };
  return (
   
    <div className="d-flex justify-content-between align-items-right">
          <h2>Policy: General</h2>
          
          <div>
            
          <button type="button" className="btn btn-dark" onClick={handleFnolClick}>Back</button>&nbsp;
          <button type="button" className="btn btn-success" onClick={handleLossSummaryClick}>
            Next
          </button>
          </div></div>
        
          
   
  )
}

export default Heading
