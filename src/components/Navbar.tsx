"use client"
import React, { useState, useEffect, useRef } from 'react';

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const mobileButtonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                mobileMenuRef.current &&
                !mobileMenuRef.current.contains(event.target as Node) &&
                !mobileButtonRef.current?.contains(event.target as Node)
            ) {
                setIsMobileMenuOpen(false);
            }
        };

        const handleAnchorClick = (e: Event) => {
            const target = e.target as HTMLAnchorElement;
            if (target.hash && target.href.includes('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(target.hash);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                    setIsMobileMenuOpen(false);
                }
            }
        };

        document.addEventListener('click', handleClickOutside);
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', handleAnchorClick);
        });

        return () => {
            document.removeEventListener('click', handleClickOutside);
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.removeEventListener('click', handleAnchorClick);
            });
        };
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav id="navbar" className="fixed w-full z-50 bg-neutral-900 border-b border-neutral-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="#" className="text-white font-bold text-xl">Magicformatter.ai</a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            <a href="#features" className="text-neutral-300 hover:text-white px-3 py-2 text-sm font-medium">Features</a>
                            <a href="#benefits" className="text-neutral-300 hover:text-white px-3 py-2 text-sm font-medium">Benefits</a>
                            <a href="#workflow" className="text-neutral-300 hover:text-white px-3 py-2 text-sm font-medium">How It Works</a>
                            <a href="#pricing" className="text-neutral-300 hover:text-white px-3 py-2 text-sm font-medium">Pricing</a>
                            <a href="#betaprogram" className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium">Join Beta</a>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            ref={mobileButtonRef}
                            id="mobile-menu-button"
                            type="button"
                            onClick={toggleMobileMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-800 focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                ref={mobileMenuRef}
                id="mobile-menu"
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-neutral-900 border-b border-neutral-800`}
            >
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <a href="#features" className="text-neutral-300 hover:text-white block px-3 py-2 text-base font-medium">Features</a>
                    <a href="#benefits" className="text-neutral-300 hover:text-white block px-3 py-2 text-base font-medium">Benefits</a>
                    <a href="#workflow" className="text-neutral-300 hover:text-white block px-3 py-2 text-base font-medium">How It Works</a>
                    <a href="#pricing" className="text-neutral-300 hover:text-white block px-3 py-2 text-base font-medium">Pricing</a>
                    <a href="#betaprogram" className="text-white bg-blue-600 hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium">Join Beta</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;