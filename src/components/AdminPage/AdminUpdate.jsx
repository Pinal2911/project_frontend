import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { Table, Pagination,Button,Message ,toaster} from 'rsuite';
import { eventWrapper } from '@testing-library/user-event/dist/utils';
const AdminUpdate =()=> {

    const [admin,setAdmin]=useState({
        id:'',
        email:'',
        password:'',
        name:''
    });
    

    const handleInputChange=(event)=>{
        const { name, value } = event.target;
        setAdmin({ ...admin, [name]: value });
    }


    const handleSubmit=async(event)=>{
        event.preventDefault();
        try{
          const response=await axios.put(`http://localhost:8080/api/admin/placement/editAdmin/${admin.id}`,admin)
          toaster.push(
            <Message showIcon type="success" duration={5000}>
              Applied!
            </Message>
            
          );
          console.log(response)
        }catch(error){
          console.log(error)
        }
       };
  return (
    <div>
         <div className="bg-info">
     
   
     <div className="container py-5 h-100">
     <div className="row d-flex justify-content-center align-items-center h-100">
       <div className="col-12 col-md-8 col-lg-6 col-xl-5">
         <div className="card shadow-2-strong" style={{borderRadius: '1rem'}}>
           <div className="card-body p-5 text-center">
         {/* BASIC STUDENT INFO STRATS FROM HERE */}
             <h1 className="display-5 mb-5">ADMIN DETAILS UPDATE</h1>

        <div className="form-outline mb-4">
          <input type="number" name="id" value={admin.id} onChange={handleInputChange} id="id" className="form-control form-control-lg" />
          <label className="form-label" for="Id">Id</label>
        </div>

        <div className="form-outline mb-4">
          <input type="email" name="email" value={admin.email} onChange={handleInputChange} id="id" className="form-control form-control-lg" />
          <label className="form-label" for="Id">Email</label>
        </div>

        <div className="form-outline mb-4">
          <input type="text" name="name" value={admin.name} onChange={handleInputChange} id="id" className="form-control form-control-lg" />
          <label className="form-label" for="Id">Name</label>
        </div>

        <div className="form-outline mb-4">
          <input type="password" name="password" value={admin.password} onChange={handleInputChange} id="id" className="form-control form-control-lg" />
          <label className="form-label" for="Id">Password</label>
        </div>
        <button onClick={handleSubmit} className="btn btn-primary btn-lg btn-block" type="submit">Update</button>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
        
    </div>
  )
}

export default AdminUpdate
