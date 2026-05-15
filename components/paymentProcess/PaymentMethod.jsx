const PaymentMethod = () => {
  return (
    <div class="pb-6">
      <div class="flex items-center mb-6">
        <span class="section-number mr-4">3</span>
        <span class="font-bold text-lg text-amazon-orange">
          Choose a payment method
        </span>
      </div>

      <form
        action="success.html"
        method="POST"
        id="paymentForm"
        class="box p-6 space-y-6 shadow-sm"
      >
        <div class="space-y-4">
          <label class="flex items-start gap-3 p-3 border border-gray-300 rounded-md cursor-pointer hover:bg-amazon-background transition-colors bg-gray-50 border-amazon-orange ring-1 ring-amazon-orange">
            <div>
              <span class="font-bold block text-sm">Credit or Debit Card</span>
              <div class="flex gap-2 mt-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                  class="h-4"
                  alt="Visa"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                  class="h-4"
                  alt="Mastercard"
                />
              </div>
            </div>
          </label>

          <div id="cardInputs" class="pl-8 space-y-4">
            <div>
              <label class="text-xs font-bold block mb-1">Name on card</label>
              <input
                type="text"
                placeholder="John Doe"
                class="w-full max-w-sm px-2 py-1 border border-gray-400 rounded-sm text-sm outline-none focus:ring-1 focus:ring-amazon-blue"
              />
            </div>
            <div class="flex flex-wrap gap-4">
              <div class="flex-1 min-w-[200px]">
                <label class="text-xs font-bold block mb-1">Card number</label>
                <input
                  type="text"
                  placeholder="#### #### #### ####"
                  class="w-full px-2 py-1 border border-gray-400 rounded-sm text-sm outline-none focus:ring-1 focus:ring-amazon-blue"
                />
              </div>
              <div class="w-24">
                <label class="text-xs font-bold block mb-1">CVV</label>
                <input
                  type="password"
                  placeholder="***"
                  class="w-full px-2 py-1 border border-gray-400 rounded-sm text-sm outline-none focus:ring-1 focus:ring-amazon-blue"
                />
              </div>
            </div>
            <div>
              <label class="text-xs font-bold block mb-1">
                Expiration date
              </label>
              <div class="flex gap-2">
                <select class="bg-gray-100 border border-gray-300 rounded p-1 text-xs">
                  <option>01</option>
                  <option>02</option>
                  <option>03</option>
                  <option>04</option>
                  <option>05</option>
                  <option>06</option>
                  <option>07</option>
                  <option>08</option>
                  <option>09</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </select>
                <select class="bg-gray-100 border border-gray-300 rounded p-1 text-xs">
                  <option>2025</option>
                  <option>2026</option>
                  <option>2027</option>
                  <option>2028</option>
                  <option>2029</option>
                  <option>2030</option>
                </select>
              </div>
            </div>
          </div>

          <div class="h-px bg-gray-200"></div>
        </div>
      </form>
    </div>
  );
};

export default PaymentMethod;
