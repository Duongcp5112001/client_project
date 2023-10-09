import React from 'react'; 
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import SideBar from './components/SideBar'; 
import NavBar from './components/NavBar';
import DashBoard from './components/DashBoard/dashboard';
import ListStudent from './components/ListStudent/listStudents';
import ListTeacher from './components/ListTeacher/listTeachers';
import Login from './context/Login/login';
import "./styles/App.css"
import Detail from './components/Details/detail';

function App() { 
  const Layout = () => {
    return (
      <div>
        <NavBar />
        <div>
          <SideBar />
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    )
  }
  
  const router = createBrowserRouter([
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <DashBoard />
        },
        {
          path: '/ListStudent',
          element: <ListStudent />
        },
        {
          path: '/ListTeacher',
          element: <ListTeacher />
        },
        {
          path: '/Details',
          element: <Detail />
        },
      ]
    }
  ])
  
  return ( 
    <div>
      <RouterProvider router={router} />
    </div>
  );  
} 

export default App;



