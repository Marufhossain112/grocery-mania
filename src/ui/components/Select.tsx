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
                    United States
                </option>
                <option>
                    Canada
                </option>
                <option>
                    France
                </option>
                <option>
                    Germany
                </option>
            </Select>
        </div>
    );
}


