import { Instagram, MapPin, Clock, Phone, Facebook, Youtube } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ]

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Menu", href: "/menu" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
  ]

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 items-center justify-center">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/makani.png"
                alt="Makkani Restaurant Logo"
                width={160}
                height={80}
                className="object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed text-primary-foreground/80 mb-6">
              Makkani Restaurant is a leading restaurant and main caterers, known for creating unforgettable food experiences. 
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 transition-all duration-300 hover:bg-accent hover:scale-110"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 transition-all duration-300 hover:bg-accent hover:scale-110"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 transition-all duration-300 hover:bg-accent hover:scale-110"
                aria-label="Follow us on YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Branches - One Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="h-5 w-5 text-accent flex-shrink-0" />
              <h4 className="font-serif text-lg font-medium">Branches</h4>
            </div>
            <div className="space-y-6">
              <div>
                <h5 className="font-medium text-primary-foreground/90 mb-2 text-sm">Kozhikode</h5>
                <p className="text-sm leading-relaxed text-primary-foreground/80">
                  Near Shanthi Hospital,<br />
                  Mukkam Road, Omassery,<br />
                  Kozhikode-673572, Kerala
                </p>
              </div>
              <div>
                <h5 className="font-medium text-primary-foreground/90 mb-2 text-sm">Kochi</h5>
                <p className="text-sm leading-relaxed text-primary-foreground/80">
                  Makkani Restaurant,<br />
                  Athani, Nedumbassery,<br />
                  Kochi
                </p>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Phone className="h-5 w-5 text-accent flex-shrink-0" />
              <h4 className="font-serif text-lg font-medium">Contact Details</h4>
            </div>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-primary-foreground/90 mb-2 text-sm">Kozhikode</h5>
                <div className="space-y-1">
                  <a
                    href="tel:+917510015001"
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors block"
                  >
                    +91 75100 15001
                  </a>
                  <a
                    href="tel:+919846445784"
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors block"
                  >
                    +91 98464 45784
                  </a>
                </div>
              </div>
              <div>
                <h5 className="font-medium text-primary-foreground/90 mb-2 text-sm">Kochi</h5>
                <div className="space-y-1">
                  <a
                    href="tel:+917510015001"
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors block"
                  >
                    +91 75100 15001
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Clock className="h-5 w-5 text-accent flex-shrink-0" />
              <h4 className="font-serif text-lg font-medium">Opening Hours</h4>
            </div>
            <div className="space-y-2">
              {days.map((day) => (
                <div key={day} className="flex justify-between items-center text-sm">
                  <span className="text-primary-foreground/80">{day.slice(0, 3)}</span>
                  <span className="text-primary-foreground/90 font-medium">12:00 PM - 12:00 AM</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-primary-foreground/20 mb-8" />

        {/* Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mb-6">
          {navLinks.map((link, index) => (
            <div key={link.name} className="flex items-center gap-4">
              <Link
                href={link.href}
                className="text-sm text-primary-foreground/80 hover:text-accent transition-colors duration-300"
              >
                {link.name}
              </Link>
              {index < navLinks.length - 1 && (
                <span className="text-primary-foreground/30 text-sm">|</span>
              )}
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Makkani Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}