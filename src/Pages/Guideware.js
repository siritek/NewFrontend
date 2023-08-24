import React, { useState, useEffect } from "react"; 
import "../App.css"; 

const rowsPerPage = 5;
const TableRow = ({ index, pageIndex, Guideware }) => { 
  const continuousId = index + 1 + (pageIndex - 1) * rowsPerPage; 
 
  return ( 
    <tr> 
      <td>{continuousId}</td> 
      <td>{Guideware.gwclaimNumber}</td> 
      <td>{Guideware.createDateTime}</td> 
      <td>{Guideware.baseClaimNumber}</td> 
      <td>{Guideware.basePolicyNumber}</td> 
      <td>{Guideware.status}</td> 
    </tr> 
  ); 
}; 
 
const Table = ({ rows, pageIndex }) => { 
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
          <TableRow key={index} index={index} pageIndex={pageIndex} Guideware={guideware} /> 
        ))} 
      </tbody> 
    </table> 
  ); 
}; 
 
const Guideware = () => { 
  const [guidewareData, setGuidewareData] = useState([]); 
  const [currentPage, setCurrentPage] = useState(1); 
 
   // Define rowsPerPage here 
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
    fetch("http://localhost:8080/nxt_gwtransaction/getAll") 
      .then((response) => { 
        if (!response.ok) { 
          throw new Error("Network response was not ok"); 
        } 
        return response.json(); 
      }) 
      .then((data) => { 
        setGuidewareData(data); 
      }) 
      .catch((error) => { 
        console.error("Error fetching data:", error); 
      }); 
  }, []); 
 
  return ( 
    <div> 
      <h1>Response</h1> 
      {guidewareData.length === 0 ? ( 
        <p>Loading data...</p> 
      ) : ( 
        <> 
          <Table rows={currentPageData} pageIndex={currentPage} /> 
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