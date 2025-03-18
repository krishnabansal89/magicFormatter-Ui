"use client"
import React from 'react';

// interface PricingTier {
//     name: string;
//     monthlyPrice: number;
//     yearlyPrice: number;
//     description: string;
//     features: string[];
//     ctaText: string;
//     ctaLink: string;
//     highlighted?: boolean;
// }

const Pricing: React.FC = () => {
    // const [isYearly, setIsYearly] = useState(false);

    // const pricingTiers: PricingTier[] = [
    //     {
    //         name: "Free",
    //         monthlyPrice: 0,
    //         yearlyPrice: 0,
    //         description: "Perfect for trying out MagicFormatter.ai",
    //         features: [
    //             "5 documents per month",
    //             "Basic formatting",
    //             "Export to PDF",
    //             "Email support"
    //         ],
    //         ctaText: "Get Started",
    //         ctaLink: "#betaprogram"
    //     },
    //     {
    //         name: "Pro",
    //         monthlyPrice: 29,
    //         yearlyPrice: 290,
    //         description: "For professionals and small teams",
    //         features: [
    //             "Unlimited documents",
    //             "Advanced formatting",
    //             "Priority support",
    //             "Team collaboration",
    //             "Custom templates"
    //         ],
    //         ctaText: "Start Free Trial",
    //         ctaLink: "#betaprogram",
    //         highlighted: true
    //     },
    //     {
    //         name: "Enterprise",
    //         monthlyPrice: 99,
    //         yearlyPrice: 990,
    //         description: "For large organizations",
    //         features: [
    //             "Everything in Pro",
    //             "Dedicated support",
    //             "API access",
    //             "Custom branding",
    //             "Custom integration"
    //         ],
    //         ctaText: "Contact Sales",
    //         ctaLink: "#betaprogram"
    //     }
    // ];

    return (
        <section className='py-20 bg-neutral-900' id='pricing'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate__animated animate__fadeIn">
                        Early Access Pricing
                    </h2>
                    <p className="text-neutral-300 text-lg max-w-2xl mx-auto animate__animated animate__fadeIn animate__delay-1s">
                        Join our beta program and lock in special pricing forever
                    </p>
                </div>

                <div className="flex justify-center items-center space-x-4 mb-12 animate__animated animate__fadeIn animate__delay-1s">
                    <span className="text-neutral-300">Monthly</span>
                    <button id="pricing-toggle" className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none bg-blue-600">
                        <span className="translate-x-5 inline-block h-5 w-5 transform rounded-full bg-white transition duration-200 ease-in-out"></span>
                    </button>
                    <span className="text-neutral-300">Annual <span className="text-blue-600">(Save 20%)</span></span>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <div className="bg-neutral-800 rounded-2xl p-8 border border-neutral-700 hover:border-blue-600 transition-all duration-300 animate__animated animate__fadeIn animate__delay-1s">
                        <h3 className="text-xl font-semibold text-white mb-4">Basic</h3>
                        <div className="mb-6">
                            <span className="text-4xl font-bold text-white">$9</span>
                            <span className="text-neutral-400">/month</span>
                        </div>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center text-neutral-300">
                                <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Up to 50 documents/month
                            </li>
                            <li className="flex items-center text-neutral-300">
                                <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Basic templates
                            </li>
                            <li className="flex items-center text-neutral-300">
                                <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Standard support
                            </li>
                        </ul>
                        <a href="#betaprogram" className="block w-full text-center px-6 py-3 rounded-lg bg-neutral-700 hover:bg-neutral-600 text-white font-semibold transition-colors duration-300">Start Free Trial</a>
                    </div>

                    <div className="bg-neutral-800 rounded-2xl p-8 border-2 border-blue-600 transform scale-105 animate__animated animate__fadeIn animate__delay-2s">
                        <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 text-sm font-semibold rounded-bl rounded-tr">Most Popular</div>
                        <h3 className="text-xl font-semibold text-white mb-4">Pro</h3>
                        <div className="mb-6">
                            <span className="text-4xl font-bold text-white">$19</span>
                            <span className="text-neutral-400">/month</span>
                        </div>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center text-neutral-300">
                                <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Unlimited documents
                            </li>
                            <li className="flex items-center text-neutral-300">
                                <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Advanced templates
                            </li>
                            <li className="flex items-center text-neutral-300">
                                <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Priority support
                            </li>
                            <li className="flex items-center text-neutral-300">
                                <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Custom branding
                            </li>
                        </ul>
                        <a href="#betaprogram" className="block w-full text-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors duration-300">Start Free Trial</a>
                    </div>

                    <div className="bg-neutral-800 rounded-2xl p-8 border border-neutral-700 hover:border-blue-600 transition-all duration-300 animate__animated animate__fadeIn animate__delay-3s">
                        <h3 className="text-xl font-semibold text-white mb-4">Enterprise</h3>
                        <div className="mb-6">
                            <span className="text-4xl font-bold text-white">$49</span>
                            <span className="text-neutral-400">/month</span>
                        </div>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center text-neutral-300">
                                <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Everything in Pro
                            </li>
                            <li className="flex items-center text-neutral-300">
                                <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                API access
                            </li>
                            <li className="flex items-center text-neutral-300">
                                <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Dedicated support
                            </li>
                            <li className="flex items-center text-neutral-300">
                                <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                Custom integration
                            </li>
                        </ul>
                        <a href="#betaprogram" className="block w-full text-center px-6 py-3 rounded-lg bg-neutral-700 hover:bg-neutral-600 text-white font-semibold transition-colors duration-300">Contact Sales</a>
                    </div>
                </div>

                <div className="text-center mt-12 animate__animated animate__fadeIn animate__delay-4s">
                    <p className="text-neutral-400">
                        30-day money-back guarantee • No credit card required • Cancel anytime
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Pricing;