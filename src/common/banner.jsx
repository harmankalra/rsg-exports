import React, { useEffect, useState, useRef, useCallback, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import './banner.css';

// Desktop Backgrounds
import homeDesktop1 from '../assets/Group13.png';
import homeDesktop2 from '../assets/home3.jpg';
import aboutDesktop from '../assets/AboutUS.jpg';
import contactDesktop from '../assets/ContactUs.jpg';
import productDesktop1 from '../assets/Productbannner.jpg';
import privateDesktop1 from '../assets/PrivateLabling.jpg';

// Mobile Backgrounds
import homeMobile1 from '../assets/MobFront.jpg';
import homeMobile2 from '../assets/Mobhome2.png';
import aboutMobile from '../assets/mobAboutUs.jpg';
import contactMobile from '../assets/MobContactUs.jpg';
import productMobile1 from '../assets/MobProductRange.jpg';
import privateMobile1 from '../assets/MobPrivateLabeling.jpg';

function Banner() {
    const location = useLocation();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [cursorStyle, setCursorStyle] = useState('default');
    const bannerWrapperRef = useRef(null);
    const carouselRef = useRef(null);

    const pageBannerConfigs = useMemo(() => ({
        '/': {
            desktopBackgrounds: [homeDesktop1, homeDesktop2],
            mobileBackgrounds: [homeMobile1, homeMobile2],
            isSingleImage: false,
            mobileClass: 'mobile-home'
        },
        '/about': {
            desktopBackgrounds: [aboutDesktop],
            mobileBackgrounds: [aboutMobile],
            isSingleImage: true,
            mobileClass: 'mobile-about'
        },
        '/contact': {
            desktopBackgrounds: [contactDesktop],
            mobileBackgrounds: [contactMobile],
            isSingleImage: true,
            mobileClass: 'mobile-contact'
        },
        '/product': {
            desktopBackgrounds: [productDesktop1],
            mobileBackgrounds: [productMobile1],
            isSingleImage: true,
            mobileClass: 'mobile-products'
        },
        '/private': {
            desktopBackgrounds: [privateDesktop1],
            mobileBackgrounds: [privateMobile1],
            isSingleImage: true,
            mobileClass: 'mobile-products'
        }
    }), []);

    const [bannerConfig, setBannerConfig] = useState({
        backgrounds: [],
        isSingleImage: false,
        mobileClass: ''
    });

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const resetAutoplay = useCallback(() => {
        if (window.jQuery && carouselRef.current) {
            const $carousel = window.jQuery(carouselRef.current);
            $carousel.trigger('stop.owl.autoplay');
            $carousel.trigger('play.owl.autoplay');
        }
    }, []);

    const handleMouseMove = useCallback((e) => {
        if (bannerConfig.isSingleImage) return;

        const container = e.currentTarget;
        const containerWidth = container.offsetWidth;
        const mouseX = e.clientX - container.getBoundingClientRect().left;

        if (mouseX < containerWidth * 0.25) {
            setCursorStyle('left-arrow-cursor');
        } else if (mouseX > containerWidth * 0.75) {
            setCursorStyle('right-arrow-cursor');
        } else {
            setCursorStyle('default');
        }
    }, [bannerConfig.isSingleImage]);

    const handleClick = useCallback((e) => {
        if (bannerConfig.isSingleImage) return;

        const container = e.currentTarget;
        const containerWidth = container.offsetWidth;
        const mouseX = e.clientX - container.getBoundingClientRect().left;

        const carousel = container.querySelector('.owl-carousel');
        if (carousel && window.jQuery) {
            const $carousel = window.jQuery(carousel);
            if (mouseX < containerWidth * 0.25) {
                $carousel.trigger('prev.owl.carousel');
                resetAutoplay();
            } else if (mouseX > containerWidth * 0.75) {
                $carousel.trigger('next.owl.carousel');
                resetAutoplay();
            }
        }
    }, [bannerConfig.isSingleImage, resetAutoplay]);

    const preloadImages = (images) => {
        return Promise.all(images.map(src => {
            return new Promise(resolve => {
                const img = new Image();
                img.src = src;
                img.onload = resolve;
                img.onerror = resolve;
            });
        }));
    };

    useEffect(() => {
        let matchedPath = Object.keys(pageBannerConfigs).find(path =>
            location.pathname === path
        ) || Object.keys(pageBannerConfigs).find(path =>
            location.pathname.startsWith(path)
        );

        const currentPageConfig = pageBannerConfigs[matchedPath] || pageBannerConfigs['/'];
        const backgrounds = isMobile
            ? currentPageConfig.mobileBackgrounds
            : currentPageConfig.desktopBackgrounds;

        setBannerConfig({
            backgrounds,
            isSingleImage: currentPageConfig.isSingleImage,
            mobileClass: currentPageConfig.mobileClass
        });

        if (!currentPageConfig.isSingleImage && window.jQuery && window.jQuery.fn.owlCarousel) {
            preloadImages(backgrounds).then(() => {
                requestAnimationFrame(() => {
                    const $carousel = window.jQuery('.banner-owl-carousel');
                    if ($carousel && $carousel.length > 0) {
                        carouselRef.current = $carousel[0];

                        if ($carousel.hasClass('owl-loaded')) {
                            $carousel.trigger('destroy.owl.carousel');
                        }

                        $carousel.owlCarousel({
                            items: 1,
                            loop: true,
                            nav: false,
                            dots: false,
                            autoplay: true,
                            autoplayTimeout: 5000,
                            smartSpeed: 1000,
                            onTranslate: resetAutoplay
                        });
                    }
                });
            });
        }
    }, [location.pathname, isMobile, pageBannerConfigs, resetAutoplay]);

    useEffect(() => {
        const bannerWrapper = bannerWrapperRef.current;
        if (bannerWrapper && !bannerConfig.isSingleImage) {
            bannerWrapper.addEventListener('mousemove', handleMouseMove);
            bannerWrapper.addEventListener('click', handleClick);
            return () => {
                bannerWrapper.removeEventListener('mousemove', handleMouseMove);
                bannerWrapper.removeEventListener('click', handleClick);
            };
        }
    }, [bannerConfig.isSingleImage, handleMouseMove, handleClick]);

    const renderBanner = () => {
        const additionalClass = isMobile ? `${bannerConfig.mobileClass} mobile-banner` : bannerConfig.mobileClass;

        if (bannerConfig.isSingleImage) {
            return (
                <div
                    ref={bannerWrapperRef}
                    className={`banner-wrapper single-image ${additionalClass} ${cursorStyle}`}
                    style={{
                        backgroundImage: `url(${bannerConfig.backgrounds[0]})`,
                        backgroundColor: '#eee',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
            );
        }

        return (
            <div
              ref={bannerWrapperRef}
              className={`banner-wrapper multi-image ${additionalClass} ${cursorStyle}`}
            >
              <div className="banner-owl-carousel owl-carousel">
                {bannerConfig.backgrounds.map((bg, index) => (
                  <div
                    key={index}
                    className={`banner-container ${isMobile ? 'mobile-banner' : ''}`}
                    style={{
                      backgroundImage: `url(${bg})`,
                      backgroundColor: '#eee',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                ))}
              </div>
            </div>
          );
          
    };

    return renderBanner();
}

export default Banner;
