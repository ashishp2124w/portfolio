import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Creates and configures the Nodemailer transporter using environment variables.
 * Supports standard Gmail / SMTP configuration.
 */
export const createTransporter = () => {
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;

  if (!emailUser || !emailPass) {
    console.warn(
      '⚠️ Warning: EMAIL_USER or EMAIL_PASS environment variables are missing. Email sending will fail until configured.'
    );
  }

  // Create transporter (Defaulting to Gmail SMTP service)
  // Can be adjusted for generic SMTP using process.env.SMTP_HOST & process.env.SMTP_PORT if needed
  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || 'gmail',
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  });

  return transporter;
};
