// ScrollToTopButton.js
"use client";
import { useEffect, useState } from 'react';
import { BiUpArrowAlt } from 'react-icons/bi';
const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const handleScroll = () => {
        if (window.pageYOffset > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        isVisible && (
            <button className="scroll-to-top" onClick={scrollToTop}>
                 <BiUpArrowAlt />
            </button>

        )
    );
};

export default ScrollToTopButton;
