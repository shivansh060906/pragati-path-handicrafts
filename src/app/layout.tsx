// src/app/layout.tsx
import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    title: "MyProject",
    description: "An informational website",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" data-theme="light">
        <body className="min-h-screen flex flex-col bg-base-100 text-base-content">
        <Navbar />
        <div className="flex-1">
            {children}
        </div>
        </body>
        </html>
    );
}