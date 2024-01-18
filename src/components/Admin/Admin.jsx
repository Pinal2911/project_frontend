import React from 'react'
import './Admin.css'
import Internship from '../Internship/Internship'
//import StudFeatures from '../StudFeatures/StudFeatures'
import { Link } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'
import AdminPage from '../AdminPage/AdminPage'
import StudentPage from '../StudentPage/StudentPage'

function Admin(props) {
    var pagename="";
    if(props.user == 'Admin'){
        pagename='AdminPage'
    }else if(props.user == 'Company'){
        pagename='CompanyPage'
    }else if(props.user == 'Student'){
        pagename='StudentPage'
    }
    const navigate=useNavigate();
    const navigateTo = ()=>{
        //note change the status of flag after connection with database
        //check whether given username and password are same as that in database
        const flag=true
        if(flag == true){
        navigate(`/internship/${props.user}/${pagename}`);
        console.log({pagename});
        }
        else
        alert("please enter valid details")
    }
  return (
    <div className='body'>
     
    <div className="container">
        <div className="row">
            <div className="col-lg-3 col-md-2"></div>
            <div className="col-lg-6 col-md-8 login-box">
                <div className="col-lg-12 login-key">
                    <i className="fa fa-key" aria-hidden="true"></i>
                </div>
                <div className="col-lg-12 login-title">
                    {props.user}
                </div>

                <div className="col-lg-12 login-form">
                    <div className="col-lg-12 login-form">
                        <form>
                            <div className="form-group">
                                <label className="form-control-label label">USERNAME</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label className="form-control-label label">PASSWORD</label>
                                <input type="password" className="form-control" i/>
                            </div>

                            <div className="col-lg-12 loginbttm">
                                <div className="col-lg-6 login-btm login-text">
                                    
                                </div>
                                <div className="col-lg-6 login-btm login-button">
                                    <button onClick={navigateTo}type="submit" className="btn btn-outline-primary" >
                                    LOGIN</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-3 col-md-2"></div>
            </div>
        </div>
    </div>
   
    </div>
  )
}

export default Admin
