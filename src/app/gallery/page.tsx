import { getGalleryItems } from "@/lib/getGalleryItems";
import GalleryCard from "@/components/GalleryCard";

export default async function GalleryPage() {
    const items = await getGalleryItems();

    return (
        <main className="max-w-6xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-8">Gallery</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {items.map((item) => (
                    <GalleryCard key={item.slug} {...item} />
                ))}
            </div>
        </main>
    );
}