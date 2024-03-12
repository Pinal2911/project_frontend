import React, { useEffect, useState } from 'react'
import axios from 'axios'


function Recruit() {

  const [comp,setComp]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:8080/api/student/placement/getCurrentCompany')
    .then(response=>setComp(response.data))
    .catch(error=>console.error('Error fetching ',error));
  },[])
  return (
    <div>
      <h2>companies</h2>
      <ul>
        {comp.map(c=>(
          <li key={c.id}>
            {c.companyName}{c.packageAmt}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Recruit