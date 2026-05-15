"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

export default function PrivacyPage() {
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
              Privacy <span className="text-yellow-400">Policy</span>
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
            {/* Introduction */}
            <div className="bg-zinc-900/50 rounded-2xl p-8 border border-white/5">
              <h2 className="text-2xl font-bold text-white mb-4">1. Inleiding</h2>
              <p className="text-gray-400 leading-relaxed">
                HG Experts B.V. respecteert uw privacy en zorgt ervoor dat de persoonlijke 
                informatie die u ons verschaft vertrouwelijk wordt behandeld. In deze privacy policy 
                informeren wij u over hoe wij met uw gegevens omgaan.
              </p>
            </div>

            {/* Data Collection */}
            <div className="bg-zinc-900/50 rounded-2xl p-8 border border-white/5">
              <h2 className="text-2xl font-bold text-white mb-4">2. Welke gegevens verzamelen wij?</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Wij verzamelen de volgende persoonsgegevens:
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>• Naam en contactgegevens (e-mailadres, telefoonnummer)</li>
                <li>• Bedrijfsnaam (indien van toepassing)</li>
                <li>• Adresgegevens voor ophalen en afleveren</li>
                <li>• Betalingsinformatie</li>
                <li>• Communicatiegeschiedenis</li>
              </ul>
            </div>

            {/* Purpose */}
            <div className="bg-zinc-900/50 rounded-2xl p-8 border border-white/5">
              <h2 className="text-2xl font-bold text-white mb-4">3. Waarvoor gebruiken wij uw gegevens?</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Wij gebruiken uw persoonsgegevens voor de volgende doeleinden:
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>• Het uitvoeren van transportopdrachten</li>
                <li>• Het versturen van offertes en facturen</li>
                <li>• Communicatie over uw zendingen</li>
                <li>• Het verbeteren van onze dienstverlening</li>
                <li>• Naleving van wettelijke verplichtingen</li>
              </ul>
            </div>

            {/* Storage */}
            <div className="bg-zinc-900/50 rounded-2xl p-8 border border-white/5">
              <h2 className="text-2xl font-bold text-white mb-4">4. Bewaartermijn</h2>
              <p className="text-gray-400 leading-relaxed">
                Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk is voor het 
                doel waarvoor ze zijn verzameld, of zoals vereist door wet- en regelgeving. 
                In de meeste gevallen bewaren wij uw gegevens maximaal 7 jaar na het einde 
                van onze zakelijke relatie.
              </p>
            </div>

            {/* Security */}
            <div className="bg-zinc-900/50 rounded-2xl p-8 border border-white/5">
              <h2 className="text-2xl font-bold text-white mb-4">5. Beveiliging</h2>
              <p className="text-gray-400 leading-relaxed">
                Wij nemen passende technische en organisatorische maatregelen om uw 
                persoonsgegevens te beschermen tegen verlies, misbruik, onbevoegde 
                toegang, openbaarmaking, wijziging en vernietiging. Dit omvat onder andere 
                versleuteling, firewalls en beveiligde servers.
              </p>
            </div>

            {/* Third Parties */}
            <div className="bg-zinc-900/50 rounded-2xl p-8 border border-white/5">
              <h2 className="text-2xl font-bold text-white mb-4">6. Delen met derden</h2>
              <p className="text-gray-400 leading-relaxed">
                Wij verkopen of verhuren uw persoonsgegevens niet aan derden. Wij delen 
                uw gegevens alleen met derden wanneer dit noodzakelijk is voor de uitvoering 
                van onze diensten, zoals transportpartners, of wanneer wij wettelijk 
                verplicht zijn dit te doen.
              </p>
            </div>

            {/* Rights */}
            <div className="bg-zinc-900/50 rounded-2xl p-8 border border-white/5">
              <h2 className="text-2xl font-bold text-white mb-4">7. Uw rechten</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                U heeft de volgende rechten met betrekking tot uw persoonsgegevens:
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>• Recht op inzage in uw gegevens</li>
                <li>• Recht op correctie van onjuiste gegevens</li>
                <li>• Recht op verwijdering van uw gegevens</li>
                <li>• Recht op beperking van de verwerking</li>
                <li>• Recht op gegevensoverdraagbaarheid</li>
                <li>• Recht van bezwaar tegen verwerking</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="bg-zinc-900/50 rounded-2xl p-8 border border-white/5">
              <h2 className="text-2xl font-bold text-white mb-4">8. Contact</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Voor vragen over deze privacy policy of om uw rechten uit te oefenen, 
                kunt u contact met ons opnemen:
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
