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
      <Navbar.Brand href="#" >Admin Login</Navbar.Brand>
      <Nav onSelect={onSelect} activeKey={activeKey}>
        <Nav.Item eventKey="1" href={`/placement/Admin/AdminPage/editStudent`}>Edit Student</Nav.Item>
        <Nav.Item eventKey="2" href={`/placement/Admin/AdminPage/editCompany`}>Edit Company</Nav.Item>
        <Nav.Item eventKey="3" href={`/placement/Admin/AdminPage/listOfCompanies`}>List of Companies</Nav.Item>
      
          <Nav.Item eventKey="4" href={`/placement/Admin/AdminPage/ppoList`}>PPO</Nav.Item>

          <Nav.Item eventKey="5" href={`/placement/Admin`}>Logout</Nav.Item>
       
       
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