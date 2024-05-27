import {
  Container,
  Header,
  Content,
  Footer,
  Form,
  ButtonToolbar,
  Button,
  Navbar,
  Panel,
  FlexboxGrid
} from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import './Admin.css';
import React, { useState } from 'react'
import './Admin.css'
import Internship from '../Internship/Internship'
//import StudFeatures from '../StudFeatures/StudFeatures'
import { Link } from 'react-router-dom'
import pictlogo from '../../pictlogo.jfif'
import { useNavigate } from 'react-router-dom'

function Admin(props) {

  const [usernameOrEmail,setUserName]=useState('');
  const [password,setPassword]=useState('');

  const handleUser=(value)=>{
    
    setUserName(value);
    
  }
  const handlePassword=(value)=>{
    setPassword(value);
  }
  
  const navigate=useNavigate();
  const handleSubmit=async(e)=>{
  
    e.preventDefault();
    try{
      const response=await fetch('http://localhost:8080/api/placement/auth/user/login',{

        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({usernameOrEmail,password})

      }
      );
      if(response.ok){
        navigate(`/${role}/${props.user}/${pagename}`)
        
        console.log('login successfull');
      }else{
      
        console.error('login failed');
      }
    }catch(error){
      console.error('Error during login: ',error);
    }
   
  };


  const currentURL=window.location.href
  console.log(currentURL)
  var pagename="";
  var role="";
  if(currentURL == 'http://localhost:3000/internship/admin' ||
  currentURL == 'http://localhost:3000/internship/student' ||
  currentURL == 'http://localhost:3000/internship/company'){
    role='internship'
  if(props.user == 'Admin'){
      pagename='IAdminPage'
  }else if(props.user == 'Company'){
      pagename='ICompanyPage'
  }else if(props.user == 'Student'){
      pagename='IStudentPage'
  }
}else if(currentURL ==  'http://localhost:3000/placement/admin' || 
currentURL == 'http://localhost:3000/placement/student'||
currentURL == 'http://localhost:3000/placement/company'){
  role='placement'
  if(props.user == 'Admin'){
    pagename='AdminPage'
}else if(props.user == 'Company'){
    pagename='CompanyPage'
}else if(props.user == 'Student'){
    pagename='StudentPage'
}
}

return(
  <div className="show-fake-browser login-page">
    <Container >

      <Header>
        <Navbar appearance="inverse">
          <Navbar.Brand>
            <a style={{ color: '#fff' }} className='text-uppercase'>{props.user}</a>
          </Navbar.Brand>
        </Navbar>
      </Header>
      <Content className='top-padding'>
        <FlexboxGrid justify="center">
          <FlexboxGrid.Item colspan={9}>
            <Panel header={<h3>Login</h3>} bordered>
              <Form fluid>
                <Form.Group>
                  <Form.ControlLabel>Username or email address</Form.ControlLabel>
                  <Form.Control  name="usernameOrEmail"  value={usernameOrEmail} onChange={handleUser}/>
                </Form.Group>
                <Form.Group>
                  <Form.ControlLabel>Password</Form.ControlLabel>
                  <Form.Control value={password} onChange={handlePassword}  name="password" type="password" autoComplete="off" />
                </Form.Group>
                <Form.Group>
                  <ButtonToolbar>
                    <Button appearance="primary" onClick={handleSubmit} >Sign in</Button>
                    <Button appearance="link">Forgot password?</Button>
                  </ButtonToolbar>
                </Form.Group>
              </Form>
            </Panel>
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </Content>
      
    </Container>
  </div>

);
}
export default Admin