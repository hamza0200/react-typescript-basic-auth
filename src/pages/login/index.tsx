import * as React from "react";
import LoginForm from "../../components/Login";

const Login = (): React.ReactElement => {

  if(localStorage.getItem('token')){
     window.location.href = "/dashboard";
  }

  return (
    <LoginForm />
  );
};

export default Login;