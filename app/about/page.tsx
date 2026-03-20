"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
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
            About <span className="text-orange-600">7TechSoft</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Transforming ideas into digital reality since day one
          </motion.p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="text-orange-600">Mission</span>
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                At 7TechSoft, we believe in the power of technology to transform
                businesses. Our mission is to empower organizations with
                cutting-edge digital solutions that drive growth, improve
                efficiency, and create exceptional user experiences.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We're not just a software company—we're your technology partner,
                committed to understanding your unique challenges and delivering
                solutions that exceed expectations.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-96 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl shadow-2xl flex items-center justify-center text-white"
            >
              <div className="text-center">
                <div className="text-6xl font-bold mb-2">15+</div>
                <div className="text-xl">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Our <span className="text-orange-600">Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "💡",
                title: "Innovation",
                desc: "Always pushing boundaries and exploring new technologies",
              },
              {
                icon: "⭐",
                title: "Quality",
                desc: "Delivering excellence in every project, every time",
              },
              {
                icon: "🤝",
                title: "Partnership",
                desc: "Working closely with clients as true partners",
              },
              {
                icon: "🎯",
                title: "Integrity",
                desc: "Acting with honesty and ethical standards",
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white rounded-xl shadow-lg text-center hover:shadow-2xl transition-all"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Our <span className="text-orange-600">Team</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Expert Developers" },
              { number: "500+", label: "Projects Delivered" },
              { number: "250+", label: "Happy Clients" },
              { number: "15+", label: "Years Experience" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
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
              Join Our Journey
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Let's build something amazing together.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-orange-600 rounded-full hover:shadow-2xl transition-all transform hover:scale-105 font-bold"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
