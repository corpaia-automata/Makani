"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function AboutStory() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 px-4 md:py-32 lg:py-40 bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Image - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[400px] overflow-hidden rounded-lg lg:h-[600px] order-2 lg:order-1"
          >
            <img
              src="/arabian-mandi-kabsa-rice-dish-premium.jpg"
              alt="Arabian Mandi & Kabsa"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
          </motion.div>

          {/* Content - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col justify-center order-1 lg:order-2"
          >
            <div className="mb-4 h-px w-16 bg-accent" />

            <h2 className="font-serif text-4xl font-medium leading-tight text-primary md:text-5xl lg:text-6xl">
              Our Story
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-relaxed text-foreground/80">
              <p>
                Makkani Restaurant was born from a simple yet profound passion: to share the authentic flavors of Malabar
                and Arabian cuisine with our community. What started as a humble dream has grown into a beloved destination
                where families gather, friends reconnect, and food lovers discover new dimensions of taste.
              </p>

              <p>
                Our journey began with traditional recipes passed down through generations, each one telling a story of
                heritage, culture, and culinary mastery. We believe that food is more than nourishment—it's a bridge that
                connects us to our roots, to each other, and to the rich traditions that define who we are.
              </p>

              <p>
                Every dish we serve is crafted with care, using only the finest ingredients and time-honored techniques.
                From our aromatic Mandi and Kabsa to our signature Malabar Biryani, each plate represents our commitment
                to authenticity, quality, and the joy of sharing great food with great people.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
