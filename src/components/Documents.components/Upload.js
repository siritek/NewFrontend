import React from 'react' 
//mport BootstrapTable from 'react-bootstrap-table-next'; 
function Upload(props){
    const handleDocumentClick=()=>{
        props.onDocumentClick();
      };
    return ( 
        <div> 
      <div className="d-flex justify-content-between align-items-center">
          <h2>Upload Document</h2>
          <button type="button" className="btn btn-success" onClick={handleDocumentClick}>
            Back
          </button>
        </div>
    <hr />
    
    <label for="Documents"> Documents  &nbsp;</label> 
    <input type="file" id="Documents" name="Documents" ></input>  
        </div>   
        
      ); 
}
export default Upload;