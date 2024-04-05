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
              <MDBListGroupItem tag='a' href={`/placement/Company/CompanyPage/updateProcess`} action className='border-0 border-bottom rounded rounded bg-info text-white'>
                <MDBIcon fas icon="align-justify me-3" />
             Update Process
              </MDBListGroupItem>
            </MDBRipple>

            <MDBRipple rippleTag='span'>
              <MDBListGroupItem tag='a' href={`/placement/Company/CompanyPage/updateNotification`} action className='border-0 border-bottom rounded bg-info text-white'>
                <MDBIcon fas icon="list-ol me-3" />
              Update Notification
              </MDBListGroupItem>
            </MDBRipple>

         

            <MDBRipple rippleTag='span'>
              <MDBListGroupItem tag='a' href={`/placement/Company/CompanyPage/updateProfile`} action className='border-0 border-bottom rounded bg-info text-white'>
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