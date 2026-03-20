"use client";

import { motion } from "framer-motion";

export default function Technologies() {
  const techCategories = [
    {
      category: "Frontend",
      color: "from-blue-500 to-cyan-500",
      icon: "⚛️",
      techs: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Framer Motion", level: 85 },
        { name: "Vue.js", level: 75 },
      ],
    },
    {
      category: "Backend",
      color: "from-green-500 to-emerald-500",
      icon: "⚙️",
      techs: [
        { name: "Node.js", level: 95 },
        { name: "Express.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 85 },
        { name: "GraphQL", level: 80 },
      ],
    },
    {
      category: "Mobile",
      color: "from-purple-500 to-pink-500",
      icon: "📱",
      techs: [
        { name: "React Native", level: 90 },
        { name: "Flutter", level: 80 },
        { name: "Swift", level: 75 },
        { name: "Kotlin", level: 75 },
        { name: "Expo", level: 85 },
      ],
    },
    {
      category: "Cloud & DevOps",
      color: "from-orange-500 to-red-500",
      icon: "☁️",
      techs: [
        { name: "AWS", level: 90 },
        { name: "Docker", level: 85 },
        { name: "Kubernetes", level: 80 },
        { name: "CI/CD", level: 85 },
        { name: "Azure", level: 75 },
      ],
    },
    {
      category: "Design & Tools",
      color: "from-indigo-500 to-purple-500",
      icon: "🎨",
      techs: [
        { name: "Figma", level: 90 },
        { name: "Adobe XD", level: 80 },
        { name: "Git", level: 95 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 85 },
      ],
    },
    {
      category: "AI & Data",
      color: "from-pink-500 to-rose-500",
      icon: "🤖",
      techs: [
        { name: "OpenAI API", level: 85 },
        { name: "TensorFlow", level: 70 },
        { name: "Machine Learning", level: 75 },
        { name: "Data Analysis", level: 80 },
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
            Our <span className="text-orange-600">Technologies</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Cutting-edge tools and frameworks we work with
          </motion.p>
        </div>
      </section>

      {/* Tech Stack Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center text-3xl`}
                  >
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{category.category}</h3>
                </div>
                <div className="space-y-4">
                  {category.techs.map((tech, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold text-gray-700">
                          {tech.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          {tech.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${tech.level}%` }}
                          transition={{ duration: 1, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                          className={`h-2 bg-gradient-to-r ${category.color} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Technology <span className="text-orange-600">Expertise</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Technologies Mastered" },
              { number: "500+", label: "Projects Built" },
              { number: "15+", label: "Years Experience" },
              { number: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-xl shadow-lg"
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
              Let's Build with the Best
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Ready to leverage cutting-edge technology for your project?
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-orange-600 rounded-full hover:shadow-2xl transition-all transform hover:scale-105 font-bold"
            >
              Start Your Project
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
