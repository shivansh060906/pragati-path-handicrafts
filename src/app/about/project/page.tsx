import { getContent } from "@/lib/getContent";
import ContentRenderer from "@/components/ContentRenderer";

export default async function ProjectPage() {
    const content = await getContent("about/project.md");

    return (
        <main className="max-w-4xl mx-auto px-4 py-12">
            <ContentRenderer content={content} />
        </main>
    );
}