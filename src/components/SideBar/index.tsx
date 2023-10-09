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
          <NavLink to='/list-student'> 
            List Students 
          </NavLink> 
          <NavLink to='/list-teacher'> 
            List Teachers 
          </NavLink> 
          <NavLink to='/detail-student'> 
            Detail student 
          </NavLink> 
          <NavLink to='/detail-teacher'> 
            Detail Teacher
          </NavLink> 
        </NavMenu> 
      </Nav> 
    </> 
  ); 
}; 
  
export default SideBar;