"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

export default function TermsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 bg-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="text-yellow-400 font-semibold tracking-wider text-sm uppercase mb-4 block">
              Juridisch
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Algemene <span className="text-yellow-400">Voorwaarden</span>
            </h1>
            <p className="text-gray-400">
              Laatst bijgewerkt: 11 april 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-20 bg-zinc-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-12"
          >
            {/* Definitions */}
            <div className="bg-zinc-900/50 rounded-2xl p-8 border border-white/5">
              <h2 className="text-2xl font-bold text-white mb-4">Artikel 1 - Definities</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                In deze algemene voorwaarden wordt verstaan onder:
              </p>
              <ul className="space-y-2 text-gray-400">
                <li><strong className="text-white">Opdrachtgever:</strong> De natuurlijke of rechtspersoon die opdracht geeft tot het verrichten van diensten door HG Experts B.V.</li>
                <li><strong className="text-white">Opdrachtnemer:</strong> HG Experts B.V., gevestigd te Rotterdam, ingeschreven bij de Kamer van Koophandel onder nummer 95814426.</li>
                <li><strong className="text-white">Diensten:</strong> Alle werkzaamheden die door de opdrachtnemer worden verricht ten behoeve van de opdrachtgever.</li>
                <li><strong className="text-white">Goederen:</strong> Alle zaken die worden vervoerd of opgeslagen.</li>
                <li><strong className="text-white">Transport:</strong> Het vervoer van goederen door de opdrachtnemer.</li>
              </ul>
            </div>

            {/* Applicability */}
            <div className="bg-zinc-900/50 rounded-2xl p-8 border border-white/5">
              <h2 className="text-2xl font-bold text-white mb-4">Artikel 2 - Toepasselijkheid</h2>
              <p className="text-gray-400 leading-relaxed">
                Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, offertes, 
                overeenkomsten en leveringen van diensten door HG Experts B.V. Afwijkingen 
                van deze voorwaarden zijn slechts geldig indien deze uitdrukkelijk schriftelijk 
                zijn overeengekomen.
              </p>
            </div>

            {/* Quotations */}
            <div className="bg-zinc-900/50 rounded-2xl p-8 border border-white/5">
              <h2 className="text-2xl font-bold text-white mb-4">Artikel 3 - Offertes en aanbiedingen</h2>
              <ul className="space-y-2 text-gray-400">
                <li>• Alle offertes zijn vrijblijvend tenzij anders vermeld.</li>
                <li>• Offertes zijn gebaseerd op de opgegeven informatie door de opdrachtgever.</li>
                <li>• Prijzen in offertes zijn geldig voor 30 dagen na offertedatum.</li>
                <li>• Prijswijzigingen voorbehouden bij wijziging van specificaties of omstandigheden.</li>
              </ul>
            </div>

            {/* Agreement */}
            <div className="bg-zinc-900/50 rounded-2xl p-8 border border-white/5">
              <h2 className="text-2xl font-bold text-white mb-4">Artikel 4 - Totstandkoming overeenkomst</h2>
              <p className="text-gray-400 leading-relaxed">
                De overeenkomst komt tot stand door schriftelijke (digitale) bevestiging van 
                de opdracht door HG Experts B.V., of door feitelijke aanvang van de werkzaamheden. 
                Wijzigingen in de opdracht dienen schriftelijk te worden bevestigd.
              </p>
            </div>

            {/* Transport Conditions */}
            <div className="bg-zinc-900/50 rounded-2xl p-8 border border-white/5">
              <h2 className="text-2xl font-bold text-white mb-4">Artikel 5 - Transportvoorwaarden</h2>
              <ul className="space-y-2 text-gray-400">
                <li>• Opdrachtgever dient goederen geschikt te verpakken voor transport.</li>
                <li>• Gevaarlijke stoffen dienen vooraf te worden gemeld.</li>
                <li>• Laad- en losadres moeten goed bereikbaar zijn voor vrachtwagens.</li>
                <li>• Wachttijden boven 30 minuten worden doorberekend.</li>
                <li>• Transporttijden zijn indicatief en niet fataal, tenzij schriftelijk anders afgesproken.</li>
              </ul>
            </div>

            {/* Liability */}
            <div className="bg-zinc-900/50 rounded-2xl p-8 border border-white/5">
              <h2 className="text-2xl font-bold text-white mb-4">Artikel 6 - Aansprakelijkheid</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                De aansprakelijkheid van HG Experts B.V. is beperkt tot directe schade 
                aan de vervoerde goederen, volgens de wettelijke CMR-aansprakelijkheid, tenzij 
                schriftelijk een hoger bedrag is overeengekomen. Wij zijn niet aansprakelijk voor:
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>• Gevolgschade of indirecte schade</li>
                <li>• Schade door onjuiste of onvolledige informatie van de opdrachtgever</li>
                <li>• Schade door overmacht (wegens omstandigheden buiten onze invloed)</li>
                <li>• Schade aan goederen die ongeschikt waren verpakt</li>
              </ul>
            </div>

            {/* Insurance */}
            <div className="bg-zinc-900/50 rounded-2xl p-8 border border-white/5">
              <h2 className="text-2xl font-bold text-white mb-4">Artikel 7 - Verzekering</h2>
              <p className="text-gray-400 leading-relaxed">
                HG Experts B.V. is verzekerd voor transportrisico's volgens de CMR-verzekering. 
                Voor extra verzekerde waarde kan een toeslag worden berekend. Opdrachtgever dient 
                bijzondere waarde van goederen vooraf te melden.
              </p>
            </div>

            {/* Payment */}
            <div className="bg-zinc-900/50 rounded-2xl p-8 border border-white/5">
              <h2 className="text-2xl font-bold text-white mb-4">Artikel 8 - Betaling</h2>
              <ul className="space-y-2 text-gray-400">
                <li>• Betaling dient te geschieden binnen 14 dagen na factuurdatum.</li>
                <li>• Bij niet-tijdige betaling zijn wij gerechtigd rente en incassokosten in rekening te brengen.</li>
                <li>• Bij wanbetaling kunnen werkzaamheden worden opgeschort.</li>
                <li>• Korting of terugboeking is alleen mogelijk na schriftelijke overeenkomst.</li>
              </ul>
            </div>

            {/* Cancellation */}
            <div className="bg-zinc-900/50 rounded-2xl p-8 border border-white/5">
              <h2 className="text-2xl font-bold text-white mb-4">Artikel 9 - Annulering</h2>
              <p className="text-gray-400 leading-relaxed">
                Annulering van een transportopdracht dient schriftelijk te geschieden. 
                Bij annulering minder dan 24 uur voor het geplande transport wordt 50% 
                van het overeengekomen tarief in rekening gebracht. Bij annulering na 
                aanvang van de werkzaamheden wordt het volledige tarief in rekening gebracht.
              </p>
            </div>

            {/* Complaints */}
            <div className="bg-zinc-900/50 rounded-2xl p-8 border border-white/5">
              <h2 className="text-2xl font-bold text-white mb-4">Artikel 10 - Klachten</h2>
              <p className="text-gray-400 leading-relaxed">
                Klachten over de uitvoering van de overeenkomst moeten schriftelijk 
                worden ingediend binnen 7 dagen na uitvoering van de dienst. Het indienen 
                van een klacht ontheft de opdrachtgever niet van de betalingsverplichting.
              </p>
            </div>

            {/* Disputes */}
            <div className="bg-zinc-900/50 rounded-2xl p-8 border border-white/5">
              <h2 className="text-2xl font-bold text-white mb-4">Artikel 11 - Geschillen</h2>
              <p className="text-gray-400 leading-relaxed">
                Op alle overeenkomsten is het Nederlands recht van toepassing. 
                Geschillen worden voorgelegd aan de bevoegde rechter in Rotterdam, 
                tenzij partijen schriftelijk anders overeenkomen.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-zinc-900/50 rounded-2xl p-8 border border-white/5">
              <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Voor vragen over deze algemene voorwaarden kunt u contact met ons opnemen:
              </p>
              <div className="text-gray-400">
                <p className="font-semibold">HG Experts B.V.</p>
                <p className="mt-2">E-mail: <a href="mailto:info@hgexperts.nl" className="hover:text-yellow-400 transition-colors">info@hgexperts.nl</a></p>
                <p>Telefoon: <a href="tel:+31852502665" className="hover:text-yellow-400 transition-colors">+31 (0)85 - 250 2665</a></p>
                <p className="mt-2">KVK: 95814426</p>
                <p>BTW: NL867316809B01</p>
                <p>RSIN: 867316809</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
