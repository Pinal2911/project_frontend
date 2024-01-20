import React from 'react'
import './Admin.css'
import Internship from '../Internship/Internship'
//import StudFeatures from '../StudFeatures/StudFeatures'
import { Link } from 'react-router-dom'
import pictlogo from '../../pictlogo.jfif'
import { useNavigate } from 'react-router-dom'
import AdminPage from '../AdminPage/AdminPage'
import StudentPage from '../StudentPage/StudentPage'

function Admin(props) {
    var pagename="";
    if(props.user == 'Admin'){
        pagename='AdminPage'
    }else if(props.user == 'Company'){
        pagename='CompanyPage'
    }else if(props.user == 'Student'){
        pagename='StudentPage'
    }
    const navigate=useNavigate();
    const navigateTo = ()=>{
        //note change the status of flag after connection with database
        //check whether given username and password are same as that in database
        const flag=true
        if(flag == true){
        navigate(`/internship/${props.user}/${pagename}`);
        console.log({pagename});
        }
        else
        alert("please enter valid details")
    }
  return (
   
    <div>
        <section className="vh-100" style={{backgroundColor: '#508bfc'}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card shadow-2-strong" style={{borderRadius: '1rem'}}>
          <div className="card-body p-5 text-center">

            <h1 className="display-5 mb-5">{props.user}</h1>

            <div className="form-outline mb-4">
              <input type="email" id="typeEmailX-2" className="form-control form-control-lg" />
              <label className="form-label" for="typeEmailX-2">Email</label>
            </div>

            <div className="form-outline mb-4">
              <input type="password" id="typePasswordX-2" className="form-control form-control-lg" />
              <label className="form-label" for="typePasswordX-2">Password</label>
            </div>

            
            <div className="form-check d-flex justify-content-start mb-4">
              <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
              <label className="form-check-label" for="form1Example3"> Remember password </label>
            </div>

            <button onClick={navigateTo} className="btn btn-primary btn-lg btn-block" type="submit">Login</button>
            
            <div className='text-center mt-5'>
                <p>Not a member? <a href='#!'>Register</a></p>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<div>
<footer className="bottom-fixed text-center text-lg-start bg-body-tertiary text-muted">
 
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
  

    
    <div>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-google"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-github"></i>
      </a>
    </div>
    
  </section>
 
  <section className="">
    <div className="container text-center text-md-start mt-5">
    
      <div className="row mt-3">
        
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
        
          <h6 className="text-uppercase fw-bold mb-4">
          <a className="navbar-brand mt-2 mt-lg-0" href="/">
      <img
        src={pictlogo}
        height="100"
        width="100"
        alt="MDB Logo"
        loading="lazy"
        className='rounded-9'
      />PICT TNP CELL
    </a>
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
         
          <h6 className="text-uppercase fw-bold mb-4">
           Policy
          </h6>
          <p>
            <a href="#!" className="text-reset">Terms and Conditions</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Policy</a>
          </p>
          
        </div>
        
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
         
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="/placement" className="text-reset">Placement at PICT</a>
          </p>
          <p>
            <a href="/internship" className="text-reset">Internship at PICT</a>
          </p>
          <p>
            <a href="/" className="text-reset">Training and Placement Cell</a>
          </p>
          <p>
            <a href="/aboutus" className="text-reset">About Us</a>
          </p>
        </div>
       
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
         
          <h6 className="text-uppercase fw-bold mb-4">Contact Information</h6>
          <p><i className="fas fa-home me-3"></i> Survey No. 27, Near Trimurti Chowk
Dhankwadi, Pune - 411043</p>
          <p>
            <i className="fas fa-envelope me-3"></i>
            registrar@pict.edu
          </p>
          <p><i className="fas fa-phone me-3"></i>+91 20 24371101</p>
          <p><i className="fas fa-print me-3"></i>+91 20 24364741</p>
        </div>
       
      </div>
  
    </div>
  </section>
 
  <div className="text-center p-4" style={{backgroundColor:'white'}}>
    © 2024 Copyright:
    <a className="text-reset fw-bold" href="https://mdbootstrap.com/">PICT_TNP@CELL.com</a>
  </div>
  
</footer>

      </div>
      </div>
    
  )
}

export default Admin
