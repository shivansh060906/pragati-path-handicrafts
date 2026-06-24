"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

interface GalleryItem {
    id: string;
    title: string;
    description: string;
    artist: string;
    image_url: string;
}

export default function AdminGalleryPage() {
    const router = useRouter();
    const supabase = createClient();
    const [items, setItems] = useState<GalleryItem[]>([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [artist, setArtist] = useState("");
    const [file, setFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);
    const [message, setMessage] = useState("");

    async function loadItems() {
        const { data } = await supabase
            .from("gallery_items")
            .select("*")
            .order("created_at", { ascending: false });
        setItems(data ?? []);
        router.refresh();
    }

    useEffect(() => { loadItems(); }, []);

    async function handleAdd() {
        if (!file || !title || !description || !artist) {
            setMessage("Please fill in all fields and select an image.");
            return;
        }
        setUploading(true);
        setMessage("");

        const ext = file.name.split(".").pop();
        const fileName = `${Date.now()}.${ext}`;

        const { error: uploadError } = await supabase.storage
            .from("gallery-images")
            .upload(fileName, file);

        if (uploadError) {
            setMessage(`Upload error: ${uploadError.message}`);
            setUploading(false);
            return;
        }

        const { data: { publicUrl } } = supabase.storage
            .from("gallery-images")
            .getPublicUrl(fileName);

        const { error: insertError } = await supabase
            .from("gallery_items")
            .insert({ title, description, artist, image_url: publicUrl });

        if (insertError) {
            setMessage(`Save error: ${insertError.message}`);
        } else {
            setMessage("Item added successfully!");
            setTitle(""); setDescription(""); setArtist(""); setFile(null);
            loadItems();
        }
        setUploading(false);
    }

    async function handleDelete(item: GalleryItem) {
        const fileName = item.image_url.split("/").pop()!;
        await supabase.storage.from("gallery-images").remove([fileName]);
        await supabase.from("gallery_items").delete().eq("id", item.id);
        loadItems();
    }

    return (
        <div className="max-w-5xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Manage Gallery</h1>

            {/* Add form */}
            <div className="card bg-base-100 shadow mb-10">
                <div className="card-body gap-4">
                    <h2 className="card-title">Add New Item</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input className="input input-bordered" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                        <input className="input input-bordered" placeholder="Artist" value={artist} onChange={(e) => setArtist(e.target.value)} />
                    </div>
                    <textarea className="textarea textarea-bordered" placeholder="Description" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} />
                    <input type="file" accept="image/*" className="file-input file-input-bordered w-full" onChange={(e) => setFile(e.target.files?.[0] ?? null)} />
                    {message && (
                        <div className={`alert ${message.startsWith("Item added") ? "alert-success" : "alert-error"} text-sm`}>{message}</div>
                    )}
                    <button className="btn btn-primary self-end" onClick={handleAdd} disabled={uploading}>
                        {uploading ? <span className="loading loading-spinner" /> : "Add to Gallery"}
                    </button>
                </div>
            </div>

            {/* Existing items */}
            <h2 className="text-xl font-semibold mb-4">Current Items ({items.length})</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((item) => (
                    <div key={item.id} className="card bg-base-100 shadow">
                        <figure>
                            <img src={item.image_url} alt={item.title} className="w-full h-48 object-cover" />
                        </figure>
                        <div className="card-body gap-1 p-4">
                            <h3 className="font-semibold">{item.title}</h3>
                            <p className="text-xs text-base-content/60">{item.artist}</p>
                            <p className="text-sm text-base-content/70 line-clamp-2">{item.description}</p>
                            <button
                                className="btn btn-error btn-sm mt-2"
                                onClick={() => handleDelete(item)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}