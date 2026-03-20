"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [mobileMenuOpen]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Technologies", href: "/technologies" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 origin-left z-50"
        style={{ scaleX }}
      />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed w-full top-0 z-40 px-4 pt-5"
      >
        <div className="max-w-7xl mx-auto">
          {/* Gradient border wrapper */}
          <div
            className={`p-[1px] rounded-2xl transition-all duration-500 ${
              scrolled
                ? "bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-orange-500/30"
                : "bg-gradient-to-r from-purple-400/40 via-pink-400/40 to-orange-400/40 animate-gradient-border"
            }`}
          >
            <div
              className={`transition-all duration-500 rounded-2xl px-4 sm:px-6 lg:px-8 backdrop-blur-xl ${
                scrolled
                  ? "bg-white/80 shadow-xl"
                  : "bg-white/70 shadow-2xl shadow-purple-500/10"
              }`}
            >
              <div className="flex justify-between items-center h-20">
                {/* Logo */}
                <Link
                  href="/"
                  className="group relative flex items-center gap-3 hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  {/* Premium Logo Design */}
                  <div className="relative">
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500" />

                    {/* Main logo container */}
                    <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 flex items-center justify-center shadow-lg shadow-purple-500/25 overflow-hidden group-hover:shadow-2xl group-hover:shadow-purple-500/40 transition-all duration-300 group-hover:rotate-6">
                      {/* Animated gradient background */}
                      <motion.div
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute inset-0 bg-gradient-to-br from-pink-400 via-purple-500 to-orange-400 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
                      />

                      {/* Shine effect */}
                      <motion.div
                        animate={{
                          x: [-150, 200],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatDelay: 2,
                          ease: "easeInOut",
                        }}
                        className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 pointer-events-none"
                      />

                      {/* Logo text with shadow */}
                      <div className="text-white font-black text-2xl relative z-10 drop-shadow-lg">
                        7S
                      </div>

                      {/* Inner glow */}
                      <div className="absolute inset-2 rounded-xl bg-white/5 pointer-events-none" />
                    </div>
                  </div>

                  <div className="hidden sm:block">
                    <div className="font-bold text-2xl tracking-tight leading-none text-gray-900 mb-0.5">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 group-hover:from-purple-500 group-hover:via-pink-400 group-hover:to-orange-400 transition-all duration-300">
                        7Tech
                      </span>
                      <span className="text-gray-900 group-hover:text-gray-700 transition-colors">
                        Soft
                      </span>
                    </div>
                    <div className="text-[10px] text-gray-500 tracking-[0.2em] font-semibold uppercase group-hover:text-purple-600 transition-colors duration-300">
                      Digital Studio
                    </div>
                  </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-1">
                  {navItems.map((item, idx) => {
                    const isActive = pathname === item.href;
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          className={`relative block px-4 py-2.5 rounded-xl font-medium transition-all duration-300 group overflow-hidden hover:-translate-y-0.5 ${
                            isActive
                              ? "text-purple-600 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10"
                              : "text-gray-700 hover:text-purple-600"
                          }`}
                        >
                          <span className="relative z-10">{item.name}</span>
                          {/* Glass hover effect */}
                          {!isActive && (
                            <motion.div
                              className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 backdrop-blur-sm pointer-events-none"
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileHover={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.2 }}
                            />
                          )}
                          {/* Shimmer effect on hover */}
                          <motion.div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "100%" }}
                            transition={{ duration: 0.6 }}
                          >
                            <div className="h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                          </motion.div>
                          {/* Active indicator */}
                          {isActive && (
                            <motion.div
                              layoutId="activeNav"
                              className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 pointer-events-none"
                              initial={false}
                              transition={{
                                type: "spring",
                                stiffness: 380,
                                damping: 30,
                              }}
                            />
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {/* CTA Button & Mobile Menu */}
                <div className="flex items-center gap-4">
                  <Link
                    href="/contact"
                    className="hidden lg:block relative group"
                  >
                    <div className="relative px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white rounded-full font-bold text-sm hover:shadow-xl hover:shadow-purple-500/50 transition-all overflow-hidden hover:scale-105 active:scale-95">
                      {/* Animated shine */}
                      <motion.div
                        animate={{
                          x: [-200, 200],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3,
                          ease: "easeInOut",
                        }}
                        className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 pointer-events-none"
                      />
                      <span className="relative z-10 flex items-center gap-2">
                        Get Started
                        <span>→</span>
                      </span>
                    </div>
                  </Link>

                  {/* Mobile Menu Button */}
                  <button
                    className="lg:hidden p-2.5 rounded-xl transition-all hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 text-gray-900 backdrop-blur-sm hover:scale-105 active:scale-95"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {mobileMenuOpen ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      )}
                    </svg>
                  </button>
                </div>
              </div>

              {/* Enhanced Mobile Menu */}
              <AnimatePresence>
                {mobileMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="lg:hidden overflow-hidden"
                  >
                    {/* Glass mobile menu */}
                    <div className="p-[1px] rounded-2xl bg-gradient-to-r from-purple-400/40 via-pink-400/40 to-orange-400/40 mt-2">
                      <motion.div
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        exit={{ y: -20 }}
                        className="py-4 space-y-2 bg-white/80 backdrop-blur-2xl rounded-2xl p-4 shadow-2xl"
                      >
                        {navItems.map((item, idx) => {
                          const isActive = pathname === item.href;
                          return (
                            <motion.div
                              key={item.name}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.05 }}
                            >
                              <Link
                                href={item.href}
                                className={`block px-4 py-3 rounded-xl transition-all font-medium backdrop-blur-sm ${
                                  isActive
                                    ? "bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 text-purple-600"
                                    : "text-gray-700 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 hover:text-purple-600"
                                }`}
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {item.name}
                              </Link>
                            </motion.div>
                          );
                        })}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: navItems.length * 0.05 }}
                        >
                          <Link
                            href="/contact"
                            className="block mx-0 mt-4 px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white rounded-full text-center font-bold shadow-lg shadow-purple-500/50"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            Get Started →
                          </Link>
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
