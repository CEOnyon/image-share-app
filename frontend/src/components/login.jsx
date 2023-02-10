import React from 'react';

export default function Login() {
  return(
    <div className="login-wrapper">
     Login to Profile
      <form on submit={ handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange = {e => setUserName(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange = {e => setPassword(e.target.value)}/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}


