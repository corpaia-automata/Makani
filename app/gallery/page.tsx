import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import Gallery from "@/components/gallery"
import PageHero from "@/components/page-hero"

export default function GalleryPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <PageHero 
                title="Our Gallery" 
                backgroundImage="/grilled-chicken-alfahm-charcoal-smoky.jpg"
                subtitle="A visual journey through our culinary creations"
            />
            <Gallery />
            <Footer />
        </main>
    )
}
