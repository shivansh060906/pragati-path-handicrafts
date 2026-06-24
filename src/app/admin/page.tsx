import Link from "next/link";

export default function AdminDashboard() {
    return (
        <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Link href="/admin/content">
                    <div className="card bg-base-100 shadow hover:shadow-md transition-shadow cursor-pointer">
                        <div className="card-body">
                            <h2 className="card-title">Edit Content</h2>
                            <p className="text-base-content/70 text-sm">Update text on any page of the website.</p>
                        </div>
                    </div>
                </Link>
                <Link href="/admin/gallery">
                    <div className="card bg-base-100 shadow hover:shadow-md transition-shadow cursor-pointer">
                        <div className="card-body">
                            <h2 className="card-title">Manage Gallery</h2>
                            <p className="text-base-content/70 text-sm">Add or remove gallery items and images.</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}