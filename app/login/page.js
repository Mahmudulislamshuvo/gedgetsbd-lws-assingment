import CreateAccouuntButton from "@/components/login/CreateAccouuntButton";
import Divider from "@/components/login/Divider";
import LoginForm from "@/components/login/LoginForm";
import Logo from "@/components/Logo";
import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center pt-8">
      <Logo />
      <LoginForm />
      <Divider />
      <CreateAccouuntButton />
    </div>
  );
};

export default Login;
