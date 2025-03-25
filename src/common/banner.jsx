import React, { useEffect, useState, useRef } from 'react';
import './banner.css';

function Banner() {
    const [cursorStyle, setCursorStyle] = useState('default');
    const owlCarouselInstanceRef = useRef(null);

    useEffect(() => {
        if (window.jQuery && window.jQuery.fn.owlCarousel) {
            const $owlCarousel = window.jQuery('.banner-owl-carousel');

            // Initialize Owl Carousel
            owlCarouselInstanceRef.current = $owlCarousel.owlCarousel({
                items: 1,
                loop: true,
                nav: false,
                dots: false,
                autoplay: true,
                autoplayTimeout: 7000, // Auto-slide every 10 seconds
                smartSpeed: 1000,
                dotsClass: "banner-owl-dots",
                dotClass: "banner-owl-dot"
            });

            // Attach event listeners
            const owlContainer = document.querySelector('.banner-wrapper');
            if (owlContainer) {
                owlContainer.addEventListener('mousemove', handleMouseMove);
                owlContainer.addEventListener('click', handleClick);
            }
        }

        // Cleanup event listeners
        return () => {
            const owlContainer = document.querySelector('.banner-wrapper');
            if (owlContainer) {
                owlContainer.removeEventListener('mousemove', handleMouseMove);
                owlContainer.removeEventListener('click', handleClick);
            }
        };
    }, []);

    function handleMouseMove(e) {
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
    }

    function handleClick(e) {
        if (!window.jQuery) return;

        const container = e.currentTarget;
        const containerWidth = container.offsetWidth;
        const mouseX = e.clientX - container.getBoundingClientRect().left;
        const $owlCarousel = window.jQuery('.banner-owl-carousel');

        // Stop the autoplay temporarily
        $owlCarousel.trigger('stop.owl.autoplay');

        if (mouseX < containerWidth * 0.25) {
            $owlCarousel.trigger('prev.owl.carousel');
        } else if (mouseX > containerWidth * 0.75) {
            $owlCarousel.trigger('next.owl.carousel');
        }

        // Restart autoplay after a delay
        setTimeout(() => {
            $owlCarousel.trigger('play.owl.autoplay', [10000]); // Restart autoplay with 10 seconds delay
        }, 5000); // Pause for 5 seconds before resuming auto-slide
    }

    return (
        <div className={`banner-wrapper ${cursorStyle}`}>
            <div className="banner-owl-carousel owl-carousel">
                <div className="banner-container"></div>
                <div className="banner-container banner-second"></div>
            </div>
        </div>
    );
}

export default Banner;
