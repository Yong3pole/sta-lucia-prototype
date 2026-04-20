"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (username === "adminhris2026" && password === "!@#Adminhris2026") {
      router.push("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 p-4">
      <div className="bg-white/95 rounded-2xl border border-white shadow-sm flex w-full max-w-3xl overflow-hidden">
        {/* Left: Login Form */}
        <div className="flex-1 p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-2 text-center text-gray-900 tracking-tight">Welcome back</h2>
          <p className="text-center text-gray-700 mb-6">Login to your ForenSync HRIS account</p>
          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1" htmlFor="username">
                Username <span className="text-red-500">*</span>
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                className="w-full border border-gray-300 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-green-700 text-gray-900"
                placeholder="john1234"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="block text-sm font-medium text-gray-800" htmlFor="password">
                  Password <span className="text-red-500">*</span>
                </label>
                <a href="#" className="text-xs text-gray-600 hover:underline">
                  Forgot your password?
                </a>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                className="w-full border border-gray-300 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-green-700 text-gray-900"
                placeholder="********"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            {error && (
              <div className="text-red-600 text-sm text-center">{error}</div>
            )}
            <button
              type="submit"
              className="w-full bg-green-700 text-white py-2.5 rounded-xl font-semibold hover:bg-green-800 transition"
            >
              Login
            </button>
          </form>
          <p className="text-xs text-gray-600 mt-6 text-center">
            By clicking continue, you agree to our{' '}
            <a href="#" className="underline">Terms of Service</a> and{' '}
            <a href="#" className="underline">Privacy Policy</a>
          </p>
        </div>
        {/* Right: Image */}
        <div className="hidden md:block flex-1 relative min-h-[400px]">
          <img
            src="https://www.designoffices.de/_next/image?url=https%3A%2F%2Fdo-cms.melantech.io%2Fapi%2Fmedia%2Ffile%2FKey-Visual_Flexible-Office_Frankfurt_Wiesenh%25C3%25BCttenplatz.jpg&w=3840&q=75"
            alt="Office building"
            className="w-full h-full object-cover brightness-110"
          />
        </div>
      </div>
    </div>
  );
}
