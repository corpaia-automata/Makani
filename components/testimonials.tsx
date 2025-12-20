"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Aban Sheer",
    review: "The local recipes like sea-food, cardamom-flavoured chicken etc. were quite delicious at this restaurant.",
  },
  {
    id: 2,
    name: "SHIBIN R",
    review: "It is one of the best place for tasty foods in calicut. A river passes through its near by, which makes it a nice location for a peaceful dinner.",
  },
  {
    id: 3,
    name: "nambiarsantosh",
    review: "Experienced Great hospitality, the views along the river was fantastic and all the more the kerala food was delicious. Had a fantastic time. Will go back again and again.",
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="bg-background py-24 px-4 md:py-32 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="mx-auto mb-4 h-px w-16 bg-accent" />
          <h2 className="font-serif text-4xl font-medium text-primary md:text-5xl lg:text-6xl">Testimonials</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/70">
            What our customers say about us
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative bg-card border border-border rounded-lg p-8 shadow-sm"
            >
              <Quote className="h-8 w-8 text-accent/20 mb-4" />
              <p className="text-foreground/80 leading-relaxed mb-6 italic">
                "{testimonial.review}"
              </p>
              <div className="flex items-center">
                <div className="h-px flex-1 bg-border mr-4" />
                <p className="font-serif text-sm font-medium text-primary">{testimonial.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
