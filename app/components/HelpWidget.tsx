"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, X, ChevronDown, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "Wat zijn de levertijden?",
    answer: "Voor fietsen: 1-2 werkdagen. Voor auto's: 2-5 werkdagen. Express levering mogelijk tegen toeslag."
  },
  {
    question: "Hoe kan ik mijn zending volgen?",
    answer: "U ontvangt een track & trace link zodra uw zending is opgehaald. U kunt realtime de status bekijken."
  },
  {
    question: "Wat kost transport?",
    answer: "Onze tarieven zijn afhankelijk van afstand, volume en type goederen. Vraag een vrijblijvende offerte aan voor exacte prijzen."
  },
  {
    question: "Leveren jullie ook in het weekend?",
    answer: "Ja, weekendleveringen zijn mogelijk tegen een kleine toeslag. Neem contact op voor beschikbaarheid."
  },
  {
    question: "Is mijn zending verzekerd?",
    answer: "Ja, standaard CMR-verzekering is inbegrepen. Extra verzekering mogelijk op aanvraag."
  }
];

export default function HelpWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Floating Help Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-24 right-6 z-40 bg-zinc-700 hover:bg-zinc-600 text-white p-4 rounded-full shadow-2xl transition-all cursor-pointer flex items-center gap-2 group"
      >
        <HelpCircle className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap font-medium">
          Hulp nodig?
        </span>
      </motion.button>

      {/* Help Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />
            
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-x-3 bottom-3 sm:inset-x-auto sm:bottom-36 sm:right-6 sm:w-full sm:max-w-md bg-zinc-800 rounded-3xl shadow-2xl z-50 overflow-hidden border border-white/10 max-h-[85vh] flex flex-col"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-zinc-900 font-bold text-lg">Hulp nodig?</h3>
                    <p className="text-zinc-800 text-sm">Veelgestelde vragen</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5 text-zinc-900" />
                </button>
              </div>

              {/* FAQ List */}
              <div className="p-4 flex-1 overflow-y-auto">
                {faqs.map((faq, index) => (
                  <div key={index} className="mb-2">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between p-4 bg-zinc-700/50 hover:bg-zinc-700 rounded-xl transition-colors text-left"
                    >
                      <span className="text-white font-medium text-sm pr-4">{faq.question}</span>
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="p-4 pt-2 text-zinc-400 text-sm leading-relaxed bg-zinc-700/30 rounded-b-xl">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Contact CTA */}
              <div className="p-4 border-t border-white/10 bg-zinc-700/30">
                <p className="text-zinc-400 text-sm text-center mb-3">
                  Is dit niet wat je zoekt?
                </p>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-zinc-900 py-3 px-4 rounded-xl font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Neem contact op
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
