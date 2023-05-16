import React, { useState } from "react";  
 
  
  
function FnolTypeOfPolicy() {  
  const [showForm1, setShowForm1] = useState(false);  
  const [showForm2, setShowForm2] = useState(false);  
  
  const handleRadioChange = (e) => {  
    const value = e.target.value;  
    if (value === "form1") {  
      setShowForm1(true);  
      setShowForm2(false);  
    } else if (value === "form2") {  
      setShowForm1(false);  
      setShowForm2(true);  
    }  
  };  
    
  return (  
     
  <div > 
 <div  className='row mb-3'> 
        <div  className='col-4'>Type of Policy</div  > 
        <div   className='col-8'> 
    <label>  
        <input  
          type="radio"  
          name="form"  
          value="form1"  
          onChange={handleRadioChange}  
        /> Auto Subsection  
        </label>  
       &nbsp; 
       &nbsp; 
      <label>  
        <input  
          type="radio"  
          name="form"  
          value="form2"  
          onChange={handleRadioChange}  
        />Homeowners   
      </label>  
      {showForm1 && (  
        <form>  
          <b>Insured Vehicle Auto subsection</b>  
           
         <form> 
            <div  className='col-4'>  
         <label for=" VIN"> VIN  </label> 
         <div className='col-8'>  
         <input type="text"  id=" VIN" name=" VIN" className='w-100 form-control' ></input>    
         </div > 
         </div> 
 
         <div className='col-4' > 
         <label for=" Make"> Make  </label>  
         <div className='col-8'> 
         <input type="text"  id=" Make" name=" Make" className='w-100 form-control'></input>    
         </div> 
         </div >   
 
         <div className='col-4' > 
         <label for=" Model"> Model  </label> 
         <div className='col-8'>  
         <input type="text"  id=" Model" name=" Model" className='w-100 form-control'></input>    
         </div >  
        </div> 
         <div className='col-4' > 
         <label for=" Plate Number"> Plate Number  </label>  
         <div className='col-8'> 
         <input type="text"  id=" Plate Number" name=" Plate Number" className='w-100 form-control' ></input>    
         </div > 
        </div> 
         <div className='col-4' > 
         <label for=" Plate Slate"> Plate Slate  </label>  
         <div className='col-8'> 
         <input type="text"  id=" Plate Slate" name=" Slate" className='w-100 form-control'></input>    
         </div > 
        </div> 
         <div className='col-4' > 
         <label for=" Driver"> Driver  </label>  
         <div className='col-8'> 
         <input type="text"  id=" Driver" name=" Driver" className='w-100 form-control'></input>    
         </div >  
          </div> 
         </form>  
            
        </form>  
      )}  
      {showForm2 && (  
        <form>  
          <b>Homeowners subsection</b>  
          <br/>  
 
        <div className='col-4'> 
    <label for="Address">Address   </label>  
      <div className='col-8'> 
    <textarea name="message" id="message"  rows="5"  
     
          placeholder="Mention your complete address" ></textarea>  
           </div> 
           </div> 
        </form>  
      )}  
</div  > 
</div  > 
</div  > 
  );  
            
  
  
  
}  
  
export default FnolTypeOfPolicy;