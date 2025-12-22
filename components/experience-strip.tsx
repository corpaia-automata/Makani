"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Leaf, ChefHat, Sparkles, Home } from "lucide-react"

const experiences = [
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description: "Premium quality sourced daily",
    image: "/luxury-restaurant-interior-warm-lighting-arabian-d.jpg",
  },
  {
    icon: ChefHat,
    title: "Authentic Recipes",
    description: "Traditional methods perfected",
    image: "/malabar-biryani-aromatic-premium-food-photography.jpg",
  },
  {
    icon: Sparkles,
    title: "Hygienic Kitchen",
    description: "Highest standards maintained",
    image: "/arabian-mandi-kabsa-rice-dish-premium.jpg",
  },
  {
    icon: Home,
    title: "Warm Ambience",
    description: "Comfortable family atmosphere",
    image: "/grilled-chicken-alfahm-charcoal-smoky.jpg",
  },
]

export default function ExperienceStrip() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="bg-secondary py-24 px-4 md:py-10 lg:py-16">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="mx-auto mb-4 h-px w-16 bg-accent" />
          <h2 className="font-serif text-4xl font-medium text-primary md:text-5xl lg:text-6xl">
            Why Choose Us
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/70">
            Experience the difference that quality, tradition, and passion make
          </p>
        </motion.div>

        {/* Content Grid: Image Left, Experiences Right in 2 Columns */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] lg:h-[600px] overflow-hidden rounded-lg"
          >
            <img
              src="/luxury-restaurant-interior-warm-lighting-arabian-d.jpg"
              alt="Restaurant Experience"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
          </motion.div>

          {/* Right Side - Experiences in 2 Columns */}
          <div className="grid grid-cols-2 gap-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="space-y-4"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                  <experience.icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl font-medium text-primary md:text-2xl">
                  {experience.title}
                </h3>
                <p className="text-sm leading-relaxed text-foreground/70">
                  {experience.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}