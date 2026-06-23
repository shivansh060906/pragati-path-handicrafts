import { getContent } from "@/lib/getContent";
import ContentRenderer from "@/components/ContentRenderer";

export default async function HomePage() {
    const content = await getContent("homepage/content.md");

    return (
        <main className="max-w-6xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-8">Home</h1>
            <ContentRenderer content={content} />
        </main>
    );
}