import React from 'react'
import pictlogo from '../../pictlogo.jfif'
function Topnav() {
  return (
    <>
    
      <nav className=" navbar navbar-expand-lg navbar-dark bg-info right-menu toggle ">
      <a className="navbar-brand mt-2 mt-lg-0" href="/">
      <img
        src={pictlogo}
        height="30"
        width="60"
        alt="MDB Logo"
        loading="lazy"
        className='rounded-7'
      />
    </a>
  

  <div className=" navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active ">
        <a className="nav-link text-white" href="/">New Applications </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="/placement">Notifications</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="/placement">Applications</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="/placement">Profile</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-white" href="/placement">Logout</a>
      </li> 
    </ul>
    
  </div>
</nav>
      
    </>
  )
}

export default Topnav