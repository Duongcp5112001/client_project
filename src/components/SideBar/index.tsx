import React from 'react'; 
import { 
  Nav, 
  NavLink, 
  Bars, 
  NavMenu, 
} from './SidebarElements'; 
  
const SideBar = () => { 
  return ( 
    <> 
      <Nav> 
        <Bars /> 
        <NavMenu> 
          <NavLink to='/DashBoard'> 
            Dashboard 
          </NavLink> 
          <NavLink to='/ListStudent'> 
            List Students 
          </NavLink> 
          <NavLink to='/ListTeacher'> 
            List Teachers 
          </NavLink>  
        </NavMenu> 
      </Nav> 
    </> 
  ); 
}; 
  
export default SideBar;