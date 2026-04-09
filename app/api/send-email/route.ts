import { Resend } from "resend";
import { data } from "../../data";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { nom, email, telephone, message } = await req.json();

    await resend.emails.send({
      from: data.email,
      to: data.email,
      subject: "Nouvelle demande de devis",
      html: `
        <h1>Nouvelle demande de devis</h1>
        <p><strong>Nom :</strong> ${nom}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${telephone}</p>
        <p><strong>Message :</strong> ${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Erreur Resend:", err);
    return new Response(JSON.stringify({ error: "Erreur lors de l'envoi" }), { status: 500 });
  }
}


