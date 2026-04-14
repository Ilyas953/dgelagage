import type { Metadata } from "next";
import { Header, Footer } from "../components"
import { data } from "../data"

export const metadata: Metadata = {
    title: "Mentions Légales",
    description: `Mentions légales de ${data.entreprise}, élagueur et paysagiste à Viarmes (95760) dans le Val-d'Oise.`,
    alternates: {
        canonical: `${data.url}/mentions-legales`,
    },
    robots: {
        index: false,
        follow: false,
    },
};

export default function Page() {
    return (
        <>
        <Header />
        <main className="p-[48px] min-h-screen bg-fond">
            <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-8 mb-8">
                <h1 className="text-3xl font-bold text-second mb-6">Mentions Légales</h1>
                
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-accent mb-4">1. Informations légales</h2>
                    <p className="mb-4">
                        <strong>Raison sociale :</strong> {data.entreprise}<br />
                        <strong>Forme juridique :</strong> Société<br />
                        <strong>Adresse :</strong> {data.adresse}<br />
                        <strong>Téléphone :</strong>{data.numero}<br />
                        <strong>Email :</strong> {data.email}<br />
                        <strong>Directeur de publication :</strong> {data.name}
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-accent mb-4">2. Hébergement</h2>
                    <p>
                        <strong>Hébergeur :</strong> Vercel Inc.<br />
                        <strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis<br />
                        <strong>Site web :</strong> https://vercel.com
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-accent mb-4">3. Propriété intellectuelle</h2>
                    <p>
                        Le contenu de ce site (textes, images, logos) est la propriété de {data.entreprise}. Toute reproduction est interdite sans autorisation préalable.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-accent mb-4">4. Protection des données</h2>
                    <p>
                        Conformément à la RGPD, les données collectées via le formulaire de contact sont utilisées uniquement pour répondre à vos demandes. Vous pouvez exercer vos droits d'accès, rectification et suppression en nous contactant.
                    </p>
                </section>

                

                <section>
                    <h2 className="text-2xl font-semibold text-accent mb-4">6. Loi applicable</h2>
                    <p>
                        Ces mentions légales sont régies par le droit français. En cas de litige, les tribunaux français sont compétents.
                    </p>
                </section>
            </div>
        </main>
        <Footer />
        </>
    )
}