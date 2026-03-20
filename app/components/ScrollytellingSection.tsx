"use client";

import { motion } from "framer-motion";

export default function ScrollytellingSection() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Research",
      description:
        "We dive deep into understanding your business, target audience, and project goals through detailed research and analysis.",
      icon: "🔍",
      gradient: "from-blue-500 to-cyan-500",
      features: [
        "Requirements Analysis",
        "Market Research",
        "Competitor Analysis",
        "Project Roadmap",
      ],
    },
    {
      number: "02",
      title: "Strategy & Planning",
      description:
        "We create a comprehensive strategy and technical architecture with defined milestones to ensure successful delivery.",
      icon: "📋",
      gradient: "from-purple-500 to-indigo-500",
      features: [
        "Technical Architecture",
        "Timeline Planning",
        "Resource Allocation",
        "Risk Assessment",
      ],
    },
    {
      number: "03",
      title: "Design & Prototyping",
      description:
        "Our designers craft beautiful, intuitive interfaces with interactive prototypes for validation before development.",
      icon: "🎨",
      gradient: "from-pink-500 to-rose-500",
      features: [
        "UI/UX Design",
        "Interactive Prototypes",
        "Design System",
        "User Testing",
      ],
    },
    {
      number: "04",
      title: "Development & Testing",
      description:
        "Expert developers bring designs to life with clean, scalable code following agile methodologies and continuous testing.",
      icon: "⚡",
      gradient: "from-orange-500 to-amber-500",
      features: [
        "Agile Development",
        "Code Reviews",
        "Quality Assurance",
        "Performance Testing",
      ],
    },
    {
      number: "05",
      title: "Launch & Support",
      description:
        "We ensure a smooth deployment with comprehensive training and provide ongoing support to keep your solution optimal.",
      icon: "🚀",
      gradient: "from-green-500 to-emerald-500",
      features: [
        "Deployment",
        "Team Training",
        "24/7 Support",
        "Regular Updates",
      ],
    },
  ];

  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-white to-pink-50/50" />

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-6">
            <span className="text-2xl">🎯</span>
            <span className="text-sm font-semibold text-purple-900">
              Our Process
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gray-900">How We</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500">
              Bring Ideas to Life
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven 5-step process ensures your project is delivered on time,
            within budget, and exceeds expectations.
          </p>
        </motion.div>

        {/* Process Steps - Grid Layout */}
        <div className="space-y-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 items-center`}
            >
              {/* Icon and Number Circle */}
              <div className="relative flex-shrink-0">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`relative w-48 h-48 rounded-full bg-gradient-to-br ${step.gradient} flex flex-col items-center justify-center shadow-2xl`}
                >
                  {/* Number */}
                  <div className="absolute -top-6 -right-6 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-gray-100">
                    <span
                      className={`text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r ${step.gradient}`}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="text-7xl mb-2 filter drop-shadow-lg">
                    {step.icon}
                  </div>

                  {/* Glow effect */}
                  <div
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.gradient} opacity-40 blur-2xl -z-10`}
                  />
                </motion.div>
              </div>

              {/* Content Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex-1 bg-white rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all border border-gray-100"
              >
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>

                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {step.description}
                </p>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {step.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * idx }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 group"
                    >
                      <div
                        className={`w-3 h-3 rounded-full bg-gradient-to-r ${step.gradient} group-hover:scale-125 transition-transform`}
                      />
                      <span className="text-gray-700 font-medium">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className={`h-1 bg-gradient-to-r ${step.gradient} mt-6 rounded-full`}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105"
            >
              Start Your Project
            </a>
            <a
              href="/portfolio"
              className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-900 rounded-2xl font-bold text-lg hover:border-purple-500 hover:text-purple-600 transition-all hover:shadow-lg"
            >
              View Case Studies
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
