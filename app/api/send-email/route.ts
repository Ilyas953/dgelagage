import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { nom, email, telephone, message } = await req.json();

    if (!nom || !email || !telephone) {
      return new Response(
        JSON.stringify({ error: "Champs obligatoires manquants" }),
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const result = await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.ADMIN_EMAIL,
      replyTo: email,
      subject: "Nouvelle demande de devis",
      html: `
        <h1>Nouvelle demande de devis</h1>
        <p><strong>Nom :</strong> ${nom}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${telephone}</p>
        <p><strong>Message :</strong> ${message || "Aucun message"}</p>
      `,
    });

    return new Response(
      JSON.stringify({ success: true, id: result.messageId }),
      { status: 200 }
    );
  } catch (err) {
    console.error("Erreur API send-email:", err);
    const message = err instanceof Error ? err.message : "Erreur serveur";
    return new Response(JSON.stringify({ error: message }), { status: 500 });
  }
}


