"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const cuisines = [
  {
    title: "Malabar Biryani",
    description: "Aromatic layers of basmati rice with tender meat and authentic Malabar spices",
    image: "/malabar biri.jpg",
  },
  {
    title: "Arabian Mandi & Kabsa",
    description: "Traditional Arabian rice dishes with perfectly spiced meat and rich flavors",
    image: "/arabian-mandi-kabsa-rice-dish-premium.jpg",
  },
  {
    title: "Grilled & Alfahm Specials",
    description: "Charcoal-grilled perfection with signature marinades and smoky flavors",
    image: "/grilled-chicken-alfahm-charcoal-smoky.jpg",
  },
  {
    title: "Fried & Broasted Chicken",
    description: "Crispy golden chicken with secret spice blends and perfect seasoning",
    image: "/fried-chicken-crispy-golden-restaurant.jpg",
  },
  {
    title: "Special Platters",
    description: "Our signature platters featuring a combination of our finest dishes, perfect for sharing",
    image: "/Gallery/platter.png",
  },
  {
    title: "Beverages & Desserts",
    description: "Refreshing drinks and indulgent sweets to complete your dining experience",
    image: "/arabic-desserts-beverages-premium-restaurant.jpg",
  },
]

export default function SignatureCuisines() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className=" py-24 px-4 md:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="mx-auto mb-4 h-px w-16 bg-accent" />
          <h2 className="font-serif text-4xl font-medium text-primary md:text-5xl lg:text-6xl">Signature Cuisines</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/70">
            Discover our carefully curated selection of authentic dishes, each prepared with passion and tradition
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 rounded-lg">
          {cuisines.map((cuisine, index) => (
            <motion.div
              key={cuisine.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative h-[400px] overflow-hidden bg-card rounded-xl"
            >
              <img
                src={cuisine.image || "/placeholder.svg"}
                alt={cuisine.title}
                className="h-full w-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 group-hover:from-black/90" />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-serif text-2xl font-medium mb-2">{cuisine.title}</h3>
                <p className="text-sm leading-relaxed text-white/80 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {cuisine.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
