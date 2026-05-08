"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Truck
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

// Page Header
const PageHeader = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-zinc-900" />
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-900/80 to-zinc-900" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-yellow-400 font-semibold tracking-wider text-sm uppercase mb-4 block">
            Contact
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Neem <span className="text-yellow-400">contact</span> op
          </h1>
          <p className="text-gray-400 text-lg">
            Heeft u vragen of wilt u een vrijblijvende offerte aanvragen? 
            Wij staan voor u klaar.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// Contact Info Cards
const ContactInfo = () => {
  const contacts = [
    {
      icon: Phone,
      title: "Telefoon",
      details: ["+31 6 41326307"],
      description: "Ma-Vr: 08:00 - 18:00",
      link: "tel:+31641326307",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@hgexperts.nl"],
      description: "We reageren binnen 24 uur",
      link: "mailto:info@hgexperts.nl",
    },
    {
      icon: Clock,
      title: "Openingstijden",
      details: ["Ma-Vr: 08:00 - 18:00", "Za: 09:00 - 13:00"],
      description: "Zo: Gesloten",
    },
  ];

  return (
    <section className="relative py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contacts.map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`bg-zinc-800/50 rounded-2xl p-6 border border-white/5 hover:border-yellow-500/30 transition-all ${contact.link ? 'cursor-pointer' : ''}`}
            >
              {contact.link ? (
                <a 
                  href={contact.link} 
                  className="block"
                >
                  <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center mb-4">
                    <contact.icon className="w-6 h-6 text-yellow-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{contact.title}</h3>
                  <div className="space-y-1 mb-3">
                    {contact.details.map((detail, i) => (
                      <p key={i} className="text-gray-300 hover:text-yellow-400 transition-colors">{detail}</p>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500">{contact.description}</p>
                </a>
              ) : (
                <>
                  <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center mb-4">
                    <contact.icon className="w-6 h-6 text-yellow-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{contact.title}</h3>
                  <div className="space-y-1 mb-3">
                    {contact.details.map((detail, i) => (
                      <p key={i} className="text-gray-300">{detail}</p>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500">{contact.description}</p>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Form Section
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState<null | "success" | "error">(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/.netlify/functions/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setShowToast("success");
        setFormData({ name: "", company: "", email: "", phone: "", service: "", message: "" });
        setTimeout(() => setShowToast(null), 5000);
      } else {
        setShowToast("error");
        setTimeout(() => setShowToast(null), 5000);
      }
    } catch (error) {
      console.error("Fout bij versturen:", error);
      setShowToast("error");
      setTimeout(() => setShowToast(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-zinc-800/50 rounded-3xl p-12 text-center border border-white/5"
      >
        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-400" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Bedankt voor uw aanvraag!</h3>
        <p className="text-gray-400 mb-6">
          We hebben uw bericht ontvangen en nemen binnen 24 uur contact met u op.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-yellow-400 hover:text-yellow-300 font-medium"
        >
          Nieuwe aanvraag versturen
        </button>
      </motion.div>
    );
  }

  return (
    <>
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -50, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className={`fixed top-6 right-6 z-[9999] flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl border backdrop-blur-md ${
              showToast === "success"
                ? "bg-green-500/95 border-green-400 text-white"
                : "bg-red-500/95 border-red-400 text-white"
            }`}
          >
            {showToast === "success" ? (
              <>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold">Bericht succesvol verzonden!</p>
                  <p className="text-sm text-white/90">We nemen binnen 24 uur contact op.</p>
                </div>
              </>
            ) : (
              <>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <XCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold">Verzenden mislukt</p>
                  <p className="text-sm text-white/90">Mail naar info@hgexperts.nl of bel ons.</p>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        onSubmit={handleSubmit}
        className="bg-zinc-800/50 rounded-3xl p-8 border border-white/5"
      >
        <h3 className="text-2xl font-bold text-white mb-6">Stuur ons een bericht</h3>
      
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="text-gray-300 text-sm font-medium mb-2 block">
            Naam *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Uw naam"
            className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-500/50 transition-colors"
          />
        </div>
        <div>
          <label className="text-gray-300 text-sm font-medium mb-2 block">
            Bedrijf
          </label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder="Bedrijfsnaam"
            className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-500/50 transition-colors"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="text-gray-300 text-sm font-medium mb-2 block">
            Email *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="uw@email.nl"
            className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-500/50 transition-colors"
          />
        </div>
        <div>
          <label className="text-gray-300 text-sm font-medium mb-2 block">
            Telefoon
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+31 6 12345678"
            className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-500/50 transition-colors"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="text-gray-300 text-sm font-medium mb-2 block">
          Gewenste dienst
        </label>
        <select
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500/50 transition-colors"
        >
          <option value="">Selecteer een dienst</option>
          <option value="fiets">Fiets Transport</option>
          <option value="auto">Auto Transport</option>
          <option value="warehousing">Warehousing</option>
          <option value="combinatie">Combinatie pakket</option>
          <option value="anders">Anders</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="text-gray-300 text-sm font-medium mb-2 block">
          Bericht *
        </label>
        <textarea
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Beschrijf uw transportbehoefte..."
          className="w-full bg-zinc-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-500/50 transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-yellow-500 text-zinc-900 font-bold py-4 rounded-xl hover:bg-yellow-400 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Versturen..." : "Bericht Versturen"}
        {!isSubmitting && <Send className="w-5 h-5" />}
        </button>
      </motion.form>
    </>
  );
};

// Quick Quote Section
const QuickQuote = () => {
  return (
    <div className="bg-gradient-to-br from-zinc-700 to-zinc-800 rounded-3xl p-8 border border-white/10">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
          <Truck className="w-7 h-7 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Direct contact</h3>
          <p className="text-zinc-300 text-sm">Mobiel beschikbaar</p>
        </div>
      </div>
      
      <p className="text-zinc-300 mb-6">
        Voor spoedtransport of directe vragen kunt u ons ook direct bellen of WhatsAppen.
      </p>

      <a
        href="tel:+31641326307"
        className="inline-flex items-center gap-2 bg-yellow-500 text-zinc-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-all"
      >
        <Phone className="w-5 h-5" />
        +31 6 41326307
      </a>

      <div className="mt-8 pt-6 border-t border-white/20">
        <p className="text-white/80 text-sm mb-2">Liever mailen?</p>
        <a 
          href="mailto:info@hgexperts.nl"
          className="text-white font-medium hover:text-gray-300 transition-colors"
        >
          info@hgexperts.nl
        </a>
      </div>
    </div>
  );
};

// FAQ Section
const FAQSection = () => {
  const faqs = [
    {
      question: "Hoe snel kan mijn zending opgehaald worden?",
      answer: "Voor spoedzendingen kunnen we vaak nog dezelfde dag ophalen. Voor reguliere zendingen hanteren we een ophaaltijd binnen 24-48 uur na aanmelding.",
    },
    {
      question: "Zijn mijn goederen verzekerd tijdens transport?",
      answer: "Ja, al onze transporten zijn standaard CMR-verzekerd. Extra verzekering is mogelijk op aanvraag. Neem contact met ons op voor specifieke verzekeringswensen.",
    },
    {
      question: "Kan ik mijn zending volgen?",
      answer: "Absoluut! U ontvangt updates over de status van uw zending. Bij belangrijke mijlpalen ontvangt u automatisch bericht.",
    },
    {
      question: "Leveren jullie ook in het weekend?",
      answer: "Ja, weekendleveringen zijn mogelijk tegen een kleine toeslag. Dit bespreken we graag tijdens het offerte-traject.",
    },
    {
      question: "Wat zijn jullie tarieven?",
      answer: "Onze tarieven zijn afhankelijk van volume, afstand en type goederen. Vraag een vrijblijvende offerte aan voor een exacte prijsopgave.",
    },
  ];

  return (
    <section className="relative py-32 bg-zinc-900">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Veelgestelde <span className="text-yellow-400">vragen</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-zinc-800/50 rounded-2xl p-6 border border-white/5"
            >
              <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
              <p className="text-gray-400">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main Page Component
export default function ContactPage() {
  return (
    <>
      <PageHeader />
      <ContactInfo />
      
      <section className="relative py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <div className="lg:col-span-2">
              <QuickQuote />
              
              {/* Additional Info */}
              <div className="mt-8 bg-zinc-800/50 rounded-3xl p-6 border border-white/5">
                <h4 className="text-white font-semibold mb-4">Noodgeval?</h4>
                <p className="text-gray-400 text-sm mb-4">
                  Voor spoedtransport buiten kantooruren:
                </p>
                <a 
                  href="tel:+31641326307"
                  className="text-yellow-400 font-medium hover:text-yellow-300 transition-colors"
                >
                  +31 6 41326307
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
    </>
  );
}
