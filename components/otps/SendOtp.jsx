const sendOtpTemplate = (otp) => {
  return `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 10px; overflow: hidden;">
      <div style="background-color: #4f46e5; padding: 20px; text-align: center;">
        <h1 style="color: #ffffff; margin: 0; font-size: 24px;">ইমেইল ভেরিফিকেশন</h1>
      </div>

      <div style="padding: 30px; background-color: #ffffff;">
        <p style="font-size: 16px; color: #333333;">হ্যালো,</p>
        <p style="font-size: 16px; color: #555555; line-height: 1.6;">
          আমাদের প্ল্যাটফর্মে রেজিস্ট্রেশন করার জন্য আপনাকে ধন্যবাদ। আপনার অ্যাকাউন্টটি ভেরিফাই করতে নিচের ৬ ডিজিটের ওটিপি (OTP) কোডটি ব্যবহার করুন:
        </p>

        <div style="text-align: center; margin: 30px 0;">
          <span style="font-size: 32px; font-weight: bold; color: #4f46e5; letter-spacing: 5px; border: 2px dashed #4f46e5; padding: 10px 20px; border-radius: 5px; background-color: #f9fafb; display: inline-block;">
            ${otp}
          </span>
        </div>

        <p style="font-size: 14px; color: #777777; line-height: 1.6;">
          এই কোডটি আগামী <b>৫ মিনিটের</b> জন্য কার্যকর থাকবে। দয়া করে এই কোডটি কারো সাথে শেয়ার করবেন না।
        </p>

        <hr style="border: 0; border-top: 1px solid #eeeeee; margin: 20px 0;" />

        <p style="font-size: 12px; color: #999999; text-align: center;">
          আপনি যদি এই অনুরোধটি না করে থাকেন, তবে দয়া করে এই ইমেইলটি ইগনোর করুন।
        </p>
      </div>

      <div style="background-color: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #666666;">
        &copy; ${new Date().getFullYear()} Your Company Name. All rights reserved.
      </div>
    </div>
  `;
};

export default sendOtpTemplate;
