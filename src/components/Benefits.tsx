import React from "react";

export default function Benefits() {
    return (
        <section id="benefits" className="py-20 bg-neutral-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate__animated animate__fadeIn">
          Why Choose MagicFormatter.ai?
        </h2>
        <p className="text-neutral-300 text-lg max-w-2xl mx-auto animate__animated animate__fadeIn animate__delay-1s">
          Experience the freedom of focusing solely on your content while we handle everything else
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="flex items-start space-x-4 animate__animated animate__fadeInLeft">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Save 90% of Your Time</h3>
              <p className="text-neutral-400">Focus on writing while our AI handles all formatting tasks automatically, reducing document preparation time dramatically.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4 animate__animated animate__fadeInLeft animate__delay-1s">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Professional Results Every Time</h3>
              <p className="text-neutral-400">Create consistently formatted, professional-looking documents without any manual intervention.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4 animate__animated animate__fadeInLeft animate__delay-2s">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Reduce Stress and Frustration</h3>
              <p className="text-neutral-400">Eliminate the headache of manual formatting and focus on what truly matters - your content.</p>
            </div>
          </div>
        </div>

        <div className="bg-neutral-800 rounded-xl p-8 animate__animated animate__fadeInRight">
          <div className="relative">
            <div className="bg-neutral-900 rounded-lg p-6 border border-neutral-700">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="typing-demo border-l-4 border-blue-600 pl-4">
                  <p className="text-neutral-300">Watch as your text...</p>
                  <p className="text-white font-semibold">Automatically formats itself</p>
                  <p className="text-neutral-300">While you focus on writing!</p>
                </div>
                <div className="h-2 bg-blue-600 rounded w-3/4 animate-pulse"></div>
                <div className="h-2 bg-neutral-700 rounded w-1/2"></div>
                <div className="h-2 bg-neutral-700 rounded w-2/3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-16 animate__animated animate__fadeIn animate__delay-3s">
        <a href="#betaprogram" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:text-lg">
          Try It Free →
        </a>
      </div>
    </div>
  </section>
    )
}