"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "10 React Best Practices Every Developer Should Know",
      excerpt:
        "Master React development with these essential best practices and patterns.",
      date: "Feb 20, 2026",
      category: "React",
      image: "⚛️",
      color: "from-blue-400 to-cyan-500",
    },
    {
      id: 2,
      title: "The Future of Web Development in 2026",
      excerpt:
        "Exploring emerging trends and technologies shaping the future of web development.",
      date: "Feb 15, 2026",
      category: "Web Dev",
      image: "🌐",
      color: "from-purple-400 to-pink-500",
    },
    {
      id: 3,
      title: "Building Scalable Mobile Apps with React Native",
      excerpt:
        "Learn how to architect and build production-ready mobile applications.",
      date: "Feb 10, 2026",
      category: "Mobile",
      image: "📱",
      color: "from-green-400 to-emerald-500",
    },
    {
      id: 4,
      title: "UI/UX Design Principles for Developers",
      excerpt:
        "Understanding design principles can make you a better full-stack developer.",
      date: "Feb 5, 2026",
      category: "Design",
      image: "🎨",
      color: "from-orange-400 to-red-500",
    },
    {
      id: 5,
      title: "Cloud Infrastructure Best Practices with AWS",
      excerpt:
        "Deploy your applications reliably and efficiently on cloud infrastructure.",
      date: "Jan 30, 2026",
      category: "Cloud",
      image: "☁️",
      color: "from-indigo-400 to-purple-500",
    },
    {
      id: 6,
      title: "Getting Started with TypeScript in 2026",
      excerpt:
        "Why TypeScript is essential for modern JavaScript development and how to get started.",
      date: "Jan 25, 2026",
      category: "TypeScript",
      image: "📘",
      color: "from-blue-500 to-blue-600",
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
            Our <span className="text-orange-600">Blog</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Insights, tutorials, and updates from our team
          </motion.p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-gray-100"
              >
                <div
                  className={`aspect-video bg-gradient-to-br ${post.color} flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300`}
                >
                  {post.image}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold px-3 py-1 bg-orange-100 text-orange-600 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-orange-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-orange-600 font-semibold hover:text-orange-700 transition-colors inline-flex items-center gap-2"
                  >
                    Read More
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Subscribe to our newsletter for the latest insights and updates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-8 py-3 bg-white text-orange-600 rounded-full hover:shadow-2xl transition-all transform hover:scale-105 font-bold">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
