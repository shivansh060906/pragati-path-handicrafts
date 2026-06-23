// src/components/ContentRenderer.tsx
import ReactMarkdown from "react-markdown";

interface ContentRendererProps {
    content: string;
}

export default function ContentRenderer({ content }: ContentRendererProps) {
    return (
        <article className="prose prose-base max-w-none">
            <ReactMarkdown>{content}</ReactMarkdown>
        </article>
    );
}