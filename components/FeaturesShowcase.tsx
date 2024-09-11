'use client'

import { motion } from 'framer-motion'
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
    description: "Personalized career path recommendations based on industry trends",
    icon: "/icons/career-growth.svg"
  }
]

const FeatureCard: React.FC<Feature> = ({ title, description, icon }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-lg"
    whileHover={{ scale: 1.05, rotate: 1 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Image src={icon} alt={title} width={64} height={64} className="mb-4" />
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