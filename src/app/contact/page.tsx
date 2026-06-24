// src/app/contact/page.tsx

import { FadeText } from "@/components/ui/fade-text";

export default function ContactPage() {
    return (
        <main>
            {/* Banner */}
            <section className="relative h-48 md:h-72 overflow-hidden">
                <img
                    src="/contact.png"
                    alt="Contact Banner"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-black/45" />

                <div className="relative z-10 flex h-full items-center justify-center px-6 mt-10">
                    <FadeText
                        text="Contact Us"
                        direction="up"
                        staggerDelay={0.3}
                        className="text-center !text-5xl md:text-xs text-white"
                    />
                </div>
            </section>

            {/* Contact Section */}
            <section className="max-w-2xl mx-auto px-6 py-6">
                <div className="card bg-base-100 shadow-xl rounded-3xl border border-base-300">
                    <div className="card-body p-8 space-y-6">

                        <div className="flex items-start gap-5">
                            <div className="text-3xl">📧</div>

                            <div>
                                <h3 className="font-semibold text-lg">
                                    Email
                                </h3>
                                <a
                                    href="mailto:pragatipathfoundation.org@gmail.com"
                                    className="text-base-content/70 hover:text-primary transition"
                                >
                                    pragatipathfoundation.org@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="divider my-0" />

                        <div className="flex items-start gap-2">
                            <div className="text-3xl">📞</div>

                            <div>
                                <h3 className="font-semibold text-lg">
                                    Phone
                                </h3>

                                <p className="text-base-content/70">
                                    +91 9369338976
                                </p>

                                <p className="text-base-content/70">
                                    +91 9389220813
                                </p>
                            </div>
                        </div>

                        <div className="divider my-0" />

                        <div className="flex items-start gap-2">
                            <div className="text-3xl">📍</div>

                            <div>
                                <h3 className="font-semibold text-lg">
                                    Address
                                </h3>

                                <p className="text-base-content/70 leading-relaxed">
                                    C/o ICM Sisters, S 38/233-C-2 Sudhakar Road,
                                    <br />
                                    Khajuri, Varanasi - 221002,
                                    <br />
                                    Uttar Pradesh, India
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}