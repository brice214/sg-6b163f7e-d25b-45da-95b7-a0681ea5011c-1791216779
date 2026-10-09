import type { NextApiRequest, NextApiResponse } from "next";
import { sendEmail } from "@/lib/email";

interface RecommendationRequestBody {
  email: string;
  planName: string;
  price: number;
  category: string;
  reasons: string[];
  projectType?: string;
  traffic?: string;
}

interface RecommendationResponse {
  success?: boolean;
  error?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RecommendationResponse>
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Méthode non autorisée" });
  }

  const { email, planName, price, category, reasons, projectType, traffic } =
    req.body as RecommendationRequestBody;

  if (!email || !planName) {
    return res.status(400).json({ error: "Email et forfait recommandé requis." });
  }

  try {
    const html = `
      <h2>Nouvelle demande via le Calculateur — SPIDERHOSTER</h2>
      <p><strong>Email du client :</strong> ${email}</p>
      <p><strong>Type de projet :</strong> ${projectType || "Non précisé"}</p>
      <p><strong>Trafic estimé :</strong> ${traffic || "Non précisé"}</p>
      <p><strong>Forfait recommandé :</strong> ${planName} (${category}) — ${price.toLocaleString("fr-FR")} FCFA/mois</p>
      <p><strong>Raisons de la recommandation :</strong></p>
      <ul>${reasons.map((r) => `<li>${r}</li>`).join("")}</ul>
    `;

    await sendEmail({
      subject: `[Calculateur] Nouvelle recommandation pour ${email}`,
      html,
      replyTo: email,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Erreur envoi email recommandation:", error);
    return res.status(500).json({ error: "Une erreur est survenue lors de l'envoi." });
  }
}