"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <img src="/cinematic-luxury-arabian-malabar-biryani-restauran.jpg" alt="Makkani Restaurant" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-5xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="font-serif text-5xl font-medium leading-tight tracking-tight text-white md:text-7xl lg:text-8xl"
          >
            Where Every Bite Tells <br /> a Story
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl"
          >
            Honouring Malabar Traditions and Arabian Influences Through Carefully Curated Culinary Experiences
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              onClick={scrollToMenu}
              size="lg"
              className="bg-accent px-8 py-6 text-base font-medium text-primary hover:bg-accent/90"
            >
              Explore our Menu
            </Button>
            {/* <Button
              onClick={scrollToContact}
              size="lg"
              variant="outline"
              className="border-white/30 bg-transparent px-8 py-6 text-base font-medium text-white backdrop-blur-sm hover:bg-white/10 hover:text-white"
            >
              Reserve a Table
            </Button> */}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="h-12 w-6 rounded-full border-2 border-white/40 p-1"
          >
            <div className="h-2 w-2 rounded-full bg-white/60 mx-auto" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
