import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import pictlogo from '../../pictlogo.jfif'
import pict_campus from '../../images/pict_campus_image.jpg'
function Placement() {
  return (
    <div>
    <div>
<nav className=" navbar navbar-expand-lg navbar-light bg-body-tertiary ">

<div className="fixed-top container-fluid bg-info rounded-9 ">

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
        <a className="nav-link text-white" href="/placement/student">Student Login</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="/placement/admin">Admin Login</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="/placement/company">Company Login</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="/placement/recruit">Recruitment Process</a>
      </li>

      <li className="nav-item">
        <a className="nav-link text-white" href="/placement/register">Register</a>
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
<div className='container mt-5'>


<div className="d-flex">

  <div className="px-4">
  <div className='container-fluid'>
<img
  src={pict_campus}
  height={500}
  width={500}
  className='mt-5 image-fluid custom-image rounded-9'
/>

</div>
  </div>

  <div className="vr" style={{height: '250px'}}></div>
  <div className="px-4">
    <h1 className='mt-5'>PICT TNP CELL</h1>
    <p>
    The Training and Placement (T&P) Cell plays an integral role in journey of the students, aspiring for excellent job opportunities. The T&P Cell at PICT serves as an aerodrome for the flights of the young undergrads and post grads to be taken-off to greater horizons and heights beyond imagination. T&P Cell, headed by Dr. S. S. Narkhede is recognized for the exemplary placements offered to its of CE, E&TC Engg. and IT Students and thus stands sturdy to the expectations of its Stakeholders. Regardless of the department, every batch raises the bar for the upcoming batches and remarkably takes the baton ahead. All the students meeting the criteria prescribed by the Institute and the companies are permitted to register for the Placement Process. The registration for the placement commences at the end of the sixth semester of engineering.

The Institute is delighted to host the numerous companies belonging to “DREAM JOBS” category. Our creamy students earn spots in the top brackets of such companies offering the pay package above 20 LPA.

Good number of students get internship opportunities and pre-placement offers. Many companies from ‘Fortune 500’ also visit the campus applauding our students. The T&P Cell at PICT is successful in maintaining high placement statistics over the years and perpetually strives to reach greater heights.
    </p>
    
  </div>

</div>
<div className='container'>
<h1>PLACEMENT PROCESS</h1>
    <p>
<p>1. The Placement process commences with “Placement Orientation Session”. It details the objectives of the T&P cell, Institutional polices, Placement Statistics and criteria. An awareness about the placement procedure and general discipline, domain wise sources and preparation tactics is created among the students.</p>
<p>2. The registration of the students to enrol for the on-campus placement commences at the end of the sixth semester of engineering. Students submit the related documents for verification.</p>
<p>3. The T&P Cell invites the companies for placement by sharing the placements reports and other required information.</p>
<p>4. Upon reciept of the profile / job description , eligibility criteria and CTC from the companies, company-registion form is floated among the the studnets for confirming their registarion.</p>
<p>5. Pre-Placement connect is subsequently arrranged for the registered students as per mutual convenience of the institution and the company.</p>
<p>6. The recruitment process is arranged and executed in coordination with T&P cell</p>
<p>7. T&P cell recieves the list of the selected students from the company and formally communicates an acceptance on behalf of students.</p>
    </p>

    </div>
</div>

</div>



<div>
<footer className=" text-center text-lg-start bg-body-tertiary text-muted ">
 
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
