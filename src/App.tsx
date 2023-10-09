import React from 'react'; 
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import SideBar from './components/SideBar'; 
import NavBar from './components/NavBar';
import DashBoard from './pages/DashBoard/dashboard';
import ListStudent from './pages/ListStudent/listStudents';
import ListTeacher from './pages/ListTeacher/listTeachers';
import Login from './pages/Login/login';
import Detail from './pages/DetailsStudent/detailStu';

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



