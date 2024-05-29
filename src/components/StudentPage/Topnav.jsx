import { Navbar, Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';
import React from 'react';
import pictlogo from '../../pictlogo.jfif'
import '../../App.css';

const CustomNavbar = ({ onSelect, activeKey, ...props }) => {
  return (
    <Navbar {...props} className="rounded-navbar">
      <Navbar.Header>
            <img src={pictlogo} alt="Logo" className="logo" />          
        </Navbar.Header>
      <Navbar.Brand href="#" >Student Login</Navbar.Brand>
      <Nav onSelect={onSelect} activeKey={activeKey}>
        <Nav.Item eventKey="1" href={`/placement/`}>Apply to Company</Nav.Item>
        <Nav.Item eventKey="2" href={`/placement/Student/StudentPage/notifications`}>Notifications</Nav.Item>
        <Nav.Item eventKey="3" href={`/placement/`}>Applications</Nav.Item>
      
          <Nav.Item eventKey="4" href={`/placement/`}>Profile</Nav.Item>
          <Nav.Item eventKey="5" href={`/placement/Student`}>Logout</Nav.Item>
       
       
      </Nav>
      
    </Navbar>
  );
};

const Sidebar = () => {
  const [activeKey, setActiveKey] = React.useState(null);

  return (
    <>
     
      <CustomNavbar appearance="inverse" activeKey={activeKey} onSelect={setActiveKey} />
     
    </>
  );
};

export default Sidebar