import React from 'react';

// interface StatItem {
//   value: string;
//   label: string;
// }

const Hero: React.FC = () => {
  // const stats: StatItem[] = [
  //   { value: '500+', label: 'Beta Signups' },
  //   { value: '4.9/5', label: 'User Rating' },
  //   { value: '98%', label: 'Time Saved' }
  // ];

  return (
<section id="hero" className="min-h-[70vh] bg-neutral-900 relative overflow-hidden">
    <div className="absolute inset-0 opacity-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(37,99,235,0.2),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(37,99,235,0.2),transparent_50%)]"></div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
      <div className="text-center space-y-8">
        <h1 className="animate__animated animate__fadeIn text-4xl md:text-6xl font-bold text-white max-w-4xl mx-auto leading-tight">
          Focus on Your Words, <br/>
          <span className="text-blue-600">Let AI Handle the Formatting</span>
        </h1>

        <p className="animate__animated animate__fadeIn animate__delay-1s text-xl md:text-2xl text-neutral-300 max-w-2xl mx-auto">
          Say goodbye to manual document formatting. Our AI automatically handles alignment, fonts, and styling while you focus on what matters - your content.
        </p>

        <div className="animate__animated animate__fadeIn animate__delay-2s flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <a href="#betaprogram" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
            Join Beta Program
          </a>
          <a href="#features" className="px-8 py-4 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold rounded-lg text-lg transition-all duration-300">
            Learn More →
          </a>
        </div>

        <div className="animate__animated animate__fadeIn animate__delay-3s pt-12 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">500+</div>
            <div className="text-neutral-400">Beta Signups</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">4.9/5</div>
            <div className="text-neutral-400">User Rating</div>
          </div>
          <div className="text-center hidden md:block">
            <div className="text-3xl font-bold text-white">98%</div>
            <div className="text-neutral-400">Time Saved</div>
          </div>
        </div>
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 hidden md:block">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-[60px] fill-neutral-800">
        <path d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
      </svg>
    </div>
  </section>
  );
};

export default Hero;