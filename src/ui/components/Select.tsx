// @ts-nocheck
'use client';
import { Label, Select } from 'flowbite-react';
export default function SelectInput({ setSort }) {
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
                <option onClick={() => setSort('desc')}>
                    High to Low
                </option>
                <option onClick={() => setSort('asc')}>
                    Low to High
                </option>
            </Select>
        </div>
    );
}


