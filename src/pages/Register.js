import React, { useState } from 'react'
import { Helmet } from 'react-helmet'

const Register = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')
  const [passwordError, setpasswordError] = useState('')
  const [emailError, setemailError] = useState('')

  const handleInputChange = (e) => {
      const {id , value} = e.target;
      if(id === 'firstName'){
        setFirstName(value)
      }
      if(id === 'lastName'){
        setLastName(value)
      }
      if(id === 'email'){
        setEmail(value)
      }
      if(id === 'password'){
        setPassword(value)
      }
      if (id === 'role') {
        setRole(value)
      }
  }

  const options = [
    {
      label: "User",
      value: "user",
    },
    {
      label: "Admin",
      value: "admin",
    }
  ];

  const handleValidation = (event) => {
    let formIsValid = true;

    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      formIsValid = false;
      setemailError("Email Not Valid");
      return false;
    } else {
      setemailError("");
      formIsValid = true;
    }

    if (!password.match(/^[a-zA-Z]{8,22}$/)) {
      formIsValid = false;
      setpasswordError(
        "Only Letters and length must best min 8 Chracters and Max 22 Chracters"
      );
      return false;
    } else {
      setpasswordError("");
      formIsValid = true;
    }

    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(firstName + '\n' + lastName + '\n' + email + '\n' + role)
  };
  return (
    <>
      <Helmet>
        <style>{'body { background-color: #101010; }'}</style>
      </Helmet>
      <div className='mx-[244px] my-[144px]'>
        <div className="row">
            <div className="col-5">
              <form id="loginform" onSubmit={handleSubmit}>
                <div className="form-group my-3">
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    placeholder="First Name"
                    onChange={(e) => setFirstName(e.target.value)}
                    className='rounded-2xl col-12 p-2 bg-slate-600'
                  />
                </div>
                <div className="form-group my-3">
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    placeholder="Last Name"
                    onChange={(e) => setLastName(e.target.value)}
                    className='rounded-2xl col-12 p-2 bg-slate-600'
                  />
                  <small id="emailHelp" className="text-danger form-text">
                    {emailError}
                  </small>
                </div>
                <div className="form-group my-3">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="E-mail"
                    onChange={(e) => setEmail(e.target.value)}
                    className='rounded-2xl col-12 p-2 bg-slate-600'
                  />
                  <small id="emailHelp" className="text-danger form-text">
                    {emailError}
                  </small>
                </div>
                <div className="form-group my-3">
                  <input 
                    type="password" 
                    id="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)} 
                    className='rounded-2xl col-12 p-2 bg-slate-600' 
                  />
                  <small id="passworderror" className="text-danger form-text">
                    {passwordError}
                  </small>
                </div>
                <select style={{
                  color: 'black'
                }} id='role' name='role' onChange={(e) => setRole(e.target.value)} className='col-12 p-2 mt-2 mb-3'>
                  <option value="" disabled selected hidden>Choose your role</option>
                  {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                </select>
                <button type="submit" className="bg-red-400 col-12 rounded-2xl p-2">
                  Submit
                </button>
                <div className='col-12 text-center my-3'>Already had an account?</div>
              </form>
            </div>
        </div>
      </div>
    </>
  )
}

export default Register