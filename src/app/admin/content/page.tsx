"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

const PAGES = [
    { key: "homepage", label: "Homepage" },
    { key: "about/project", label: "Karigari ki Virasat" },
    { key: "about/handicraft", label: "Handicraft" },
    { key: "about/handicraft/wooden-toys", label: "Wooden Toys" },
    { key: "about/handicraft/wooden-carving", label: "Wooden Carving" },
    { key: "about/handicraft/zari", label: "Zari Zardozi" },
    { key: "about/background", label: "Background" },
];

export default function AdminContentPage() {
    const supabase = createClient();
    const [activePage, setActivePage] = useState("homepage");
    const [content, setContent] = useState("");
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        async function load() {
            const { data } = await supabase
                .from("page_content")
                .select("content")
                .eq("page", activePage)
                .single();
            setContent(data?.content ?? "");
        }
        load();
    }, [activePage]);

    async function handleSave() {
        setSaving(true);
        setMessage("");
        const { error } = await supabase
            .from("page_content")
            .upsert(
                { page: activePage, content, updated_at: new Date().toISOString() },
                { onConflict: "page" }
            );
        setSaving(false);
        setMessage(error ? `Error: ${error.message}` : "Saved successfully!");
    }

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Edit Page Content</h1>

            <div className="tabs tabs-boxed mb-6">
                {PAGES.map((p) => (
                    <button
                        key={p.key}
                        className={`tab ${activePage === p.key ? "tab-active" : ""}`}
                        onClick={() => { setActivePage(p.key); setMessage(""); }}
                    >
                        {p.label}
                    </button>
                ))}
            </div>

            <div className="card bg-base-100 shadow">
                <div className="card-body gap-4">
                    <p className="text-sm text-base-content/60">Editing: <strong>{activePage}</strong></p>
                    <textarea
                        className="textarea textarea-bordered w-full font-mono text-sm"
                        rows={18}
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    {message && (
                        <div className={`alert ${message.startsWith("Error") ? "alert-error" : "alert-success"} text-sm`}>
                            {message}
                        </div>
                    )}
                    <button className="btn btn-primary self-end" onClick={handleSave} disabled={saving}>
                        {saving ? <span className="loading loading-spinner" /> : "Save Changes"}
                    </button>
                </div>
            </div>

            {/* Markdown Guide */}
            <div className="collapse collapse-arrow bg-base-200 mb-2">
                <input type="checkbox" />
                <div className="collapse-title font-medium text-sm">
                    Markdown Guide (click to expand)
                </div>
                <div className="collapse-content">
                    <div className="grid grid-cols-2 gap-4 text-sm mt-2">
                        <div>
                            <p className="font-semibold mb-2 text-base-content">You type:</p>
                            <pre className="bg-base-300 p-3 rounded text-xs leading-6 whitespace-pre">{`# Heading 1
## Heading 2
### Heading 3

Normal paragraph text.
Leave a blank line between
paragraphs.

**bold text**
*italic text*

- Bullet item
- Another item

1. Numbered item
2. Another item`}</pre>
                        </div>
                        <div>
                            <p className="font-semibold mb-2 text-base-content">Result:</p>
                            <div className="bg-base-300 p-3 rounded text-xs leading-6">
                                <p className="text-lg font-bold">Heading 1</p>
                                <p className="text-base font-bold">Heading 2</p>
                                <p className="text-sm font-bold">Heading 3</p>
                                <p className="mt-1">Normal paragraph text.</p>
                                <p><strong>bold text</strong> &nbsp; <em>italic text</em></p>
                                <ul className="list-disc list-inside"><li>Bullet item</li><li>Another item</li></ul>
                                <ol className="list-decimal list-inside"><li>Numbered item</li><li>Another item</li></ol>
                            </div>
                        </div>
                    </div>
                    <div className="alert alert-warning text-xs mt-3">
                        Always leave a blank line between paragraphs and headings, otherwise they won't render correctly.
                    </div>
                </div>
            </div>



        </div>

    );
}