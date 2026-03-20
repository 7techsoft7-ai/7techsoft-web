"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import MaskReveal from "./MaskReveal";
import { FadeInScale, TextReveal } from "./ScrollReveal";

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4">
        <TextReveal className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-semibold">
              What We Do
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500">
              Premium Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to elevate your business
          </p>
        </TextReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: "💻",
              title: "Web Development",
              description:
                "Build responsive, fast, and scalable web applications using modern frameworks and technologies.",
              image: "/images/service-web-dev.jpg",
              gradient: "from-blue-500 to-cyan-500",
            },
            {
              icon: "📱",
              title: "Mobile Apps",
              description:
                "Create native and cross-platform mobile applications for iOS and Android platforms.",
              image: "/images/service-mobile-app.jpg",
              gradient: "from-purple-500 to-pink-500",
            },
            {
              icon: "☁️",
              title: "Cloud Solutions",
              description:
                "Deploy and manage applications on cloud platforms with scalability and security.",
              image: "/images/service-cloud.jpg",
              gradient: "from-orange-500 to-red-500",
            },
            {
              icon: "🎨",
              title: "UI/UX Design",
              description:
                "Design beautiful, intuitive interfaces that provide exceptional user experiences.",
              image: "/images/service-ai-ml.jpg",
              gradient: "from-pink-500 to-rose-500",
            },
            {
              icon: "🔧",
              title: "Custom Software",
              description:
                "Develop tailored software solutions that address your unique business challenges.",
              image: "/images/hero-background.jpg",
              gradient: "from-green-500 to-emerald-500",
            },
            {
              icon: "🚀",
              title: "DevOps & CI/CD",
              description:
                "Streamline development workflows with automated testing, deployment, and monitoring.",
              image: "/images/service-consulting.jpg",
              gradient: "from-indigo-500 to-purple-500",
            },
          ].map((service, index) => (
            <FadeInScale key={index}>
              <motion.div
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-gray-100 h-full"
              >
                {/* Image background with mask reveal */}
                <div className="relative h-48 overflow-hidden">
                  <MaskReveal direction="down">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-60 group-hover:opacity-70 transition-opacity`}
                    />
                  </MaskReveal>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="text-6xl filter drop-shadow-lg"
                    >
                      {service.icon}
                    </motion.div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "3rem" }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    className={`h-1 bg-gradient-to-r ${service.gradient} rounded-full`}
                  />
                </div>

                {/* Hover effect */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/0 to-white/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            </FadeInScale>
          ))}
        </div>
      </div>
    </section>
  );
}
