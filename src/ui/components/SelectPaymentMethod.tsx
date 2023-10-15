'use client';
import { Label, Select } from 'flowbite-react';
export default function SelectPayment() {
    return (
        <div
            className="w-1/2"
            id="select"
        >
            <div className="mt-2 ">
                <div className='mt-3'><span >Payment method:</span>
                    <div className='w-1/2 '> <Select style={{ width: "20rem" }}
                        id="payment"
                        required
                    >
                        <option>
                            Bkash
                        </option>
                        <option>
                            Nagad
                        </option>
                        <option>
                            Rocket
                        </option>
                        <option>
                            DBBL
                        </option>
                    </Select></div>
                    <span>7 days return policy.</span>
                </div>
            </div>

        </div>
    );
}


