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

function App() {
  const [activeSection, setActiveSection] = useState(null);
  const [firstfour, setfirstfour] = useState(false);
  const [claimNumber, setClaimNumber] = useState();
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
  };

  const handleFnolClick = () => {
    setActiveSection("fnol");
    setfirstfour(true);
  };
  const handleLinkClick = () => {
    setActiveSection("synopsis");
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
          />
        </Col>
      </Row>

      <div style={{ display: "flex" }}>
        <SideNavigation
          onSectionClick={handleSectionClick}
          firstfour={firstfour}
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
<<<<<<< HEAD
            <Synopsis  claimNumber={claimNumber}  setComponentData={updateComponentData} componentData={componentData}
=======
            <Synopsis claimNumber={claimNumber}
              setComponentData={updateComponentData}
              componentData={componentData}
>>>>>>> c3c0059c0852ca9dc1c143bf357d89ed1830e245
            />
          )}
          {activeSection === "claimGeneration" && ( <ClaimGeneration claimNumber={claimNumber} onLinkClick={handleLinkClick} />)}
          {/* new claim synopsis */}
          {activeSection === "newexposure" && (
            <Newexposure  lossdataobj={LossData()} onBackClick={() => setActiveSection("exposures")}/>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
