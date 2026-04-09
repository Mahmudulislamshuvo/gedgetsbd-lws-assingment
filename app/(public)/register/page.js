import Logo from "@/components/Logo";
import AlreadyHaveAccount from "@/components/register/AlreadyHaveAccount";
import Privacy from "@/components/register/Privacy";
import RegisterForm from "@/components/register/RegisterForm";
import React from "react";

const Register = () => {
  return (
    <div className="flex flex-col min-h-screen items-center pt-8">
      <Logo />
      <div className="w-full max-w-87.5 p-6 a-box mb-6">
        <h1 className="text-2xl font-normal mb-4">Create account</h1>

        <RegisterForm />

        <Privacy />

        <AlreadyHaveAccount />
      </div>
    </div>
  );
};

export default Register;
