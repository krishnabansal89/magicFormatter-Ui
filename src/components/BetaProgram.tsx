"use client";
import React, { useState } from 'react';

interface FormData {
    name: string;
    email: string;
    company: string;
    useCase: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    company?: string;
    useCase?: string;
}

const BetaProgram: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        company: '',
        useCase: ''
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }

        if (!formData.company.trim()) {
            newErrors.company = 'Company name is required';
        }

        if (!formData.useCase.trim()) {
            newErrors.useCase = 'Use case is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsLoading(true);
        try {
            // Replace with your actual API endpoint
            const response = await fetch('/api/beta-signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error('Submission failed');

            setSubmitStatus('success');
            setFormData({ name: '', email: '', company: '', useCase: '' });
        } catch (err) {
            console.error(err);
            setSubmitStatus('error');
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <section id="betaprogram" className="py-20 bg-neutral-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Join Our Beta Program
                    </h2>
                    <p className="text-neutral-300 text-lg">
                        Be among the first to experience the future of document formatting
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-neutral-800 rounded-2xl p-8 md:p-12 border border-neutral-700 animate__animated animate__fadeIn animate__delay-2s space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 bg-neutral-800 border ${errors.name ? 'border-red-500' : 'border-neutral-600'
                                } rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-white placeholder-neutral-400`}
                            placeholder="Enter your full name"
                        />
                        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 bg-neutral-800 border ${errors.email ? 'border-red-500' : 'border-neutral-600'
                                } rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-white placeholder-neutral-400`}
                            placeholder="you@company.com"
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                    </div>

                    <div>
                        <label htmlFor="company" className="block text-sm font-medium text-neutral-300 mb-2">
                            Company Name
                        </label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 bg-neutral-800 border ${errors.company ? 'border-red-500' : 'border-neutral-600'
                                } rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-white placeholder-neutral-400`}
                            placeholder="Your company name"
                        />
                        {errors.company && <p className="mt-1 text-sm text-red-500">{errors.company}</p>}
                    </div>

                    <div>
                        <label htmlFor="useCase" className="block text-sm font-medium text-neutral-300 mb-2">
                            How will you use MagicFormatter.ai?
                        </label>
                        <textarea
                            id="useCase"
                            name="useCase"
                            value={formData.useCase}
                            onChange={handleChange}
                            rows={4}
                            className={`w-full px-4 py-3 bg-neutral-800 border resize-none ${errors.useCase ? 'border-red-500' : 'border-neutral-600'
                                } rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent text-white placeholder-neutral-400`}
                            placeholder="Tell us about your use case..."
                        />
                        {errors.useCase && <p className="mt-1 text-sm text-red-500">{errors.useCase}</p>}
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                    >
                        {isLoading ? 'Submitting...' : 'Join Beta Program'}
                    </button>
                    <div className="mt-8 flex items-center justify-center space-x-3 md:space-x-8 text-neutral-400 text-sm">
                    <div className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        Secure & Private
                    </div>
                    <div className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        No Credit Card
                    </div>
                </div>
                </form>

                {submitStatus === 'success' && (
                    <div className="mt-4 p-4 bg-green-800 text-white rounded-lg">
                        Thank you for joining our beta program! We&apos;ll be in touch soon.
                    </div>
                )}

                {submitStatus === 'error' && (
                    <div className="mt-4 p-4 bg-red-800 text-white rounded-lg">
                        Something went wrong. Please try again later.
                    </div>
                )}

               

                <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <div className="flex items-start space-x-4 animate__animated animate__fadeIn animate__delay-3s">
                        <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-white font-semibold mb-2">Early Access</h3>
                            <p className="text-neutral-400">Be the first to try new features and shape the product&apos;s future</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4 animate__animated animate__fadeIn animate__delay-4s">
                        <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-white font-semibold mb-2">Lifetime Discount</h3>
                            <p className="text-neutral-400">Lock in special beta pricing forever as an early supporter</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4 animate__animated animate__fadeIn animate__delay-5s">
                        <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-white font-semibold mb-2">Priority Support</h3>
                            <p className="text-neutral-400">Direct access to our development team during beta</p>
                        </div>
                    </div>
                </div >
            </div>


        </section >
    );
};

export default BetaProgram;