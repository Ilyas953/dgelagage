import { Resend } from "resend";
import { data } from "../data";




export const resend = new Resend(process.env.RESEND_API_KEY);
console.log("resend api key:" ,process.env.RESEND_API_KEY)
export async function POST(req: Request) {
  try {
    const { nom, email, telephone, message, page } = await req.json();

    await resend.emails.send({
      from: "",
      to: "contact@may-tec.net",
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
    console.error(err);
    return new Response(JSON.stringify({ error: "Erreur lors de l'envoi" }), { status: 500 });
  }
}