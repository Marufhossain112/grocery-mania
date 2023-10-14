import GMNavbar from '@/ui/components/Navbar';
import UserProfileCard from '@/ui/components/ProfileCard';
import React from 'react';

const Profile = () => {
    return (
        <div>
            <GMNavbar />
            <div style={{ marginTop: "2rem" }} className='flex justify-center items-center '>
                <UserProfileCard />
            </div>
        </div>
    );
};

export default Profile;