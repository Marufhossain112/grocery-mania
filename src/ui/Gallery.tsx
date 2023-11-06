import { useVisualsProductsQuery } from '@/redux/api/api';
import { Spinner } from 'flowbite-react';
import Image from 'next/image';
import React from 'react';
const Gallery = () => {
    const { data, isLoading } = useVisualsProductsQuery(undefined);
    if (isLoading) {
        return <div style={{ height: "100vh" }} className="flex justify-center items-center">
            <Spinner size="lg" aria-label="Center-aligned spinner example" />
        </div>;
    }
    return (
        <div>
            <div className="flex flex-wrap justify-center mt-4 gap-4">
                {
                    data?.map((image: any, index: number) => (
                        <div key={index} className='gallery-pic'>
                            <Image className="h-auto max-w-full rounded-lg" src={image.img} alt="" width={200} height={200} />
                        </div>
                    ))
                }
            </div>
        </div >
    );
};
export default Gallery;