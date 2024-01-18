import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router



export default function StudentPage() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <a className="navbar-brand" href="/internship">Companies</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className=" navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Applications<span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/placement">Status</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/internship" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Login
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item bg-white" href="/internship">pinal</a>
          <a className="dropdown-item" href="/internship">samruddhi</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="/placement">ahire</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="/internship">Disabled</a>
      </li>
    </ul>
    
  </div>
</nav>
        {/* </header> */}

     
    </>
  );
}
