const LoginCard = () => {
  return (
    <div class="w-full max-w-87.5 p-6 a-box mb-6">
      <h1 class="text-2xl font-normal mb-4">Sign in</h1>

      <form action="index.html" method="GET" class="space-y-4">
        <div>
          <label for="email" class="block text-sm font-bold mb-1">
            Email or mobile phone number
          </label>
          <input
            type="email"
            id="email"
            required
            class="w-full px-2 py-1.5 border border-gray-400 rounded-sm outline-none focus:ring-1 focus:ring-amazon-secondary focus:border-amazon-secondary"
          />
        </div>

        <div>
          <div class="flex justify-between mb-1">
            <label for="password" class="text-sm font-bold">
              Password
            </label>
            <a
              href="#"
              class="text-sm text-amazon-blue hover:text-amazon-orange hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <input
            type="password"
            id="password"
            required
            class="w-full px-2 py-1.5 border border-gray-400 rounded-sm outline-none focus:ring-1 focus:ring-amazon-secondary focus:border-amazon-secondary"
          />
        </div>

        <button
          type="submit"
          class="w-full py-1.5 a-button-primary text-sm font-medium rounded-sm cursor-pointer"
        >
          Sign in
        </button>
      </form>

      <div class="mt-4 text-xs">
        <p>
          By continuing, you agree to Gadgets BD's
          <a href="#" class="text-amazon-blue hover:underline">
            Conditions of Use
          </a>
          and
          <a href="#" class="text-amazon-blue hover:underline">
            Privacy Notice
          </a>
          .
        </p>
      </div>

      <div class="mt-4">
        <a
          href="#"
          class="text-sm text-amazon-blue hover:text-amazon-orange hover:underline flex items-center gap-1"
        >
          <i data-lucide="chevron-right" class="w-3 h-3"></i>
          Need help?
        </a>
      </div>
    </div>
  );
};

export default LoginCard;
