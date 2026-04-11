import { ChevronRight } from "lucide-react";
import LoginForm from "./LoginForm";
import SocialButtons from "../common/SocialButtons";

const LoginCard = () => {
  return (
    <div className="w-full max-w-[350px] p-6 a-box mb-6">
      <h1 className="text-2xl font-normal mb-4">Sign in</h1>

      <div className="pb-5">
        <SocialButtons />
      </div>

      <LoginForm />

      <div className="mt-4 text-xs">
        <p>
          By continuing, you agree to Gadgets BD's{" "}
          <a href="#" className="text-amazon-blue hover:underline">
            Conditions of Use
          </a>{" "}
          and{" "}
          <a href="#" className="text-amazon-blue hover:underline">
            Privacy Notice
          </a>
          .
        </p>
      </div>

      <div className="mt-4">
        <a
          href="#"
          className="text-sm text-amazon-blue hover:text-amazon-orange hover:underline flex items-center gap-1"
        >
          <ChevronRight className="w-3 h-3" />
          Need help?
        </a>
      </div>
    </div>
  );
};

export default LoginCard;
