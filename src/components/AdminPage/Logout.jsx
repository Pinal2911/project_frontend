import axios from 'axios';
import React from 'react'
const handleClick=async(event)=>{
    event.preventDefault();
    try{
        const response=await axios.post('http://localhost:8080/api/placement/auth/logout')
        console.log(response)
    }catch(error){
        console.log(error)
    }
};
function Logout() {
  return (
    <div onLoad={handleClick}>
    
    </div>
  )
}

export default Logout