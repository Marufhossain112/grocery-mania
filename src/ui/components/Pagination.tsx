// @ts-nocheck
'use client';
import { Pagination } from 'flowbite-react';
import { useState } from 'react';
export default function GMPagination({ setCurrentPage }) {
    const onPageChange = (page: number) => {
        setCurrentPage(page);
    };
    return (
        <Pagination
            currentPage={1}
            onPageChange={page => { setCurrentPage(page); }}
            totalPages={100}
            style={{ marginTop: "1rem" }}
        />
    );
}


