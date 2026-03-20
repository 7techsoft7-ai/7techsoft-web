"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function TechnologiesSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All", icon: "🚀" },
    { id: "frontend", label: "Frontend", icon: "🎨" },
    { id: "backend", label: "Backend", icon: "⚙️" },
    { id: "mobile", label: "Mobile", icon: "📱" },
    { id: "cloud", label: "Cloud", icon: "☁️" },
  ];

  const technologies = [
    {
      name: "React",
      category: "frontend",
      gradient: "from-cyan-400 to-blue-500",
      icon: "⚛️",
      description: "UI Library",
    },
    {
      name: "Next.js",
      category: "frontend",
      gradient: "from-gray-700 to-gray-900",
      icon: "▲",
      description: "React Framework",
    },
    {
      name: "TypeScript",
      category: "frontend",
      gradient: "from-blue-500 to-blue-700",
      icon: "TS",
      description: "Type Safety",
    },
    {
      name: "Tailwind CSS",
      category: "frontend",
      gradient: "from-cyan-400 to-blue-500",
      icon: "🎨",
      description: "CSS Framework",
    },
    {
      name: "Node.js",
      category: "backend",
      gradient: "from-green-500 to-emerald-700",
      icon: "🟢",
      description: "Runtime",
    },
    {
      name: "Python",
      category: "backend",
      gradient: "from-yellow-400 to-blue-600",
      icon: "🐍",
      description: "Programming",
    },
    {
      name: "Express",
      category: "backend",
      gradient: "from-gray-600 to-gray-800",
      icon: "🚂",
      description: "Web Framework",
    },
    {
      name: "MongoDB",
      category: "backend",
      gradient: "from-green-500 to-green-700",
      icon: "🍃",
      description: "NoSQL Database",
    },
    {
      name: "PostgreSQL",
      category: "backend",
      gradient: "from-blue-600 to-indigo-700",
      icon: "🐘",
      description: "SQL Database",
    },
    {
      name: "React Native",
      category: "mobile",
      gradient: "from-purple-500 to-pink-600",
      icon: "📱",
      description: "Mobile Framework",
    },
    {
      name: "Flutter",
      category: "mobile",
      gradient: "from-blue-400 to-cyan-500",
      icon: "🦋",
      description: "Mobile SDK",
    },
    {
      name: "AWS",
      category: "cloud",
      gradient: "from-orange-500 to-orange-700",
      icon: "☁️",
      description: "Cloud Platform",
    },
    {
      name: "Docker",
      category: "cloud",
      gradient: "from-blue-500 to-blue-700",
      icon: "🐳",
      description: "Containerization",
    },
    {
      name: "Firebase",
      category: "cloud",
      gradient: "from-yellow-500 to-orange-600",
      icon: "🔥",
      description: "Backend Service",
    },
    {
      name: "GraphQL",
      category: "backend",
      gradient: "from-pink-500 to-purple-600",
      icon: "◈",
      description: "API Query",
    },
    {
      name: "Redux",
      category: "frontend",
      gradient: "from-purple-600 to-purple-800",
      icon: "🔄",
      description: "State Manager",
    },
  ];

  const filteredTechs =
    activeCategory === "all"
      ? technologies
      : technologies.filter((tech) => tech.category === activeCategory);

  return (
    <section className="relative py-32 bg-gradient-to-br from-gray-50 via-white to-purple-50/30 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-1/4 -right-1/4 w-96 h-96 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-1/4 -left-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/40 to-purple-200/40 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-6">
            <span className="text-2xl">⚡</span>
            <span className="text-sm font-semibold text-purple-900">
              Our Tech Stack
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gray-900">Powered by</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500">
              Cutting-Edge
            </span>
            <br />
            <span className="text-gray-900">Technologies</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We leverage the most advanced and reliable technologies to build
            scalable, performant, and future-proof solutions.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white shadow-lg shadow-purple-500/30 scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-purple-300"
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Technologies Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16"
        >
          {filteredTechs.map((tech, index) => (
            <motion.div
              key={tech.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-purple-200 overflow-hidden">
                {/* Gradient background on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}
                />

                {/* Icon */}
                <div className="relative mb-4">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tech.gradient} flex items-center justify-center text-2xl font-bold text-white shadow-lg mb-3 group-hover:scale-110 transition-transform`}
                  >
                    {tech.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-gray-500">{tech.description}</p>
                </div>

                {/* Hover effect line */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${tech.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}
                />
              </div>

              {/* Floating glow effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl -z-10 transition-opacity`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 rounded-3xl p-12 overflow-hidden"
        >
          {/* Pattern overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />

          <div className="relative grid md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
                className="text-6xl font-black mb-2"
              >
                16+
              </motion.div>
              <div className="text-xl font-semibold text-white/90">
                Technologies
              </div>
              <div className="text-sm text-white/70 mt-1">
                Latest & Greatest
              </div>
            </div>

            <div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-6xl font-black mb-2"
              >
                100%
              </motion.div>
              <div className="text-xl font-semibold text-white/90">
                Up to Date
              </div>
              <div className="text-sm text-white/70 mt-1">Always Current</div>
            </div>

            <div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-6xl font-black mb-2"
              >
                24/7
              </motion.div>
              <div className="text-xl font-semibold text-white/90">
                Best Practices
              </div>
              <div className="text-sm text-white/70 mt-1">
                Industry Standards
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
