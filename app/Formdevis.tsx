"use client"
import { Bouton } from "./components"
import { Icon } from "@iconify/react";
import { useState } from "react";


export function ContactForm() {

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const classnamecase =
    "flex flex-col lg:flex-row gap-[10px] border border-white bg-white/25 w-full px-6 py-[15px] text-[20px] font-semibold justify-center items-center rounded-[12px]  pl-14";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoading(true);
  setError("");

  const form = e.currentTarget;

  const formData = new FormData(form);
  const nom = formData.get("nom") as string;
  const email = formData.get("email") as string;
  const telephone = formData.get("telephone") as string;
  const message = formData.get("message") as string;

  // Validation
  if (!nom.trim() || !email.trim() || !telephone.trim()) {
    setError("Veuillez remplir tous les champs obligatoires");
    setLoading(false);
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    setError("Veuillez entrer une adresse email valide");
    setLoading(false);
    return;
  }

  const data = { nom, email, telephone, message };

  try {
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error || "Erreur lors de l'envoi");
    }

    setSuccess(true);
    form.reset();

    // Masquer le message de succès après 5 secondes
    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  } catch (err) {
    console.error(err);
    setError(err instanceof Error ? err.message : "Erreur lors de l'envoi, réessayez plus tard");
  } finally {
    setLoading(false);
  }
};


  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-xl mx-auto p-8 rounded-xl">

      {/* NOM */}
      <div className="relative w-full">
        <Icon icon="material-symbols:person" width={24} className="absolute left-5 top-1/2 -translate-y-1/2 text-white" />
        <input type="text" name="nom" placeholder="Nom" required className={classnamecase} />
      </div>

      {/* EMAIL */}
      <div className="relative w-full">
        <Icon icon="material-symbols:mail" width={24} className="absolute left-5 top-1/2 -translate-y-1/2 text-white" />
        <input type="email" name="email" placeholder="Email" required className={classnamecase} />
      </div>

      {/* TELEPHONE */}
      <div className="relative w-full">
        <Icon icon="material-symbols:call" width={24} className="absolute left-5 top-1/2 -translate-y-1/2 text-white" />
        <input type="tel" name="telephone" placeholder="Téléphone" required className={classnamecase} />
      </div>

      {/* MESSAGE */}
      <div className="relative w-full">
        <Icon icon="material-symbols:chat" width={24} className="absolute left-5 top-6 text-white" />
        <textarea name="message" placeholder="Décrivez votre besoin" className={`${classnamecase} h-[231px]`} />
      </div>

      <Bouton className="justify-center  bg-gradient-to-b border border-white drop-shadow-lg drop-shadow-white from-accent to-accent">
        <button type="submit" disabled={loading}>
          {loading ? "Envoi..." : "obtenir un devis"}
        </button>
      </Bouton>

      {error && <p className="text-red-500 mt-2 text-center font-semibold text-[20px]">{error}</p>}
      {success && <p className="text-green-500 mt-2 text-center font-semibold text-[24px]">✓ Demande envoyée avec succès !</p>}
    </form>
  );
}
