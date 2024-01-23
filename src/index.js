import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, useParams } from 'react-router-dom'
import Layout from './Layout.jsx'
import Landing from './components/Landing/Landing.jsx'
import Internship from './components/Internship/Internship.jsx'
import Placement from './components/Placement/Placement.jsx'
import Student from './components/Student/Student.jsx'
import Admin from './components/Admin/Admin.jsx'

import Company from './components/Company/Company.jsx'
import Register from './components/Register/Register.jsx'
import StudentPage from './components/StudentPage/StudentPage.jsx'
import AdminPage from './components/AdminPage/AdminPage.jsx'
import TargetScreen from './components/TargetWindow/TargetWindow.jsx'
import CompanyPage from './components/CompanyPage/CompanyPage.jsx'
import Recruit from './components/Recruit/Recruit.jsx'
import AdminRegister from './components/Register/AdminRegister.jsx'
import CompanyRegister from './components/Register/CompanyRegister.jsx'
import StudentRegister from './components/Register/StudentRegister.jsx'
import IAdminRegister from './components/Register/IAdminRegister.jsx'
import ICompanyRegister from './components/Register/ICompanyRegister.jsx'
import IStudentRegister from './components/Register/IStudentRegister.jsx'
const router= createBrowserRouter(
  
  createRoutesFromElements(

    <Route  >
      <Route path='/' element={<Landing/>}/>
      <Route path='/internship' element={<Internship/>}/>

      <Route path='/placement' element={<Placement/>}/>
      <Route path='/internship/student' element={<Student/>}/>
        <Route path='/internship/admin' element={<Admin user='Admin'/>}/>
        <Route path='/internship/company' element={<Company/>}/>
        <Route path='/internship/register' element={<Register/>}/>
       <Route path='/internship/recruit' element={<Recruit/>}/>
  
        <Route path='/internship/Admin/AdminPage' element={<AdminPage/>}/>
        <Route path='/internship/Student/StudentPage' element={<StudentPage/>}/>
        <Route path='/internship/Company/CompanyPage' element={<CompanyPage/>}/>
        
        <Route path='/internship/register/IAdminRegister' element={<IAdminRegister/>}/>
        <Route path='/internship/register/ICompanyRegister' element={<ICompanyRegister/>}/>
        <Route path='/internship/register/IStudentRegister' element={<IStudentRegister/>}/>

        <Route path='/placement/student' element={<Student/>}/>
        <Route path='/placement/admin' element={<Admin user='Admin'/>}/>
        <Route path='/placement/company' element={<Company/>}/>
        <Route path='/placement/register' element={<Register/>}/>
        <Route path='/placement/recruit' element={<Recruit/>}/>
        <Route path='/placement/register/AdminRegister' element={<AdminRegister/>}/>
        <Route path='/placement/register/CompanyRegister' element={<CompanyRegister/>}/>
        <Route path='/placement/register/StudentRegister' element={<StudentRegister/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
