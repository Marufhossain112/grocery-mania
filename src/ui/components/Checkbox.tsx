// @ts-nocheck
'use client';
import { Checkbox, Label } from 'flowbite-react';
import { useState } from 'react';
export default function CheckboxElement({ setStatus, setCategory }) {
    const [isCheck, setIsCheck] = useState(true);
    const filterFish = () => {
        setIsCheck(!isCheck);
        setCategory(isCheck ? "fish" : "");
    };
    const filterInStock = () => {
        setIsCheck(!isCheck);
        setStatus(isCheck ? "in stock" : "");
    };
    const filterRice = () => {
        setIsCheck(!isCheck);
        setCategory(isCheck ? "rice" : "");
    };
    const filterSuji = () => {
        setIsCheck(!isCheck);
        setCategory(isCheck ? "suji" : "");
    };
    const filterFruit = () => {
        setIsCheck(!isCheck);
        setCategory(isCheck ? "fruit" : "");
    };
    const filterBeverages = () => {
        setIsCheck(!isCheck);
        setCategory(isCheck ? "beverages" : "");
    };
    return (
        <div
            className="flex max-w-md flex-col gap-4"
            id="checkbox"
        >
            <div className="flex items-center gap-2">
                <Checkbox id="inStock" onClick={filterInStock} />
                <Label htmlFor="inStock">
                    In stock
                </Label>
            </div>
            {/* <div className="flex items-center gap-2">
                <Checkbox id="promotion" onClick={() => setCategory("fish")} />
                <Label htmlFor="promotion">
                    Fish
                </Label>
            </div> */}
            <div className="flex items-center gap-2">
                <Checkbox id="fish" onClick={filterFish} />
                <Label htmlFor="fish">
                    Fish
                </Label>
            </div>
            <div className="flex items-center gap-2">
                <Checkbox id="rice" onClick={() => setCategory("rice")} />
                <Label htmlFor="rice">
                    Rice
                </Label>
            </div>
            <div className="flex items-center gap-2">
                <Checkbox id="suji" onClick={filterSuji} />
                <Label htmlFor="suji">
                    Suji
                </Label>
            </div>
            <div className="flex items-center gap-2">
                <Checkbox id="fruit" onClick={filterFruit} />
                <Label htmlFor="fruit">
                    Fruit
                </Label>
            </div>
            <div className="flex items-center gap-2">
                <Checkbox id="beverages" onClick={filterBeverages} />
                <Label htmlFor="beverages">
                    Beverages
                </Label>
            </div>
        </div>
    );
}


