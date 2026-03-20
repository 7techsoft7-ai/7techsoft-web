"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Portfolio() {
  const projects = [
    {
      title: "E-Commerce Platform",
      desc: "A full-featured e-commerce platform with payment integration and inventory management",
      tech: ["Next.js", "React", "Node.js", "MongoDB", "Stripe"],
      image: "🛒",
      gradient: "from-blue-400 to-blue-600",
    },
    {
      title: "Mobile Fitness App",
      desc: "Cross-platform fitness tracking app with social features and personalized recommendations",
      tech: ["React Native", "Firebase", "TypeScript"],
      image: "💪",
      gradient: "from-green-400 to-green-600",
    },
    {
      title: "Real Estate Dashboard",
      desc: "Admin dashboard for property management with analytics and reporting features",
      tech: ["React", "Next.js", "PostgreSQL", "AWS"],
      image: "🏠",
      gradient: "from-purple-400 to-purple-600",
    },
    {
      title: "SaaS Analytics Tool",
      desc: "White-label analytics platform for tracking user behavior and metrics",
      tech: ["Next.js", "TypeScript", "MongoDB", "Redis"],
      image: "📊",
      gradient: "from-orange-400 to-orange-600",
    },
    {
      title: "Healthcare Portal",
      desc: "Patient management system with appointment scheduling and telemedicine features",
      tech: ["React", "Node.js", "PostgreSQL", "Docker"],
      image: "⚕️",
      gradient: "from-red-400 to-red-600",
    },
    {
      title: "AI Content Generator",
      desc: "AI-powered tool for generating marketing content with customization options",
      tech: ["Next.js", "OpenAI API", "Tailwind CSS"],
      image: "🤖",
      gradient: "from-cyan-400 to-cyan-600",
    },
  ];

  return (
    <main className="relative bg-white text-gray-900">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-4 pt-32 pb-20 bg-gradient-to-br from-orange-50 via-white to-blue-50">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-10 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Our <span className="text-orange-600">Portfolio</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Showcase of projects we're proud of
          </motion.p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <div
                  className={`aspect-video bg-gradient-to-br ${project.gradient} flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300`}
                >
                  {project.image}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-orange-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, j) => (
                      <span
                        key={j}
                        className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Want to See More?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Partner with us to build your next amazing project.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-orange-600 rounded-full hover:shadow-2xl transition-all transform hover:scale-105 font-bold"
            >
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
