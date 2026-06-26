// app/layout.tsx

import type { Metadata } from "next";
import "@/styles/globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
    title: "Karigari ki Virasat",
    description: "An informational website",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" data-theme="light" className={cn("font-sans", inter.variable)}>
        <body className="min-h-screen bg-base-100 text-base-content">
        <LayoutWrapper>
            {children}
        </LayoutWrapper>
        </body>
        </html>
    );
}