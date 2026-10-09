import type { NextApiRequest, NextApiResponse } from "next";
import { sendEmail } from "@/lib/email";

interface ContactRequestBody {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

interface ContactResponse {
  success?: boolean;
  error?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ContactResponse>
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Méthode non autorisée" });
  }

  const { name, email, phone, subject, message } = req.body as ContactRequestBody;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Nom, email et message sont requis." });
  }

  try {
    const html = `
      <h2>Nouveau message de contact — SPIDERHOSTER</h2>
      <p><strong>Nom :</strong> ${name}</p>
      <p><strong>Email :</strong> ${email}</p>
      ${phone ? `<p><strong>Téléphone :</strong> ${phone}</p>` : ""}
      <p><strong>Sujet :</strong> ${subject}</p>
      <p><strong>Message :</strong></p>
      <p>${message.replace(/\n/g, "<br/>")}</p>
    `;

    await sendEmail({
      subject: `[Contact] ${subject} — ${name}`,
      html,
      replyTo: email,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Erreur envoi email contact:", error);
    return res.status(500).json({ error: "Une erreur est survenue lors de l'envoi du message." });
  }
}