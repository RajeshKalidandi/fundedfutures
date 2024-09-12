'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Zap, Search, TrendingUp } from 'lucide-react'
import Image from 'next/image'

interface Feature {
  title: string
  description: string
  icon: string
}

const features: Feature[] = [
  {
    title: "Smart Job Matching",
    description: "AI-powered algorithm to match your skills with the perfect job",
    icon: "/icons/smart-match.svg"
  },
  {
    title: "Real-time Funding Data",
    description: "Stay updated with the latest startup funding rounds",
    icon: "/icons/funding-data.svg"
  },
  {
    title: "Career Growth Insights",
    description: "Get personalized advice and analytics to accelerate your tech career.",
    icon: TrendingUp
  }
]

const FeatureCard: React.FC<Feature> = ({ icon: Icon, title, description }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
    whileHover={{ y: -5 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Image src={Icon} alt={title} width={64} height={64} className="mb-4" />
    <h3 className="text-xl font-montserrat font-bold mb-2">{title}</h3>
    <p className="text-neutral">{description}</p>
  </motion.div>
)

const FeaturesShowcase: React.FC = () => (
  <section className="py-16 bg-background">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-montserrat font-bold text-center mb-12">Our Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  </section>
)

export default FeaturesShowcase