'use client';

import { Card } from 'flowbite-react';

export default function PricingCard() {
    return (
        <Card style={{ width: "17rem" }}>
            <h5 className=" text-md font-medium text-center">
                Order summery
            </h5>
            <ul className="my-7 space-y-5">
                <li className=' flex justify-between'>
                    <span>items </span>
                    <span>$40</span>
                </li>
                <li className=' flex justify-between'>
                    <span>delivery </span>
                    <span>$10</span>
                </li>
                <li className=' flex justify-between'>
                    <span>vat </span>
                    <span>$1</span>
                </li>
                <li className=' flex justify-between'>
                    <span>total </span>
                    <span>$30</span>
                </li>
            </ul>
            <button
               className="add-to-cart rounded-lg px-5 py-2.5"
                type="button"
            >
                <p>
                    Order now
                </p>
            </button>
        </Card>
    );
}


