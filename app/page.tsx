'use client';

import Link from 'next/link';
import { useSession } from 'next-auth/react';

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <div className="min-h-screen bg-[#0F172A] text-white">
      {/* Header */}
      <header className="py-6 px-4 md:px-6 flex items-center justify-between border-b border-gray-800">
        <div className="flex items-center space-x-4">
          <div className="font-bold text-xl">Josh's Admin</div>
        </div>
        <div className="flex items-center space-x-4">
          {status === 'loading' ? (
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
          ) : session ? (
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400">{session.user?.email}</span>
              <Link 
                href="/dashboard"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Dashboard
              </Link>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link 
                href="/login"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Sign In
              </Link>
              <Link 
                href="/register"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Get Started
              </Link>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
            Josh's new girlfriend's website
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Experience the next generation of web applications with our secure authentication system and protected routes.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            {session ? (
              <Link 
                href="/dashboard"
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-base font-medium transition-colors flex items-center justify-center"
              >
                Go to Dashboard
              </Link>
            ) : (
              <>
                <Link 
                  href="/register"
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-base font-medium transition-colors flex items-center justify-center"
                >
                  Get Started
                </Link>
                <Link 
                  href="/login"
                  className="w-full sm:w-auto bg-transparent hover:bg-gray-800 text-white px-8 py-3 rounded-md text-base font-medium border border-gray-700 transition-colors flex items-center justify-center"
                >
                  Sign In
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg border border-gray-800 bg-gray-900/50 backdrop-blur-sm">
            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Secure Authentication</h3>
            <p className="text-gray-400">Industry-standard security with NextAuth.js and secure password hashing.</p>
          </div>

          <div className="p-6 rounded-lg border border-gray-800 bg-gray-900/50 backdrop-blur-sm">
            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Modern Dashboard</h3>
            <p className="text-gray-400">Clean and intuitive interface built with the latest web technologies.</p>
          </div>

          <div className="p-6 rounded-lg border border-gray-800 bg-gray-900/50 backdrop-blur-sm">
            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">High Performance</h3>
            <p className="text-gray-400">Built with Next.js and optimized for the best user experience.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-24 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>Built with Next.js, TypeScript, and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}