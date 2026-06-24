// src/components/GalleryCard.tsx

import {
    CutoutCard,
    CutoutCardMedia,
    CutoutCardImage,
    CutoutCardContent,
    cutoutCardSurfaceClassName,
} from "@/components/ui/cutout-card";

interface GalleryCardProps {
    title: string;
    description: string;
    artist: string;
    imagePath: string;
}

export default function GalleryCard({
                                        title,
                                        description,
                                        artist,
                                        imagePath,
                                    }: GalleryCardProps) {
    return (
        <CutoutCard
            className={`
                ${cutoutCardSurfaceClassName}
                overflow-hidden
                rounded-3xl
                bg-base-100
                shadow-sm
                hover:shadow-xl
                transition-all
                duration-300
            `}
        >
            <CutoutCardMedia className="relative h-72">
                <CutoutCardImage
                    src={imagePath}
                    alt={title}
                    priority={false}
                />
            </CutoutCardMedia>

            <CutoutCardContent className="space-y-5 p-6">
                <div>
                    <h2 className="text-2xl font-bold text-base-content">
                        {title}
                    </h2>

                    <p className="mt-3 text-base leading-relaxed text-base-content/70 line-clamp-3">
                        {description}
                    </p>
                </div>

                <div className="h-px w-full bg-base-300" />

                <div className="font-semibold text-base-content">
                    {artist || "Unknown Artist"}
                </div>
            </CutoutCardContent>
        </CutoutCard>
    );
}