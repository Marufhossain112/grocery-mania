import Featured from '@/ui/Featured';
import MyFooter from '@/ui/components/Footer';
import GMFooter from '@/ui/components/Footer';
import GMNavbar from '@/ui/components/Navbar';
import React from 'react';
const HomePage = () => {
  return (
    <div>
      <GMNavbar />
      {/* <MyFooter /> */}
      <Featured />
    </div>
  );
};
export default HomePage;