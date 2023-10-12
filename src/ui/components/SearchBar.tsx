'use client';

import { Button, Checkbox, Label, TextInput } from 'flowbite-react';

export default function SearchBar() {
    return (
        <form className="flex max-w-md flex-col gap-4">
            <div>

                <TextInput
                    id="search"
                    placeholder="Search.."
                    required
                    type="text"
                />
            </div>
        </form>
    );
}


