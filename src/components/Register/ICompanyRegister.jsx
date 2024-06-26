import React from 'react'

function ICompanyRegister() {
  return (
    <div>
    <section className="vh-100" style={{backgroundColor: '#508bfc'}}>
<div className="container py-5 h-100">
<div className="row d-flex justify-content-center align-items-center h-100">
  <div className="col-12 col-md-8 col-lg-6 col-xl-5">
    <div className="card shadow-2-strong" style={{borderRadius: '1rem'}}>
      <div className="card-body p-5 text-center">

        <h1 className="display-5 mb-5">COMPANY REGISTRATION</h1>

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

        <button className="btn btn-primary btn-lg btn-block" type="submit">Register</button>
        
       
      </div>
    </div>
  </div>
</div>
</div>
</section>
</div>
  )
}

export default ICompanyRegister