import React, { useState } from 'react'; 
// import Synopsis from './Synopsis'; 
 
const ClaimGeneration = (props) => { 
  const { claimNumber } = props;
  
 
  const handleLinkClick = () => { 
    props.onLinkClick()
  }; 
 
 
 
  return ( 
    <div> 
      <h2> 
        <a href="#" onClick={handleLinkClick}> 
          Claim Number: {claimNumber} 
        </a> 
      </h2> 
    </div> 
  ); 
}; 
 
export default ClaimGeneration;  