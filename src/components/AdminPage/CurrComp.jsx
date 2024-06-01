import React, { useState } from 'react'
import axios from 'axios';
import {toaster,Message} from 'rsuite'
function CurrComp() {

    const [company,setCompany]=useState({
        
        companyName:'',
        packageAmt:''
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCompany({ ...company, [name]: value });
      };

      const handleSubmit=async(event)=>{
        event.preventDefault();
        try{
          const response=await axios.post(`http://localhost:8080/api/admin/placement/currentComp`,company)
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
    <div className="bg-info">
        <div className="container py-5 h-100">
<div className="row d-flex justify-content-center align-items-center h-100">
  <div className="col-12 col-md-8 col-lg-6 col-xl-5">
    <div className="card shadow-2-strong" style={{borderRadius: '1rem'}}>
      <div className="card-body p-5 text-center">
    {/* BASIC CURRENT DATA STRATS FROM HERE */}
        <h1 className="display-5 mb-5">ADD NEW COMPANY TO CURRENT COMPANY</h1>

        <div className="form-outline mb-4">
          <input type="text" name="companyName" value={company.companyName} onChange={handleInputChange} id="id" className="form-control form-control-lg" />
          <label className="form-label" for="Id">Company Name</label>
        </div>


        <div className="form-outline mb-4">
          <input type="text" name="packageAmt" value={company.packageAmt} onChange={handleInputChange} id="id" className="form-control form-control-lg" />
          <label className="form-label" for="Id">Package Amount</label>
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

export default CurrComp