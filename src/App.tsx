import React from 'react'; 
import SideBar from './components/SideBar'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashBoard from './components/DashBoard/dashboard';
import ListStudent from './components/ListStudent/listStudents';
import ListTeacher from './components/ListTeacher/listTeachers';
import NavBar from './components/NavBar';
import "./styles/App.css"

function App() { 
  return ( 
    <Router> 
      <NavBar />
      <SideBar />
      <Routes> 
        <Route path='/DashBoard' Component={DashBoard} /> 
        <Route path='/ListStudent' Component={ListStudent} /> 
        <Route path='/ListTeacher' Component={ListTeacher} /> 
      </Routes> 
    </Router> 
  ); 
} 

export default App;