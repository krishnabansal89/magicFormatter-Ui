"use client"
import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData: FaqItem[] = [
    {
      question: "What is MagicFormatter.ai?",
      answer: "MagicFormatter.ai is an AI-powered document formatting tool that automatically handles layout, styling, and formatting of your documents, allowing you to focus on content creation."
    },
    {
      question: "How does the automatic formatting work?",
      answer: "Our AI analyzes your document's content and structure, then applies professional formatting standards based on document type, industry best practices, and your preferences."
    },
    {
      question: "Can I customize the formatting styles?",
      answer: "Yes, you can create and save custom templates, define your brand guidelines, and adjust formatting preferences to match your specific needs."
    },
    {
      question: "What file formats are supported?",
      answer: "We support common document formats including Word (.docx), PDF, Google Docs, and plain text files. More formats are being added regularly."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we use enterprise-grade encryption and security measures. Your documents are processed securely and never stored permanently on our servers."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-neutral-800 py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-neutral-900 rounded-lg">
              <button
                onClick={() => handleToggle(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-lg font-semibold ">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-blue-600 transform transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              <div
                className={`px-6 pb-4 transition-all duration-200 ease-in-out ${
                  openIndex === index ? 'block opacity-100' : 'hidden opacity-0'
                }`}
              >
                <p className="text-neutral-400">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default FAQ;