import { Header, Footer } from "../components"
import { data } from "../data"

export default function Page() {
    return (
        <>
        <Header />
        <main className="p-[48px] min-h-screen bg-fond text-black">
            <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-8 mb-8">
                <h1 className="text-3xl font-bold text-second mb-6">Conditions Générales de Services</h1>
                
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-accent mb-4">1. Objet</h2>
                    <p className="mb-4">
                        Les présentes conditions générales régissent les relations entre {data.entreprise} et ses clients pour les services d'elagage et de paysagisme(renovation, taille, elagation).
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-accent mb-4">2. Devis et acceptation</h2>
                    <p className="mb-4">
                        Tout service fait l'objet d'un devis gratuit. L'acceptation du devis implique l'accord sur ces conditions.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-accent mb-4">3. Tarifs et paiement</h2>
                    <p className="mb-4">
                        Les tarifs sont indiqués TTC. Le paiement s'effectue à la livraison des travaux, par chèque, virement ou espèces.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-accent mb-4">4. Délais</h2>
                    <p className="mb-4">
                        Les délais sont indicatifs. {data.entreprise} s'engage à respecter les délais convenus, sauf cas de force majeure.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-accent mb-4">5. Garantie</h2>
                    <p className="mb-4">
                        Les travaux sont garantis 1 an contre les vices cachés. La garantie ne couvre pas l'usure normale ou les dommages causés par le client.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-accent mb-4">6. Responsabilité</h2>
                    <p className="mb-4">
                        Maytec est responsable des dommages causés par ses interventions. Le client est responsable de l'accès au chantier.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-accent mb-4">7. Annulation</h2>
                    <p className="mb-4">
                        L'annulation doit être notifiée 48h à l'avance. En cas d'annulation tardive, 50% du devis est dû.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-accent mb-4">8. Litiges</h2>
                    <p>
                        En cas de litige, une solution amiable sera recherchée. À défaut, les tribunaux français sont compétents.
                    </p>
                </section>
            </div>
        </main>
        <Footer />
        </>
    )
}