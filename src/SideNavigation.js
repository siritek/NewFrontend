import { Menu, SubMenu, MenuItem, ProSidebar, SidebarHeader } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import React from 'react';

const SideNavigation = (props) => {
  const { onSectionClick, exposureSubmitClicked } = props;

  const handleItemClick = (section) => {
    onSectionClick(section);
  };

 

  return (
    <ProSidebar style={{ height: '150vh' }} backgroundcolor="#bcf3ff">
      <SidebarHeader></SidebarHeader>

      <Menu>
        {exposureSubmitClicked ? (
          <>
            <SubMenu title="Notes">
              <MenuItem onClick={() => handleItemClick("newnote")}>
                New Note
              </MenuItem>
            </SubMenu>
            <MenuItem onClick={() => handleItemClick('documents')}>Documents</MenuItem>
            <MenuItem onClick={() => handleItemClick('diary')}>Diary</MenuItem>
            <MenuItem onClick={() => handleItemClick('synopsis')}>Synopsis</MenuItem>
          </>
        ) : (
          <>
            <MenuItem onClick={() => handleItemClick('fnol')}>FNOL</MenuItem>
            <MenuItem onClick={() => handleItemClick('pi')}>Policy Information</MenuItem>
            <MenuItem onClick={() => handleItemClick('losssummary')}>Loss Summary</MenuItem>
            <MenuItem onClick={() => handleItemClick('exposures')}>Exposures</MenuItem>
          </>
        )}
      </Menu>
    </ProSidebar>
 
  );
}



export {  SideNavigation };
