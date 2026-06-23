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

export async function getGalleryItems(): Promise<GalleryItem[]> {
    const galleryDir = path.join(process.cwd(), "content", "gallery");
    const folders = fs.readdirSync(galleryDir);

    return folders
        .filter((folder) => {
            const folderPath = path.join(galleryDir, folder);
            return fs.statSync(folderPath).isDirectory();
        })
        .map((folder) => {
            const dataPath = path.join(galleryDir, folder, "data.md");
            const fileContents = fs.readFileSync(dataPath, "utf-8");
            const {data} = matter(fileContents);

            return {
                slug: folder,
                title: data.title,
                description: data.description,
                artist: data.artist,
                imagePath: `/images/gallery/${folder}/image.jpg`,
            };
        });
}