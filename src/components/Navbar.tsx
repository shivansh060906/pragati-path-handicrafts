"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const aboutLinks = [
    { href: "/about/project", label: "Karigari Ki Virasat" },
    { href: "/about/background", label: "Background" },
    { href: "/about/handicraft", label: "Handicrafts" }
];

export default function Navbar() {
    const [aboutOpen, setAboutOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target as Node)
            ) {
                setAboutOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
            <nav
                className="
                    w-full max-w-7xl
                    h-20
                    rounded-2xl
                    border border-white/20
                    bg-white/15
                    backdrop-blur-xl
                    shadow-md
                    px-8
                    flex
                    items-center
                    justify-between
                "
            >
                {/* Logo */}
                <Link href="/" className="flex items-center gap-4">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={50}
                        height={50}
                        className="rounded-xl object-cover"
                    />
                    <h1 className="text-2xl text-white font-bold"
                        >Pragati Path Foundation</h1>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-4">
                    <Link
                        href="/"
                        className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition hover:bg-gray-100"
                    >
                        Home
                    </Link>

                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setAboutOpen(!aboutOpen)}
                            className="flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition hover:bg-gray-100"
                        >
                            About

                            <svg
                                className={`h-4 w-4 transition-transform ${
                                    aboutOpen ? "rotate-180" : ""
                                }`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2.5}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>

                        {aboutOpen && (
                            <div className="absolute right-0 mt-3 w-56 overflow-hidden rounded-2xl bg-white shadow-2xl">
                                {aboutLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setAboutOpen(false)}
                                        className="block px-5 py-3 text-black transition hover:bg-gray-100"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <Link
                        href="/gallery"
                        className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition hover:bg-gray-100"
                    >
                        Gallery
                    </Link>

                    <Link
                        href="/contact"
                        className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition hover:bg-gray-100"
                    >
                        Contact
                    </Link>
                </div>

                {/* Mobile */}
                <div className="dropdown dropdown-end lg:hidden">
                    <button
                        tabIndex={0}
                        className="btn btn-circle bg-white text-black border-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>

                    <ul
                        tabIndex={0}
                        className="menu dropdown-content mt-4 w-60 rounded-2xl bg-white p-3 shadow-2xl"
                    >
                        <li>
                            <Link href="/">Home</Link>
                        </li>

                        <li>
                            <details>
                                <summary>About</summary>
                                <ul>
                                    {aboutLinks.map((link) => (
                                        <li key={link.href}>
                                            <Link href={link.href}>
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </details>
                        </li>

                        <li>
                            <Link href="/gallery">Gallery</Link>
                        </li>

                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}