"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const branches = [
  {
    name: "Kozhikode",
    address: `Near Shanthi Hospital,
Mukkam Road, Omassery,
Kozhikode – 673572, Kerala`,
    phones: ["+917510015001", "+919846445784"],
    map: "https://maps.google.com?q=Omassery,Kozhikode&output=embed",
    directions: "https://maps.google.com?q=Omassery,Kozhikode",
  },
  {
    name: "Kochi",
    address: `Makkani Restaurant,
Athani, Nedumbassery,
Kerala – 683585`,
    phones: ["+917580067006", "+917580018006"],
    map: "https://maps.google.com?q=Nedumbassery,Kochi&output=embed",
    directions: "https://maps.google.com?q=Nedumbassery,Kochi",
  },
]

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const [activeBranch, setActiveBranch] = useState(branches[0])

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <section ref={ref} className="py-24 px-4 md:py-32">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-primary">
            Get In Touch
          </h2>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-2 items-center">

          {/* LEFT SIDE – Restaurant Message */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-serif text-5xl leading-tight text-primary mb-6">
              Let's Create Something
              <span className="text-accent block">
                Delicious Together
              </span>
            </h3>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Whether you're planning a special celebration, a family gathering,
              or simply craving authentic flavors, our team is here to make
              your experience unforgettable.
            </p>
          </motion.div>


          {/* RIGHT SIDE – Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-card border border-border rounded-lg p-8"
          >
            <h3 className="font-serif text-2xl font-medium text-primary mb-6">
              Send us a message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">

              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-md bg-background"
              />

              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-md bg-background"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-md bg-background"
              />

              <textarea
                name="message"
                rows={5}
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-md bg-background resize-none"
              />

              <Button
                type="submit"
                className="w-full bg-accent text-primary hover:bg-accent/90 py-6"
              >
                Send Message
              </Button>

            </form>
          </motion.div>

        </div>
      <div className="space-y-5 mt-10">


        {/* Branch Cards */}
          <div className="text-center mb-10 space-y-5">
            <h2 className="font-serif text-4xl md:text-5xl text-primary">
              Our Locations
            </h2>
            <p className="text-muted-foreground mt-3">
              Visit us at any of our branches for an unforgettable dining experience
            </p>
          </div>
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {/* Heading */}

          {branches.map((branch) => (
            
            <div
            key={branch.name}
            className={`border rounded-xl p-6 cursor-pointer transition hover:shadow-md ${
              activeBranch.name === branch.name
              ? "border-accent"
              : ""
            }`}
            onClick={() => setActiveBranch(branch)}
            >

              <div className="flex items-center gap-3 mb-3">
                <MapPin className="text-accent" size={18} />
                <h4 className="font-serif text-xl">
                  {branch.name}
                </h4>
              </div>

              <p className="text-muted-foreground whitespace-pre-line mb-4">
                {branch.address}
              </p>

              <div className="space-y-1 mb-4">

                {branch.phones.map((phone) => (
                  <a
                  key={phone}
                  href={`tel:${phone}`}
                  className="flex items-center gap-2 text-sm hover:text-accent"
                  >
                    <Phone size={14} />
                    {phone}
                  </a>
                ))}

              </div>

              <a
                href={branch.directions}
                target="_blank"
                className="text-accent text-sm font-medium"
              >
                Get Directions →
              </a>

            </div>

))}

        </div>

</div>
      </div>
    </section>
  )
}