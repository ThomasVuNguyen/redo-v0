import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6 bg-white">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-black">Redo</div>
        </div>
        <div className="flex items-center space-x-8">
          <Link href="#" className="text-gray-600 hover:text-black transition-colors">
            Download Kit
          </Link>
          <Link href="#" className="text-gray-600 hover:text-black transition-colors">
            Contact Us
          </Link>
        </div>
      </header>

      {/* Navigation */}
      <nav className="px-8 py-4 bg-gray-50 border-t border-gray-200">
        <div className="flex items-center space-x-12">
          <Link href="#" className="flex items-center text-black font-medium hover:text-gray-600 transition-colors">
            Brand Strategy
            <span className="ml-1 text-sm text-gray-400">01</span>
          </Link>
          <Link href="#" className="flex items-center text-gray-600 hover:text-black transition-colors">
            Personality
            <span className="ml-1 text-sm text-gray-400">02</span>
          </Link>
          <Link href="#" className="flex items-center text-gray-600 hover:text-black transition-colors">
            Logo
            <span className="ml-1 text-sm text-gray-400">03</span>
          </Link>
          <Link href="#" className="flex items-center text-gray-600 hover:text-black transition-colors">
            Color
            <span className="ml-1 text-sm text-gray-400">04</span>
          </Link>
          <Link href="#" className="flex items-center text-gray-600 hover:text-black transition-colors">
            Typography
            <span className="ml-1 text-sm text-gray-400">05</span>
          </Link>
          <Link href="#" className="flex items-center text-gray-600 hover:text-black transition-colors">
            Art Direction
            <span className="ml-1 text-sm text-gray-400">06</span>
          </Link>
        </div>
      </nav>

      {/* Hero Section with Gradient */}
      <section className="relative h-96 bg-gradient-to-br from-yellow-200 via-orange-300 to-orange-400 flex items-center justify-center">
        <div className="flex items-center text-white">
          {/* Arrow Icon */}
          <div className="mr-6">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="text-white">
              <path
                d="M20 40H60M60 40L45 25M60 40L45 55"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 25H35C41.6274 25 47 30.3726 47 37V43C47 49.6274 41.6274 55 35 55H20"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </div>
          {/* Redo Text */}
          <h1 className="text-8xl font-light tracking-wide">Redo</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-8 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Title */}
          <div>
            <h2 className="text-6xl font-bold text-black leading-tight">
              Brand
              <br />
              Guidelines
            </h2>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              This guide defines the visual language, design style, and principles that shape a clear and consistent
              brand experience, no matter the team or area of expertise.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              At its core, Redo is about precision and clarity—just like our
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
