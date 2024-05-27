import React, { useDebugValue, useEffect, useState } from 'react'

import Topnav from './Topnav'
//import styled from 'styled-components'
import axios from 'axios';
import {Navbar,Container,Nav,Sidenav,Sidebar, Content} from 'rsuite';
import { Table, Pagination } from 'rsuite';

import Footer from '../Footer/Footer';
const { Column, HeaderCell, Cell } = Table;

function RoundDetails() {

  // const GridWrapper = styled.div`
  // display: grid;
  // grid-gap: 40px;
  // margin-top: em;
  // margin-left: 15em;
  // grid-template-columns: repeat(12, 1fr);
  // grid-auto-rows: minmax(25px, auto);
  // `;


  const[data,setData]=useState([]);
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
          
           <h2>Company and Round Details</h2>
           
        
<div>
      <Table height={500} data={data2}>
        <Column width={50} align="center" flexGrow={1}>
          <HeaderCell>Id</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column width={100} flexGrow={1}>
          <HeaderCell>Company Name</HeaderCell>
          <Cell dataKey="companyName" />
        </Column>

        <Column width={100} flexGrow={1}>
          <HeaderCell>Package Amount</HeaderCell>
          <Cell dataKey="packageAmt" />
        </Column>

        <Column width={100} flexGrow={1}>
          <HeaderCell>Role</HeaderCell>
          <Cell dataKey="role" />
        </Column>

        <Column width={100} flexGrow={3}>
          <HeaderCell>Skills</HeaderCell>
          <Cell dataKey="skills" />
        </Column>

        <Column width={100} flexGrow={1}>
          <HeaderCell>Location</HeaderCell>
          <Cell dataKey="location" />
        </Column>

        <Column width={100} flexGrow={1}>
          <HeaderCell>Working Mode</HeaderCell>
          <Cell dataKey="workingMode" />
        </Column>

        <Column width={100} flexGrow={3}>
          <HeaderCell>Criteria</HeaderCell>
          <Cell dataKey="criteria" />
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

export default RoundDetails