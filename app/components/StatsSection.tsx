"use client";

import { FadeInScale } from "./ScrollReveal";
import CountUp from "./CountUp";

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              number: 500,
              label: "Projects Completed",
              gradient: "from-purple-600 to-pink-600",
            },
            {
              number: 250,
              label: "Happy Clients",
              gradient: "from-pink-600 to-orange-600",
            },
            {
              number: 50,
              label: "Team Members",
              gradient: "from-orange-600 to-red-600",
            },
            {
              number: 15,
              label: "Years Experience",
              gradient: "from-purple-600 to-indigo-600",
            },
          ].map((stat, index) => (
            <FadeInScale key={index}>
              <div className="text-center group">
                <div
                  className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform`}
                >
                  <CountUp end={stat.number} />+
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            </FadeInScale>
          ))}
        </div>
      </div>
    </section>
  );
}
