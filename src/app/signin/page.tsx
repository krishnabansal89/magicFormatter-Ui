export default function SignInPage() {
    return (
      <section id="signin-page" className="min-h-screen bg-neutral-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(37,99,235,0.2),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(37,99,235,0.2),transparent_50%)]"></div>
        </div>
  
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Left Side: Magic Formatter Info */}
            <div className="w-full md:w-1/2 animate__animated animate__fadeIn">
              <div className="max-w-lg">
                {/* Logo/Branding */}
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-white">
                    <span className="text-blue-600">Magic</span> Formatter
                  </h2>
                </div>
                
                {/* Main Content */}
                <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                  Document Formatting <span className="text-blue-600">Made Effortless</span>
                </h1>
                
                <p className="text-xl text-neutral-300 mb-8">
                  Our AI-powered tool automatically handles all your document formatting needs, so you can focus on creating great content.
                </p>
                
                <ul className="space-y-4 mb-8">
                  {[
                    'Intelligent formatting that adapts to your content',
                    'Save hours of manual styling and formatting',
                    'Professional-looking documents in seconds'
                  ].map((item) => (
                    <li key={item} className="flex items-start">
                      <svg
                        className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-neutral-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Right Side: Sign In Form */}
            <div className="w-full md:w-1/2 animate__animated animate__fadeIn animate__delay-1s">
              <div className="bg-neutral-800 p-8 rounded-xl shadow-2xl max-w-md mx-auto">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">Sign in to continue</h2>
                
                {/* Google Sign In Button */}
                <button className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3 px-4 rounded-lg transition-all duration-300 mb-6">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  Sign in with Google
                </button>
                
                <div className="relative flex items-center justify-center mb-6">
                  <div className="border-t border-neutral-700 absolute w-full"></div>
                  <div className="bg-neutral-800 px-3 relative text-neutral-400 text-sm">
                    or continue with email
                  </div>
                </div>
                
                {/* Email Form */}
                <form className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-1">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg focus:ring-blue-600 focus:border-blue-600 text-white"
                      placeholder="you@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-neutral-300 mb-1">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg focus:ring-blue-600 focus:border-blue-600 text-white"
                      placeholder="••••••••"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-600 border-neutral-600 rounded bg-neutral-700"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-neutral-300">
                        Remember me
                      </label>
                    </div>
                    <a href="#" className="text-sm text-blue-500 hover:text-blue-400">
                      Forgot password?
                    </a>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Sign in
                  </button>
                </form>
                
                <p className="mt-6 text-center text-sm text-neutral-400">
                  Don&apos;t have an account? 
                  <a href="#" className="text-blue-500 hover:text-blue-400 font-medium ml-1">
                    Sign up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
  
        {/* Decorative Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            className="w-full h-[60px] fill-neutral-800"
          >
            <path d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
          </svg>
        </div>
      </section>
    );
  }