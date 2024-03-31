import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Sidebar from './Sidebar'
import Topnav from './Topnav'
import styled from 'styled-components'
import axios from 'axios';
function PlacedStudent() {

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
          const response=await axios.get('http://localhost:8080/api/student/placement/getPlacedStudents');
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
      <th scope="col">FirstName</th>
      <th scope="col">LastName</th>
      <th scope='col'>Email</th>
      <th scope='col'>Number</th>
      <th scope='col'>Gender</th>
      <th scope='col'>Branch</th>
      <th scope='col'>PictReg No</th>
      <th scope='col'>Company Name</th>
      <th scope='col'>Package</th>
      <th scope='col'>PPO</th>
     
    </tr>
  </thead>
  <tbody class="table-group-divider table-divider-color">
  {data.map((row,index)=>(
    <tr key={index}>
      <td>{row.id}</td>
    
      <td>{row.fname}</td>
      <td>{row.lname}</td>
      <td>{row.email}</td>
      <td>{row.number}</td>
      <td>{row.gender}</td>
      <td>{row.branch}</td>
      <td>{row.pictNumber}</td>
      <td>{row.companyName}</td>
      <td>{row.pkgAmt}</td>
      <td>{row.ppo}</td>
      
    </tr>
     ))}
  </tbody>
</table>
</div>
</GridWrapper>
</div>
  )
}

export default PlacedStudent