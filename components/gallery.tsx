"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const galleryImages = [
  { id: 1, src: "/Gallery/front.png", alt: "Restaurant Front" },
  { id: 2, src: "/Gallery/makkanifront.png", alt: "Makkani Restaurant Front" },
  { id: 3, src: "/Gallery/biriyani.png", alt: "Biryani" },
  { id: 4, src: "/Gallery/fish.png", alt: "Fish Dish" },
  { id: 5, src: "/Gallery/fishfry.png", alt: "Fish Fry" },
  { id: 6, src: "/Gallery/fried.png", alt: "Fried Food" },
  { id: 7, src: "/Gallery/homely.png", alt: "Homely Food" },
  { id: 9, src: "/Gallery/meal.png", alt: "Meal Platter" },
  { id: 10, src: "/Gallery/platter.png", alt: "Food Platter" },
  { id: 11, src: "/Gallery/yep.png", alt: "Restaurant Food" },
  { id: 12, src: "/Gallery/1.png", alt: "Gallery Image" },
]

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="bg-secondary py-24 px-4 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="mx-auto mb-4 h-px w-16 bg-accent" />
          <h2 className="font-serif text-4xl font-medium text-primary md:text-5xl lg:text-6xl">Gallery</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/70">
            A glimpse into our culinary artistry and elegant ambience
          </p>
        </motion.div>

        <div className="columns-1 gap-6 md:columns-2 lg:columns-3">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative mb-6 overflow-hidden rounded-lg break-inside-avoid"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 transition-all duration-500 group-hover:bg-primary/20 rounded-lg" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
