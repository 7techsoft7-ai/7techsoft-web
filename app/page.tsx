import Link from "next/link";
import { ProgressBar } from "./components/ScrollReveal";
import ScrollytellingSection from "./components/ScrollytellingSection";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import ServicesSection from "./components/ServicesSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import TechnologiesSection from "./components/TechnologiesSection";
import CTASection from "./components/CTASection";

export default function Home() {
  return (
    <main className="relative bg-white text-gray-900 overflow-x-hidden">
      <ProgressBar />
      <HeroSection />
      <StatsSection />
      <ScrollytellingSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <TechnologiesSection />
      <CTASection />

      {/* Modern Footer */}
      <footer className="relative bg-gray-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 py-16">
          {/* Top Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30">
                  <span className="text-white font-black text-xl">7S</span>
                </div>
                <div>
                  <div className="font-bold text-xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                      7Tech
                    </span>
                    <span>Soft</span>
                  </div>
                  <div className="text-[10px] text-gray-500 tracking-widest">
                    DIGITAL STUDIO
                  </div>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Crafting digital experiences that inspire and transform
                businesses worldwide.
              </p>
              <div className="flex gap-3">
                {[
                  {
                    icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
                    label: "Twitter",
                  },
                  {
                    icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
                    label: "Facebook",
                  },
                  {
                    icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z",
                    label: "LinkedIn",
                  },
                ].map((social, idx) => (
                  <button
                    key={idx}
                    className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 rounded-lg flex items-center justify-center transition-all hover:scale-110 group"
                    aria-label={social.label}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d={social.icon} />
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Company
              </h3>
              <ul className="space-y-3">
                {[
                  { name: "About Us", href: "/about" },
                  { name: "Our Team", href: "/about" },
                  { name: "Portfolio", href: "/portfolio" },
                  { name: "Blog", href: "/blog" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-bold text-lg mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">
                Services
              </h3>
              <ul className="space-y-3">
                {[
                  "Web Development",
                  "Mobile Apps",
                  "UI/UX Design",
                  "Cloud Solutions",
                ].map((service) => (
                  <li key={service}>
                    <Link
                      href="/services"
                      className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-400 hover:to-orange-400 transition-all inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-pink-400 to-orange-400 transition-all" />
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-bold text-lg mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">
                Get in Touch
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-400">
                  <svg
                    className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a
                    href="mailto:7techsoft7@gmail.com"
                    className="hover:text-purple-400 transition-colors"
                  >
                    7techsoft7@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <svg
                    className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>+91 9783365925</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <svg
                    className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Delhi, India</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">
                &copy; 2026{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold">
                  7TechSoft
                </span>
                . All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <Link
                  href="/privacy"
                  className="text-gray-500 hover:text-purple-400 transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-gray-500 hover:text-purple-400 transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative gradient at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500" />
      </footer>
    </main>
  );
}
