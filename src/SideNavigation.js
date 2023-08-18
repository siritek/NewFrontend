import { Menu, SubMenu, MenuItem, ProSidebar, SidebarHeader } from "react-pro-sidebar"; 
import "react-pro-sidebar/dist/css/styles.css"; 
import React from 'react'; 
 
const SideNavigation = (props) => { 
  const { onSectionClick, firstfour , admin,  } = props; 
 
  const handleItemClick = (section) => { 
    onSectionClick(section); 
  }; 
                 
  
  return ( 
    <ProSidebar style={{ height: '150vh' }} backgroundcolor="#bcf3ff"> 
      <SidebarHeader></SidebarHeader> 
 
      <Menu> 
         
        {firstfour ? (  
  <>  
    <MenuItem onClick={() => handleItemClick('fnol')}>FNOL</MenuItem>  
    <MenuItem onClick={() => handleItemClick('pi')}>Policy Information</MenuItem>  
    <MenuItem onClick={() => handleItemClick('losssummary')}>Loss Summary</MenuItem>  
    <MenuItem onClick={() => handleItemClick('exposures')}>Exposures</MenuItem>  
  </>  
): admin ?  (  
 
<>  
  <MenuItem onClick={() => handleItemClick('dropdownlist')}>Dropdown-list</MenuItem> 
  <MenuItem onClick={() => handleItemClick('guideware')}>Guideware</MenuItem> 
   
 
</>  
   
) : ( <>  
  <MenuItem onClick={() => handleItemClick('synopsis')}>Synopsis</MenuItem>  
  <MenuItem onClick={() => handleItemClick('documents')}>Documents</MenuItem>  
  <SubMenu title="Notes">  
    <MenuItem onClick={() => handleItemClick('newnote')}>New Note</MenuItem>  
    <MenuItem onClick={() => handleItemClick('searchnote')}>Search Note</MenuItem>  
  </SubMenu>  
  <MenuItem onClick={() => handleItemClick('diary')}>Diary</MenuItem>  
  
  </>  
) }     
 </Menu> 
     </ProSidebar> 
 
  ); 
} 
 
 
export {SideNavigation}; 
 
 
 
 
 
 
 
// import { Menu, SubMenu, MenuItem, ProSidebar, SidebarHeader } from "react-pro-sidebar"; 
// import "react-pro-sidebar/dist/css/styles.css"; 
// import React from 'react'; 
 
// const SideNavigation = (props) => { 
//   const { onSectionClick, firstfour , admin } = props; 
 
//   const handleItemClick = (section) => { 
//     onSectionClick(section); 
//   }; 
   
 
  
 
//   return ( 
//     <ProSidebar style={{ height: '150vh' }} backgroundcolor="#bcf3ff"> 
//       <SidebarHeader></SidebarHeader> 
 
//       <Menu> 
         
//         {firstfour ? (  
//   <>  
//     <MenuItem onClick={() => handleItemClick('fnol')}>FNOL</MenuItem>  
//     <MenuItem onClick={() => handleItemClick('pi')}>Policy Information</MenuItem>  
//     <MenuItem onClick={() => handleItemClick('losssummary')}>Loss Summary</MenuItem>  
//     <MenuItem onClick={() => handleItemClick('exposures')}>Exposures</MenuItem>  
//   </>  
// ) : ( <>  
//   <MenuItem onClick={() => handleItemClick('synopsis')}>Synopsis</MenuItem>  
//   <MenuItem onClick={() => handleItemClick('documents')}>Documents</MenuItem>  
//   <SubMenu title="Notes">  
//     <MenuItem onClick={() => handleItemClick('newnote')}>New Note</MenuItem>  
//   </SubMenu>  
//   <MenuItem onClick={() => handleItemClick('diary')}>Diary</MenuItem>  
  
//   </>  
// ) } 
 
// { admin ?  ( <MenuItem onClick={() => handleItemClick('dropdownlist')}>Dropdown-list</MenuItem> 
      
// ) : ( <>  
//   <MenuItem onClick={() => handleItemClick('synopsis')}>Synopsis</MenuItem>  
//   <MenuItem onClick={() => handleItemClick('documents')}>Documents</MenuItem>  
//   <SubMenu title="Notes">  
//     <MenuItem onClick={() => handleItemClick('newnote')}>New Note</MenuItem>  
//   </SubMenu>  
//   <MenuItem onClick={() => handleItemClick('diary')}>Diary</MenuItem>  
  
//   </>  
// )} 
//  </Menu> 
//      </ProSidebar> 
 
//   ); 
// } 
 
 
// export {SideNavigation}; 