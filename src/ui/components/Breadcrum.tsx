'use client';

import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';

export default function GMBreadcrumb() {
    return (
        <Breadcrumb style={{ marginBottom: "1rem" }} aria-label="Default breadcrumb example">
            <Breadcrumb.Item
                href="/"
                icon={HiHome}
            >
                <p>
                    Home
                </p>
            </Breadcrumb.Item>
            <Breadcrumb.Item href="/products">
                Projects
            </Breadcrumb.Item>
        </Breadcrumb>
    );
}


