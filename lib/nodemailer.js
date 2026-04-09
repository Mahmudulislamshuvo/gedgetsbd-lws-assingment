import nodemailer from "nodemailer";

// const otpCode = Math.floor(100000 + Math.random() * 900000).toString();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendOTP = async (userEmail, otp) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: userEmail,
    subject: "আপনার ভেরিফিকেশন কোড",
    text: `আপনার রেজিস্ট্রেশন কোডটি হলো: ${otp}. এটি 5 মিনিটের জন্য কার্যকর থাকবে।`,
  };

  await transporter.sendMail(mailOptions);
};

export { sendOTP };
