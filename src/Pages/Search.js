
import React, { useState } from 'react'  
import BootstrapTable from 'react-bootstrap-table-next';  
import Form from "react-bootstrap/Form";   
  
function Search(
  {setComponentData, componentData}) {  
 
  const columns = [  
    {  
      dataField: "checkbox",  
      text: "Checkbox",  
      headerClasses: "checkbox-header",  
      classes: "checkbox-column",  
      headerFormatter: (cellContent, row) => (  
        <div className="form-check">  
          <input  
            type="checkbox"  
            className="form-check-input"  
            id={row.id}  
              
          />  
        </div>  
      ),  
      formatter: (cellContent, row) => (  
        <div className="form-check">  
          <input  
            type="checkbox"  
            className="form-check-input"  
            id={row.id}  
            checked={row.selected}  
      onChange={() => handleCheckboxChange(row.id)}  
          />  
        </div>  
  
      ),  
    },  
    {  
      dataField: "id",  
      text: "#",  
      sort: true,  
      headerClasses: "id-header",  
      classes: "id-column",  
    },  
    {  
      dataField: "Claim",  
      text: "Claim",  
      sort: true,  
      headerClasses: "Claim-header",  
      classes: "Claim-column",  
      formatter: (cellContent, row) => (  
  
        <div className='row'>  
          <div className='col-12'>  
             
          </div>  
     
      </div>     
  
      ),  
    },  
  
    {  
        dataField: "Insured",  
        text: "Insured",  
        sort: true,  
        headerClasses: "Insured-header",  
        classes: "Insured-column",  
        formatter: (cellContent, row) => ( <div className='row'>  
        <div className='col-12'> 
         </div></div> 
         ),}, 
         {  
            dataField: "Policy",  
            text: "Policy",  
            sort: true,  
            headerClasses: "Policy-header",  
            classes: "Policy-column",  
            formatter: (cellContent, row) => ( <div className='row'>  
            <div className='col-12'> 
             </div></div> 
             ),}, 
             
                 {  
                    dataField: "Claimant",  
                    text: "Claimant",  
                    sort: true,  
                    headerClasses: "Claimant-header",  
                    classes: "Claimant-column",  
                    formatter: (cellContent, row) => ( <div className='row'>  
                    <div className='col-12'> 
                     </div></div> 
                     ),}, 
                     {  
                        dataField: "Loss Date",  
                        text: "Loss Date",  
                        sort: true,  
                        headerClasses: "Loss Date-header",  
                        classes: "Loss Date-column",  
                        formatter: (cellContent, row) => ( <div className='row'>  
                        <div className='col-12'> 
                         </div></div> 
                         ),}, 
                         {  
                            dataField: "Adjuster",  
                            text: "Adjuster",  
                            sort: true,  
                            headerClasses: "Adjuster-header",  
                            classes: "Adjuster-column",  
                            formatter: (cellContent, row) => ( <div className='row'>  
                            <div className='col-12'> 
                             </div></div> 
                             ),}, 
                             {  
                                dataField: "Status",  
                                text: "Status",  
                                sort: true,  
                                headerClasses: "Status-header",  
                                classes: "Status-column",  
                                formatter: (cellContent, row) => ( <div className='row'>  
                                <div className='col-12'> 
                                 </div></div> 
                                 ),}, 
                                 {  
                                    dataField: "Remaining Reserves",  
                                    text: "Remaining Reserves",  
                                    sort: true,  
                                    headerClasses: "Remaining Reserves-header",  
                                    classes: "Remaining Reserves-column",  
                                    formatter: (cellContent, row) => ( <div className='row'>  
                                    <div className='col-12'> 
                                     </div></div> 
                                     ),}, 
                                     {  
                                        dataField: "Future Payments",  
                                        text: "Future payments",  
                                        sort: true,  
                                        headerClasses: "Future Payments-header",  
                                        classes: "Future Payments-column",  
                                        formatter: (cellContent, row) => ( <div className='row'>  
                                        <div className='col-12'> 
                                         </div></div> 
                                         ),}, 
                                         {  
                                            dataField: "Paid",  
                                            text: "Paid",  
                                            sort: true,  
                                            headerClasses: "Paid-header",  
                                            classes: "Paid-column",  
                                            formatter: (cellContent, row) => ( <div className='row'>  
                                            <div className='col-12'> 
                                             </div></div> 
                                             ),}, 
  
    
  
  ];  
  
  //Test data & State of the table  
  const [tableData, setTableData] = useState([  
    { },  
    // { id: 2, name: 'Jane Smith', type: 'Type B', selected: false },  
    // { id: 3, name: 'Bob Johnson', type: 'Type A', selected: false },  
  ]);  
  
  //Add new row on button click  
  // const handleAddRow = () => {    
  //   const newRow = { id: tableData.length + 1, name: '', type: '' };  
  //   setTableData([...tableData, newRow]);  
  // };  
  
  //Get the state of checked row  
  const handleCheckboxChange = (rowId) => {  
    setTableData((prevData) =>  
      prevData.map((row) =>  
        row.id === rowId ? { ...row, selected: !row.selected } : row  
      )  
    );
  }
    const handleInputChange = (e) => {  
      const {id, value} = e.target;  
      setComponentData((prevData) =>({  
        ...prevData,  
        [id]:value,  
      }));  
    }; 
    
  const {
    claimNumber = '',
    policyNumber = '',
    searchFor= '',
    firstName= '',
    lastName= '',
    organizationName= '',
    taxId="",
  } = componentData || {};

    
    
  
   
  
  return (
    <div>
   <h2>Search</h2>
   <hr/>
    <div className='row'>
  <div className='col-6'>    

<div className='row mb-2'>
   <div className='col-4'>
     <label htmlFor='claimNumber' >Claim Number</label>
     <i className='text-danger h5'>*</i>
   </div>
   <div className='col-4'>
     <input  type="text" id='claimNumber' value={claimNumber} onChange={handleInputChange} maxLength='10'  
  className='w-100 form-control' />
   </div>
 </div>


 <div className='row mb-2'>
   <div className='col-4'>
     <label htmlFor='policyNumber'>Policy Number</label>
     <i className='text-danger h5'>*</i>
   </div>
   <div className='col-4'>
     <input type="number" id='policyNumber' value={policyNumber}  onChange={handleInputChange}className='w-100 form-control' />
   </div>
 </div>


 <div className="row mb-2">
          <div className="col-4">
            <label htmlFor='searchFor' >Search For</label>
          </div>
          <div className="col-4">
            <Form.Select
              aria-label="Default select example" id='searchFor' value={searchFor} onChange={handleInputChange} >
              <option value ="none" >None</option>
              <option value="additional insured">Additional Insured</option>  
        <option value="any party involved">Any Party Involved</option>  
        <option value="claimant">Claimant</option>  
        <option value="insured">Insured</option> 
            </Form.Select>
          </div>
        </div>
 </div>
       
    <div className='col-6'>
    <div className='row mb-2'>
   <div className='col-4'>
     <label htmlFor='firstName'>First Name</label>
   </div>
   <div className='col-4'>
     <input  type="text"   id='firstName' value={firstName} onChange={handleInputChange}
  className='w-100 form-control' />
   </div>
 </div>

 <div className='row mb-2'>
   <div className='col-4'>
     <label htmlFor='lastName'>Last Name</label>
   </div>
   <div className='col-4'>
     <input  type="text"    id='lastName' value={lastName} onChange={handleInputChange}
  className='w-100 form-control' /> 
 </div>
</div>

<div className='row mb-2'>
   <div className='col-4'>
     <label htmlFor='organizationName' >Organization Name</label>
   </div>
   <div className='col-4'>
     <input  type="text"    id='organizationName' value={organizationName} onChange={handleInputChange}
  className='w-100 form-control' /> 
 </div>
</div>

<div className='row mb-2'>
   <div className='col-4'>
     <label htmlFor='taxId' >Tax ID</label>
   </div>
   <div className='col-4'>
     <input  type="text"  id='taxId' value={taxId} className='w-100 form-control' onChange={handleInputChange} /> <br/>
 </div>
</div>
</div></div>
<div className="mb-3">
        <button type="submit" className="btn btn-success me-2">
          Search
        </button>
        <button type="reset" className="btn btn-dark">
          Reset
        </button>
      </div>


    <div> <br/> 
      <BootstrapTable keyField='id' data={tableData} columns={columns} />  
    </div>   
    
  </div> 
  )  
}  
  
export default Search;