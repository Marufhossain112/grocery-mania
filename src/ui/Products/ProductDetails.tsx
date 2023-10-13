import Image from 'next/image';
import React from 'react';
import RatingReview from '../components/RatingReview';
import { BsShareFill } from 'react-icons/bs';
import { Button } from 'flowbite-react';
import Products from './Product';
import RelatedProducts from './RelatedProducts';
const ProductDetails = () => {
    return (
        <div>
            {/* intro part */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: "1fr 1fr",
                placeItems: "end",
                marginTop: "3rem",
                gap: "3rem"
            }} className='container mx-auto px-4 '>
                <div>
                    <Image src="/assets/level-2.jpeg" height={80} width={300} alt='product' />
                </div>
                <div>
                    <h4 style={{ marginBottom: "6px" }} className='text-2xl font-medium'>A burning shoes </h4>
                    <div className='flex justify-between items-center'>
                        <div style={{ marginBottom: "4px" }} className='flex items-center'><span style={{ fontSize: "1.5rem" }} className='mr-2 '>$40.00</span><RatingReview /> <span className='ml-2'>(10 reviews)</span></div> <div><BsShareFill /></div>
                    </div>
                    <span>Status: in stock</span>
                    <p style={{ paddingTop: "6px", marginBottom: "8px", color: "#3c483c" }}>
                        Strong light Induction head lamp, distant radiation, super bright head mounted miners lamp, Waterproof night fishing lamp
                        Strong light Induction head lamp, distant radiation, super bright head mounted miners lamp, Waterproof night fishing lamp</p>
                    <p style={{ color: "#3c483c" }}>Location:Savar,Dhaka</p>
                    <p style={{ color: "#3c483c" }}>Contact:0134898574985</p>
                    <div className='flex mt-2'>
                        <Button className='mr-2'>Buy Now </Button>
                        <Button color='purple'>Add to Cart </Button>
                    </div>
                </div>
            </div >
            {/* additional details */}
            <div className='container mx-auto px-4 mt-10'>
                <h4 style={{ marginTop: "2rem", marginBottom: "0.3rem" }} className='text-xl font-medium'>Additional details</h4>
                <p>Using 4 core XHP50 lamp beads,, the maximum lighting distance can reach 500 meters. It can easily illuminate buildings and is the best choice for your outdoor adventure.
                    Built-in sensor, when you turn on the sensor mode, you can turn on the light with a wave of your hand, freeing your hands. (Sensor type)
                    Support zoom. Extend the head for zooming, suitable for different scenes of lighting.
                    Waterproof design. IP65 waterproof rating, can be used normally in rainy days, but please do not use for diving.
                    Machining center carving process, segmented current, easy to dissipate heat. Large lens, large aperture, wide irradiation range.</p>
                {/* Related products */}
                <div>
                    <h4 style={{ marginTop: "2rem", marginBottom: "0.3rem" }} className='text-xl font-medium'>Related products</h4>
                    <RelatedProducts />
                </div>
            </div>
        </div>
    );
};
export default ProductDetails;