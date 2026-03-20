"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SlideIn, ParallaxSection, TextReveal } from "./ScrollReveal";

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Image with Parallax */}
      <ParallaxSection speed={0.3} className="absolute inset-0 opacity-5">
        <Image
          src="/images/card-coding.jpg"
          alt="Team collaboration"
          fill
          className="object-cover"
        />
      </ParallaxSection>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <TextReveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500">
              Choose Us
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We deliver excellence through innovation, expertise, and dedication
          </p>
        </TextReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Expert Team",
              description:
                "Our developers are highly skilled professionals with years of experience in cutting-edge technologies.",
              gradient: "from-blue-500 to-cyan-500",
              icon: "👥",
            },
            {
              title: "Agile Methodology",
              description:
                "We follow agile development practices to ensure quick iterations and continuous improvement.",
              gradient: "from-orange-500 to-red-500",
              icon: "⚡",
            },
            {
              title: "24/7 Support",
              description:
                "Round-the-clock support to ensure your applications run smoothly without any interruptions.",
              gradient: "from-purple-500 to-pink-500",
              icon: "🛡️",
            },
          ].map((feature, index) => (
            <SlideIn key={index} direction={index % 2 === 0 ? "left" : "right"}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group h-full"
              >
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${feature.gradient}`}
                />
                <motion.div
                  className="text-6xl mb-4"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                {/* Animated background */}
                <motion.div
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                  className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-5`}
                />
              </motion.div>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  );
}
