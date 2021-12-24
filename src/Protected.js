import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Login = (props) => {
  let Cmp = props.Cmp;
  let history = useHistory();
  useEffect(() => {
    if (!localStorage.getItem("user-info")) {
      history.push("/register");
    }
  }, [history]);
  return (
    <div>
      <Cmp />
    </div>
  );
};

export default Login;
