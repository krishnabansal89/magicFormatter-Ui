import React from "react";

export default function Workflow() {
    return (
        <section id="workflow" className="py-20 bg-neutral-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate__animated animate__fadeIn">
          How It Works
        </h2>
        <p className="text-neutral-300 text-lg max-w-2xl mx-auto animate__animated animate__fadeIn animate__delay-1s">
          Transform your document creation process in three simple steps
        </p>
      </div>

      <div className="relative">
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-blue-600 transform -translate-y-1/2 hidden md:block"></div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          <div className="relative bg-neutral-900 rounded-xl p-6 animate__animated animate__fadeIn animate__delay-1s">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold border-4 border-neutral-800">
              1
            </div>
            <div className="pt-8 text-center">
              <h3 className="text-xl font-semibold text-white mb-4">Write Your Content</h3>
              <p className="text-neutral-400 mb-4">Simply start typing your content without worrying about formatting</p>
              <div className="h-32 bg-neutral-800 rounded-lg flex items-center justify-center">
                <svg className="w-16 h-16 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="relative bg-neutral-900 rounded-xl p-6 animate__animated animate__fadeIn animate__delay-2s">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold border-4 border-neutral-800">
              2
            </div>
            <div className="pt-8 text-center">
              <h3 className="text-xl font-semibold text-white mb-4">AI Processing</h3>
              <p className="text-neutral-400 mb-4">Our AI analyzes and automatically formats your document</p>
              <div className="h-32 bg-neutral-800 rounded-lg flex items-center justify-center">
                <svg className="w-16 h-16 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="relative bg-neutral-900 rounded-xl p-6 animate__animated animate__fadeIn animate__delay-3s">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold border-4 border-neutral-800">
              3
            </div>
            <div className="pt-8 text-center">
              <h3 className="text-xl font-semibold text-white mb-4">Perfect Results</h3>
              <p className="text-neutral-400 mb-4">Get professionally formatted documents ready to share</p>
              <div className="h-32 bg-neutral-800 rounded-lg flex items-center justify-center">
                <svg className="w-16 h-16 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-16">
        <p className="text-neutral-300 mb-6 animate__animated animate__fadeIn animate__delay-4s">
          Ready to transform your document workflow?
        </p>
        <a href="#betaprogram" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:text-lg animate__animated animate__fadeIn animate__delay-4s">
          Start Creating Now →
        </a>
      </div>
    </div>
  </section>
    )
}
