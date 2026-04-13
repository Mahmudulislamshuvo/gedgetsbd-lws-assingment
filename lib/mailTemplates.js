export function passwordResetTemplate(resetLink) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto; border: 1px solid #eaeaea; border-radius: 12px; overflow: hidden;">
      <div style="background: #0f172a; color: #ffffff; padding: 20px 24px; font-size: 20px; font-weight: bold;">
        Password Reset Request
      </div>
      <div style="padding: 24px; color: #111827; line-height: 1.6;">
        <p>You requested to reset your password.</p>
        <p>This link is valid for 1 hour. If you did not request this, you can ignore this email.</p>
        <p style="margin: 24px 0;">
          <a href="${resetLink}" style="display: inline-block; background: #f59e0b; color: #111827; text-decoration: none; font-weight: 700; padding: 12px 18px; border-radius: 8px;">Reset Password</a>
        </p>
        <p>If the button does not work, paste this URL in your browser:</p>
        <p style="word-break: break-all; color: #0369a1;">${resetLink}</p>
      </div>
    </div>
  `;
}
