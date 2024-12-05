'use client';

import Link from 'next/link';
import { useSession } from 'next-auth/react';

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="max-w-4xl w-full px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
          Josh's new girlfriend's website
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <p className="text-lg text-gray-700 mb-6">
            This is a secure website built with Next.js, featuring user authentication and protected routes.
          </p>
          
          <div className="space-y-4">
            {status === 'loading' ? (
              <div className="flex justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
              </div>
            ) : session ? (
              <div className="space-y-4">
                <p className="text-green-600">
                  Logged in as {session.user?.email}
                </p>
                <Link 
                  href="/dashboard"
                  className="block w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-150"
                >
                  Go to Dashboard
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                <Link 
                  href="/login"
                  className="block w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-150"
                >
                  Log In
                </Link>
                <Link 
                  href="/register"
                  className="block w-full text-center bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition duration-150"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="text-center text-gray-600">
          <p>Built with Next.js, TypeScript, and Tailwind CSS</p>
        </div>
      </div>
    </main>
  );
}