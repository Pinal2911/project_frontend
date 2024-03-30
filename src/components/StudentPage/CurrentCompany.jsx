import React from 'react'
import Sidebar from './Sidebar'
import Topnav from './Topnav'
import styled from 'styled-components'
function CurrentCompany() {

  const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 20em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;

  return (
    <div>
        
        <Sidebar/>
      
    <Topnav/>
        <GridWrapper>
        <p>This is a paragraph and I am writing on the home page</p>
        <p>This is another paragraph, hi hey hello whatsup yo</p>
      </GridWrapper>
    
        </div>
  )
}

export default CurrentCompany