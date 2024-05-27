import { Container, Header, Sidebar, Sidenav, Content, Navbar, Nav } from 'rsuite';
import CogIcon from '@rsuite/icons/legacy/Cog';
import AngleLeftIcon from '@rsuite/icons/legacy/AngleLeft';
import AngleRightIcon from '@rsuite/icons/legacy/AngleRight';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import DashboardIcon from '@rsuite/icons/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import React from 'react';
import { Carousel } from 'rsuite';
import homepmain from '../../homepmain.jpg';
import homep1 from '../../homep1.jpg';
import home2 from '../../homep2.jpg';
import home3 from '../../homep3.jpg';
import home4 from '../../homep4.jpg';
const headerStyles = {
  padding: 18,
  fontSize: 16,
  height: 56,
  background: '#34c3ff',
  color: ' #fff',
  whiteSpace: 'nowrap',
  overflow: 'hidden'
};

const NavToggle = ({ expand, onChange }) => {
  return (
    <Navbar appearance="subtle" className="nav-toggle">
      <Nav>
        <Nav.Menu
          noCaret
          placement="topStart"
          trigger="click"
          title={<CogIcon style={{ width: 20, height: 20 }} size="sm" />}
        >
          <Nav.Item>Help</Nav.Item>
          <Nav.Item>Settings</Nav.Item>
          <Nav.Item>Sign out</Nav.Item>
        </Nav.Menu>
      </Nav>

      <Nav pullRight>
        <Nav.Item onClick={onChange} style={{ width: 56, textAlign: 'center' }}>
          {expand ? <AngleLeftIcon /> : <AngleRightIcon />}
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

const Sidebar12 = () => {
  const [expand, setExpand] = React.useState(true);
  return (
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
               
               
                  
              <Nav.Item eventKey="3-1" href={`/placement/Admin/AdminPage/CurrentCompany`}>Current Companies</Nav.Item>
              <Nav.Item eventKey="3-2"  href={`/placement/Admin/AdminPage/UpcomingCompany`}>Upcoming Company</Nav.Item>
              <Nav.Item eventKey="3-3" href={`/placement/Admin/AdminPage/addPlacedStud`}>Placed Students</Nav.Item>
              <Nav.Item eventKey="3-4" href={`/placement/Admin/AdminPage/addUnPlacedStud`}>Unplaced Students</Nav.Item>
              <Nav.Item eventKey="4-3" href={`/placement/student`} >Student Login</Nav.Item>
              <Nav.Item eventKey="4-3" href={`/placement/company`}>Company Login</Nav.Item>
              <Nav.Item eventKey="4-1" href={`/placement/Admin/AdminPage/Stats`}>Statistics</Nav.Item>
              <Nav.Item eventKey="4-2" href='#'>Recruitment Process</Nav.Item>
              <Nav.Item eventKey="4-3" href={`/placement/Admin/AdminPage/editAdmin`}>Update Profile</Nav.Item>
              <Nav.Item eventKey="4-3" href=''></Nav.Item>
              <Nav.Item eventKey="4-3" href=''></Nav.Item>
              <Nav.Item eventKey="4-3" href=''></Nav.Item>
              <Nav.Item eventKey="4-3" href=''></Nav.Item>
             
               
              </Nav>
            </Sidenav.Body>
          </Sidenav>
          <NavToggle expand={expand} onChange={() => setExpand(!expand)} />
        </Sidebar>

        <Container>
          

  <Carousel autoplay className="custom-slider">
    <img src={homepmain} height="250" />
    <img src={homep1} height="250" />
    <img src={home2} height="250" />
    <img src={home3} height="250" />
    <img src={home4} height="250" />
   
  </Carousel>
          <Header>
            <h2>Placement Process</h2>
          </Header>

         




          <Content><p>1. The Placement process commences with “Placement Orientation Session”. It details the objectives of the T&P cell, Institutional polices, Placement Statistics and criteria. An awareness about the placement procedure and general discipline, domain wise sources and preparation tactics is created among the students.</p>
<p>2. The registration of the students to enrol for the on-campus placement commences at the end of the sixth semester of engineering. Students submit the related documents for verification.</p>
<p>3. The T&P Cell invites the companies for placement by sharing the placements reports and other required information.</p>
<p>4. Upon reciept of the profile / job description , eligibility criteria and CTC from the companies, company-registion form is floated among the the studnets for confirming their registarion.</p>
<p>5. Pre-Placement connect is subsequently arrranged for the registered students as per mutual convenience of the institution and the company.</p>
<p>6. The recruitment process is arranged and executed in coordination with T&P cell</p>
<p>7. T&P cell recieves the list of the selected students from the company and formally communicates an acceptance on behalf of students.</p></Content>
        </Container>
      </Container>
    </div>
  );
};

export default Sidebar12