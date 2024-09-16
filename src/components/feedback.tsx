export default function Feedback() {
    return (
        <section className="section-feedback py-[42px] lg:py-24 px-6 lg:px-0 bg" id="contact">
            <div className="max-w-[1280px] mx-auto">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="w-full md:w-[350px] lg:w-[550px] rounded-xl text-white ">
                        <div className="font-judson font-bold text-4xl lg:text-6xl mb-6">
                            Votre Avis Compte
                        </div>
                        <div>
                            Vous avez une idée pour faire évoluer l'AAUPE ? Faites-nous part de vos propositions ! Votre contribution est essentielle pour le développement de notre association.
                        </div>
                    </div>
                    <div className="flex-1">
                        <Feedback_Component />
                    </div>
                </div>
            </div>
        </section>
    )
}


function Feedback_Component() {
    return (
        <form action="" className="bg-white w-full p-4 md:p-6 rounded-xl">
            <div className="mb-6">
                <label htmlFor="" className="block w-full px-4">Nom et Prénom*</label>
                <input type="text" className="border block w-full py-2 text-xl px-4 rounded-3xl" name="name" required />
            </div>
            <div className="mb-6">
                <label htmlFor="" className="block w-full px-4">Adresse E-mail*</label>
                <input type="email" className="border block w-full py-2 text-xl px-4 rounded-3xl" name="name" required />
            </div>
            <div className="mb-6">
                <label htmlFor="" className="block w-full px-4">Pays | Ville</label>
                <input type="email" className="border block w-full py-2 text-xl px-4 rounded-3xl" name="name" />
            </div>
            <div className="mb-6">
                <label htmlFor="" className="block w-full px-4">Message *</label>
                <textarea className="w-full p-4 resize-none h-[200px] border rounded-2xl" required></textarea>
            </div>
            <button className="w-full flex justify-center py-3 rounded-xl bg-yellow-400 text-orange-900 font-bold"> Envoyer </button>
        </form>
    )
}