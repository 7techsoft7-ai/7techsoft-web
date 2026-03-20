"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      icon: "💻",
      title: "Web Development",
      desc: "Build responsive, fast, and scalable web applications using modern frameworks and technologies.",
      features: [
        "Next.js & React",
        "Full-Stack Development",
        "E-Commerce Solutions",
        "Progressive Web Apps",
      ],
    },
    {
      icon: "📱",
      title: "Mobile App Development",
      desc: "Create native and cross-platform mobile applications for iOS and Android platforms.",
      features: [
        "React Native",
        "Flutter",
        "iOS & Android Native",
        "App Store Deployment",
      ],
    },
    {
      icon: "☁️",
      title: "Cloud Solutions",
      desc: "Deploy and manage applications on cloud platforms with scalability and security.",
      features: [
        "AWS & Azure",
        "Cloud Migration",
        "DevOps & CI/CD",
        "Server Management",
      ],
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      desc: "Design beautiful, intuitive interfaces that provide exceptional user experiences.",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Design Systems",
      ],
    },
    {
      icon: "🔧",
      title: "Custom Software",
      desc: "Develop tailored software solutions that address your unique business challenges.",
      features: [
        "Business Automation",
        "CRM Systems",
        "Data Integration",
        "API Development",
      ],
    },
    {
      icon: "🔒",
      title: "Security & Maintenance",
      desc: "Keep your applications secure and running smoothly with ongoing support.",
      features: [
        "Security Audits",
        "Performance Optimization",
        "24/7 Monitoring",
        "Technical Support",
      ],
    },
  ];

  return (
    <main className="relative bg-white text-gray-900">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-4 pt-32 pb-20 bg-gradient-to-br from-orange-50 via-white to-blue-50">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Our <span className="text-orange-600">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Comprehensive digital solutions designed to transform your business
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-orange-200 group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-gray-600 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Let's discuss which service is right for your project.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-orange-600 rounded-full hover:shadow-2xl transition-all transform hover:scale-105 font-bold"
            >
              Schedule a Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
