import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Header } from "./Header";

const Login = (props) => {
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/add");
    }
  }, [history]);
  return (
    <div>
      <Header />
      <h2>Login Page</h2>
    </div>
  );
};

export default Login;
