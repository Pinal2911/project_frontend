import React, { useState } from 'react'

function AdminRegister() {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');


  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      const response=await fetch('http://localhost:8080/api/placement/auth/admin/register',{
        method :'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({name,email,password})
      });
      if(response.ok){
        alert("admin registered")
      }else{
        alert("registration failed")
      }
    }catch(error){
      console.log('error during registration ',error);
    }
  }

  return (
    
    

    <div>
        <section className="vh-100" style={{backgroundColor: '#508bfc'}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card shadow-2-strong" style={{borderRadius: '1rem'}}>
          <div className="card-body p-5 text-center">

            <h1 className="display-5 mb-5">ADMIN REGISTRATION</h1>


            <div className="form-outline mb-4">
              <input type="Name" id="text_name" value={name} onChange={(e)=>setName(e.target.value)} className="form-control form-control-lg" />
              <label className="form-label" for="text_name">Name</label>
            </div>

            <div className="form-outline mb-4">
              <input type="email" id="typeEmailX-2" value={email} onChange={(e)=>setEmail(e.target.value)}className="form-control form-control-lg" />
              <label className="form-label" for="typeEmailX-2">Email</label>
            </div>

            <div className="form-outline mb-4">
              <input type="password" id="typePasswordX-2" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control form-control-lg" />
              <label className="form-label" for="typePasswordX-2">Password</label>
            </div>

         
            
            <div className="form-check d-flex justify-content-start mb-4">
              <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
              <label className="form-check-label" for="form1Example3"> Remember password </label>
            </div>

            <button onClick={handleSubmit} className="btn btn-primary btn-lg btn-block" type="submit">Register</button>
            
           
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
  )
}

export default AdminRegister