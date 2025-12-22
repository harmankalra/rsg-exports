import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { useLocation } from "react-router-dom";
import Slider from "react-slick";
import "./banner.css";

/* ================= IMAGES ================= */

// Desktop
import homeDesktop1 from "../assets/Group13.webp";
import homeDesktop2 from "../assets/BANNER03.webp";
import aboutDesktop from "../assets/BANNER04.webp";
import contactDesktop from "../assets/ContactUs.webp";
import productDesktop1 from "../assets/Productbannner.webp";
import productDesktop12 from "../assets/rangebanner.webp";
import privateDesktop1 from "../assets/PrivateLabling.webp";
import GalleryDesktop1 from "../assets/Galery.jpg";

// Mobile
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
  const sliderRef = useRef(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [cursorStyle, setCursorStyle] = useState("default");

  /* ================= CONFIG ================= */
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

  /* ================= RESIZE ================= */
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* ================= ROUTE CHANGE ================= */
  useEffect(() => {
    const match =
      pageBannerConfigs[location.pathname] ||
      pageBannerConfigs["/"];

    setBannerConfig({
      images: isMobile ? match.mobile : match.desktop,
      single: match.single,
      mobileClass: match.mobileClass,
    });

    // reset slider on route change
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0, true);
    }
  }, [location.pathname, isMobile, pageBannerConfigs]);

  /* ================= CURSOR (SAME BEHAVIOUR) ================= */
  const handleMouseMove = useCallback(
    (e) => {
      if (bannerConfig.single) {
        setCursorStyle("default");
        return;
      }

      const w = e.currentTarget.offsetWidth;
      const x = e.clientX - e.currentTarget.getBoundingClientRect().left;

      if (x < w * 0.25) setCursorStyle("left-arrow-cursor");
      else if (x > w * 0.75) setCursorStyle("right-arrow-cursor");
      else setCursorStyle("default");
    },
    [bannerConfig.single]
  );

  const handleClick = useCallback(
    (e) => {
      if (bannerConfig.single || !sliderRef.current) return;

      const w = e.currentTarget.offsetWidth;
      const x = e.clientX - e.currentTarget.getBoundingClientRect().left;

      if (x < w * 0.25) sliderRef.current.slickPrev();
      else if (x > w * 0.75) sliderRef.current.slickNext();
    },
    [bannerConfig.single]
  );

  /* ================= SLIDER SETTINGS ================= */
  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 8000,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    pauseOnFocus: false,
  };

  /* ================= RENDER ================= */
  return (
    <div
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
        <Slider ref={sliderRef} {...sliderSettings}>
          {bannerConfig.images.map((img, index) => (
            <div className="banner-container" key={index}>
              <img
                src={img}
                className="banner-img"
                alt="RSG Exports Premium Rice"
                loading={index === 0 ? "eager" : "lazy"}
                fetchpriority={index === 0 ? "high" : "auto"}
                decoding="async"
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
        </Slider>
      )}
    </div>
  );
}

export default Banner;
