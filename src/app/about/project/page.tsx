import { getContent } from "@/lib/getContent";
import ContentRenderer from "@/components/ContentRenderer";
import {FadeText} from "@/components/ui/fade-text";

export default async function ProjectPage() {
    const content = await getContent("about/project");

    return (
        <main>
            <section className="relative h-60 md:h-70 overflow-hidden">
                <img
                    src="/karigari.jpg"
                    alt="Background Banner"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/45" />

                <div className="relative z-10 flex h-full items-center justify-center px-6 mt-10">
                    <FadeText
                        text="Karigari Ki Virasat"
                        className="text-center !text-5xl md:text-xs text-white"
                        direction="up"
                        staggerDelay={0.3}
                    />
                </div>
            </section>

            {/* Content */}
            <section className="max-w-6xl mx-auto px-6 py-12">
                <ContentRenderer content={content} />
            </section>
        </main>
    );
}