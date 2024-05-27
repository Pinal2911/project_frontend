import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
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
import IStudentPage from './components/IStudentPage.jsx/IStudentPage.jsx';
import IAdminPage from './components/IAdminPage/IAdminPage.jsx';
import ICompanyPage from './components/ICompanyPage/ICompanyPage.jsx';
import CurrentCompany from './components/StudentPage/CurrentCompany.jsx';
import UpcomingCompany from './components/StudentPage/UpcomingCompany.jsx';
import PlacedStudent from './components/StudentPage/PlacedStudent.jsx';
import UnplacedStudents from './components/StudentPage/UnplacedStudents.jsx';
import RoundDetails from './components/StudentPage/RoundDetails.jsx';
import UpdateProfile from './components/StudentPage/UpdateProfile.jsx';
import Notification from './components/StudentPage/Notification.jsx';
import CurrComp from './components/AdminPage/CurrComp.jsx';
import UpcomingComp from './components/AdminPage/UpcomingComp.jsx';
import PlacedStudPut from './components/AdminPage/PlacedStudPut.jsx';
import UnplacedPost from './components/AdminPage/UnplacedPost.jsx';
import AdminUpdate from './components/AdminPage/AdminUpdate.jsx';
import UpdateCompany from './components/AdminPage/UpdateCompany.jsx';
import ListComp from './components/AdminPage/ListComp.jsx';
import PPO from './components/AdminPage/PPO.jsx';
import Updateprocess from './components/CompanyPage/UpdateProcess.jsx';
import Updatenotification from './components/CompanyPage/UpdateNotification.jsx';
import Stats from './components/AdminPage/Stats.jsx';


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
  
        <Route path='/internship/Admin/IAdminPage' element={<IAdminPage/>}/>
        <Route path='/internship/Student/IStudentPage' element={<IStudentPage/>}/>
        <Route path='/internship/Company/ICompanyPage' element={<ICompanyPage/>}/>
        
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


        <Route path='/placement/Student/StudentPage' element={<StudentPage/>}/>
        <Route path='/placement/Admin/AdminPage' element={<AdminPage/>}/>
        <Route path='/placement/Company/CompanyPage' element={<CompanyPage/>}/>
        <Route path='/placement/Student/StudentPage/CurrentCompany' element={<CurrentCompany/>}></Route>
        <Route path='/placement/Student/StudentPage/UpcomingCompany' element={<UpcomingCompany/>}></Route>
        <Route path='/placement/Student/StudentPage/getPlacedStudents' element={<PlacedStudent/>}></Route>
        <Route path='/placement/Student/StudentPage/getUnplacedStudents' element={<UnplacedStudents/>}></Route>
        <Route path='/placement/Student/StudentPage/getRoundDetails' element={<RoundDetails/>}></Route>
        <Route path='/placement/Student/StudentPage/updateProfile' element={<UpdateProfile/>}></Route>
        <Route path='/placement/Student/StudentPage/notifications' element={<Notification/>}></Route>
        <Route path='/placement/Student/StudentPage/stats' element={<Stats/>}></Route>

        <Route path='/placement/Admin/AdminPage/CurrentCompany' element={<CurrComp/>}></Route>
        <Route path='/placement/Admin/AdminPage/UpcomingCompany' element={<UpcomingComp/>}></Route>
        <Route path='/placement/Admin/AdminPage/Stats' element={<Stats/>}></Route>
        <Route path='/placement/Admin/AdminPage/addPlacedStud' element={<PlacedStudPut/>}></Route>
        <Route path='/placement/Admin/AdminPage/addUnPlacedStud' element={<UnplacedPost/>}></Route>
        <Route path='/placement/Admin/AdminPage/editStudent' element={<UpdateProfile/>}></Route>
        <Route path='/placement/Admin/AdminPage/editAdmin' element={<AdminUpdate/>}></Route>
        <Route path='/placement/Admin/AdminPage/editCompany' element={<UpdateCompany/>}></Route>
        <Route path='/placement/Admin/AdminPage/listOfCompanies' element={<ListComp/>}></Route>
        <Route path='/placement/Admin/AdminPage/ppoList' element={<PPO/>}></Route>

        

        <Route path='/placement/Company/CompanyPage/updateProfile' element={<UpdateCompany/>}></Route>
        <Route path='/placement/Company/CompanyPage/updateProcess' element={<Updateprocess/>}></Route>
        <Route path='/placement/Company/CompanyPage/updateNotification' element={<Updatenotification/>}></Route>
        <Route path='/placement/Company/CompanyPage/stats' element={<Stats/>}></Route>
        
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
