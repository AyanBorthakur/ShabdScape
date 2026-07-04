'use client'

import { ReactNode } from 'react'
import Link from 'next/link'
import './globals.css'

export const metadata = {
  title: 'ShabdScape - Literature Portfolio',
  description: 'Explore beautiful literature and creative writing',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-serif font-bold text-blue-600">
              ShabdScape
            </Link>
            <ul className="flex gap-6">
              <li><Link href="/" className="hover:text-blue-600 transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-blue-600 transition">About</Link></li>
              <li><Link href="/works" className="hover:text-blue-600 transition">Works</Link></li>
            </ul>
          </nav>
        </header>

        <main className="min-h-screen">
          {children}
        </main>

        <footer className="bg-gray-900 text-white py-8 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p>&copy; 2024 ShabdScape. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
