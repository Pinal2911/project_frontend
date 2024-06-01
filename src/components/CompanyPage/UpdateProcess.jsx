import React, { useState } from 'react'
import axios from 'axios';
import {Message,toaster} from 'rsuite'
function Updateprocess() {

    const [process,setprocess]=useState({
        
        id:'',
        process:''
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setprocess({ ...process, [name]: value });
      };

      const handleSubmit=async(event)=>{
        event.preventDefault();
        try{
          const response=await axios.put(`http://localhost:8080/api/company/placement/editProcess/${process.id}`,process)
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
        <h1 className="display-5 mb-5">UPDATE PROCESS</h1>

        <div className="form-outline mb-4">
          <input type="number" name="id" value={process.id} onChange={handleInputChange} id="id" className="form-control form-control-lg" />
          <label className="form-label" for="Id">Company Id</label>
        </div>


        <div className="form-outline mb-4">
          <input type="text" name="process" value={process.process} onChange={handleInputChange} id="id" className="form-control form-control-lg" />
          <label className="form-label" for="Id">updated process</label>
        </div>



        <button onClick={handleSubmit} className="btn btn-primary btn-lg btn-block" type="submit">Update Process</button>




    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Updateprocess