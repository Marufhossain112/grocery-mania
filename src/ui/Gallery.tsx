import Image from 'next/image';
import React from 'react';
const Gallery = () => {
    return (
        <div>
            <div className="flex flex-wrap justify-center mt-4 gap-4">
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src="/assets/level-2.jpeg" alt="" width={200} height={200} />
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src="/assets/level-2.jpeg" width={200} alt="" height={200} />
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src="/assets/level-2.jpeg" width={200} alt="" height={200} />
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src="/assets/level-2.jpeg" width={200} alt="" height={200} />
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src="/assets/level-2.jpeg" width={200} alt="" height={200} />
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src="/assets/level-2.jpeg" width={200} alt="" height={200} />
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src="/assets/level-2.jpeg" width={200} alt="" height={200} />
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src="/assets/level-2.jpeg" width={200} alt="" height={200} />
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src="/assets/level-2.jpeg" width={200} alt="" height={200} />
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src="/assets/level-2.jpeg" width={200} alt="" height={200} />
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src="/assets/level-2.jpeg" width={200} alt="" height={200} />
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src="/assets/level-2.jpeg" width={200} alt="" height={200} />
                </div>
            </div>
        </div >
    );
};
export default Gallery;