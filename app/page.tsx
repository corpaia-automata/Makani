import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SignatureCuisines from "@/components/signature-cuisines"
import MenuSection from "@/components/menu-section"
import Gallery from "@/components/gallery"
import ExperienceStrip from "@/components/experience-strip"
import Testimonials from "@/components/testimonials"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div id="home">
        <HeroSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <SignatureCuisines />
      <div id="menu">
        <MenuSection />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <Testimonials />
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </main>
  )
}
