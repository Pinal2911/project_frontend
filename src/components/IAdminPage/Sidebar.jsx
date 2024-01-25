import React, { useState } from 'react';
import './Sidebar.css';
import {
  MDBIcon,
  MDBCollapse,
  MDBRipple,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';

export default function App() {
  const [showShow, setShowShow] = useState(false);

  const toggleShow = () => setShowShow(!showShow);

  return (
    <>
      <MDBCollapse show={showShow} tag="nav" className="d-lg-block bg-info sidebar ">
        <div className="d-flex mt-10">
          <MDBListGroup flush className="bg-info">
            <MDBRipple rippleTag='span'>
              <MDBListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded rounded bg-info text-white'>
                <MDBIcon fas icon="align-justify me-3" />
              Current Companies
              </MDBListGroupItem>
            </MDBRipple>

            <MDBRipple rippleTag='span'>
              <MDBListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded bg-info text-white' active aria-current='true'>
                <MDBIcon fas icon="university me-3" />
              Upcoming Companies
              </MDBListGroupItem>
            </MDBRipple>

            <MDBRipple rippleTag='span'>
              <MDBListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded bg-info text-white'>
                <MDBIcon fas icon="info me-3" />
               Placed Students
              </MDBListGroupItem>
            </MDBRipple>

            <MDBRipple rippleTag='span'>
              <MDBListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded bg-info text-white'>
                <MDBIcon fas icon="door-open me-3" />
              Unplaced Students
              </MDBListGroupItem>
            </MDBRipple>

          

            <MDBRipple rippleTag='span'>
              <MDBListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded bg-info text-white'>
                <MDBIcon far icon="chart-bar me-3" />
                Statistics
              </MDBListGroupItem>
            </MDBRipple>

            <MDBRipple rippleTag='span'>
              <MDBListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded bg-info text-white'>
                <MDBIcon fas icon="list-ol me-3" />
                Recruitment Process
              </MDBListGroupItem>
            </MDBRipple>

         

            <MDBRipple rippleTag='span'>
              <MDBListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded bg-info text-white'>
                <MDBIcon fas icon="user-edit me-3" />
                Update Profile
              </MDBListGroupItem>
            </MDBRipple>
          </MDBListGroup>
        </div>
      </MDBCollapse>

      
    </>
  );
}