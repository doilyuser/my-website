{"encoding": "utf-8", "content": "'use client';\n\nimport Link from 'next/link';\nimport { useSession } from 'next-auth/react';\n\nexport default function Home() {\n  const { data: session, status } = useSession();\n\n  return (\n    <div className=\"min-h-screen bg-[#0F172A] text-white\">\n      {/* Header */}\n      <header className=\"py-6 px-4 md:px-6 flex items-center justify-between border-b border-gray-800\">\n        <div className=\"flex items-center space-x-4\">\n          <div className=\"font-bold text-xl\">Josh's Admin</div>\n        </div>\n        <div className=\"flex items-center space-x-4\">\n          {status === 'loading' ? (\n            <div className=\"animate-spin rounded-full h-5 w-5 border-b-2 border-white\"></div>\n          ) : session ? (\n            <div className=\"flex items-center space-x-4\">\n              <span className=\"text-sm text-gray-400\">{session.user?.email}</span>\n              <Link \n                href=\"/dashboard\"\n                className=\"bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors\"\n              >\n                Dashboard\n              </Link>\n            </div>\n          ) : (\n            <div className=\"flex items-center space-x-4\">\n              <Link \n                href=\"/login\"\n                className=\"text-gray-300 hover:text-white transition-colors\"\n              >\n                Sign In\n              </Link>\n              <Link \n                href=\"/register\"\n                className=\"bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors\"\n              >\n                Get Started\n              </Link>\n            </div>\n          )}\n        </div>\n      </header>\n\n      {/* Hero Section */}\n      <main className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16\">\n        <div className=\"text-center space-y-8\">\n          <h1 className=\"text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent\">\n            Josh's new girlfriend's website\n          </h1>\n          <p className=\"text-gray-400 text-lg md:text-xl max-w-3xl mx-auto\">\n            Experience the next generation of web applications with our secure authentication system and protected routes.\n          </p>\n          \n          <div className=\"flex flex-col sm:flex-row items-center justify-center gap-4 pt-8\">\n            {session ? (\n              <Link \n                href=\"/dashboard\"\n                className=\"w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-base font-medium transition-colors flex items-center justify-center\"\n              >\n                Go to Dashboard\n              </Link>\n            ) : (\n              <>\n                <Link \n                  href=\"/register\"\n                  className=\"w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-base font-medium transition-colors flex items-center justify-center\"\n                >\n                  Get Started\n                </Link>\n                <Link \n                  href=\"/login\"\n                  className=\"w-full sm:w-auto bg-transparent hover:bg-gray-800 text-white px-8 py-3 rounded-md text-base font-medium border border-gray-700 transition-colors flex items-center justify-center\"\n                >\n                  Sign In\n                </Link>\n              </>\n            )}\n          </div>\n        </div>\n\n        {/* Features Grid */}\n        <div className=\"mt-24 grid grid-cols-1 md:grid-cols-3 gap-8\">\n          <div className=\"p-6 rounded-lg border border-gray-800 bg-gray-900/50 backdrop-blur-sm\">\n            <div className=\"w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4\">\n              <svg className=\"w-6 h-6 text-blue-500\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">\n                <path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth={2} d=\"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z\" />\n              </svg>\n            </div>\n            <h3 className=\"text-lg font-semibold mb-2\">Secure Authentication</h3>\n            <p className=\"text-gray-400\">Industry-standard security with NextAuth.js and secure password hashing.</p>\n          </div>\n\n          <div className=\"p-6 rounded-lg border border-gray-800 bg-gray-900/50 backdrop-blur-sm\">\n            <div className=\"w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4\">\n              <svg className=\"w-6 h-6 text-blue-500\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">\n                <path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth={2} d=\"M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z\" />\n              </svg>\n            </div>\n            <h3 className=\"text-lg font-semibold mb-2\">Modern Dashboard</h3>\n            <p className=\"text-gray-400\">Clean and intuitive interface built with the latest web technologies.</p>\n          </div>\n\n          <div className=\"p-6 rounded-lg border border-gray-800 bg-gray-900/50 backdrop-blur-sm\">\n            <div className=\"w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4\">\n              <svg className=\"w-6 h-6 text-blue-500\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">\n                <path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth={2} d=\"M13 10V3L4 14h7v7l9-11h-7z\" />\n              </svg>\n            </div>\n            <h3 className=\"text-lg font-semibold mb-2\">High Performance</h3>\n            <p className=\"text-gray-400\">Built with Next.js and optimized for the best user experience.</p>\n          </div>\n        </div>\n      </main>\n\n      {/* Footer */}\n      <footer className=\"border-t border-gray-800 mt-24 py-12 px-4\">\n        <div className=\"max-w-7xl mx-auto text-center text-gray-400\">\n          <p>Built with Next.js, TypeScript, and Tailwind CSS</p>\n        </div>\n      </footer>\n    </div>\n  );\n}"}