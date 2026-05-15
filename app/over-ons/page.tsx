"use client";

import { motion } from "framer-motion";
import { 
  Shield,
  Clock,
  Users,
  Award,
  TrendingUp,
  Heart,
  Truck,
  Globe,
  Star
} from "lucide-react";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

// Page Header
const PageHeader = () => {
  return (
    <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-500/10 via-transparent to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-yellow-400 font-semibold tracking-wider text-sm uppercase mb-4 block">
            Over Ons
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
            Transport met <span className="text-yellow-400">passie</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg">
            Al sinds 2018 actief in transport. Sinds 2024 onder de naam HG Experts B.V. 
            uw betrouwbare partner voor fiets- en autotransport in Nederland en België.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// Story Section
const StorySection = () => {
  return (
    <section className="relative py-12 sm:py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-yellow-400 font-semibold tracking-wider text-sm uppercase mb-4 block">
              Ons Verhaal
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
              Van passie voor transport tot marktleider
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Onze oprichter Hakki is al sinds 2018 actief in de transportsector. 
                Met jarenlange ervaring op de weg en een passie voor logistiek werd 
                in 2024 HG Experts B.V. officieel opgericht.
              </p>
              <p>
                Onze specialisatie in fiets- en autotransport ontstond uit een 
                groeiende vraag in de markt. Waar andere transporteurs stopten, 
                zagen wij kansen om het beter te doen — met meer zorg en een 
                persoonlijke aanpak.
              </p>
              <p>
                Wij verzorgen transport voor diverse klanten in Nederland en België. 
                Met onze kernwaarden — kwaliteit, betrouwbaarheid en 
                persoonlijke service — groeien wij gestaag door.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80" 
                alt="HG Transport warehouse"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent" />
            </div>
            
            {/* Stats overlay */}
            <div className="relative sm:absolute sm:-bottom-6 sm:-left-6 sm:right-6 mt-4 sm:mt-0 bg-zinc-800 rounded-2xl p-4 sm:p-6 shadow-2xl">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-yellow-400">2018</div>
                  <div className="text-xs text-gray-400">In transport</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400">NL</div>
                  <div className="text-xs text-gray-400">& België</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400">100%</div>
                  <div className="text-xs text-gray-400">Inzet</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Values Section
const ValuesSection = () => {
  const values = [
    {
      icon: Shield,
      title: "Betrouwbaarheid",
      description: "We doen wat we zeggen. Afspraak is afspraak, altijd.",
    },
    {
      icon: Heart,
      title: "Passie",
      description: "Transport is niet alleen ons werk, het is onze passie.",
    },
    {
      icon: Users,
      title: "Mensgericht",
      description: "We zien onze klanten als partners, niet als nummers.",
    },
    {
      icon: Award,
      title: "Kwaliteit",
      description: "Goed genoeg is nooit goed genoeg. We streven naar excellentie.",
    },
  ];

  return (
    <section className="relative py-16 sm:py-32 bg-zinc-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-yellow-400 font-semibold tracking-wider text-sm uppercase mb-4 block">
            Onze Kernwaarden
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Waar we voor <span className="text-yellow-400">staan</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-yellow-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
              <p className="text-gray-400 text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => {
  return (
    <section className="relative py-16 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-700 to-zinc-800" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-500/10 via-transparent to-transparent" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Wordt ook een tevreden klant
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Ontdek zelf waarom bedrijven kiezen voor HG Experts B.V.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-yellow-500 text-zinc-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 transition-all transform hover:scale-105"
            >
              Offerte aanvragen
            </Link>
            <Link
              href="/diensten"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all"
            >
              Bekijk diensten
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Main Page Component
export default function OverOnsPage() {
  return (
    <>
      <PageHeader />
      <StorySection />
      <ValuesSection />
      <CTASection />
    </>
  );
}
