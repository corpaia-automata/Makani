import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import ContactSection from "@/components/contact-section"
import PageHero from "@/components/page-hero"

export default function ContactPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <PageHero 
                title="Contact Us" 
                backgroundImage="/fried-chicken-crispy-golden-restaurant.jpg"
                subtitle="Get in touch with us for reservations and inquiries"
            />
            <ContactSection />
            <Footer />
        </main>
    )
}
