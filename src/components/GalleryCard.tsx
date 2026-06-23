// src/components/GalleryCard.tsx
import Image from "next/image";

interface GalleryCardProps {
    slug: string;
    title: string;
    description: string;
    artist: string;
    imagePath: string;
}

export default function GalleryCard({ title, description, artist, imagePath }: GalleryCardProps) {
    return (
        <div className="card bg-base-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <figure className="relative h-56">
                <Image src={imagePath} alt={title} fill className="object-cover" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="text-base-content/70 text-sm">{description}</p>
                {artist && (
                    <div className="card-actions justify-end mt-2">
                        <div className="font-semibold">{artist}</div>
                    </div>
                )}
            </div>
        </div>
    );
}