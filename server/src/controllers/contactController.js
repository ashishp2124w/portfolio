import { createTransporter } from '../config/mailer.js';

/**
 * Controller for handling POST /api/contact requests.
 * Validates request payload and sends formatted email notification.
 */
export const sendContactEmail = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // 1. Basic validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields (name, email, subject, message) are required.',
      });
    }

    // Simple email regex format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.',
      });
    }

    const receiverEmail = process.env.RECEIVER_EMAIL || process.env.EMAIL_USER;

    if (!receiverEmail) {
      return res.status(500).json({
        success: false,
        message: 'Server mail configuration incomplete (RECEIVER_EMAIL missing).',
      });
    }

    // 2. Prepare email content
    const mailOptions = {
      from: `"${name} (Portfolio)" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: receiverEmail,
      subject: `[Portfolio Inquiry] ${subject}`,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h2 style="color: #6366f1; margin-top: 0;">New Portfolio Contact Message</h2>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 15px 0;" />
          <p><strong>Sender Name:</strong> ${name}</p>
          <p><strong>Sender Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Subject:</strong> ${subject}</p>
          <h3 style="color: #475569; margin-top: 20px;">Message:</h3>
          <div style="background-color: #f8fafc; padding: 15px; border-radius: 6px; white-space: pre-wrap; font-size: 14px; line-height: 1.6;">${message}</div>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          <p style="font-size: 12px; color: #94a3b8;">Sent via Portfolio Contact Form</p>
        </div>
      `,
    };

    // 3. Send email via transporter
    const transporter = createTransporter();
    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: 'Thank you! Your message has been sent successfully.',
    });
  } catch (error) {
    console.error('Error sending contact email:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to send message due to a server error. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
};
