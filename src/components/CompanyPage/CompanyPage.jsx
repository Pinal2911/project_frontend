import React from 'react'
import Sidebar from './Sidebar'
import Topnav from './Topnav'
import styled from 'styled-components'
function CompanyPage() {
  const GridWrapper = styled.div`
  
 
  margin-top: 1em;
  margin-left: 15em;
 
  `;
  return (
    <>
    <Sidebar/>
    <GridWrapper>
    <h1>PLACEMENT PROCESS</h1>
    <p>
<p>1. The Placement process commences with “Placement Orientation Session”. It details the objectives of the T&P cell, Institutional polices, Placement Statistics and criteria. An awareness about the placement procedure and general discipline, domain wise sources and preparation tactics is created among the students.</p>
<p>2. The registration of the students to enrol for the on-campus placement commences at the end of the sixth semester of engineering. Students submit the related documents for verification.</p>
<p>3. The T&P Cell invites the companies for placement by sharing the placements reports and other required information.</p>
<p>4. Upon reciept of the profile / job description , eligibility criteria and CTC from the companies, company-registion form is floated among the the studnets for confirming their registarion.</p>
<p>5. Pre-Placement connect is subsequently arrranged for the registered students as per mutual convenience of the institution and the company.</p>
<p>6. The recruitment process is arranged and executed in coordination with T&P cell</p>
<p>7. T&P cell recieves the list of the selected students from the company and formally communicates an acceptance on behalf of students.</p>
    </p>
    </GridWrapper>
    <Topnav/>
    </>
  )
}

export default CompanyPage