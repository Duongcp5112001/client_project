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
          <NavLink to='/'> 
            Dashboard 
          </NavLink> 
          <NavLink to='/ListStudent'> 
            List Students 
          </NavLink> 
          <NavLink to='/ListTeacher'> 
            List Teachers 
          </NavLink> 
          <NavLink to='/Details'> 
            Detail 
          </NavLink> 
        </NavMenu> 
      </Nav> 
    </> 
  ); 
}; 
  
export default SideBar;