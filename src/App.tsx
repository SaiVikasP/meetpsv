import React from 'react';
import { Cloud, CloudSnow, Linkedin, Github } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Floating Cloud Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Cloud className="absolute top-20 left-10 text-white/20 w-16 h-16 animate-pulse" />
        <CloudSnow className="absolute top-32 right-20 text-blue-200/30 w-12 h-12 animate-bounce" style={{ animationDelay: '1s' }} />
        <Cloud className="absolute bottom-40 left-1/4 text-sky-200/25 w-20 h-20 animate-pulse" style={{ animationDelay: '2s' }} />
        <Cloud className="absolute top-1/3 right-1/3 text-indigo-200/20 w-14 h-14 animate-bounce" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center px-4 py-12">
          <div className="text-center max-w-2xl mx-auto">
            {/* Logo/Brand Area */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <Cloud className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                meetpsv.com
              </span>
              <br />
              <span className="text-2xl md:text-3xl font-medium text-gray-600">
                is coming soon
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-gray-700 mb-4 leading-relaxed">
              Hi, I'm <span className="font-semibold text-blue-600">Sai Vikas</span> — a cloud enthusiast passionate about tech, learning, and creating.
            </p>

            {/* Tagline */}
            <p className="text-base md:text-lg text-gray-600 mb-12 font-medium">
              Engineer in progress ☁️ | Curious mind | Explorer
            </p>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-12">
              <a
                href="https://linkedin.com/in/sai-vikas-pasupuleti"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 bg-white/70 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 group border border-white/20"
              >
                <Linkedin className="w-6 h-6 text-blue-600 group-hover:text-blue-700" />
              </a>
              <a
                href="https://github.com/saivikaspasupuleti"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 bg-white/70 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 group border border-white/20"
              >
                <Github className="w-6 h-6 text-gray-700 group-hover:text-gray-900" />
              </a>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="py-8 text-center">
          <p className="text-gray-600 text-sm">
            © 2025 Sai Vikas Pasupuleti | meetpsv.com
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;