// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const aboutLinks = [
    { href: "/about/project", label: "Project" },
    { href: "/about/handicraft", label: "Handicraft" },
    { href: "/about/background", label: "Background" },
];

export default function Navbar() {
    const [aboutOpen, setAboutOpen] = useState(false);
    const dropdownRef = useRef<HTMLLIElement>(null);

    // Close on outside click
    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setAboutOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="navbar bg-base-100 border-b border-base-200 shadow-sm sticky top-0 z-50 px-6">
            {/* Logo */}
            <div className="navbar-start">
                <Link href="/" className="flex items-center gap-2">
                    <div className="avatar placeholder">
                        <div className="bg-primary text-primary-content rounded-full w-8">
                            <span className="text-sm font-bold">M</span>
                        </div>
                    </div>
                    <span className="text-lg font-bold text-base-content">Pragati Path</span>
                </Link>
            </div>

            {/* Desktop Links */}
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-1">
                    <li>
                        <Link href="/" onClick={() => setAboutOpen(false)}>Home</Link>
                    </li>

                    {/* About dropdown */}
                    <li ref={dropdownRef} className="relative">
                        <button
                            onClick={() => setAboutOpen((prev) => !prev)}
                            className="flex items-center gap-1"
                        >
                            About
                            <svg
                                className={`w-3.5 h-3.5 transition-transform duration-200 ${aboutOpen ? "rotate-180" : ""}`}
                                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {aboutOpen && (
                            <ul className="absolute top-full left-0 mt-1 w-48 bg-base-100 border border-base-200 rounded-box shadow-md z-50 p-1">
                                {aboutLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link href={link.href} onClick={() => setAboutOpen(false)}>
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>

                    <li>
                        <Link href="/gallery" onClick={() => setAboutOpen(false)}>Gallery</Link>
                    </li>
                    <li>
                        <Link href="/contact" onClick={() => setAboutOpen(false)}>Contact</Link>
                    </li>
                </ul>
            </div>

            {/* Mobile Hamburger */}
            <div className="navbar-end lg:hidden">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link href="/">Home</Link></li>
                        <li>
                            <span className="font-semibold">About</span>
                            <ul>
                                {aboutLinks.map((link) => (
                                    <li key={link.href}><Link href={link.href}>{link.label}</Link></li>
                                ))}
                            </ul>
                        </li>
                        <li><Link href="/gallery">Gallery</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}