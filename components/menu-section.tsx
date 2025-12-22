"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const menuCategories = [
  {
    category: "Starters",
    items: [
      { name: "Arabic Shawarma", description: "Marinated meat wrapped in fresh pita with tahini and pickles", image: "/arabic.png" },
      { name: "nuggets", description: "Tender chicken pieces coated in crispy golden batter", image: "/nuggets.png" },
      { name: "Chicken Popcorn", description: "Bite-sized crispy chicken with spicy seasoning", image: "/nuggets.png" },
      { name: "French Fries", description: "Perfectly crispy golden fries with house seasonings", image: "/fries.png" },
    ],
  },
  {
    category: "Main Course",
    items: [
      {
        name: "Malabar Chicken Biryani",
        description: "Fragrant basmati rice layered with tender chicken and authentic spices",
        image: "/Gallery/biriyani.png",
      },
      { name: "Mutton Biryani", description: "Slow-cooked mutton with aromatic rice and traditional Malabar flavors", image: "/mutton-biriyani.png" },
      {
        name: "Arabian Chicken Mandi",
        description: "Succulent chicken served over spiced rice with traditional mandi flavors",
        image: "/arabian-mandi-kabsa-rice-dish-premium.jpg",
      },
      { name: "Mutton Mandi", description: "Tender mutton with fragrant long-grain rice and Arabian spices", image: "/gallery/mutton-mandi.png" },
    ],
  },
  {
    category: "Arabian Specials",
    items: [
      { name: "Chicken Kabsa", description: "Traditional Saudi rice dish with tender chicken and aromatic spices", image: "/kabsa.png" },
      { name: "Mutton Kabsa", description: "Flavorful mutton served with fragrant rice and authentic kabsa blend", image: "/arabian-mandi-kabsa-rice-dish-premium.jpg" },
      { name: "Lamb Ouzi", description: "Slow-roasted lamb with spiced rice, nuts, and raisins", image: "/lamp.png" },
      { name: "Chicken Zurbian", description: "Yemeni-style chicken with basmati rice and special zurbian spices", image: "/Gallery/biriyani.png" },
    ],
  },
  {
    category: "Grills & Fried",
    items: [
      { name: "Alfahm Chicken (Full/Half)", description: "Charcoal-grilled chicken with signature smoky marinade", image: "/grilled-chicken-alfahm-charcoal-smoky.jpg" },
      { name: "Grilled Chicken", description: "Perfectly grilled chicken with herbs and spices", image: "/grilled.png" },
      { name: "Broasted Chicken", description: "Pressure-fried chicken with crispy coating and juicy interior", image: "/Gallery/fried.png" },
      { name: "Fried Chicken", description: "Classic fried chicken with secret spice blend", image: "/fries.png" },
    ],
  },
  {
    category: "Platters",
    items: [
      { name: "Mandi Platter", description: "Complete mandi experience with spiced rice, tender meat, and traditional accompaniments", image: "/chick-platter.png" },
      { name: "Pidikozhi Platter", description: "Special platter featuring our signature pidikozhi with aromatic rice and sides", image: "/pidikozhi.png" },
      { name: "Bread Platter", description: "Assortment of fresh breads with dips, spreads, and accompaniments", image: "/bread-platter.png" },
    ],
  },
  {
    category: "Beverages",
    items: [
      { name: "Fresh Juice", description: "Seasonal fresh fruit juices" },
      { name: "Soft Drinks", description: "Chilled beverages and sodas" },
      { name: "Arabic Coffee", description: "Traditional Arabic coffee with cardamom" },
      { name: "Mint Lemonade", description: "Refreshing blend of fresh mint and lemon" },
    ],
  },
]

export default function MenuSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="menu" ref={ref} className="py-24 px-4 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="mx-auto mb-4 h-px w-16 bg-accent" />
          <h2 className="font-serif text-4xl font-medium text-primary md:text-5xl lg:text-6xl">Our Menu</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/70">
            Explore our carefully crafted menu featuring authentic Malabar and Arabian delicacies
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {menuCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="space-y-6"
            >
              <div className="border-b border-accent/30 pb-4">
                <h3 className="font-serif text-2xl font-medium text-primary md:text-3xl">{category.category}</h3>
              </div>

              <div className={category.category === "Beverages" ? "grid grid-cols-2 gap-6" : "space-y-6"}>
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 + itemIndex * 0.05 }}
                    className="group"
                  >
                    <div className="flex gap-4">
                      {"image" in item && item.image && (
                        <div className="flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-lg"
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        {category.category === "Beverages" ? (
                          <div>
                            <h4 className="font-serif text-lg font-medium text-primary group-hover:text-accent transition-colors mb-2">
                              {item.name}
                            </h4>
                            <p className="text-sm leading-relaxed text-foreground/70">{item.description}</p>
                          </div>
                        ) : (
                          <>
                            <div className="flex items-baseline justify-between gap-4">
                              <h4 className="font-serif text-lg font-medium text-primary group-hover:text-accent transition-colors">
                                {item.name}
                              </h4>
                              <div className="flex-1 border-b border-dotted border-border" />
                            </div>
                            <p className="mt-2 text-sm leading-relaxed text-foreground/70">{item.description}</p>
                          </>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
