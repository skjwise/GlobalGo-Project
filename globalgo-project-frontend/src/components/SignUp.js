import React, { useState } from "react";
import FormCard from "./FormCard";
import { signUp } from "../adapters/API";

const SignUp = props => {
  const [signupData, setSignupData] = useState({});

  const handleSignupChange = e => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignupSubmit = e => {
    e.preventDefault();
    signUp(signupData).then(props.onSuccess);
  };

  return (
    <FormCard
      title="Please Sign Up below!"
      button="Sign up"
      signUp={true}
      handleSubmit={handleSignupSubmit}
      handleChange={handleSignupChange}
    />
  );
};

export default SignUp;
