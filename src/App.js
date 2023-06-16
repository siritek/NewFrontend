import { useState, useRef } from "react";
import Header from "./Header";
import {SideNavigation} from "./SideNavigation";
import { Col, Row } from "reactstrap";
import { Fnol } from "./Pages/Fnol";
import { Policyinfo } from "./Pages/PolicyInformation";
import Documents from "./Pages/Documents";
import NewDoc from "./components/Documents.components/NewDoc";
import Upload from "./components/Documents.components/Upload";
import { Losssummary } from "./Pages/LossSummary";
import Diary from "./Pages/Diary";
import Exposure from "./Pages/Exposures";
import NewNote from "./NewNote";
import Search from "./Pages/Search";
import Synopsis from "./Pages/Synopsis";
import ClaimGeneration from "./Pages/ClaimGeneration";
import { Newexposure } from "./components/Exposure.components/Newexposure";
import { LossData } from "./Pages/LossSummary";
import Dropdownlist from "./Pages/Dropdown-list"

function App() {
  const [activeSection, setActiveSection] = useState(null);
  const [firstfour, setfirstfour] = useState(false);
  const [admin,setAdmin]  = useState(false);
  const [claimNumber, setClaimNumber] = useState(null);
  const [componentData, setComponentData] = useState({});

  const updateComponentData = (newData) => {
    setComponentData(newData);
  };

  const handleSectionClick = (section) => {
    setActiveSection(section);
    if (section === "fnol" || section === "pi" || section === "losssummary" || section === "exposures") {
      setfirstfour(true);
    }
   if (section === "synopsis"|| section === "newnote" || section === "dairy" || section === "documents") {
      setfirstfour(false);
    }
      if(section === "dropdownlist") 
    {setAdmin(true)}
  };

  const handleFnolClick = () => {
    setActiveSection("fnol");
    setfirstfour(true);
    setAdmin(false);
  };
  const handleLinkClick = () => {
    setActiveSection("synopsis");
    setfirstfour(false);
    setAdmin(false);
  };

const handleAdminClick =() => {
  setActiveSection("dropdownlist")
  setAdmin (true);
  setfirstfour(false);
};

  return (
    <>
      <Row>
        <Col>
          <Header
            onFnolClick={handleFnolClick}
            onSearchClick={() => setActiveSection("search")}
            onBlankClick={() => setActiveSection("")}
            onAdminClick ={ handleAdminClick}
          />
        </Col>
      </Row>

      <div style={{ display: "flex" }}>
        <SideNavigation
          onSectionClick={handleSectionClick}
          firstfour={firstfour}
          admin ={admin}
        />
      

        <div style={{ marginLeft: "10px", width: "100%" }}>
          {activeSection === "fnol" && <Fnol onPIClick={() => setActiveSection("pi")} />}
          {activeSection === "pi" && (
            <Policyinfo
              onFnolClick={() => setActiveSection("fnol")}
              onLossSummaryClick={() => setActiveSection("losssummary")}
            />
          )}
          {activeSection === "documents" && (
            <Documents
              onNewDocClick={() => setActiveSection("newDoc")}
              onUploadClick={() => setActiveSection("upload")}
            />
          )}
          {activeSection === "newDoc" && <NewDoc onDocumentClick={() => setActiveSection("documents")} />}
          {activeSection === "upload" && <Upload onDocumentClick={() => setActiveSection("documents")} />}
          {activeSection === "losssummary" && (
            <Losssummary onPIClick={() => setActiveSection("pi")} onExposureClick={() => setActiveSection("exposures")} />
          )}
          {activeSection === "exposures" && (
            <Exposure
              onLossSummaryClick={() => setActiveSection("losssummary")}
              onBlankClick={() => setActiveSection("claimGeneration")}
              onAppClick={() => setActiveSection("")}
              onNewClick={() => setActiveSection("newexposure")}
              onExposureClick={() => setActiveSection("exposures")}
              setClaimNumber={setClaimNumber}
            />
          )}

          {activeSection === "newnote" && <NewNote setComponentData={setComponentData} componentData={componentData} />}
          {activeSection === "diary" && <Diary />}
          {activeSection === "search" && <Search setComponentData={setComponentData} componentData={componentData} />}
          {/* {activeSection === "synopsis" && <Synopsis onSynopsisClick={() => setActiveSection("synopsis")} />} */}
          {activeSection === "synopsis" && (
            <Synopsis
              setComponentData={updateComponentData}
              componentData={componentData}
            />
          )}
          {activeSection === "claimGeneration" && (  <ClaimGeneration claimNumber={claimNumber} onLinkClick={handleLinkClick} />)}
          {/* new claim synopsis */}
          {activeSection === "newexposure" && (
            <Newexposure lossdataobj={LossData()} onBackClick={() => setActiveSection("exposures")}/>)}

          {activeSection === "dropdownlist" &&(
           <Dropdownlist onAdminClick= {()=>setActiveSection("dropdownlist")} />)}
            
          
        </div>
      </div>
    </>
  );
}

export default App;
