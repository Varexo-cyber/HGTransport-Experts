"use client";

import { motion } from "framer-motion";
import { 
  Bike, 
  Car, 
  Warehouse, 
  Package, 
  ArrowRight, 
  CheckCircle2,
  Shield,
  Clock,
  Truck,
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
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-500/10 via-transparent to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-yellow-400 font-semibold tracking-wider text-sm uppercase mb-4 block">
            Onze Diensten
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
            Complete <span className="text-yellow-400">logistieke</span> oplossingen
          </h1>
          <p className="text-zinc-300 text-base sm:text-lg">
            Van fiets- en autotransport tot warehousing. 
            Wij bieden alles voor uw transportbehoeften.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// Main Services Section
const MainServices = () => {
  const services = [
    {
      icon: Bike,
      title: "Fiets Transport",
      subtitle: "Specialist in fietslogistiek",
      description: "Als specialist in fietslogistiek bieden wij complete end-to-end oplossingen voor fietsen van alle merken en maten. Van kleine reparatiezendingen tot grote voorraadleveringen.",
      features: [
        "Alle fietsmerken en types",
        "Volledig verzekerd transport",
        "Track & trace via Routigo portal",
        "Dealer netwerk door NL & BE",
        "Snelle doorlooptijden (24-48h)",
      ],
      image: "https://images.unsplash.com/photo-1571333250630-f0230c320b6d?w=800&q=80",
      color: "cyan",
    },
    {
      icon: Car,
      title: "Auto Transport",
      subtitle: "Veilig en verzekerd",
      description: "Onze autotransport service met BE-combinatie is speciaal ontwikkeld voor het veilig vervoeren van voertuigen tot 3,5 ton. Geschikt voor dealers, lease-maatschappijen en particulieren.",
      features: [
        "BE-combinatie tot 3,5 ton",
        "Personenauto's & bestelwagens",
        "Dealers & particulieren",
        "Deur-tot-deur service",
        "Volledig verzekerd",
        "Schadevrij transport garantie",
      ],
      image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80",
      color: "yellow",
    },
    {
      icon: Warehouse,
      title: "Warehousing",
      subtitle: "Veilige opslagoplossingen",
      description: "Onze moderne warehouse faciliteiten bieden veilige, strategische en schaalbare opslagoplossingen. Met 24/7 beveiliging en monitoring bent u verzekerd van de beste zorg voor uw goederen.",
      features: [
        "24/7 camerabewaking",
        "Korte en lange termijn opslag",
        "Picking & packing services",
        "Voorraadbeheer systeem",
        "Geconditioneerde opslag beschikbaar",
        "Directe koppeling met transport",
      ],
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
      color: "zinc",
    },
  ];

  return (
    <section className="relative py-12 sm:py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="space-y-16 sm:space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Crect fill='%23334155' width='800' height='600'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%2394a3b8' font-family='sans-serif' font-size='24'%3EHG Transport Experts%3C/text%3E%3C/svg%3E";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <div className={`w-16 h-16 rounded-2xl bg-${service.color}-500/90 flex items-center justify-center`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider mb-2 block">
                  {service.subtitle}
                </span>
                <h2 className="text-2xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`inline-flex items-center gap-2 bg-yellow-600 hover:bg-yellow-500 text-white px-6 py-3 rounded-full font-medium transition-all`}
                >
                  Vraag offerte aan
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Process Section
const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Offerte aanvragen",
      description: "Neem contact met ons op via telefoon, e-mail of het contactformulier voor een vrijblijvende offerte.",
    },
    {
      number: "02",
      title: "Afspraken maken",
      description: "Wij plannen samen een ophaalmoment dat bij u past. U ontvangt een bevestiging.",
    },
    {
      number: "03",
      title: "Ophalen & transport",
      description: "Wij halen uw goederen op en verzorgen het transport door Nederland en België.",
    },
    {
      number: "04",
      title: "Afleveren",
      description: "Uw zending wordt netjes en veilig afgeleverd op de afgesproken bestemming.",
    },
  ];

  return (
    <section className="relative py-16 sm:py-32 bg-zinc-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-yellow-400 font-semibold tracking-wider text-sm uppercase mb-4 block">
            Hoe het werkt
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Ons <span className="text-yellow-400">proces</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-zinc-900/60 rounded-2xl p-6 border border-white/5 hover:border-yellow-500/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center mb-4">
                <span className="text-yellow-400 font-bold text-lg">{step.number}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Pricing Section
const PricingSection = () => {
  return (
    <section className="relative py-16 sm:py-32 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-yellow-400 font-semibold tracking-wider text-sm uppercase mb-4 block">
            Tarieven
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Transparante <span className="text-yellow-400">prijzen</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Geen verborgen kosten. Vraag een vrijblijvende offerte aan voor uw specifieke transportbehoefte.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              name: "Standaard",
              price: "Op aanvraag",
              description: "Voor incidentele zendingen",
              features: [
                "Enkele zendingen",
                "Basis verzekering",
                "Track & trace",
                "Email support",
              ],
            },
            {
              name: "Business",
              price: "Op aanvraag",
              description: "Voor regelmatige zendingen",
              features: [
                "Volumekorting",
                "Uitgebreide verzekering",
                "Priority handling",
                "Dedicated support",
                "API toegang",
              ],
              popular: true,
            },
            {
              name: "Enterprise",
              price: "Maatwerk",
              description: "Voor grote volumes",
              features: [
                "Maatwerk oplossingen",
                "Volledige verzekering",
                "Eigen account manager",
                "SLA garanties",
                "Warehouse integratie",
              ],
            },
          ].map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`relative bg-slate-800/50 rounded-3xl p-8 border ${
                plan.popular 
                  ? "border-amber-500/50 shadow-2xl shadow-amber-500/10" 
                  : "border-white/5"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-yellow-500 text-zinc-900 px-4 py-1 rounded-full text-sm font-medium">
                    Meest gekozen
                  </span>
                </div>
              )}
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="text-3xl font-bold text-yellow-400 mb-2">{plan.price}</div>
              <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-yellow-400" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`block text-center py-3 rounded-full font-medium transition-all ${
                  plan.popular
                    ? "bg-zinc-700 hover:bg-yellow-500 hover:text-zinc-900 text-white"
                    : "border border-white/20 hover:bg-white/5 text-white"
                }`}
              >
                Offerte aanvragen
              </Link>
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
    <section className="relative py-16 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-500/10 via-transparent to-transparent" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-400/5 rounded-full blur-2xl" />
      </div>
      
      {/* Floating icons */}
      <motion.div 
        className="absolute top-20 left-[15%] hidden lg:block"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-16 h-16 rounded-2xl bg-zinc-700/50 flex items-center justify-center border border-yellow-500/20">
          <Truck className="w-8 h-8 text-yellow-400" />
        </div>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-20 right-[15%] hidden lg:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-16 h-16 rounded-2xl bg-zinc-700/50 flex items-center justify-center border border-yellow-500/20">
          <Package className="w-8 h-8 text-yellow-400" />
        </div>
      </motion.div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Start met HG Transport
          </h2>
          <p className="text-zinc-300 text-lg mb-8 max-w-2xl mx-auto">
            Ontdek zelf waarom bedrijven ons vertrouwen voor hun transport.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-yellow-500 text-zinc-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 transition-all transform hover:scale-105"
          >
            Neem contact op
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

// Main Page Component
export default function DienstenPage() {
  return (
    <>
      <PageHeader />
      <MainServices />
      <ProcessSection />
      <PricingSection />
      <CTASection />
    </>
  );
}
