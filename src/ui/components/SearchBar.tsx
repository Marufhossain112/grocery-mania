'use client';

import { TextInput } from 'flowbite-react';

export default function SearchBar({ setSearch }) {
    // const searchInputData = (data) => {
    //     console.log(data);
    // };\
    const handleSearch = ()=>{
        
    }
    return (
        <form className="flex max-w-md flex-col gap-4">
            <div>

                <TextInput
                    id="search"
                    placeholder="Search.."
                    required
                    type="text"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
        </form>
    );
}


