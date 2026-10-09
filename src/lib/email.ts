import nodemailer from "nodemailer";

export const CONTACT_RECIPIENT = process.env.CONTACT_EMAIL || "info@spiderhoster.com";

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;

  if (!host || !user || !pass) {
    throw new Error(
      "Configuration SMTP manquante. Veuillez définir SMTP_HOST, SMTP_USER et SMTP_PASSWORD."
    );
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

interface SendEmailOptions {
  subject: string;
  html: string;
  replyTo?: string;
}

export async function sendEmail(options: SendEmailOptions): Promise<void> {
  const transporter = getTransporter();
  await transporter.sendMail({
    from: `"SPIDERHOSTER" <${process.env.SMTP_USER}>`,
    to: CONTACT_RECIPIENT,
    replyTo: options.replyTo,
    subject: options.subject,
    html: options.html,
  });
}