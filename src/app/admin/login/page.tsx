"use client";

import { useState } from "react";
import { login } from "./actions";

export default function AdminLoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleLogin() {
        setLoading(true);
        setError("");
        const result = await login(email, password);
        if (result?.error) {
            setError(result.error);
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200">
            <div className="card w-full max-w-sm bg-base-100 shadow-lg">
                <div className="card-body gap-4">
                    <h1 className="card-title text-2xl justify-center">Admin Login</h1>
                    {error && <div className="alert alert-error text-sm">{error}</div>}
                    <input
                        type="email"
                        placeholder="Email"
                        className="input input-bordered w-full"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="input input-bordered w-full"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                    />
                    <button
                        className="btn btn-primary w-full"
                        onClick={handleLogin}
                        disabled={loading}
                    >
                        {loading ? <span className="loading loading-spinner" /> : "Login"}
                    </button>
                </div>
            </div>
        </div>
    );
}