import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

import Topnav from './Topnav'
//import styled from 'styled-components'
import axios from 'axios';
import { Container } from 'rsuite';
import {Navbar,Nav,Sidenav, Content,Sidebar} from 'rsuite';
import { Table, Pagination } from 'rsuite';

import Footer from '../Footer/Footer';
function PlacedStudent() {

    // const GridWrapper = styled.div`
    // display: grid;
    // grid-gap: 40px;
    // margin-top: em;
    // margin-left: 15em;
    // grid-template-columns: repeat(12, 1fr);
    // grid-auto-rows: minmax(25px, auto);
    // `;
  
    const { Column, HeaderCell, Cell } = Table;
    const[data,setData]=useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    const [expand, setExpand] = React.useState(true);

   
  
    const [limit, setLimit] = React.useState(10);
    const [page, setPage] = React.useState(1);
  
    const handleChangeLimit = dataKey => {
      setPage(1);
      setLimit(dataKey);
    };
  
    const data2 = data.filter((v, i) => {
      const start = limit * (page - 1);
      const end = start + limit;
      return i >= start && i < end;
    });

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
       <Topnav/>
       <div className="show-fake-browser sidebar-page">
        <Container>
        <Sidebar
          style={{ display: 'flex', flexDirection: 'column' }}
          width={expand ? 260 : 56}
          collapsible
          
        >
         
          <Sidenav expanded={expand} defaultOpenKeys={[]} appearance="inverse">
            <Sidenav.Body>
              <Nav>
               
               
                  
              <Nav.Item eventKey="3-1" href={`/placement/Student/StudentPage/CurrentCompany`}>Current Companies</Nav.Item>
              <Nav.Item eventKey="3-2"  href={`/placement/Student/StudentPage/UpComingCompany`}>Upcoming Company</Nav.Item>
              <Nav.Item eventKey="3-3" href={`/placement/Student/StudentPage/getPlacedStudents`}>Placed Students</Nav.Item>
              <Nav.Item eventKey="3-4" href={`/placement/Student/StudentPage/getUnplacedStudents`} >Unplaced Students</Nav.Item>
              <Nav.Item eventKey="4-3" href={`/placement/Student/StudentPage/getRoundDetails`}  >Round Details</Nav.Item>
           
              <Nav.Item eventKey="4-1" href={`/placement/Student/StudentPage/stats`}>Statistics</Nav.Item>
              <Nav.Item eventKey="4-2" href='#'>Recruitment Process</Nav.Item>
              <Nav.Item eventKey="4-3" href={`/placement/Student/StudentPage/updateProfile`}>Update Profile</Nav.Item>
              <Nav.Item eventKey="4-3" href=''></Nav.Item>
              <Nav.Item eventKey="4-3" href=''></Nav.Item>
              <Nav.Item eventKey="4-3" href=''></Nav.Item>
              <Nav.Item eventKey="4-3" href=''></Nav.Item>
             
               
              </Nav>
            </Sidenav.Body>
          </Sidenav>
          {/* <NavToggle expand={expand} onChange={() => setExpand(!expand)} /> */}
        </Sidebar>

        <Container>
          
        
        {/* <Sidebar/>
        <Topnav/> */}
        {/* <GridWrapper> */}
        <Content>
          
           <h2>Placed Students</h2>
           
        
<div>
      <Table height={500} data={data2}>
        <Column width={50} align="center" flexGrow={1}>
          <HeaderCell>Id</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column width={100} flexGrow={1}>
          <HeaderCell>First Name</HeaderCell>
          <Cell dataKey="fname" />
        </Column>

        <Column width={100} flexGrow={1}>
          <HeaderCell>Last Name</HeaderCell>
          <Cell dataKey="lname" />
        </Column>

        <Column width={100} flexGrow={1}>
          <HeaderCell>Email</HeaderCell>
          <Cell dataKey="email" />
        </Column>

        <Column width={100} flexGrow={1}>
          <HeaderCell>Number</HeaderCell>
          <Cell dataKey="number" />
        </Column>

        <Column width={100} flexGrow={1}>
          <HeaderCell>Gender</HeaderCell>
          <Cell dataKey="gender" />
        </Column>
        <Column width={100} flexGrow={1}>
          <HeaderCell>Branch</HeaderCell>
          <Cell dataKey="branch" />
        </Column>

        <Column width={100} flexGrow={1}>
          <HeaderCell>Pict No</HeaderCell>
          <Cell dataKey="pictNumber" />
        </Column>

        <Column width={100} flexGrow={1}>
          <HeaderCell>Company Name</HeaderCell>
          <Cell dataKey="companyName" />
        </Column>

        <Column width={100} flexGrow={1}>
          <HeaderCell>Package</HeaderCell>
          <Cell dataKey="pkgAmt" />
        </Column>

        <Column width={100} flexGrow={1}>
          <HeaderCell>PPO</HeaderCell>
          <Cell dataKey="ppo" />
        </Column>
      </Table>
      <div style={{ padding: 25 }}>
        <Pagination
          prev
          next
          first
          last
          ellipsis
          boundaryLinks
          maxButtons={5}
          size="xs"
          layout={['total', '-', 'limit', '|', 'pager', 'skip']}
          total={data.length}
          limitOptions={[10, 30, 50]}
          limit={limit}
          activePage={page}
          onChangePage={setPage}
          onChangeLimit={handleChangeLimit}
        />
      </div>
    </div>
</Content>
</Container>

       

       

</Container>
<Footer></Footer>

</div>
</div>
  )
}

export default PlacedStudent