interface RecaptchaVerifyResponse {
  success: boolean;
  "error-codes"?: string[];
}

export async function verifyRecaptcha(token: string | undefined | null): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!secretKey) {
    console.error("RECAPTCHA_SECRET_KEY n'est pas configuré");
    return false;
  }

  if (!token) {
    return false;
  }

  try {
    const params = new URLSearchParams();
    params.append("secret", secretKey);
    params.append("response", token);

    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });

    const data = (await response.json()) as RecaptchaVerifyResponse;
    return data.success === true;
  } catch (error) {
    console.error("Erreur vérification reCAPTCHA:", error);
    return false;
  }
}