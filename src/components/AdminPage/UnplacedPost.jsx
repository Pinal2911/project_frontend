import React, { useState } from 'react'
import axios from 'axios';
function UnplacedPost() {

    const [student,setStudent]=useState({
        
        fname:'',
        lname:'',
        email:'',
        number:'',
        gender:'',
        branch:'',
        pictNumber:'',
       
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setStudent({ ...student, [name]: value });
      };

      const handleSubmit=async(event)=>{
        event.preventDefault();
        try{
          const response=await axios.post(`http://localhost:8080/api/admin/placement/unPlacedStud`,student)
          console.log(response)
        }catch(error){
          console.log(error)
        }
       };

  return (
    <div className="bg-info">
        <div className="container py-5 h-100">
<div className="row d-flex justify-content-center align-items-center h-100">
  <div className="col-12 col-md-8 col-lg-6 col-xl-5">
    <div className="card shadow-2-strong" style={{borderRadius: '1rem'}}>
      <div className="card-body p-5 text-center">
    {/* BASIC CURRENT DATA STRATS FROM HERE */}
        <h1 className="display-5 mb-5">ADD PLACED STUDENTS</h1>

        <div className="form-outline mb-4">
          <input type="text" name="fname" value={student.fname} onChange={handleInputChange} id="id" className="form-control form-control-lg" />
          <label className="form-label" for="Id">First Name</label>
        </div>


        <div className="form-outline mb-4">
          <input type="text" name="lname" value={student.lname} onChange={handleInputChange} id="id" className="form-control form-control-lg" />
          <label className="form-label" for="Id">Last Name</label>
        </div>

        <div className="form-outline mb-4">
          <input type="email" name="email" value={student.email} onChange={handleInputChange} id="id" className="form-control form-control-lg" />
          <label className="form-label" for="Id">Email</label>
        </div>

        <div className="form-outline mb-4">
          <input type="number" name="number" value={student.number} onChange={handleInputChange} id="id" className="form-control form-control-lg" />
          <label className="form-label" for="Id">Number</label>
        </div>

        <div className="form-outline mb-4">
          <input type="text" name="branch" value={student.branch} onChange={handleInputChange} id="id" className="form-control form-control-lg" />
          <label className="form-label" for="Id">Branch</label>
        </div>

        <div className="form-outline mb-4">
          <input type="text" name="pictNumber" value={student.pictNumber} onChange={handleInputChange} id="id" className="form-control form-control-lg" />
          <label className="form-label" for="Id">Pict Number</label>
        </div>

      

        <button onClick={handleSubmit} className="btn btn-primary btn-lg btn-block" type="submit">ADD</button>




    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default UnplacedPost