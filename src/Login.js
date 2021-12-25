import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Header } from "./Header";

const Login = (props) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    console.log("Data: ", email, password);
    let item = { email, password };
    let result = await fetch("http://localhost:8000/api/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));    
    history.push("/add");
  };

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/add");
    }
  }, [history]);
  return (
    <div>
      <Header />
      <div className='col-sm-6 offset-sm-3'>
        <h2>Login Page</h2>
        <input
          type='text'
          className='form-control'
          placeholder='Enter your email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type='text'
          className='form-control'
          placeholder='Enter your password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button className='btn btn-primary' onClick={login}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
