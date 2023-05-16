import React from "react";  
import Headernote from './components/Notes.components/headernote.component';  
import Searchnote from "./components/Notes.components/Searchnote.component";  
import Notetable from "./components//Notes.components/notetable";  
  
  
  
function Notes(){  
  
    return(  
        <div>  
            <Headernote/>  
              
            <div className="row">  
                <div className="col-6">  
                    <Searchnote />  
                    <hr/>  
                </div>  
<vl/>  
                <div className="col-6">  
                    <Notetable />  
                </div>  
  
                  
  
            </div>  
        </div>  
    );  
}  
export default Notes