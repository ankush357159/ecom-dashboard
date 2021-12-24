import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Header } from "./Header";

const Register = () => {
    const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/add");
    }
  }, [history]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {
    const item = { name, email, password };
    // console.log(item)
    let result = await fetch("http://localhost:8000/api/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    console.log("result:", result);
    localStorage.setItem("user-info", JSON.stringify(result));
    history.push("/add");
  };

  return (
    <>
      <Header />
      <div className='col-sm-6 offset-sm-3'>
        <h2>User Sign Up</h2>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='form-control'
          placeholder='Enter your name'
        />
        <br />
        <input
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='form-control'
          placeholder='Enter your email'
        />
        <br />
        <input
          type='text'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='form-control'
          placeholder='Enter your password'
        />
        <br />
        <button className='btn btn-primary' onClick={signup}>
          Sign up
        </button>
      </div>
    </>
  );
};

export default Register;
