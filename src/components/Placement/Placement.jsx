import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import pictlogo from '../../pictlogo.jfif'
function Placement() {
  return (
    <div>
    <div>
<nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary ">

<div className="container-fluid bg-info rounded-9 ">

  <button
    data-mdb-collapse-init
    className="navbar-toggler"
    type="button"
    data-mdb-target="/navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <i className="fas fa-bars"></i>
  </button>

 
  <div className="collapse navbar-collapse " id="navbarSupportedContent">
  
    <a className="navbar-brand mt-2 mt-lg-0" href="/">
      <img
        src={pictlogo}
        height="100"
        width="100"
        alt="MDB Logo"
        loading="lazy"
        className='rounded-9'
      />
    </a>
  
    <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5 display-100 ">
      <li className="nav-item ">
        <a className="nav-link text-white" href="/">PICT PLACEMENT CELL</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="/internship/student">Student Login</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="/internship/admin">Admin Login</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="/internship/company">Company Login</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="/help">Help</a>
      </li>
    </ul>
  
  </div>
 


  <div className="d-flex align-items-center">
 
   


    <div className="dropdown">
      <a
        data-mdb-dropdown-init
        className="text-reset me-3 dropdown-toggle hidden-arrow"
        href="/"
        id="navbarDropdownMenuLink"
        role="button"
        aria-expanded="false"
      >
        <i className="fas fa-bell"></i>
        <span className="badge rounded-pill badge-notification bg-danger">1</span>
      </a>
      <ul
        className="dropdown-menu dropdown-menu-end"
        aria-labelledby="navbarDropdownMenuLink"
      >
        <li>
          <a className="dropdown-item" href="/">Some news</a>
        </li>
        <li>
          <a className="dropdown-item" href="/">Another news</a>
        </li>
        <li>
          <a className="dropdown-item" href="/">Something else here</a>
        </li>
      </ul>
    </div>

    <div className="dropdown">
      <a
        data-mdb-dropdown-init
        className="dropdown-toggle d-flex align-items-center hidden-arrow"
        href="/"
        id="navbarDropdownMenuAvatar"
        role="button"
        aria-expanded="false"
      >
        <img
          src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
          className="rounded-circle"
          height="25"
          alt="Black and White Portrait of a Man"
          loading="lazy"
        />
      </a>
      <ul
        className="dropdown-menu dropdown-menu-end"
        aria-labelledby="navbarDropdownMenuAvatar"
      >
        <li>
          <a className="dropdown-item" href="/">My profile</a>
        </li>
        <li>
          <a className="dropdown-item" href="/">Settings</a>
        </li>
        <li>
          <a className="dropdown-item" href="/">Logout</a>
        </li>
      </ul>
    </div>
  </div>
 
</div>
</nav>
</div>  






<div>
<footer className="fixed-bottom text-center text-lg-start bg-body-tertiary text-muted">
 
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

export default Placement
