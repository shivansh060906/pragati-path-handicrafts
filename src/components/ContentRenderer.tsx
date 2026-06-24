// src/components/ContentRenderer.tsx
"use client";

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface ContentRendererProps {
    content: string;
}

export default function ContentRenderer({ content }: ContentRendererProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <article className="prose prose-base max-w-none prose-headings:text-base-content prose-p:text-base-content">
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    p: ({ children }) => (
                        <p className="border-0 border-primary pl-4 mb-6 leading-relaxed">
                            {children}
                        </p>
                    ),
                    h1: ({ children }) => (
                        <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>
                    ),
                    h2: ({ children }) => (
                        <h2 className="text-2xl font-bold mt-6 mb-3">{children}</h2>
                    ),
                    h3: ({ children }) => (
                        <h3 className="text-xl font-semibold mt-4 mb-2">{children}</h3>
                    ),
                }}
            >
                {content}
            </ReactMarkdown>
        </article>
    );
}