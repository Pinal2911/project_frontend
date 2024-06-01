import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import {toaster,Message} from 'rsuite'
import { eventWrapper } from '@testing-library/user-event/dist/utils';
const UpdateCompany =()=> {

    const [company,setCompany]=useState({
        id:'',
        name:'',
        packageAmt:'',
        eligible:'',
        rounds:'',
        process:''
    });


    const handleInputChange=(event)=>{
        const { name, value } = event.target;
        setCompany({ ...company, [name]: value });
    }


    const handleSubmit=async(event)=>{
        event.preventDefault();
        try{
          const response=await axios.put(`http://localhost:8080/api/admin/placement/editCompany/${company.id}`,company)
          console.log(response)
          toaster.push(
            <Message showIcon type="success" duration={5000}>
              Applied!
            </Message>
            
          );
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
             <h1 className="display-5 mb-5">COMPANY DETAILS UPDATE</h1>

        <div className="form-outline mb-4">
          <input type="number" name="id" value={company.id} onChange={handleInputChange} id="id" className="form-control form-control-lg" />
          <label className="form-label" for="Id">Id</label>
        </div>

       
        <div className="form-outline mb-4">
          <input type="text" name="name" value={company.name} onChange={handleInputChange} id="id" className="form-control form-control-lg" />
          <label className="form-label" for="Id">Name</label>
        </div>

        <div className="form-outline mb-4">
          <input type="text" name="eligible" value={company.eligible} onChange={handleInputChange} id="id" className="form-control form-control-lg" />
          <label className="form-label" for="Id">Eligible</label>
        </div>

        <div className="form-outline mb-4">
          <input type="number" name="packageAmt" value={company.packageAmt} onChange={handleInputChange} id="id" className="form-control form-control-lg" />
          <label className="form-label" for="Id">Package</label>
        </div>

        <div className="form-outline mb-4">
          <input type="number" name="rounds" value={company.rounds} onChange={handleInputChange} id="id" className="form-control form-control-lg" />
          <label className="form-label" for="Id">Rounds</label>
        </div>

        <div className="form-outline mb-4">
          <input type="text" name="process" value={company.process} onChange={handleInputChange} id="id" className="form-control form-control-lg" />
          <label className="form-label" for="Id">Process</label>
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

export default UpdateCompany
