import React from 'react' 
//mport BootstrapTable from 'react-bootstrap-table-next'; 
function Upload(){
    return ( 
        <div> 
        <div> 
    <h1>  Upload Documents</h1> 
    <hr />
    
    <label for="Documents"> Documents  &nbsp;</label> 
    <input type="file" id="Documents" name="Documents" ></input>  
        </div>   
        </div>
      ); 
}
export default Upload;