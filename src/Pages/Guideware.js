import React, { useState, useEffect } from "react";
import "../App.css";

const TableRow = ({ index, Guideware }) => {
  //const formattedDate = new Date(Guideware.createDateTime).toLocaleString();
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{Guideware.gwclaimNumber}</td>
      <td>{Guideware.createDateTime}</td>
      <td>{Guideware.baseClaimNumber}</td>
      <td>{Guideware.basePolicyNumber}</td>
      <td>{Guideware.status}</td>
    </tr>
  );
};

const Table = ({ rows }) => {
  return (
    <table className="Guideware-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>GWClaimNumber</th>
          <th>CreateDateTime</th>
          <th>BaseClaimNumber</th>
          <th>BasePolicyNumber</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((guideware, index) => (
          <TableRow key={index} index={index} Guideware={guideware} />
        ))}
      </tbody>
    </table>
  );
};

const Guideware = () => {
  const [guidewareData, setGuidewareData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const rowsPerPage = 10;
  const totalPages = Math.ceil(guidewareData.length / rowsPerPage);

  const handleNextPage = () => {
    const nextPage = currentPage + 1;
    if (nextPage <= totalPages) {
      setCurrentPage(nextPage);
    }
  };

  const handlePreviousPage = () => {
    const previousPage = currentPage - 1;
    if (previousPage >= 1) {
      setCurrentPage(previousPage);
    }
  };

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentPageData = guidewareData.slice(startIndex, endIndex);

  useEffect(() => {
    // Perform a GET request using the fetch method
    fetch("http://localhost:8080/nxt_gwtransaction/getAll")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data); 
        setGuidewareData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // You can set an error state here to display an error message to the user.
      });
  }, []);

  return (
    <div>
      <h1>Response</h1>
      {guidewareData.length === 0 ? (
        <p>Loading data...</p>
      ) : (
        <>
      <Table rows={currentPageData} />
      <div>
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          style={{ margin: "0.5rem" }}
        >
          Previous Page
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          style={{ margin: "0.5rem" }}
        >
          Next Page
        </button>
      </div>
      </>
      )}
    </div>
  );
};

export default Guideware;















// import React, { useState, useEffect } from "react"; 
// import axios from "axios"; 
// import "../App.css"; 
 
// const API_URL = "http://localhost:8080/nxt_gwtransaction/getAll"; // Replace with your API URL 
 
// const TableRow = ({ index, Guideware }) => { 
//   return ( 
//     <tr> 
//       <td>{index + 1}</td>
//       <td>{Guideware.GWClaimNumber}</td> 
//       <td>{Guideware.CreateDateTime}</td> 
//       <td>{Guideware.BaseClaimNumber}</td> 
//       <td>{Guideware.BasePolicyNumber}</td>
//       <td>{Guideware.Status}</td>
//     </tr> 
//   ); 
// }; 
 
// const Table = ({ rows }) => { 
//   return ( 
//     <table className="Guideware-table"> 
//       <thead> 
//         <tr> 
//           <th>ID</th> 
//           <th>GWClaimNumber</th>
//           <th>CreateDateTime</th>
//           <th>BaseClaimNumber</th>
//           <th>BasePolicyNumber</th>
//           <th>Status</th>
//         </tr> 
//       </thead> 
//       <tbody> 
//         {rows.map((guideware, index) => ( 
//           <TableRow key={index} index={index} Guideware={guideware} /> 
//         ))} 
//       </tbody> 
//     </table> 
//   ); 
// }; 
 
// const Guideware = () => { 
//   const [guidewareData, setguidewareData] = useState([]); 
//   const [currentPage, setCurrentPage] = useState(1); 
 
//   const rowsPerPage = 10; 
//   const totalPages = Math.ceil(guidewareData.length / rowsPerPage); 
 
 
//   const handleNextPage = () => { 
//     const nextPage = currentPage + 1; 
//     if (nextPage <= totalPages) { 
//       setCurrentPage(nextPage); 
//     } 
//   }; 
 
//   const handlePreviousPage = () => { 
//     const previousPage = currentPage - 1; 
//     if (previousPage >= 1) { 
//       setCurrentPage(previousPage); 
//     } 
//   }; 
 
//   const startIndex = (currentPage - 1) * rowsPerPage; 
//   const endIndex = startIndex + rowsPerPage; 
//   const currentPageData = guidewareData.slice(startIndex, endIndex); 
 
//   useEffect(() => { 
//     axios 
//       .get(API_URL) 
//       .then((response) => { 
//         setguidewareData(response.data); 
//       }) 
//       .catch((error) => { 
//         console.error("Error fetching data:", error); 
//       }); 
//   }, []); 
 
//   return ( 
//     <div> 
//        <h1>Response</h1>
//       <Table rows={currentPageData} /> 
//       <div> 
//         <button 
//           onClick={handlePreviousPage} 
//           disabled={currentPage === 1} 
//           style={{ margin: "0.5rem" }} 
//         > 
//           Previous Page 
//         </button> 
//         <button 
//           onClick={handleNextPage} 
//           disabled={currentPage === totalPages} 
//           style={{ margin: "0.5rem" }} 
//         > 
//           Next Page 
//         </button> 
//       </div> 
//     </div> 
//   ); 
// }; 
 
// export default Guideware;  













// import React, { useEffect, useState } from "react";
// import { Button} from "react-bootstrap";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";

// function Guideware({ onSave }) {
//   const [inputarr, setInputarr] = useState([]);
//   const [showData, setShowData] = useState(false);


//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get("http://localhost:8085/sensor/all");
//       const data = response.data;
//       const lastInsertedData = data[data.length - 1];

//       setInputarr([lastInsertedData]);
//     } catch (error) {
//       console.log("Error:", error);
//     }
//   };

//   const handleAddButtonClick = async () => {
//     await fetchData();
//     setShowData(true);
//   };


//   return (
//     <div className="container">
//       <div className="row p-1 m-0">
//         <div className="col-6">
//           <strong>
//             <h2>Response :-</h2>
//           </strong>
//         </div>
//         <div className="col-16 d-flex justify-content-end">
//           <Button variant="primary" onClick={handleAddButtonClick}>
//             Add
//           </Button>
//         </div>
//       </div>

//       <div className="App" style={{ marginBottom: "100px" }}>
//         <div className="table-responsive">
//           <table className="table table-hover table-bordered">
//             <tbody>
//               <tr>
//                 <th>Id</th>
//                 <th>GW's claim number </th>
//                 <th>GW' create date</th>
//                 <th>GW' create time</th>
//               </tr>
//               {showData && inputarr.length < 1 ? (
//                 <tr>
//                   <td colSpan={17} className="text-center">
//                     No data available!
//                   </td>
//                 </tr>
//               ) : null}
//               {showData &&
//                 inputarr.map((info, ind) => {
//                   return (
//                     <tr key={ind}>
//                       <td>{info.Id}</td>
//                       <td>{info.GWclaimnumber}</td>
//                       <td>{info.GWclaimdate}</td>
//                       <td>{info.GWclaimtime}</td>
//                     </tr>
//                   );
//                 })}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Guideware;
