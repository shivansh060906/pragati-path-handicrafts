export default function ContactPage() {
    return (
        <div className="max-w-2xl mx-auto px-6 py-16">
            <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
            <div className="card bg-base-200 shadow-sm">
                <div className="card-body gap-4">
                    <div className="flex items-center gap-3">
                        <span className="text-2xl">📧</span>

                        <span className="text-base-content">pragatipathfoundation.org@gmail.com</span>
                    </div>
                    <div className="divider my-0" />
                    <div className="flex items-center gap-3">
                        <span className="text-2xl">📞</span>
                        <span className="text-base-content">+91 9369338976</span>
                        <span className="text-base-content">|</span>
                        <span className="text-base-content">+91 9389220813</span>
                    </div>
                    <div className="divider my-0" />
                    <div className="flex items-center gap-3">
                        <span className="text-2xl">📩</span>
                        <span className="text-base-content">C/o ICM Sisters, S 38/233-C-2 Sudhakar Road, Khajuri, Varanasi-221002 (U. P.) </span>
                    </div>
                </div>
            </div>
        </div>
    );
}