// @ts-nocheck
import GMNavbar from '@/ui/components/Navbar';
import PricingCard from '@/ui/components/OrderSummery';
import OrderingCard from '@/ui/components/OrderingCard';
import SelectPayment from '@/ui/components/SelectPaymentMethod';
import React from 'react';
const page = () => {
    return (
        <div>
            <GMNavbar />
            <div className='container mx-auto px-4 mt-4'>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "auto auto",
                    placeItems: "baseline",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "2rem",
                    marginTop: "7rem"
                }}>
                    <div>
                        <OrderingCard />
                        <SelectPayment />
                    </div>
                    <div>
                        <PricingCard />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default page;