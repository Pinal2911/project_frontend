import React, { useDebugValue, useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Topnav from './Topnav'
import styled from 'styled-components'
import axios from 'axios';


function RoundDetails() {

  const GridWrapper = styled.div`
  display: grid;
  grid-gap: 40px;
  margin-top: em;
  margin-left: 15em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
  `;


  const[data,setData]=useState([]);

  useEffect(()=>{
    fetchData();
  },[]);

const fetchData=async()=>{
  try{
    const response=await axios.get('http://localhost:8080/api/student/placement/getRoundDetails');
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
        <GridWrapper>
          <div>
           <pre><h2>COMPANY AND ROUND DETAILS</h2></pre>
           
            <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">COMPANY NAME</th>
      <th scope="col">PACKAGE</th>
      <th scope="col">NO OF ROUNDS</th>
      <th scope="col">ROLE</th>
      <th scope="col">SKILLS</th>
      <th scope="col">LOCATION</th>
      <th scope="col">WORKING MODE</th>
      <th scope="col">CRITERIA</th>
     
    </tr>
  </thead>
  <tbody class="table-group-divider table-divider-color">
  {data.map((row,index)=>(
    <tr key={index}>
      <td>{row.id}</td>
    
      <td>{row.companyName}</td>
      <td>{row.pkgAmt}</td>
      <td>{row.pkgAmt}</td>
      <td>{row.roundNo}</td>
      <td>{row.role}</td>
      <td>{row.skills}</td>
      <td>{row.location}</td>
      <td>{row.workingMode}</td>
      <td>{row.criteria}</td>
    </tr>
     ))}
  </tbody>
</table>
</div>
</GridWrapper>
</div>
  )
}

export default RoundDetails