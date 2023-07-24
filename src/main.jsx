import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Pages/Home/Home';
import Login from './Pages/Shared/Login';
import AuthProvider from './provider/AuthProvider';
import SignUp from './Pages/Shared/SignUp';
import Colleges from './Pages/Routes/Colleges';
import CollegeDetails from './Pages/Routes/CollegeDetails';
import Admission from './Pages/Routes/Admission';
import AdmissionDetails from './Pages/Routes/AdmissionDetails';
import MyColleges from './Pages/Routes/MyColleges';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>
      },
      {
        path: "/colleges",
        element: <Colleges></Colleges>
      },
      {
        path: "/collegeDetails/:id",
        element: <CollegeDetails></CollegeDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/colleges/${params.id}`)
      },
      {
        path: '/admission',
        element: <Admission></Admission>
      },
      {
        path: '/admissionDetails/:id',
        element: <AdmissionDetails></AdmissionDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/colleges/${params.id}`)
      },
      {
        path:'/myColleges',
        element: <MyColleges></MyColleges>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
