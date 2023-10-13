'use client';
import { Checkbox, Label } from 'flowbite-react';
export default function CheckboxElement() {
    return (
        <div
            className="flex max-w-md flex-col gap-4"
            id="checkbox"
        >
            <div className="flex items-center gap-2">
                <Checkbox
                    defaultChecked
                    id="accept"
                />
                <Label
                    className="flex"
                    htmlFor="agree"
                >
                    <p>
                        I agree with the
                    </p>
                </Label>
            </div>
            <div className="flex items-center gap-2">
                <Checkbox id="promotion" />
                <Label htmlFor="promotion">
                    I want to get promotional offers
                </Label>
            </div>
            <div className="flex items-center gap-2">
                <Checkbox id="age" />
                <Label htmlFor="age">
                    I am 18 years or older
                </Label>
            </div>
        </div>
    );
}


