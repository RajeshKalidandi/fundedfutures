'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  quote: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Software Engineer",
    company: "TechCorp",
    quote: "FundedFutures helped me land my dream job at a cutting-edge startup!"
  },
  {
    id: 2,
    name: "Samantha Lee",
    role: "Product Manager",
    company: "AI Innovations",
    quote: "The insights provided by FundedFutures were invaluable in my job search."
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Data Scientist",
    company: "CloudScale",
    quote: "I found opportunities I never would have discovered otherwise. Highly recommended!"
  }
]

const TestimonialsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-montserrat font-bold text-center mb-12">What Our Users Say</h2>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-white text-text p-8 rounded-lg shadow-lg"
            >
              <p className="text-xl italic mb-4">&ldquo;{testimonials[currentIndex].quote}&rdquo;</p>
              <p className="font-bold">{testimonials[currentIndex].name}</p>
              <p>{testimonials[currentIndex].role} at {testimonials[currentIndex].company}</p>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-accent text-white p-2 rounded-full"
          >
            &larr;
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-accent text-white p-2 rounded-full"
          >
            &rarr;
          </button>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsCarousel