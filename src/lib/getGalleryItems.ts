import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface GalleryItem {
    slug: string;
    title: string;
    description: string;
    artist: string;
    imagePath: string;
}

const SUPPORTED_EXTENSIONS = ["jpg", "jpeg", "png", "webp"];

function findImageFile(slug: string): string {
    const publicImageDir = path.join(process.cwd(), "public", "images", "gallery", slug);

    for (const ext of SUPPORTED_EXTENSIONS) {
        const filePath = path.join(publicImageDir, `image.${ext}`);
        if (fs.existsSync(filePath)) {
            return `/images/gallery/${slug}/image.${ext}`;
        }
    }
    throw new Error(`No image found in gallery folder: ${slug}`);
}

export async function getGalleryItems(): Promise<GalleryItem[]> {
    const galleryDir = path.join(process.cwd(), "content", "gallery");
    const folders = fs.readdirSync(galleryDir);

    return folders
        .filter((folder) => {
            const folderPath = path.join(galleryDir, folder);
            return fs.statSync(folderPath).isDirectory();
        })
        .map((folder) => {
            const folderPath = path.join(galleryDir, folder);
            const dataPath = path.join(folderPath, "data.md");
            const { data } = matter(fs.readFileSync(dataPath, "utf-8"));

            return {
                slug: folder,
                title: data.title,
                description: data.description,
                artist: data.artist,
                imagePath: findImageFile(folder),
            };
        });
}