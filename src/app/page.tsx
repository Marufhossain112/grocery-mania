// @ts-nocheck
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
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
const HomePage = () => {
  return (
    <div id='home'>
      <Head>
    <title>Maruf</title>
      </Head>
      <div>
        {
          <div><GMNavbar />
            <div style={{ marginTop: "2rem" }}>
              <Featured />
            </div>
            <div style={{ marginTop: "3rem" }}>
              <Gallery />
            </div>
            <div style={{ marginTop: "3rem" }}>
              <Testimonial />
            </div>
            <div style={{ marginTop: "3rem" }}>
              <FAQCard />
            </div>
            <div style={{ marginTop: "5rem" }}>
              <AboutUs />
            </div>
            <ScrollToTopButton />
            <GMFooter /></div>
        }
      </div>
    </div>
  );
};
export default HomePage;