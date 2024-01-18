import React from 'react'
import './Register.css'
import { useState } from 'react';
function Register() {
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: ""
      });
    
      const handleInputChange = (event) => {
        /* event.persist(); NO LONGER USED IN v.17*/
        event.preventDefault();
    
        const { name, value } = event.target;
        setValues((values) => ({
          ...values,
          [name]: value
        }));
      };
    
      const [submitted, setSubmitted] = useState(false);
      const [valid, setValid] = useState(false);
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (values.firstName && values.lastName && values.email) {
          setValid(true);
        }
        setSubmitted(true);
      };
    
  return (

    <div className='b'>
         <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted && valid && (
          <div className="success-message">
            <h3>
              {" "}
              Welcome {values.firstName} {values.lastName}{" "}
            </h3>
            <div> Your registration was successful! </div>
          </div>
        )}
        {!valid && (
          <input
            class="form-field input"
            type="text"
            placeholder="First Name"
            name="firstName"
            value={values.firstName}
            onChange={handleInputChange}
          />
        )}

        {submitted && !values.firstName && (
          <span id="first-name-error " className='s'>Please enter a first name</span>

        )}

        {!valid && (
          <input
            class="form-field"
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={values.lastName}
            onChange={handleInputChange}
          />
        )}

        {submitted && !values.lastName && (
          <span id="last-name-error " className='s'>Please enter a last name</span>
        )}

        {!valid && (
          <input
            class="form-field input"
            type="email"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />
        )}

        {submitted && !values.email && (
          <span id="email-error " className='s'>Please enter an email address</span>
        )}
        {!valid && (
          <button className="form-field b" type="submit">
            Register
          </button>
        )}
      </form>
    </div>
    </div>
  )
}

export default Register