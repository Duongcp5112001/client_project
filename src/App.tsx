import React from 'react'; 
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import SideBar from './components/SideBar'; 
import NavBar from './components/NavBar';
import DashBoard from './pages/DashBoard/dashboard';
import ListStudent from './pages/ListStudent/ListStudents';
import ListTeacher from './pages/ListTeacher/listTeachers';
import Login from './pages/Login/login';
import DetailStudent from './pages/DetailsStudent/detailStu';
import DetailTeacher from './pages/DetailsTeacher/detailTea';
import Register from './pages/Register/register';
import ForgotPass from './pages/ForgotPass/forgotpass';

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
  // ádasd
  
  const router = createBrowserRouter([
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
    {
      path: '/forgot-password',
      element: <ForgotPass />,
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
          path: '/list-student',
          element: <ListStudent />
        },
        {
          path: '/list-teacher',
          element: <ListTeacher />
        },
        {
          path: '/detail-student',
          element: <DetailStudent />
        },
        {
          path: '/detail-teacher',
          element: <DetailTeacher />
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



