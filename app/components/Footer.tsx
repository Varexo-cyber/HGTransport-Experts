"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Truck, ArrowRight, Clock } from "lucide-react";
import Image from "next/image";

const Logo = () => (
  <Link href="/" className="flex items-center gap-3">
    <div className="relative w-28 h-28 sm:w-32 sm:h-32">
      <Image 
        src="/images/logo.png" 
        alt="HG Transport Experts Logo" 
        width={128} 
        height={128}
        className="w-full h-full object-contain"
      />
    </div>
  </Link>
);

export default function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-700">
      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="bg-gradient-to-br from-zinc-800 via-zinc-700 to-zinc-800 rounded-3xl p-8 md:p-12 relative overflow-hidden border border-zinc-600">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-500/10 via-transparent to-transparent" />
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-zinc-500/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
          
          {/* Decorative icons */}
          <div className="absolute top-4 right-20 opacity-10 hidden md:block">
            <Truck className="w-24 h-24 text-yellow-400" />
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Klaar voor transport?
              </h3>
              <p className="text-gray-300">
                Vraag vandaag nog een vrijblijvende offerte aan.
              </p>
            </div>
            <Link
              href="/contact"
              className="bg-yellow-500 text-zinc-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              Offerte Aanvragen
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p className="text-zinc-400 mt-4 text-sm">
              Uw betrouwbare partner voor fiets- en autotransport in Nederland en België. Actief in transport sinds 2018.
            </p>
            <div className="mt-3 text-zinc-500 text-xs">
              <p>HG Experts B.V.</p>
              <p>KVK: 95814426</p>
              <p>BTW: NL867316809B01</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Pagina's</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "Diensten", href: "/diensten" },
                { name: "Over Ons", href: "/over-ons" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-zinc-400 hover:text-white transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Portals */}
          <div>
            <h4 className="text-white font-semibold mb-4">Track & Trace</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://app.routigo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-yellow-400 transition-colors text-sm"
                >
                  Routigo (klanten)
                </a>
              </li>
              <li>
                <a
                  href="https://www.easytrans.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-yellow-400 transition-colors text-sm"
                >
                  EasyTrans (B2B)
                </a>
              </li>
              <li>
                <Link href="/diensten" className="text-zinc-400 hover:text-white transition-colors text-sm">
                  Onze diensten
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+31852502665" className="flex items-center gap-3 text-zinc-400 text-sm hover:text-yellow-400 transition-colors">
                  <Phone className="w-4 h-4 text-yellow-500" />
                  +31 (0)85 - 250 2665
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-zinc-400 text-sm">
                  <Clock className="w-4 h-4 text-yellow-500 mt-0.5" />
                  <div>
                    <div>Ma-Vr: 08:00 - 18:00</div>
                    <div className="text-zinc-500 text-xs">Za-Zo: Gesloten</div>
                  </div>
                </div>
              </li>
              <li>
                <a href="mailto:info@hgexperts.nl" className="flex items-center gap-3 text-zinc-400 text-sm hover:text-yellow-400 transition-colors">
                  <Mail className="w-4 h-4 text-yellow-500" />
                  info@hgexperts.nl
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-xs sm:text-sm text-center">
            © 2026 HG Experts B.V. (KVK: 95814426)
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 items-center">
            <p className="text-zinc-500 text-sm">
              Medemogelijk gemaakt door{" "}
              <a 
                href="https://varexo.nl" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-yellow-500 hover:text-yellow-400 transition-colors font-medium"
              >
                Varexo
              </a>
            </p>
            <Link href="/privacy" className="text-zinc-500 hover:text-white transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/algemene-voorwaarden" className="text-zinc-500 hover:text-white transition-colors text-sm">
              Algemene Voorwaarden
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
