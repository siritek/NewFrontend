import React, { useState } from 'react'; 
import Synopsis from './Synopsis'; 
 
const ClaimGeneration = (props) => {
  const { claimNumber, onLinkClick } = props;
  const [redirectToSynopsis, setRedirectToSynopsis] = useState(false); 
 
  const handleLinkClick = () => { 
    setRedirectToSynopsis(true)
    onLinkClick(); 
  }; 

  
 
  if (redirectToSynopsis) { 
    return <Synopsis claimNumber={claimNumber.claimNumber}/>; 
  } 
 
  return ( 
    <div> 
      <h2> 
        <a href="#" onClick={handleLinkClick}> 
          Claim Number: {claimNumber.claimNumber} 
        </a> 
      </h2> 
      {/* <p>Policy Number: {policyNumber}</p>  */}
    </div> 
  ); 
}; 
 
export default ClaimGeneration;  

// import React, { useState } from 'react'; 
//  import Synopsis from './Synopsis'; 
 
 
// const ClaimGeneration = ( {claimNumber }) => { 
//     // const { claimNumber } = props;

// //const [redirectToSynopsis, setRedirectToSynopsis] = useState(false);

//   const handleLinkClick = () => { 
//    // setRedirectToSynopsis(true);
//     props.onLinkClick()
//   }; 
 
// // if (redirectToSynopsis) {
// //   return <Synopsis claimNumber={claimNumber} 
// //    policyNumber={policyNumber} />;
  
// // }
 
//   return ( 
//     <div> 
//       <h2> 
//         <a href="#" onClick={handleLinkClick}> 
//           Claim Number: {claimNumber} 
//         </a> 
//       </h2> 
//     </div> 
//   ); 
// }; 
 
// export default ClaimGeneration;  

