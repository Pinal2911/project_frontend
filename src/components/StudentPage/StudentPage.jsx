import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router
import Topnav from './Topnav';
import Sidebar from './Sidebar';
import {

  MDBContainer,
  MDBRow,
  MDBCol,
} from 'mdb-react-ui-kit';
//import styled from 'styled-components'

export default function StudentPage () {
  // const GridWrapper = styled.div`
  
 
  // margin-top: 1em;
  // margin-left: 15em;
 
  // `;
  return (
    <>
    <Topnav/>
     <Sidebar/>   
     
    
  
    </>
  );
}
