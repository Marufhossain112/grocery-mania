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
                className="inline-flex w-full justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
                type="button"
            >
                <p>
                    Order now
                </p>
            </button>
        </Card>
    );
}


