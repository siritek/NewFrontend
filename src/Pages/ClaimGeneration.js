    
  import React from 'react';
  import { useParams } from 'react-router-dom';
  
  const ClaimGeneration = (props) => {
    const { claimNumber } = useParams();
  
    return (
      <div>
        <h2>Claim Number: {claimNumber}</h2>
        {/* Additional content for the claim number page */}
      </div>
    );
  };
  
  export default ClaimGeneration;
