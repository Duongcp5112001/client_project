import React from 'react'; 
import SideBar from './components/SideBar'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
<<<<<<< Updated upstream
import DashBoard from './pages/dashboard';
import ListStudent from './pages/listStudents';
import ListTeacher from './pages/listTeachers';
=======
import DashBoard from './components/DashBoard/dashboard';
import ListStudent from './components/ListStudent/listStudents';
import ListTeacher from './components/ListTeacher/listTeachers';
import Login from './components/Login/login';
>>>>>>> Stashed changes
import NavBar from './components/NavBar';
import "./styles/App.css"

function App() { 
  return ( 
    <Router> 
      <NavBar />
      <SideBar />
      <Routes> 
        <Route path='/' Component={Login} /> 
        <Route path='/DashBoard' Component={DashBoard} /> 
        <Route path='/ListStudent' Component={ListStudent} /> 
        <Route path='/ListTeacher' Component={ListTeacher} /> 
      </Routes> 
    </Router> 
  ); 
} 

export default App;