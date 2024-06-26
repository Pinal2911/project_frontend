import React, { useDebugValue, useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Topnav from './Topnav'
//import styled from 'styled-components'
import axios from 'axios';


function PPO() {

  // const GridWrapper = styled.div`
  // display: grid;
  // grid-gap: 40px;
  // margin-top: em;
  // margin-left: 15em;
  // grid-template-columns: repeat(12, 1fr);
  // grid-auto-rows: minmax(25px, auto);
  // `;


  const[data,setData]=useState([]);

  useEffect(()=>{
    fetchData();
  },[]);

const fetchData=async()=>{
  try{
    const response=await axios.get('http://localhost:8080/api/admin/placement/ppoStudents');
    console.log(response.data);
    setData(response.data);
  }catch(error){
    console.log('error fetching data',error);
  }
}


  return (
    <div>
        
        <Sidebar/>
        <Topnav/>
        {/* <GridWrapper> */}
          <div>
           <pre><h2>CURRENT COMPANIES</h2></pre>
           
            <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Package</th>
     
    </tr>
  </thead>
  <tbody class="table-group-divider table-divider-color">
  {data.map((row,index)=>(
    <tr key={index}>
      <td>{row.id}</td>
    
      <td>{row.fname}</td>
      <td>{row.lname}</td>
      <td>{row.pkgAmt}</td>
    </tr>
     ))}
  </tbody>
</table>
</div>
{/* </GridWrapper> */}
</div>
  )
}

export default PPO