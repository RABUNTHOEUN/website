"use client"
import { useState } from 'react';
import Link from "next/link";

export default function Header() {
    const categories = [
        { name: 'Store', slug: 'stores' },
        { name: 'Mac', slug: 'macs' },
        { name: 'iPad', slug: 'ipads' },
        { name: 'iPhone', slug: 'iphones' },
        { name: 'Watch', slug: 'watches' },
        { name: 'Vision', slug: 'vision' },
        { name: 'AriPods', slug: 'ariPods' },
        { name: 'TV &Home', slug: 'tv&home' },
        { name: 'Entertainment', slug: 'entertainment' },
        { name: 'Accessories', slug: 'accessories' },
        { name: 'Support', slug: 'support' },
    ];


    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <Link href="/"><h1 className="text-2xl font-semibold">Apple</h1></Link>
                    <div className="md:hidden">
                    <button
                            onClick={toggleMenu}
                            className="block text-gray-400 hover:text-white focus:text-white focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                {isMenuOpen ? (
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 4H4v2h16v-2z"
                                    />
                                ) : (
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                    <nav className={`md:flex space-x-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
                        {categories.map((category) => (
                            <a
                                key={category.slug}
                                href={`/${category.slug}`}
                                className="block md:inline-block hover:no-underline hover:caret-stone-600"
                            >
                                {category.name}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
}
