"use client";

import Link from "next/link";
import {
    CutoutCard,
    CutoutCardMedia,
    CutoutCardImage,
    CutoutCardContent,
} from "@/components/ui/cutout-card";

const cards = [
    {
        title: "Wooden Carving",
        description: "Discover beautifully handcrafted wooden carvings created by skilled artisans.",
        image: "/wooden-carve.jpg",
        href: "/about/handicraft/wooden-carving",
    },
    {
        title: "Wooden Toys",
        description: "Traditional decorative toys showcasing timeless craftsmanship and culture.",
        image: "/wooden-toys.webp",
        href: "/about/handicraft/wooden-toys",
    },
    {
        title: "Zari Zardozi",
        description: "Luxurious, three-dimensional metal embroidery.",
        image: "/zari.webp",
        href: "/about/handicraft/zari",
    },
];

export default function HandicraftCategoryCards() {
    return (
        <section className="max-w-7xl mx-auto px-6 pb-20">
            <div className="mb-10 text-center">
                <h2 className="text-4xl font-bold">
                    Explore Our Heritage
                </h2>

                <p className="mt-3 text-base-content/70">
                    Get to know about the most beautiful traditional art forms
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cards.map((card) => (
                    <Link
                        key={card.title}
                        href={card.href}
                        className="group"
                    >
                        <CutoutCard
                            className="
                                overflow-hidden
                                rounded-3xl
                                bg-base-100
                                shadow-md
                                hover:shadow-2xl
                                transition-all
                                duration-300
                                hover:-translate-y-2
                                h-full
                            "
                        >
                            <CutoutCardMedia className="relative h-72 overflow-hidden rounded-t-3xl">
                                <CutoutCardImage
                                    src={card.image}
                                    alt={card.title}
                                    className="rounded-4xl object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </CutoutCardMedia>

                            <CutoutCardContent className="p-6">
                                <h3 className="text-2xl font-bold">
                                    {card.title}
                                </h3>

                                <p className="mt-3 text-base-content/70 leading-relaxed">
                                    {card.description}
                                </p>
                            </CutoutCardContent>
                        </CutoutCard>
                    </Link>
                ))}
            </div>
        </section>
    );
}