import React from 'react'

function StudentRegister() {
  
  return (

    <div>
    <section className="vh-100" style={{backgroundColor: '#508bfc'}}>
<div className="container py-5 h-100">
<div className="row d-flex justify-content-center align-items-center h-100">
  <div className="col-12 col-md-8 col-lg-6 col-xl-5">
    <div className="card shadow-2-strong" style={{borderRadius: '1rem'}}>
      <div className="card-body p-5 text-center">

        <h1 className="display-5 mb-5">STUDENT REGISTRATION</h1>
    
        <div className="form-outline mb-4">
          <input type="text" id="fname" className="form-control form-control-lg" />
          <label className="form-label" for="fname">FirstName</label>
        </div>

        <div className="form-outline mb-4">
          <input type="text" id="mname" className="form-control form-control-lg" />
          <label className="form-label" for="mname">MiddleName</label>
        </div>

        <div className="form-outline mb-4">
          <input type="text" id="lname" className="form-control form-control-lg" />
          <label className="form-label" for="lname">LastName</label>
        </div>


        <div className="form-outline mb-4">
          <input type="email" id="typeEmailX-2" className="form-control form-control-lg" />
          <label className="form-label" for="typeEmailX-2">Primary Email</label>
        </div>

        
        <div className="form-outline mb-4">
          <input type="email" id="alter_email" className="form-control form-control-lg" />
          <label className="form-label" for="alter_email">Alternate Email</label>
        </div>

        <div className="form-outline mb-4">
          <input type="number" id="no" className="form-control form-control-lg" />
          <label className="form-label" for="no">Mobile Number</label>
        </div>

        <div className="form-outline mb-4">
          <input type="number" id="no2" className="form-control form-control-lg" />
          <label className="form-label" for="no2">Alternate Mobile Number</label>
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

export default StudentRegister