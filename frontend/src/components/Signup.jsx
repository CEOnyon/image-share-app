import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";

function SignUp() {
  const [cookies] = useCookies(["cookie-name"]);
  const history = useHistory();
  useEffect(() => {
    if (cookies.jwt) {
      history.push("/");
    }
  }, [cookies, history]);

  const [values, setValues] = useState({ email: "", password: "" });
  const generateError = (error) =>
    toast.error(error, {
      position: "bottom-right",
    });
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:5003/signup",
        {
          ...values,
        },
        { withCredentials: true }
      );
      if (data) {
        if (data.errors) {
          const { email, password } = data.errors;
          if (email) generateError(email);
          else if (password) generateError(password);
        } else {
          history.push("/");
        }
      }
    } catch (ex) {
      console.log(ex);
    }
  };
  return (
    <div className="signup-form"> 
      <form onSubmit={(e) => handleSubmit(e)}>
      <h2>Register Account</h2>
        <div>
          
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
        </div>
        <button type="submit" className="btn btn-dark btn-md btn-block">Register</button>
        <div>
            Already registered <a href="/login">log in?</a>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default SignUp;