import LoginForm from "./LoginForm";

const LoginCard = () => {
  return (
    <div className="w-full max-w-87.5 p-6 a-box mb-6">
      <h1 className="text-2xl font-normal mb-4">Sign in</h1>

      <LoginForm />

      <div className="mt-4 text-xs">
        <p>
          By continuing, you agree to Gadgets BD's
          <a href="#" className="text-amazon-blue hover:underline">
            Conditions of Use
          </a>
          and
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
          <i data-lucide="chevron-right" className="w-3 h-3"></i>
          Need help?
        </a>
      </div>
    </div>
  );
};

export default LoginCard;
