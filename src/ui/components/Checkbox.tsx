'use client';
import { Checkbox, Label } from 'flowbite-react';
export default function CheckboxElement() {
    return (
        <div
            className="flex max-w-md flex-col gap-4"
            id="checkbox"
        >
            {/* <div className="flex items-center gap-2">
                <Checkbox
                    defaultChecked
                    id="accept"
                />
                <Label
                    className="flex"
                    htmlFor="agree"
                >
                    <p>
                        Category
                    </p>
                </Label>
            </div> */}
            <div className="flex items-center gap-2">
                <Checkbox id="promotion" />
                <Label htmlFor="promotion">
                    In stock
                </Label>
            </div>
            <div className="flex items-center gap-2">
                <Checkbox id="promotion" />
                <Label htmlFor="promotion">
                    Fish
                </Label>
            </div>
            <div className="flex items-center gap-2">
                <Checkbox id="promotion" />
                <Label htmlFor="promotion">
                    Rice
                </Label>
            </div>
            <div className="flex items-center gap-2">
                <Checkbox id="promotion" />
                <Label htmlFor="promotion">
                    Suji
                </Label>
            </div>
            <div className="flex items-center gap-2">
                <Checkbox id="promotion" />
                <Label htmlFor="promotion">
                    Fruit
                </Label>
            </div>

        </div>
    );
}


