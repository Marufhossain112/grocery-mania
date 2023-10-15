'use client';

import { Label, Select } from 'flowbite-react';

export default function SelectInput() {
    return (
        <div
            className="max-w-md"
            id="select"
        >
            <div className="mb-2 block">
                <Label
                    htmlFor="countries"
                />
            </div>
            <Select
                id="countries"
                required
            >
                <option>
                    Low to High
                </option>
                <option>
                    High to Low
                </option>
                <option>
                    A to Z
                </option>
                <option>
                    Z to A
                </option>
            </Select>
        </div>
    );
}


