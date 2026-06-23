// src/app/about/page.tsx
import Link from "next/link";

const subpages = [
    { href: "/about/project", label: "Project", desc: "Information about the project." },
    { href: "/about/handicraft", label: "Handicraft", desc: "Details of the handicrafts." },
    { href: "/about/background", label: "Background", desc: "Historical and cultural background." },
];

export default function AboutPage() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-16">
            <h1 className="text-3xl font-bold mb-10">About</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {subpages.map((page) => (
                    <Link key={page.href} href={page.href}>
                        <div className="card bg-base-200 hover:bg-base-300 transition-colors shadow-sm cursor-pointer">
                            <div className="card-body">
                                <h2 className="card-title">{page.label}</h2>
                                <p className="text-base-content/70 text-sm">{page.desc}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}