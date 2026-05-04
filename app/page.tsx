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
  Globe,
  Truck,
  Star,
  TrendingUp,
  Users
} from "lucide-react";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

// Hero Section
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Clean Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900" />
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-zinc-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-zinc-700/20 rounded-full blur-3xl" />
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-6">
            <span className="px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-400/30 text-yellow-400 text-sm font-medium backdrop-blur-sm">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                Transport Experts sinds 2024
              </span>
            </span>
          </motion.div>

          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
          >
            Eenvoud in{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
              internationaal
            </span>{" "}
            transport
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="text-2xl md:text-3xl text-gray-300 mb-4 font-light"
          >
            Jouw lading, <span className="text-white font-semibold">onze focus</span>
          </motion.p>

          <motion.p 
            variants={fadeInUp}
            className="text-gray-400 text-lg mb-8 max-w-xl"
          >
            Van fiets- en autotransport tot warehousing. 
            Wij bieden alles voor uw transportbehoeften.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="group bg-yellow-500 text-zinc-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 transition-all transform hover:scale-105 flex items-center gap-2"
            >
              Offerte Aanvragen
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/diensten"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all flex items-center gap-2"
            >
              Bekijk Diensten
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div 
            variants={fadeInUp}
            className="flex gap-12 mt-16 pt-8 border-t border-white/10"
          >
            {[
              { value: "15K+", label: "Zendingen/jaar" },
              { value: "99%", label: "Tevreden klanten" },
              { value: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden lg:block relative"
        >
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&q=80" 
              alt="Professioneel transport met vrachtwagen"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/30 via-transparent to-transparent" />
          </div>
          
          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute -bottom-6 -left-6 bg-yellow-500 rounded-2xl p-4 shadow-xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center">
                <Truck className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <p className="text-zinc-900 font-bold text-lg">500+</p>
                <p className="text-zinc-800 text-sm">Tevreden klanten</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      </div>
    </section>
  );
};

// Services Section
const Services = () => {
  const services = [
    {
      icon: Bike,
      title: "Fiets Transport",
      description: "Complete end-to-end logistieke oplossingen voor fietsen van alle merken en maten. Van kleine tot grote zendingen.",
      features: ["Alle fietsmerken", "Verzekerd transport", "Track & trace"],
      image: "https://images.unsplash.com/photo-1571333250630-f0230c320b6d?w=600&q=80",
      color: "amber",
    },
    {
      icon: Car,
      title: "Auto Transport",
      description: "Internationaal autotransport tot 3,5 ton – van kleine auto's tot grote bestelwagens. Veilig en verzekerd.",
      features: ["Tot 3,5 ton", "Dealers & particulieren", "Door heel NL & BE"],
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&q=80",
      color: "yellow",
    },
    {
      icon: Warehouse,
      title: "Warehousing",
      description: "Veilige, strategische en schaalbare opslagoplossingen voor uw goederen met 24/7 monitoring.",
      features: ["24/7 Monitoring", "Korte & lange termijn", "Picking & packing"],
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80",
      color: "amber",
    },
  ];

  return (
    <section className="relative py-32 bg-zinc-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-zinc-900 to-zinc-900" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-yellow-400 font-semibold tracking-wider text-sm uppercase mb-4 block">
            Onze Diensten
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Alles voor uw <span className="text-yellow-400">transport</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Met onze complete logistieke diensten haalt u het beste uit internationaal transport.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href="/diensten" className="group block h-full">
                <div className="h-full bg-zinc-800/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/5 hover:border-yellow-500/30 transition-all hover:bg-zinc-800/80">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'%3E%3Crect fill='%23334155' width='600' height='400'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%2394a3b8' font-family='sans-serif' font-size='20'%3E" + service.title + "%3C/text%3E%3C/svg%3E";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className={`w-12 h-12 rounded-xl bg-yellow-500/90 flex items-center justify-center`}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-zinc-400 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-zinc-300">
                          <CheckCircle2 className="w-4 h-4 text-yellow-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-2 text-yellow-400 font-medium">
                      Meer informatie
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Why Choose Us Section
const WhyChooseUs = () => {
  const features = [
    {
      icon: Globe,
      title: "Internationale dekking",
      description: "Transport door heel Nederland en België met een uitgebreid netwerk van partners.",
    },
    {
      icon: Shield,
      title: "Volledig verzekerd",
      description: "Uw goederen zijn altijd verzekerd tijdens transport, van ophalen tot aflevering.",
    },
    {
      icon: Clock,
      title: "Snelle levertijd",
      description: "24-48 uur levertijd voor de meeste zendingen binnen Nederland en België.",
    },
    {
      icon: TrendingUp,
      title: "Track & Trace",
      description: "Volg uw zendingen realtime via ons tracking systeem, 24/7 beschikbaar.",
    },
    {
      icon: Users,
      title: "Persoonlijke service",
      description: "Dedicated account managers voor zakelijke klanten en persoonlijke ondersteuning.",
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1920&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-zinc-900/90" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-yellow-400 font-semibold tracking-wider text-sm uppercase mb-4 block">
            Waarom wij
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            De beste keuze voor <span className="text-yellow-400">transport</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/5 hover:border-yellow-500/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-zinc-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const Testimonials = () => {
  const testimonials = [
    {
      name: "Teun S.",
      company: "Fietsenwinkel Utrecht",
      text: "Zeer tevreden over het transport van onze fietsen. Snelle levering en goede communicatie.",
      rating: 5,
    },
    {
      name: "Lisa B.",
      company: "Autobedrijf Den Haag",
      text: "Professioneel autotransport voor onze occasions. Alles netjes op tijd geleverd.",
      rating: 5,
    },
    {
      name: "Mark V.",
      company: "Logistiek Partner",
      text: "Betrouwbare partner voor onze transportbehoeften. Aan te bevelen.",
      rating: 5,
    },
  ];

  return (
    <section className="relative py-32 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-yellow-400 font-semibold tracking-wider text-sm uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Wat klanten <span className="text-yellow-400">zeggen</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-zinc-800/50 rounded-2xl p-8 border border-white/5"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-zinc-300 mb-6 leading-relaxed">"{testimonial.text}"</p>
              <div>
                <div className="text-white font-semibold">{testimonial.name}</div>
                <div className="text-zinc-500 text-sm">{testimonial.company}</div>
              </div>
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
    <section className="relative py-32">
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-500/10 via-transparent to-transparent" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Klaar om uw transport te regelen?
          </h2>
          <p className="text-zinc-300 text-lg mb-8 max-w-2xl mx-auto">
            Neem vandaag nog contact met ons op voor een vrijblijvende offerte. 
            Wij staan klaar om u te helpen.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-yellow-500 text-zinc-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 transition-all transform hover:scale-105"
            >
              Offerte Aanvragen
            </Link>
            <Link
              href="/diensten"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all"
            >
              Meer over onze diensten
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Main Page Component
export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </>
  );
}
