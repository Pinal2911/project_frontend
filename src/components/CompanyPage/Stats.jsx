import React from 'react'
import {Container,Content,Carousel,FlexboxGrid} from 'rsuite'
import stat1 from '../../../src/stat1.png'
import stat2 from '../../../src/stat2.png'
import stat3 from '../../../src/stat3.png'
import stat4 from '../../../src/stat4.png'
import stat5 from '../../../src/stat5.png'
import stat6 from '../../../src/stat6.png'
import stat7 from '../../../src/stat7.png'

import Topnav from './Topnav';
import Sidebar from './Sidebar';

function Stats() {
  return (
    <div>
        <Container>
          <Topnav></Topnav>
         
           <Content>  Placement Statistics</Content>
              
               <div>
               <FlexboxGrid justify="center">
                <img src={stat1} height="250" width="500" />
                </FlexboxGrid>
                </div>
                <br></br>
                <div>
                <FlexboxGrid justify="center">
                <img src={stat2} height="250" width="500"/>
                </FlexboxGrid>
                </div>
                <br></br>
                <div>
                <FlexboxGrid justify="center">
                <img src={stat3} height="250"  width="500"/>
                </FlexboxGrid>
                </div>
                <br></br>
                <div>
                <FlexboxGrid justify="center">
                <img src={stat4} height="250"  width="500"/>
                </FlexboxGrid>
                </div>
                <br></br>
                <div>
                <FlexboxGrid justify="center">
                <img src={stat5} height="250"  width="500"/>
                </FlexboxGrid>
                </div>
                <br></br>
                <div>
                <FlexboxGrid justify="center">
                <img src={stat6} height="250"  width="500"/>
                </FlexboxGrid>
                </div>
                <br></br>
                <div>
                <FlexboxGrid justify="center">
                <img src={stat7} height="250"  width="500"/>
                </FlexboxGrid>
                
                </div>
                

        </Container>
     

    </div>
  )
}

export default Stats