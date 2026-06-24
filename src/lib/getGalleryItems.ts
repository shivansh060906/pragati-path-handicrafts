import { createClient } from "@/lib/supabase/server";

export interface GalleryItem {
    id: string;
    slug: string;
    title: string;
    description: string;
    artist: string;
    imagePath: string;
}

export async function getGalleryItems(): Promise<GalleryItem[]> {
    const supabase = await createClient();
    const { data, error } = await supabase
        .from("gallery_items")
        .select("*")
        .order("created_at", { ascending: false });

    if (error || !data) return [];

    return data.map((item) => ({
        id: item.id,
        slug: item.id,
        title: item.title,
        description: item.description,
        artist: item.artist,
        imagePath: item.image_url,
    }));
}