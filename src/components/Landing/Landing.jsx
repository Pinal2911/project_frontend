import React from 'react'
import { Link, NavLink, Router,Route,Routes } from "react-router-dom"
import Logo from '../../tnp_frontimg.avif'
import placement from '../../images/placement.jpeg'
import internship  from '../../images/internship.jpeg'
 function Landing() {
  return (
    <div className='bg-info'>
    <landing className="container ">
    
        <div className="container-fluid row row-cols-1 row-cols-md-3 g-4 ">
  
  <div className="col mt-5 mb-5 m-auto  ">
    <div className="card h-100">
      <img src={internship} className="w-auto h-75" alt="Los Angeles Skyscrapers"/>
      <div className="card-body">
        <h5 className="card-title">Internship</h5>
        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
        <Link 
                to="/internship"
                className='btn btn-primary'>
                  Internship
        </Link>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div className="col mt-5 mb-5 m-auto">
    <div className="card h-100">
      <img src={placement} className="w-auto" alt="Palm Springs Road"/>
      <div className="card-body">
        <h5 className="card-title">Placement</h5>
        <p className="card-text">
        This card has supporting text below as a natural lead-in to additional content.
        </p>
        <Link 
                to="/placement"
                className='btn btn-primary'>
                  Placement
        </Link>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
</div>
    </landing>
    </div>
  )
}
export default Landing;