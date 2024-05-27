import React from 'react'
import pictlogo from '../../pictlogo.jfif'
const Footer =()=> {
  return (
    <div>
      
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

export default Footer
