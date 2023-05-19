import { Menu,SubMenu, MenuItem, ProSidebar, SidebarHeader } from "react-pro-sidebar"; 
import "react-pro-sidebar/dist/css/styles.css"; 
// import { getWidth } from "rsuite/esm/DOMHelper";
 
const SideNavigation = (props) => { 
  const handleItemClick = (section) => { 
    props.onSectionClick(section); 
  }; 

  return (
    <ProSidebar style={{ height: "150vh" }} backgroundColor="#bcf3ff">
      <SidebarHeader></SidebarHeader>

      <Menu>
        <MenuItem onClick={() => handleItemClick("fnol")}>FNOL</MenuItem>
        <MenuItem onClick={() => handleItemClick("pi")}>
          Policy Information
        </MenuItem>

        <MenuItem onClick={() => handleItemClick("losssummary")}>
          Loss Summary
        </MenuItem>
        <MenuItem
          // title="Exposures"
          onClick={() => handleItemClick("Exposures")}> Exposures
          {/* <MenuItem onClick={() => handleItemClick("newexposure")}>
            New Exposures
          </MenuItem>
          <MenuItem onClick={() => handleItemClick("searchexposure")}>
            Search Exposures
          </MenuItem> */}
        </MenuItem>
        <SubMenu title="Notes">
          <MenuItem onClick={() => handleItemClick("newnote")}>
            New Note
          </MenuItem>
          <MenuItem onClick={() => handleItemClick("searchnote")}>
            Search Note
          </MenuItem>
        </SubMenu>
        <MenuItem onClick={() => handleItemClick("documents")}>
          Documents
        </MenuItem>

        <MenuItem onClick={() => handleItemClick("diary")}>Diary</MenuItem>
        <MenuItem>Synopsis</MenuItem>
      </Menu>
    </ProSidebar>
  ); 
}; 
 
export default SideNavigation; 