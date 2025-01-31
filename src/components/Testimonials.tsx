"use client"
import React, { useState, useEffect, useCallback } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Content Manager",
      company: "TechCorp",
      content: "MagicFormatter.ai has revolutionized our document workflow. What used to take hours now takes minutes.",
      image: "/testimonials/sarah.jpg"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Technical Writer",
      company: "DevStudio",
      content: "The AI formatting capabilities are incredible. It's like having a professional formatter at your fingertips.",
      image: "/testimonials/michael.jpg"
    },
    {
      id: 3,
      name: "Emma Davis",
      role: "Marketing Director",
      company: "CreativeHub",
      content: "This tool has saved our team countless hours. The formatting is always consistent and professional.",
      image: "/testimonials/emma.jpg"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleResize = useCallback(() => {
    // Handle resize logic if needed
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    
    // Auto-advance slides
    const interval = setInterval(nextSlide, 5000);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(interval);
    };
  }, [handleResize]);

  return (
    <section id="testimonials" className="bg-neutral-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          What Our Users Say
        </h2>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-neutral-800 rounded-lg p-6 shadow-lg">
                    <div className="flex items-center mb-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h3 className="text-white font-semibold">{testimonial.name}</h3>
                        <p className="text-neutral-400 text-sm">
                          {testimonial.role} at {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <p className="text-neutral-300">{testimonial.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-neutral-800 p-2 rounded-full"
          >
            <span className="sr-only">Previous</span>
            {/* Left arrow icon */}
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-neutral-800 p-2 rounded-full"
          >
            <span className="sr-only">Next</span>
            {/* Right arrow icon */}
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;