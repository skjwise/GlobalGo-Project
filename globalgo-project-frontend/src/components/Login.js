import React, { useState } from "react";

import FormCard from "../components/FormCard";
import { login } from "../adapters/API";

const Login = props => {
  const [loginData, setLoginData] = useState({});

  const handleLoginChange = e => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleLoginSubmit = e => {
    console.log(loginData);
    e.preventDefault();
    login(loginData).then(props.onSuccess);
  };

  return (
    <FormCard
      title="Please Login below!"
      button="Login"
      handleSubmit={handleLoginSubmit}
      handleChange={handleLoginChange}
    />
  );
};

export default Login;
