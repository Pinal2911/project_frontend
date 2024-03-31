import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Sidebar from './Sidebar'
import Topnav from './Topnav'
import styled from 'styled-components'
import axios from 'axios';
function UpcomingCompany() {

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
          const response=await axios.get('http://localhost:8080/api/student/placement/getUpcomingCompany');
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
           <pre><h2>UPCOMING COMPANIES</h2></pre>
           
            <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">COMPANY NAME</th>
      <th scope="col">PACKAGE</th>
      <th scope='col'>ONBOARDED</th>
     
    </tr>
  </thead>
  <tbody class="table-group-divider table-divider-color">
  {data.map((row,index)=>(
    <tr key={index}>
      <td>{row.id}</td>
    
      <td>{row.companyName}</td>
      <td>{row.packageAmt}</td>
      <td>{row.onBoard}</td>
      
    </tr>
     ))}
  </tbody>
</table>
</div>
</GridWrapper>
</div>
  )
}

export default UpcomingCompany