import React, { useState } from 'react'; 
import Synopsis from './Synopsis'; 
 
const ClaimGeneration = ({ claimNumber }) => { 
  const [redirectToSynopsis, setRedirectToSynopsis] = useState(false); 
 
  const handleLinkClick = () => { 
    setRedirectToSynopsis(true); 
  }; 
 
  if (redirectToSynopsis) { 
    return <Synopsis claimNumber={claimNumber} />; 
  } 
 
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