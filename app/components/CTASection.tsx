"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-br from-gray-50 via-purple-50/30 to-pink-50/30">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-200/20 via-pink-200/20 to-orange-200/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-200/20 via-pink-200/20 to-orange-200/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-6"
              >
                <span className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-purple-900">
                  Let&apos;s Work Together
                </span>
              </motion.div>

              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                <span className="text-gray-900">Ready to</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500">
                  Start Your
                </span>
                <br />
                <span className="text-gray-900">Next Project?</span>
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Transform your vision into reality with our expert team.
                Let&apos;s create something extraordinary together.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white rounded-2xl font-bold text-lg overflow-hidden hover:shadow-2xl hover:shadow-purple-500/50 transition-all"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Get Started Now
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-700 via-pink-600 to-orange-600"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>

                <Link
                  href="/portfolio"
                  className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-900 rounded-2xl font-bold text-lg hover:border-purple-500 hover:text-purple-600 transition-all hover:shadow-lg"
                >
                  View Our Work
                </Link>
              </div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200"
            >
              <div>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  50+
                </div>
                <div className="text-sm text-gray-600 mt-1">Projects Done</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-600">
                  98%
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  Client Satisfaction
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-600">
                  24/7
                </div>
                <div className="text-sm text-gray-600 mt-1">Support</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - 3D Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl shadow-purple-500/20">
              {/* Decorative gradient border */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />

              <div className="relative space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Quick Response
                    </h3>
                    <p className="text-gray-600">We reply within 24 hours</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      icon: "💡",
                      title: "Free Consultation",
                      desc: "Discuss your project ideas",
                    },
                    {
                      icon: "🎨",
                      title: "Custom Design",
                      desc: "Tailored to your brand",
                    },
                    {
                      icon: "⚡",
                      title: "Fast Delivery",
                      desc: "Quick turnaround time",
                    },
                    {
                      icon: "🔒",
                      title: "Secure & Reliable",
                      desc: "Your data is safe with us",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 hover:shadow-md transition-shadow"
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <h4 className="font-bold text-gray-900">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl opacity-20 blur-2xl"
            />
            <motion.div
              animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-orange-400 to-pink-400 rounded-3xl opacity-20 blur-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
