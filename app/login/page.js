import CreateAccouuntButton from "@/components/login/CreateAccouuntButton";
import Divider from "@/components/login/Divider";
import LoginCard from "@/components/login/LoginCard";
import Logo from "@/components/Logo";
import React from "react";

const Login = () => {
  return (
    <div className="flex-1 bg-white flex flex-col items-center pt-8 w-full">
      <Logo />
      <LoginCard />
      <Divider />
      <CreateAccouuntButton />
    </div>
  );
};

export default Login;
