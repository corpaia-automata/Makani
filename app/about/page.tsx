import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import ExperienceStrip from "@/components/experience-strip"
import SignatureCuisines from "@/components/signature-cuisines"
import ContactSection from "@/components/contact-section"
import AboutStory from "@/components/about-story"
import PageHero from "@/components/page-hero"

export default function AboutPage() {
  return (
    <main className="">
      <Navbar />
      <PageHero
        title="About Us"
        backgroundImage="/arabian-mandi-kabsa-rice-dish-premium.jpg"
        subtitle="Discover our story and passion for authentic cuisine"
      />
      <div className="space-y-10">
        <AboutStory />
        <SignatureCuisines />
        <ContactSection />
      </div>
      <Footer />
    </main>
  )
}
