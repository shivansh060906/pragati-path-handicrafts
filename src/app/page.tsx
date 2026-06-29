import { getContent } from "@/lib/getContent";
import ContentRenderer from "@/components/ContentRenderer";
import { FadeText } from "@/components/ui/fade-text";

export default async function HomePage() {
    const content = await getContent("homepage");

    return (
        <main>
            {/* Hero Section */}
            <section className="relative h-[40vh] min-h-[300px] md:h-[60vh] md:min-h-[500px]">
                <img
                    src="/homepage.png"
                    alt="Homepage Banner"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50" />

                {/* Hero Text */}
                <div className="relative z-10 flex h-full items-center justify-center px-6">
                    <FadeText
                        text="Pragati Path Foundation"
                        direction="up"
                        staggerDelay={0.3}
                        className="
                            max-w-5xl
                            text-center
                            font-bold
                            text-white
                            text-3xl
                            mt-10
                            sm:text-4xl
                            md:text-5xl
                            lg:text-6xl
                            leading-tight
                        "
                    />
                </div>
            </section>

            {/* Content */}
            <section className="mx-auto max-w-5xl px-5 py-10 sm:px-8 md:px-10 md:py-16 ">
                <div className="prose prose-sm sm:prose lg:prose-lg max-w-none text-lg text-center">
                    <ContentRenderer content={content} />
                </div>
            </section>
        </main>
    );
}