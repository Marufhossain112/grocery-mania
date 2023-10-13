"use client";
import AboutUs from '@/ui/AboutUs';
import FAQCard from '@/ui/FAQCard';
import Featured from '@/ui/Featured';
import Gallery from '@/ui/Gallery';
import Newsletter from '@/ui/Newsletter';
import Testimonial from '@/ui/Testimonials';
import GMFooter from '@/ui/components/Footer';
import GMNavbar from '@/ui/components/Navbar';
import ScrollToTopButton from '@/ui/components/ScrollToTopButton';
import { Spinner } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {
        isLoading ? <div style={{height:"100vh"}} className="flex justify-center items-center">
          <Spinner size="lg" aria-label="Center-aligned spinner example" />
        </div> : <div><GMNavbar />
          <Featured />
          <Testimonial />
          <Gallery />
          <AboutUs />
          <FAQCard />
          <Newsletter />
          <ScrollToTopButton />
          <GMFooter /></div>
      }
    </div>
  );
};
export default HomePage;