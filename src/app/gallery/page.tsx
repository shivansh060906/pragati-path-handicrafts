import { getGalleryItems } from "@/lib/getGalleryItems";
import GalleryCard from "@/components/GalleryCard";
import {FadeText} from "@/components/ui/fade-text";

export default async function GalleryPage() {
    const items = await getGalleryItems();

    return (
        <main>
            <section className="relative h-48 md:h-70 overflow-hidden">
                <img
                    src="/gallery.jpg"
                    alt="Background Banner"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/45" />

                <div className="relative z-10 flex h-full items-center justify-center px-6 mt-10">
                    <FadeText
                        text="Gallery"
                        className="text-center !text-5xl md:text-xs text-white"
                        direction="up"
                        staggerDelay={0.3}
                    />
                </div>
            </section>

            <div className="max-w-5xl mx-auto p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {items.map((item) => (
                    <GalleryCard key={item.slug} {...item} />
                ))}
            </div>
        </main>
    );
}