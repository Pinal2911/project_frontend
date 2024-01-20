import React from 'react'

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Register() {
  const navigate=useNavigate()
  const currentURL=window.location.href
  const navigateToAdmin=()=>{
    
    if(currentURL == 'http://localhost:3000/placement/register'){
      navigate(`/placement/register/AdminRegister`);
    }else if(currentURL == 'http://localhost:3000/internship/register'){
      navigate(`/internship/register/IAdminRegister`);
    }
  }

  const navigateToCompany=()=>{
    if(currentURL == 'http://localhost:3000/placement/register' ){
      navigate(`/placement/register/CompanyRegister`)
    }else if(currentURL == 'http://localhost:3000/internship/register'){
      navigate(`/internship/register/ICompanyRegister`)
    }
  }

  const navigateToStudent=()=>{
    if(currentURL == 'http://localhost:3000/placement/register'){
      navigate(`/placement/register/StudentRegister`)
    }else if(currentURL == 'http://localhost:3000/internship/register'){
      navigate(`/internship/register/IStudentRegister`)
    }
  }
  return(
   <div >
    <section className='vh-100 ' style={{backgroundColor: '#508bfc'}}>
      
    <div className="container py-5 h-100">
   
          <div className=" d-grid  justify-content-center align-items-center h-100 ">
          <div className="col-6 mx-auto ">
         
            <button className="btn btn-secondary btn-rounded mt-5" onClick={navigateToAdmin}>ADMIN</button>
            <button className="btn btn-secondary btn-rounded mt-5" onClick={navigateToStudent}type="button" >STUDENT</button>
            <button className="btn btn-secondary btn-rounded mt-5" onClick={navigateToCompany} type="button" >COMPANY</button>    
          </div>
          </div>
          
    </div>
    </section>
    
   </div>
  )
}

export default Register