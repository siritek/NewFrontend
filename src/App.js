import { useState } from "react";
import Header from "./Header";
import { SideNavigation } from "./SideNavigation";
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
  const [exposureSubmitClicked, setExposureSubmitClicked] = useState(false);
  const [componentData, setComponentData] = useState({});

  const handleSectionClick = (section) => {
    setActiveSection(section);
    if (section === "exposures") {
      setExposureSubmitClicked(true);
    } else {
      setExposureSubmitClicked(false);
    }
  };

  return (
    <>
      <Row>
        <Col>
          <Header
            onFnolClick={() => setActiveSection("fnol")}
            onSearchClick={() => setActiveSection("search")}
            onBlankClick={() => setActiveSection("")}
          />
        </Col>
      </Row>

      <div style={{ display: "flex" }}>
        <SideNavigation
          onSectionClick={handleSectionClick}
          exposureSubmitClicked={exposureSubmitClicked}
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
            />
          )}

          {activeSection === "newnote" && <NewNote setComponentData={setComponentData} componentData={componentData} />}
          {activeSection === "diary" && <Diary />}
          {activeSection === "search" && <Search setComponentData={setComponentData} componentData={componentData} />}
          {activeSection === "synopsis" && <Synopsis onSynopsisClick={() => setActiveSection("synopsis")} />}
          {activeSection === "claimGeneration" && <ClaimGeneration />}
          {/* new claim synopsis */}
          {activeSection === "newexposure" && (
            <Newexposure lossdataobj={LossData()} onBackClick={() => setActiveSection("exposures")} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
