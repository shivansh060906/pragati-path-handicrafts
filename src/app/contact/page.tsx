// src/app/contact/page.tsx
export default function ContactPage() {
    return (
        <div className="max-w-2xl mx-auto px-6 py-16">
            <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
            <div className="card bg-base-200 shadow-sm">
                <div className="card-body gap-4">
                    <div className="flex items-center gap-3">
                        <span className="text-2xl">📧</span>
                        <span className="text-base-content">hello@example.com</span>
                    </div>
                    <div className="divider my-0" />
                    <div className="flex items-center gap-3">
                        <span className="text-2xl">📞</span>
                        <span className="text-base-content">+91 00000 00000</span>
                    </div>
                    <div className="divider my-0" />
                    <div className="flex items-center gap-3">
                        <span className="text-2xl">📍</span>
                        <span className="text-base-content">Your City, India</span>
                    </div>
                </div>
            </div>
        </div>
    );
}