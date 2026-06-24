"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function LayoutWrapper({
                                          children,
                                      }: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const isAdmin = pathname.startsWith("/admin");

    return (
        <>
            {!isAdmin && <Navbar />}
            <div className="flex-1">
                {children}
            </div>
        </>
    );
}