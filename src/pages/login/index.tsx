import * as React from "react";
import LoginForm from "../../components/Login";

const Login = (): React.ReactElement => {

  // if user is logged-in, redirect to dashboard
  if(localStorage.getItem('token')){
     window.location.href = "/dashboard";
  }

  // is user is not logged-in, display login form
  return (
    <LoginForm />
  );
};

export default Login;