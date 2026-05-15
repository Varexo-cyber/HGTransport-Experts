"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  Bike,
  Car,
  Warehouse,
  ArrowRight, 
  CheckCircle2,
  Shield,
  Clock,
  Globe,
  Truck,
  TrendingUp,
  Users,
  ChevronLeft,
  ChevronRight,
  Star,
  Quote
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-16 sm:py-32 w-full">
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
                Transport sinds 2018
              </span>
            </span>
          </motion.div>

          <motion.h1 
            variants={fadeInUp}
            className="text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-4 sm:mb-6"
          >
            Eenvoud in{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
              internationaal
            </span>{" "}
            transport
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="text-lg sm:text-2xl md:text-3xl text-gray-300 mb-3 sm:mb-4 font-light"
          >
            Jouw lading, <span className="text-white font-semibold">onze focus</span>
          </motion.p>

          <motion.p 
            variants={fadeInUp}
            className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8 max-w-xl"
          >
            Van fiets- en autotransport tot warehousing. 
            Wij bieden alles voor uw transportbehoeften.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="group bg-yellow-500 text-zinc-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-yellow-400 transition-all transform hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              Offerte Aanvragen
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/diensten"
              className="border-2 border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              Bekijk Diensten
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div 
            variants={fadeInUp}
            className="flex gap-6 sm:gap-12 mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-white/10"
          >
            {[
              { value: "NL & BE", label: "Actief in" },
              { value: "24/7", label: "Bereikbaar" },
              { value: "Sinds 2018", label: "Ervaring" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-2xl sm:text-4xl font-bold text-white">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
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
                <p className="text-zinc-900 font-bold text-lg">CMR</p>
                <p className="text-zinc-800 text-sm">Verzekerd</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      </div>
    </section>
  );
};

// Services Section - Carousel
const Services = () => {
  const services = [
    {
      icon: Bike,
      title: "Fiets Transport",
      description: "Complete end-to-end logistieke oplossingen voor fietsen van alle merken en maten. Van kleine tot grote zendingen.",
      features: ["Alle fietsmerken", "Verzekerd transport", "Track & trace"],
      image: "https://images.unsplash.com/photo-1571333250630-f0230c320b6d?w=600&q=80",
    },
    {
      icon: Car,
      title: "Auto Transport",
      description: "Internationaal autotransport tot 3,5 ton – van kleine auto's tot grote bestelwagens. Veilig en verzekerd.",
      features: ["Tot 3,5 ton", "Dealers & particulieren", "Door heel NL & BE"],
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&q=80",
    },
    {
      icon: Warehouse,
      title: "Warehousing",
      description: "Veilige, strategische en schaalbare opslagoplossingen voor uw goederen met 24/7 monitoring.",
      features: ["24/7 Monitoring", "Korte & lange termijn", "Picking & packing"],
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrent((prev) => (prev + newDirection + services.length) % services.length);
  }, [services.length]);

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 5000);
    return () => clearInterval(timer);
  }, [paginate]);

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 400 : -400, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -400 : 400, opacity: 0, scale: 0.95 }),
  };

  const service = services[current];

  return (
    <section className="relative py-16 sm:py-32 bg-zinc-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-zinc-900 to-zinc-900" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-yellow-400 font-semibold tracking-wider text-sm uppercase mb-4 block">
            Onze Diensten
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Alles voor uw <span className="text-yellow-400">transport</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto">
            Met onze complete logistieke diensten haalt u het beste uit internationaal transport.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Arrow Left */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 md:-translate-x-14 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-zinc-800/80 hover:bg-yellow-500 border border-white/10 hover:border-yellow-400 rounded-full flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Arrow Right */}
          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 md:translate-x-14 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-zinc-800/80 hover:bg-yellow-500 border border-white/10 hover:border-yellow-400 rounded-full flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slide */}
          <div className="overflow-hidden rounded-3xl">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 200, damping: 30, duration: 0.5 }}
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Link href="/diensten" className="group block">
                    <div className="bg-zinc-800/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/5 hover:border-yellow-500/30 transition-all hover:bg-zinc-800/80 md:flex">
                      {/* Image */}
                      <div className="relative md:w-1/2 h-64 md:h-auto overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'%3E%3Crect fill='%23334155' width='600' height='400'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%2394a3b8' font-family='sans-serif' font-size='20'%3E" + service.title + "%3C/text%3E%3C/svg%3E";
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-zinc-900/80 to-transparent" />
                        <div className="absolute bottom-4 left-4">
                          <div className="w-14 h-14 rounded-xl bg-yellow-500/90 flex items-center justify-center shadow-lg shadow-yellow-500/20">
                            <service.icon className="w-7 h-7 text-white" />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-8 md:p-10 md:w-1/2 flex flex-col justify-center">
                        <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-zinc-400 mb-6 leading-relaxed text-lg">
                          {service.description}
                        </p>
                        <ul className="space-y-3 mb-8">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-3 text-zinc-300">
                              <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <div className="flex items-center gap-2 text-yellow-400 font-semibold text-lg">
                          Meer informatie
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > current ? 1 : -1);
                  setCurrent(index);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === current
                    ? "w-8 bg-yellow-400"
                    : "w-2 bg-zinc-600 hover:bg-zinc-500"
                }`}
              />
            ))}
          </div>
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
      description: "Volg uw zending via onze Routigo portal of EasyTrans voor B2B-klanten.",
    },
    {
      icon: Users,
      title: "Persoonlijke service",
      description: "Dedicated account managers voor zakelijke klanten en persoonlijke ondersteuning.",
    },
  ];

  return (
    <section className="relative py-16 sm:py-32 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center sm:bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1920&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-zinc-900/90" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-yellow-400 font-semibold tracking-wider text-sm uppercase mb-4 block">
            Waarom wij
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            De beste keuze voor <span className="text-yellow-400">transport</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
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

// Track Portals Section
const TrackPortalsSection = () => {
  const portals = [
    {
      name: "Routigo",
      audience: "Particuliere klanten",
      description: "Volg uw zending live via onze Routigo klantenportal. Bekijk status, tijden en updates van uw transport.",
      url: "https://app.routigo.com",
      cta: "Volg uw zending",
    },
    {
      name: "EasyTrans",
      audience: "Zakelijke klanten (B2B)",
      description: "Speciale B2B-portal voor onze zakelijke partners. Beheer uw zendingen, opdrachten en facturatie op één plek.",
      url: "https://www.easytrans.com",
      cta: "Open B2B portal",
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
            Klantportalen
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Volg uw <span className="text-yellow-400">zending</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto">
            Houd uw transport realtime in de gaten via onze beveiligde portalen.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {portals.map((portal, index) => (
            <motion.a
              key={index}
              href={portal.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group bg-zinc-900/60 rounded-2xl p-6 sm:p-8 border border-white/5 hover:border-yellow-500/40 transition-all hover:scale-[1.02]"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-yellow-400" />
                </div>
                <span className="text-xs uppercase tracking-wider text-yellow-400 bg-yellow-500/10 px-3 py-1 rounded-full">
                  {portal.audience}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{portal.name}</h3>
              <p className="text-zinc-400 text-sm mb-6 leading-relaxed">{portal.description}</p>
              <div className="inline-flex items-center gap-2 text-yellow-400 font-semibold group-hover:gap-3 transition-all">
                {portal.cta}
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

// Reviews Section (auto-sliding carousel)
const ReviewsSection = () => {
  const reviews = [
    {
      name: "Bram de Wit",
      location: "Amsterdam",
      rating: 5,
      text: "Mijn racefiets binnen één dag van Amsterdam naar Maastricht laten brengen. Goed beschermd vervoerd, geen krasje. Top geregeld!",
    },
    {
      name: "Linda Hofman",
      location: "Rotterdam",
      rating: 5,
      text: "Voor onze webshop laten we regelmatig fietsen ophalen. Communicatie verloopt soepel en de chauffeurs zijn altijd vriendelijk.",
    },
    {
      name: "Yusuf Demir",
      location: "Utrecht",
      rating: 5,
      text: "Auto verkocht via Marktplaats en HG Experts heeft hem keurig naar de koper in België gebracht. Eerlijke prijs, duidelijke afspraken.",
    },
    {
      name: "Aïsha Benali",
      location: "Den Haag",
      rating: 5,
      text: "Snelle reactie op mijn offerteaanvraag en de volgende dag al een ophaalafspraak. Heel fijn als alles soepel loopt.",
    },
    {
      name: "Mohammed El Amrani",
      location: "Eindhoven",
      rating: 5,
      text: "Ik twijfelde tussen meerdere transporteurs maar HG Experts had het beste contact en een eerlijke prijs. Aanrader.",
    },
    {
      name: "Karin van Leeuwen",
      location: "Groningen",
      rating: 5,
      text: "Mijn dochter is naar Antwerpen verhuisd en haar elektrische fiets is netjes daar afgeleverd. Fijne service.",
    },
    {
      name: "Hassan Ouahbi",
      location: "Nijmegen",
      rating: 4,
      text: "Goede ervaring. Levering was iets later dan gepland maar werd netjes gecommuniceerd. Verder prima werk.",
    },
    {
      name: "Priya Sharma",
      location: "Haarlem",
      rating: 5,
      text: "Twee mountainbikes opgehaald voor een evenement. Alles op tijd, goed verzekerd en perfect afgeleverd.",
    },
    {
      name: "Emre Kaya",
      location: "Tilburg",
      rating: 5,
      text: "Voor onze garage verzorgen ze regelmatig autotransporten. Betrouwbaar, professioneel en een vaste partner geworden.",
    },
    {
      name: "Iris de Vries",
      location: "Breda",
      rating: 5,
      text: "Persoonlijk contact, geen gedoe en een eerlijke offerte. Precies waar je naar op zoek bent bij een transporteur.",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [perView, setPerView] = useState(3);

  useEffect(() => {
    const updatePerView = () => {
      if (window.innerWidth < 640) setPerView(1);
      else if (window.innerWidth < 1024) setPerView(2);
      else setPerView(3);
    };
    updatePerView();
    window.addEventListener("resize", updatePerView);
    return () => window.removeEventListener("resize", updatePerView);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(id);
  }, [reviews.length]);

  const visible = Array.from({ length: perView }, (_, i) => reviews[(current + i) % reviews.length]);

  return (
    <section className="relative py-16 sm:py-32 bg-zinc-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-500/5 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-yellow-400 font-semibold tracking-wider text-sm uppercase mb-4 block">
            Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Wat klanten over ons <span className="text-yellow-400">zeggen</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto">
            Echte ervaringen van particulieren en bedrijven die hun transport aan ons toevertrouwden.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((review, i) => (
              <motion.div
                key={`${current}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-zinc-800/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/5 relative"
              >
                <Quote className="absolute top-4 right-4 w-8 h-8 text-yellow-500/20" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, idx) => (
                    <Star
                      key={idx}
                      className={`w-4 h-4 ${idx < review.rating ? "text-yellow-400 fill-yellow-400" : "text-zinc-600"}`}
                    />
                  ))}
                </div>
                <p className="text-zinc-300 mb-6 leading-relaxed text-sm sm:text-base">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center">
                    <span className="text-yellow-400 font-bold text-sm">
                      {review.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{review.name}</div>
                    <div className="text-zinc-500 text-xs">{review.location}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === current ? "w-8 bg-yellow-500" : "w-2 bg-zinc-700 hover:bg-zinc-600"
              }`}
              aria-label={`Ga naar review ${idx + 1}`}
            />
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
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-500/10 via-transparent to-transparent" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
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
      <TrackPortalsSection />
      <ReviewsSection />
      <CTASection />
    </>
  );
}
