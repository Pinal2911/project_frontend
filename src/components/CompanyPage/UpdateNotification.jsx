import React, { useState } from 'react'
import axios from 'axios';
function Updatenotification() {

    const [notification,setnotification]=useState({
        
        id:'',
        notify:''
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setnotification({ ...notification, [name]: value });
      };

      const handleSubmit=async(event)=>{
        event.preventDefault();
        try{
          const response=await axios.put(`http://localhost:8080/api/company/placement/editNotification/${notification.id}`,notification)
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
        <h1 className="display-5 mb-5">ADD NEW COMPANY TO CURRENT COMPANY</h1>

        <div className="form-outline mb-4">
          <input type="number" name="id" value={notification.id} onChange={handleInputChange} id="id" className="form-control form-control-lg" />
          <label className="form-label" for="Id">Company Id</label>
        </div>


        <div className="form-outline mb-4">
          <input type="text" name="notify" value={notification.notify} onChange={handleInputChange} id="id" className="form-control form-control-lg" />
          <label className="form-label" for="Id">updated notification</label>
        </div>



        <button onClick={handleSubmit} className="btn btn-primary btn-lg btn-block" type="submit">Update notification</button>




    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Updatenotification