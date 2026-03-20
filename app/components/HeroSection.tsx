"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const particlesConfig = Array.from({ length: 20 }, () => ({
  duration: 3 + Math.random() * 2,
  delay: Math.random() * 2,
  left: Math.random() * 100,
  top: 50 + Math.random() * 50,
}));

export default function HeroSection() {
  const { scrollY } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-24 overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-950 to-pink-950">
      {/* Rich Background with Images */}
      <div className="absolute inset-0 -z-10">
        {/* Background Image Layer */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-background.jpg"
            alt="Technology Background"
            fill
            className="object-cover opacity-50"
            priority
          />
          {/* Strong dark overlay for text visibility */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/95 via-purple-900/90 to-pink-900/95" />
        </div>

        {/* Floating Abstract Shapes */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-3xl backdrop-blur-sm"
        />
        <motion.div
          animate={{
            y: [0, 40, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-40 right-20 w-60 h-60 bg-gradient-to-br from-pink-400/15 to-purple-500/15 rounded-full backdrop-blur-sm"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 left-1/4 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-2xl backdrop-blur-sm"
        />

        {/* Glowing Lines - Accent Elements */}
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scaleX: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
        />
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scaleX: [1, 1.1, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-1/3 right-0 w-1/4 h-px bg-gradient-to-l from-transparent via-pink-400/60 to-transparent"
        />

        {/* Animated gradient orbs with mouse parallax */}
        <motion.div
          animate={{
            x: mousePosition.x / 60,
            y: mousePosition.y / 60,
            scale: [1, 1.2, 1],
          }}
          transition={{
            x: { type: "spring", stiffness: 50 },
            y: { type: "spring", stiffness: 50 },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-40"
        />
        <motion.div
          animate={{
            x: -mousePosition.x / 60,
            y: -mousePosition.y / 60,
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            x: { type: "spring", stiffness: 50 },
            y: { type: "spring", stiffness: 50 },
            scale: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl opacity-40"
        />

        {/* Floating particles/dots */}
        {particlesConfig.map((particle, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
          />
        ))}

        {/* Floating Tech Icons */}
        {["⚛️", "💻", "🎨", "📱", "☁️", "🔧", "🚀", "💡"].map((icon, i) => (
          <motion.div
            key={`icon-${i}`}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 15, -15, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 8 + i * 1.5,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
            className="absolute text-3xl md:text-4xl filter blur-[0.5px] opacity-30 hidden md:block"
            style={{
              left: `${10 + i * 11}%`,
              top: `${15 + (i % 3) * 25}%`,
            }}
          >
            {icon}
          </motion.div>
        ))}

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />
      </div>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto w-full z-10">
        <motion.div
          style={{ opacity: heroOpacity }}
          className="text-center space-y-8 max-w-5xl mx-auto"
        >
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-6xl md:text-8xl font-black leading-[1.1]"
          >
            <span className="block text-white drop-shadow-lg">
              Transform Your
            </span>
            <span className="block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-pink-300 to-purple-300 animate-gradient drop-shadow-2xl">
                Digital Vision
              </span>
            </span>
            <span className="block text-5xl md:text-6xl mt-4 font-medium text-white drop-shadow-lg">
              Into Reality
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-white leading-relaxed max-w-3xl mx-auto font-light drop-shadow-md"
          >
            We create exceptional digital experiences through cutting-edge web &
            mobile development, stunning design, and innovative solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/portfolio"
                className="px-8 py-4 border-2 border-white/40 backdrop-blur-xl bg-white/5 text-white rounded-full hover:bg-white/10 hover:border-white/60 transition-all font-bold text-lg"
              >
                Explore Our Work
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto"
          >
            {[
              { value: "500+", label: "Projects Delivered" },
              { value: "250+", label: "Happy Clients" },
              { value: "15+", label: "Years Experience" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.2 + idx * 0.1, type: "spring" }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-pink-300 drop-shadow-lg">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-white mt-2 font-medium drop-shadow-md">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white drop-shadow-lg"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Floating Visual Cards */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top Left Card */}
        <motion.div
          initial={{ opacity: 0, x: -100, y: -100 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute top-32 left-10 hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-48 h-48 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm"
          >
            <Image
              src="/images/card-team.jpg"
              alt="Design"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/40 to-pink-500/40" />
          </motion.div>
        </motion.div>

        {/* Top Right Card */}
        <motion.div
          initial={{ opacity: 0, x: 100, y: -100 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute top-40 right-16 hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="w-56 h-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm"
          >
            <Image
              src="/images/card-coding.jpg"
              alt="Team"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/40 to-blue-500/40" />
          </motion.div>
        </motion.div>

        {/* Bottom Left Card */}
        <motion.div
          initial={{ opacity: 0, x: -100, y: 100 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="absolute bottom-32 left-20 hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, -3, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="w-44 h-44 rounded-full overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm"
          >
            <Image
              src="/images/card-design.jpg"
              alt="Development"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/40 to-red-500/40" />
          </motion.div>
        </motion.div>

        {/* Bottom Right Card */}
        <motion.div
          initial={{ opacity: 0, x: 100, y: 100 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="absolute bottom-40 right-12 hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, 15, 0], rotate: [0, 3, 0] }}
            transition={{
              duration: 6.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-40 h-40 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm"
          >
            <Image
              src="/images/card-data.jpg"
              alt="Innovation"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/40 to-emerald-500/40" />
          </motion.div>
        </motion.div>

        {/* Animated Icons/Badges */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 360],
          }}
          transition={{
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          }}
          className="absolute top-1/4 left-1/3 hidden md:block"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-2xl flex items-center justify-center text-3xl backdrop-blur-sm border-2 border-white/30">
            ⚡
          </div>
        </motion.div>

        <motion.div
          animate={{
            y: [0, 10, 0],
            rotate: [360, 0],
          }}
          transition={{
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          }}
          className="absolute bottom-1/3 right-1/4 hidden md:block"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full shadow-2xl flex items-center justify-center text-4xl backdrop-blur-sm border-2 border-white/30">
            🚀
          </div>
        </motion.div>

        <motion.div
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-2/3 left-1/4 hidden md:block"
        >
          <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl shadow-2xl flex items-center justify-center text-2xl backdrop-blur-sm border-2 border-white/30">
            💡
          </div>
        </motion.div>
      </div>
    </section>
  );
}
