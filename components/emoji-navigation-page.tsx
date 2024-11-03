'use client'

import { Button } from "@/components/ui/button"
import { MessageSquare } from "lucide-react"
import Link from "next/link"
import { useRouter } from 'next/navigation'

export function EmojiNavigationPage() {
  const router = useRouter()

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Full-screen geometric pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <header className="px-4 py-4 flex items-center justify-between relative z-10">
        <Link className="flex items-center justify-center" href="#">
          <MessageSquare className="h-6 w-6 text-cyan-400" />
          <span className="ml-2 text-xl font-bold text-white">SPEEKI</span>
        </Link>
        <Button variant="ghost" className="text-white hover:text-cyan-400 p-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <span className="sr-only">Menu</span>
        </Button>
      </header>

      <main className="flex-1 relative z-10 flex flex-col justify-center px-4 sm:px-3 lg:px-8">
        <div className="text-center space-y-8 my-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            Talk to a <span className="text-cyan-400">person</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="w-auto bg-pink-500 hover:bg-pink-600 text-white text-lg"
              onClick={() => router.push('/pissed-off-girl')}
            >
              Pissed Off Girl 😠👧
            </Button>
            <Button 
              size="lg" 
              className="w-sm sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-gray-900 text-lg"
              onClick={() => router.push('/crazy-boss')}
            >
              Crazy Boss 🤪👨‍💼
            </Button>
          </div>
        </div>
      </main>

      <footer className="relative z-10 border-t border-gray-700 mt-auto">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center md:order-2 space-x-6">
            <Link href="#" className="text-gray-400 hover:text-cyan-400">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-cyan-400">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">
              &copy; 2024 SPEEKI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}