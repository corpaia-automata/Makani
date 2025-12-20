import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import MenuSection from "@/components/menu-section"
import PageHero from "@/components/page-hero"

export default function MenuPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <PageHero 
                title="Our Menu" 
                backgroundImage="/malabar biri.jpg"
                subtitle="Explore our exquisite collection of authentic dishes"
            />
            <MenuSection />
            <Footer />
        </main>
    )
}
