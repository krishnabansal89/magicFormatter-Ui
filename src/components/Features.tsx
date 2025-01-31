import React from "react";

export default function Features() {
    return (
        <section id="features" className="py-20 bg-neutral-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate__animated animate__fadeIn">
                        Powerful Features for Effortless Formatting
                    </h2>
                    <p className="text-neutral-300 text-lg max-w-2xl mx-auto animate__animated animate__fadeIn animate__delay-1s">
                        Transform your document creation process with our intelligent formatting assistant
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-neutral-900 p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeIn animate__delay-1s">
                        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">Instant Formatting</h3>
                        <p className="text-neutral-400">Real-time formatting adjustments as you type, maintaining consistency throughout your document.</p>
                    </div>

                    <div className="bg-neutral-900 p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeIn animate__delay-2s">
                        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">Smart Templates</h3>
                        <p className="text-neutral-400">Pre-built professional templates that adapt to your content automatically.</p>
                    </div>

                    <div className="bg-neutral-900 p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeIn animate__delay-3s">
                        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">Style Consistency</h3>
                        <p className="text-neutral-400">Maintain perfect formatting consistency across all your documents automatically.</p>
                    </div>

                    <div className="bg-neutral-900 p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeIn animate__delay-4s">
                        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">One-Click Conversion</h3>
                        <p className="text-neutral-400">Convert between different document formats while maintaining perfect formatting.</p>
                    </div>

                    <div className="bg-neutral-900 p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeIn animate__delay-5s">
                        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">Custom Rules</h3>
                        <p className="text-neutral-400">Create and save your own formatting rules for future use.</p>
                    </div>

                    <div className="bg-neutral-900 p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeIn animate__delay-6s">
                        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">Collaborative Editing</h3>
                        <p className="text-neutral-400">Work together with your team while maintaining consistent formatting.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
