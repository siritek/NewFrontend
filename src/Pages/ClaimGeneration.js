import React, { useState } from 'react'; 
// import Synopsis from './Synopsis'; 
 
const ClaimGeneration = (props) => { 
<<<<<<< HEAD
const {claimNumber} = props;   
=======
  const { claimNumber } = props;
  
>>>>>>> b0ef31d41f8c35e13494f219f398c069bef66690
 
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