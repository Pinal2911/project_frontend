import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router
import Topnav from './Topnav';
import Sidebar from './Sidebar';
import {

  MDBContainer,
  MDBRow,
  MDBCol,
} from 'mdb-react-ui-kit';
export default function StudentPage () {
  return (
    <>
   
     <Sidebar/>
     
     <Topnav/>
    </>
  );
}
