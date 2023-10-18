// @ts-nocheck
'use client';
import { Checkbox, Label } from 'flowbite-react';
import { useState } from 'react';
export default function CheckboxElement({ setStatus, setCategory }) {
    // const [isInStock, setIsInStock] = useState(false);
    // console.log("isInStock", isInStock);
    return (
        <div
            className="flex max-w-md flex-col gap-4"
            id="checkbox"
        >
            <div className="flex items-center gap-2">
                <Checkbox id="promotion" onClick={() => {
                    // setIsInStock(!isInStock);
                    setStatus("in stock");
                }} />
                <Label htmlFor="promotion">
                    In stock
                </Label>
            </div>
            <div className="flex items-center gap-2">
                <Checkbox id="promotion" onClick={() => setCategory("fish")} />
                <Label htmlFor="promotion">
                    Fish
                </Label>
            </div>
            <div className="flex items-center gap-2">
                <Checkbox id="promotion" onClick={() => setCategory("rice")} />
                <Label htmlFor="promotion">
                    Rice
                </Label>
            </div>
            <div className="flex items-center gap-2">
                <Checkbox id="promotion" onClick={() => setCategory("suji")} />
                <Label htmlFor="promotion">
                    Suji
                </Label>
            </div>
            <div className="flex items-center gap-2">
                <Checkbox id="promotion" onClick={() => setCategory("fruit")} />
                <Label htmlFor="promotion">
                    Fruit
                </Label>
            </div>
            <div className="flex items-center gap-2">
                <Checkbox id="promotion" onClick={() => setCategory("beverages")} />
                <Label htmlFor="promotion">
                    Beverages
                </Label>
            </div>
        </div>
    );
}


