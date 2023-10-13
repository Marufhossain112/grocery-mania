import AboutUs from '@/ui/AboutUs';
import FAQCard from '@/ui/FAQCard';
import Featured from '@/ui/Featured';
import Gallery from '@/ui/Gallery';
import Newsletter from '@/ui/Newsletter';
import Testimonial from '@/ui/Testimonials';
import GMFooter from '@/ui/components/Footer';
import GMNavbar from '@/ui/components/Navbar';
import ScrollToTopButton from '@/ui/components/ScrollToTopButton';
import React from 'react';
const HomePage = () => {
  return (
    <div>
      <GMNavbar />
      <Featured />
      <Testimonial />
      <Gallery />
      <AboutUs />
      <FAQCard />
      <Newsletter />
      <ScrollToTopButton />
      <GMFooter />
    </div>
  );
};
export default HomePage;