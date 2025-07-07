"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import "./ricevariety.css"

const RiceRange = () => {
  const [currentSlide, setCurrentSlide] = useState({})
  const [isMobile, setIsMobile] = useState(false)
//   const [activeCategory, setActiveCategory] = useState(0)
  const observerRef = useRef()

  const riceData = [
    {
      category: "1121",
      title: "Premium Basmati",
      description: "Long grain aromatic rice",
      color: "#978930",
      varieties: [
        {
          name: "Steam Rice",
          image: "https://res.cloudinary.com/dlcd3jyyu/image/upload/v1751693685/1121steam_a1ej6r.png",
          feature: "Aromatic",
        },
        { name: "Raw Rice", image: "https://res.cloudinary.com/dlcd3jyyu/image/upload/v1751693684/1121raw_hqpgij.png", feature: "Traditional" },
        { name: "Creamy Sella", image: "https://res.cloudinary.com/dlcd3jyyu/image/upload/v1751693684/1121creamy_lewmsu.png", feature: "Parboiled" },
        { name: "Golden Sella", image: "https://res.cloudinary.com/dlcd3jyyu/image/upload/v1751693684/1121golden_amubbs.png", feature: "Premium" },
      ],
    },
    {
      category: "1401",
      title: "Super Kernel",
      description: "Extra long grain variety",
      color: "#978930",
      varieties: [
        { name: "Steam Rice", image: "https://res.cloudinary.com/dlcd3jyyu/image/upload/v1751693685/1401steam_nxycmz.png", feature: "Extra Long" },
        { name: "Creamy Sella", image: "https://res.cloudinary.com/dlcd3jyyu/image/upload/v1751693685/1401cream_rwy9vr.png", feature: "Fluffy" },
      ],
    },
    {
      category: "1509",
      title: "White Gold",
      description: "Pure white basmati",
      color: "#978930",
      varieties: [
        { name: "Steam Rice", image: "https://res.cloudinary.com/dlcd3jyyu/image/upload/v1751693685/1509steam_zlbysk.png", feature: "Pure White" },
        { name: "Creamy Sella", image: "https://res.cloudinary.com/dlcd3jyyu/image/upload/v1751693685/1509cream_r7pwvb.png", feature: "Creamy" },
      ],
    },
    {
      category: "PR11",
      title: "Classic Choice",
      description: "Traditional favorite",
      color: "#978930",
      varieties: [
        { name: "Creamy Sella", image: "https://res.cloudinary.com/dlcd3jyyu/image/upload/v1751693686/pr11creamy_tzeffb.png", feature: "Classic" },
        { name: "Golden Sella", image: "https://res.cloudinary.com/dlcd3jyyu/image/upload/v1751693687/pr11golden_tdp3da.png", feature: "Golden" },
        { name: "Steam Rice", image: "https://res.cloudinary.com/dlcd3jyyu/image/upload/v1751693687/pr11steam_xf6fu2.png", feature: "Steam" },
      ],
    },
    {
      category: "1718",
      title: "1718 Basmati",
      description: "High-yield basmati rice",
      color: "#978930",
      varieties: [
        { name: "Steam Rice", image: "https://res.cloudinary.com/dlcd3jyyu/image/upload/v1751693686/1718_dehffq.png", feature: "Aromatic Steam Rice" },
        { name: "Golden Sella", image: "https://res.cloudinary.com/dlcd3jyyu/image/upload/v1751693686/1718golden_kktomm.png", feature: "Parboiled Rice" },
        { name: "Creamy Sella", image: "https://res.cloudinary.com/dlcd3jyyu/image/upload/v1751693686/1718creamy_x4kzld.png", feature: "Parboiled Rice" },
      ],
    },
{
  category: "IR-64",
  title: "Versatile IR-64",
  description: "Non-basmati, widely used",
  color: "#978930",
  varieties: [
    {
      name: "Golden Sella",
      image: "https://res.cloudinary.com/dlcd3jyyu/image/upload/v1751693686/IR64_g65khi.png",
      feature: "Parboiled Rice"
    },
    {
      name: "Sella Rice",
      image: "https://res.cloudinary.com/dlcd3jyyu/image/upload/v1751693686/Ir64sella_eawhum.png",
      feature: "Parboiled Rice"
    }
  ]
},
    {
  category: "Sugandha",
  title: "Fragrant Sugandha",
  description: "Lightly aromatic rice",
  color: "#978930",
  varieties: [
    {
      name: "Steam Rice",
      image: "https://res.cloudinary.com/dlcd3jyyu/image/upload/v1751693687/sugnadha_yugdzv.png",
      feature: "Aromatic Steam Rice"
    }
  ]
},
  ]

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".rice-category-card")
    elements.forEach((el) => observerRef.current.observe(el))

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  const nextSlide = (category) => {
    const categoryData = riceData.find((item) => item.category === category)
    if (!categoryData) return
    const maxSlide = categoryData.varieties.length - 1
    setCurrentSlide((prev) => ({
      ...prev,
      [category]: (prev[category] || 0) >= maxSlide ? 0 : (prev[category] || 0) + 1,
    }))
  }

  const prevSlide = (category) => {
    const categoryData = riceData.find((item) => item.category === category)
    if (!categoryData) return
    const maxSlide = categoryData.varieties.length - 1
    setCurrentSlide((prev) => ({
      ...prev,
      [category]: (prev[category] || 0) <= 0 ? maxSlide : (prev[category] || 0) - 1,
    }))
  }

  return (
    <div className="rice-showcase-container">
      <div className="rice-showcase-wrapper">
        {/* Hero Header */}
        {/* <div className="rice-hero-header">
          <div className="rice-floating-elements">
            <Sparkles className="rice-sparkle rice-sparkle-1" />
            <Star className="rice-sparkle rice-sparkle-2" />
            <Sparkles className="rice-sparkle rice-sparkle-3" />
          </div>

          <div className="rice-hero-content">
            <h1 className="rice-hero-title">
              <span className="rice-title-accent">OUR</span>
              <span className="rice-title-main">OFFERINGS</span>
            </h1>
            <p className="rice-hero-subtitle">Premium Rice Collection</p>
          </div>
        </div> */}

        {/* Categories Showcase */}
        <div className="rice-categories-container">
          {riceData.map((category, categoryIndex) => (
            <div
              key={category.category}
              className="rice-category-card"
              style={{
                borderColor: category.color,
                "--category-color": category.color,
              }}
            >
              {/* Category Header */}
              <div className="rice-category-header">
                <div className="rice-category-number" style={{ color: category.color }}>
                  {category.category}
                </div>
                <div className="rice-category-info">
                  <h2 className="rice-category-title">{category.title}</h2>
                  <p className="rice-category-description">{category.description}</p>
                </div>
              </div>

              {/* Varieties Showcase */}
              {isMobile ? (
                <div className="rice-mobile-container">
                  {/* Navigation Arrows at Screen Edges */}
                  <button
                    className="rice-carousel-btn rice-carousel-btn-prev"
                    style={{ backgroundColor: category.color }}
                    onClick={() => prevSlide(category.category)}
                  >
                    <ChevronLeft size={18} />
                  </button>

                  <button
                    className="rice-carousel-btn rice-carousel-btn-next"
                    style={{ backgroundColor: category.color }}
                    onClick={() => nextSlide(category.category)}
                  >
                    <ChevronRight size={18} />
                  </button>

                  {/* Full Width Carousel */}
                  <div className="rice-carousel-container">
                    <div
                      className="rice-carousel-track"
                      style={{
                        transform: `translateX(-${(currentSlide[category.category] || 0) * 100}%)`,
                      }}
                    >
                      {category.varieties.map((variety, index) => (
                        <div key={index} className="rice-carousel-slide">
                          <div className="rice-mobile-card" style={{ borderColor: category.color }}>
                            {/* Full Width Image Section */}
                            <div className="rice-mobile-image-container">
                              <img
                                src={variety.image || "/placeholder.svg"}
                                alt={variety.name}
                                className="rice-mobile-image"
                              />
                              <div className="rice-mobile-feature-tag" style={{ backgroundColor: category.color }}>
                                {variety.feature}
                              </div>
                            </div>

                            {/* Content Section */}
                            <div className="rice-mobile-content">
                              <h3 className="rice-mobile-title">{variety.name}</h3>
                              <div className="rice-mobile-divider" style={{ backgroundColor: category.color }}></div>
                              <p className="rice-mobile-description">
                                Premium quality {variety.feature.toLowerCase()} rice with exceptional taste and aroma.
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Slide Indicators */}
                  <div className="rice-slide-indicators">
                    {category.varieties.map((_, index) => (
                      <button
                        key={index}
                        className={`rice-slide-indicator ${
                          (currentSlide[category.category] || 0) === index ? "active" : ""
                        }`}
                        style={{
                          backgroundColor: category.color,
                          opacity: (currentSlide[category.category] || 0) === index ? 1 : 0.5,
                        }}
                        onClick={() => setCurrentSlide((prev) => ({ ...prev, [category.category]: index }))}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <div
                  className={`rice-desktop-grid ${
                    category.varieties.length === 1
                      ? "rice-grid-single"
                      : category.varieties.length === 2
                        ? "rice-grid-double"
                        : category.varieties.length === 3
                          ? "rice-grid-triple"
                          : "rice-grid-quad"
                  }`}
                >
                  {category.varieties.map((variety, index) => (
                    <div key={index} className="rice-desktop-card-wrapper">
                      <div className="rice-desktop-card" style={{ borderColor: category.color }}>
                        {/* Front Side */}
                        <div className="rice-card-front">
                          {/* Full Width Image Section */}
                          <div className="rice-desktop-image-container">
                            <img
                              src={variety.image || "/placeholder.svg"}
                              alt={variety.name}
                              className="rice-desktop-image"
                            />
                            <div className="rice-desktop-feature-tag" style={{ backgroundColor: category.color }}>
                              {variety.feature}
                            </div>
                          </div>

                          {/* Small Title Section at Bottom */}
                          <div className="rice-desktop-title-section">
                            <h3 className="rice-desktop-title">{variety.name}</h3>
                          </div>
                        </div>

                        {/* Back Side */}
                        <div className="rice-card-back" style={{ backgroundColor: category.color }}>
                          <h4 className="rice-card-back-title">{variety.name}</h4>
                          <p className="rice-card-back-description">
                            Premium quality {variety.feature.toLowerCase()} rice with exceptional taste and aroma.
                          </p>
                          <div className="rice-card-back-icon">
                            <div className="rice-card-back-icon-inner"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RiceRange
