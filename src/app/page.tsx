import AboutUs from '@/ui/AboutUs';
import Featured from '@/ui/Featured';
import Gallery from '@/ui/Gallery';
import Testimonial from '@/ui/Testimonials';
import GMFooter from '@/ui/components/Footer';
import GMNavbar from '@/ui/components/Navbar';
import React from 'react';
const HomePage = () => {
  return (
    <div>
      <GMNavbar />
      <Featured />
      <Testimonial />
      <Gallery />
      <AboutUs />
      <GMFooter />
    </div>
  );
};
export default HomePage;