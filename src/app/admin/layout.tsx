import Link from "next/link";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-base-200">
            <div className="navbar bg-base-100 border-b border-base-200 px-6">
                <div className="navbar-start">
                    <span className="font-bold text-lg">Admin Panel</span>
                </div>
                <div className="navbar-end gap-2">
                    <Link href="/admin/content" className="btn btn-ghost btn-sm">Content</Link>
                    <Link href="/admin/gallery" className="btn btn-ghost btn-sm">Gallery</Link>
                    <Link href="/" className="btn btn-ghost btn-sm">View Site</Link>
                    <form action="/api/auth/signout" method="post">
                        <button className="btn btn-error btn-sm">Logout</button>
                    </form>
                </div>
            </div>
            <div className="p-8">{children}</div>
        </div>
    );
}