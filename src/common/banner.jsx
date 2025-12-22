import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { useLocation } from "react-router-dom";
import "./banner.css";

// Desktop Images
import homeDesktop1 from "../assets/Group13.webp";
import homeDesktop2 from "../assets/BANNER03.webp";
import aboutDesktop from "../assets/BANNER04.webp";
import contactDesktop from "../assets/ContactUs.webp";
import productDesktop1 from "../assets/Productbannner.webp";
import productDesktop12 from "../assets/rangebanner.webp";
import privateDesktop1 from "../assets/PrivateLabling.webp";
import GalleryDesktop1 from "../assets/Galery.jpg";

// Mobile Images
import homeMobile1 from "../assets/MobFront.webp";
import homeMobile2 from "../assets/Mobhome2.webp";
import aboutMobile from "../assets/Phone_Banner.webp";
import contactMobile from "../assets/MobContactUs.webp";
import productMobile1 from "../assets/MobProductRange.webp";
import productMobile12 from "../assets/rangebannermob.webp";
import privateMobile1 from "../assets/MobPrivateLabeling.webp";
import galleryMobile1 from "../assets/MobGallery.jpg";

function Banner() {
  const location = useLocation();
  const bannerWrapperRef = useRef(null);
  const carouselRef = useRef(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [cursorStyle, setCursorStyle] = useState("default");
  const [heroLoaded, setHeroLoaded] = useState(false);

  /* 🔥 PRELOAD HOME HERO IMAGE (FIXES WHITE SCREEN) */
  useEffect(() => {
    if (location.pathname === "/" && !isMobile) {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = homeDesktop1;
      link.fetchPriority = "high";
      document.head.appendChild(link);

      return () => {
        document.head.removeChild(link);
      };
    }
  }, [location.pathname, isMobile]);

  const pageBannerConfigs = useMemo(
    () => ({
      "/": {
        desktop: [homeDesktop1, homeDesktop2],
        mobile: [homeMobile1, homeMobile2],
        single: false,
        mobileClass: "mobile-home",
      },
      "/about": {
        desktop: [aboutDesktop],
        mobile: [aboutMobile],
        single: true,
        mobileClass: "mobile-about",
      },
      "/brand": {
        desktop: [productDesktop1],
        mobile: [productMobile1],
        single: true,
        mobileClass: "mobile-products",
      },
      "/range": {
        desktop: [productDesktop12],
        mobile: [productMobile12],
        single: true,
        mobileClass: "mobile-products",
      },
      "/private": {
        desktop: [privateDesktop1],
        mobile: [privateMobile1],
        single: true,
        mobileClass: "mobile-private",
      },
      "/gallery": {
        desktop: [GalleryDesktop1],
        mobile: [galleryMobile1],
        single: true,
        mobileClass: "mobile-gallery",
      },
      "/contact": {
        desktop: [contactDesktop],
        mobile: [contactMobile],
        single: true,
        mobileClass: "mobile-contact",
      },
    }),
    []
  );

  const [bannerConfig, setBannerConfig] = useState({
    images: [],
    single: false,
    mobileClass: "",
  });

  /* Resize */
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* Cursor logic */
  const handleMouseMove = useCallback(
    (e) => {
      if (bannerConfig.single) {
        setCursorStyle("default");
        return;
      }

      const width = e.currentTarget.offsetWidth;
      const x = e.clientX - e.currentTarget.getBoundingClientRect().left;

      if (x < width * 0.25) setCursorStyle("left-arrow-cursor");
      else if (x > width * 0.75) setCursorStyle("right-arrow-cursor");
      else setCursorStyle("default");
    },
    [bannerConfig.single]
  );

  const handleClick = useCallback(
    (e) => {
      if (bannerConfig.single || !window.jQuery || !carouselRef.current) return;

      const width = e.currentTarget.offsetWidth;
      const x = e.clientX - e.currentTarget.getBoundingClientRect().left;
      const $carousel = window.jQuery(carouselRef.current);

      if (x < width * 0.25) $carousel.trigger("prev.owl.carousel");
      else if (x > width * 0.75) $carousel.trigger("next.owl.carousel");
    },
    [bannerConfig.single]
  );

  /* Route change */
  useEffect(() => {
    setHeroLoaded(false);

    const match =
      pageBannerConfigs[location.pathname] ||
      pageBannerConfigs[
        Object.keys(pageBannerConfigs).find(
          (p) => p !== "/" && location.pathname.startsWith(p)
        )
      ] ||
      pageBannerConfigs["/"];

    setBannerConfig({
      images: isMobile ? match.mobile : match.desktop,
      single: match.single,
      mobileClass: match.mobileClass,
    });
  }, [location.pathname, isMobile, pageBannerConfigs]);

  /* Owl init AFTER first image */
  useEffect(() => {
    if (
      heroLoaded &&
      !bannerConfig.single &&
      window.jQuery &&
      window.jQuery.fn.owlCarousel
    ) {
      const $carousel = window.jQuery(".banner-owl-carousel");
      carouselRef.current = $carousel[0];

      if ($carousel.hasClass("owl-loaded")) {
        $carousel.trigger("destroy.owl.carousel");
      }

      $carousel.owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 8000,
        smartSpeed: 1500,
      });
    }
  }, [heroLoaded, bannerConfig.single]);

  return (
    <div
      ref={bannerWrapperRef}
      className={`banner-wrapper ${cursorStyle} ${bannerConfig.mobileClass}`}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
    >
      {bannerConfig.single ? (
        <img
          src={bannerConfig.images[0]}
          alt="RSG Exports Banner"
          className="banner-img"
          loading="eager"
          fetchpriority="high"
        />
      ) : (
        <div className="banner-owl-carousel owl-carousel">
          {bannerConfig.images.map((img, index) => (
            <div className="banner-container" key={index}>
              <img
                src={img}
                className="banner-img"
                alt="RSG Exports Premium Rice"
                loading={index === 0 ? "eager" : "lazy"}
                fetchpriority={index === 0 ? "high" : "auto"}
                decoding="async"
                onLoad={() => index === 0 && setHeroLoaded(true)}
              />

              {location.pathname === "/" &&
                img === homeDesktop1 &&
                !isMobile && (
                  <>
                    <div className="banner-dark-overlay" />
                    <div className="banner-overlay-text fancy-font">
                      Sowing The Seeds
                      <br />
                      of Ambition
                    </div>
                  </>
                )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Banner;
