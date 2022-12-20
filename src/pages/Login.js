import React, { useState } from 'react'
import { Helmet } from 'react-helmet'

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [emailError, setemailError] = useState("");

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

  const loginSubmit = (e) => {
    e.preventDefault();
    handleValidation();
  };

  return (
    <>
      <Helmet>
        <style>{'body { background-color: #101010; }'}</style>
      </Helmet>
      <div className='m-[244px]'>
        <div className="row">
            <div className="col-5">
              <form id="loginform" onSubmit={loginSubmit}>
                <div className="form-group my-3">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="E-mail"
                    onChange={(event) => setEmail(event.target.value)}
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
                    onChange={(event) => setPassword(event.target.value)} 
                    className='rounded-2xl col-12 p-2 bg-slate-600' 
                  />
                  <small id="passworderror" className="text-danger form-text">
                    {passwordError}
                  </small>
                </div>
                <button type="submit" className="bg-red-400 col-12 rounded-2xl p-2">
                  Submit
                </button>
                <div className='col-12 text-center my-3'>New User?</div>
              </form>
            </div>
        </div>
      </div>
    </>
  )
}

export default Login