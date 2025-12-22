"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 px-4 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[400px] overflow-hidden lg:h-[600px]"
          >
            <img src="/Gallery/makkanifront.png" alt="Restaurant Interior" className="h-full w-full rounded-xl object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-4 h-px w-16 bg-accent" />

            <h2 className="font-serif text-4xl font-medium leading-tight text-primary md:text-5xl lg:text-6xl">
              A Journey of Authentic Flavours
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-relaxed text-foreground/80">
              <p>
                Makkani Restaurant brings together the rich culinary heritage of Malabar and Arabian traditions,
                creating an unforgettable dining experience for families, professionals, and food connoisseurs.
              </p>

              <p>
                Every dish is crafted with premium ingredients, authentic spices, and time-honored recipes passed down
                through generations. Our chefs pour their passion into every plate, ensuring each bite transports you to
                the heart of Kerala and the Arabian Peninsula.
              </p>

              <p>
                From our warm hospitality to our meticulously prepared cuisine, we believe in serving more than just
                food—we serve happiness, tradition, and memories.
              </p>
            </div>

            {/* <div className="mt-10 flex items-center gap-8">
              <div>
                <div className="font-serif text-4xl font-semibold text-accent">10+</div>
                <div className="mt-1 text-sm uppercase tracking-wider text-muted-foreground">Years Experience</div>
              </div>
              <div className="h-16 w-px bg-border" />
              <div>
                <div className="font-serif text-4xl font-semibold text-accent">100%</div>
                <div className="mt-1 text-sm uppercase tracking-wider text-muted-foreground">Authentic Recipes</div>
              </div>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
