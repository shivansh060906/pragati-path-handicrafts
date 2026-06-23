import { getContent } from "@/lib/getContent";
import ContentRenderer from "@/components/ContentRenderer";

export default async function BackgroundPage() {
    const content = await getContent("about/background.md");

    return (
        <main className="max-w-6xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-8">Background of Woodcraft</h1>
            <ContentRenderer content={content} />
        </main>
    );
}