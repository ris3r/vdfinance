'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="navbar glass-panel">
            <div className="container flex-between align-center h-full" style={{ flexWrap: 'nowrap' }}>
                <div className="logo" style={{ flexShrink: 0, width: '150px' }}>
                    <Link href="/">
                        <div style={{ position: 'relative', width: '100%', height: '60px', display: 'flex', alignItems: 'center' }}>
                            <Image src="/logo.png" alt="VD Financepedia" fill style={{ objectFit: 'contain' }} priority sizes="150px" unoptimized />
                        </div>
                    </Link>
                </div>

                {/* Hamburger Menu Icon */}
                <div className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div className={`nav-wrapper ${isMenuOpen ? 'open' : ''}`}>
                    <ul className="nav-links flex-center gap-6">
                        <li><Link href="/courses" className="hover-gold text-white font-medium" onClick={() => setIsMenuOpen(false)}>Courses</Link></li>
                        <li><Link href="/webinar" className="hover-gold text-white font-medium" style={{ color: 'var(--gold-primary)' }} onClick={() => setIsMenuOpen(false)}>Masterclass</Link></li>
                        <li><Link href="/about" className="hover-gold text-white font-medium" onClick={() => setIsMenuOpen(false)}>The Firm</Link></li>
                        <li><Link href="/contact" className="hover-gold text-white font-medium" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
                    </ul>
                    <div className="navbar-cta mt-0" style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                        <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                            <Button variant="secondary" style={{ padding: '8px 14px', fontSize: '13px' }}>Login</Button>
                        </Link>
                        <Link href="/apply" onClick={() => setIsMenuOpen(false)}>
                            <Button variant="primary" style={{ padding: '8px 16px', fontSize: '13px', whiteSpace: 'nowrap' }}>Enroll Now</Button>
                        </Link>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .mobile-menu-btn {
                    display: none;
                    cursor: pointer;
                    z-index: 1001;
                }
                .hamburger {
                    width: 24px;
                    height: 18px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
                .hamburger span {
                    display: block;
                    width: 100%;
                    height: 2px;
                    background-color: var(--gold-primary);
                    transition: all 0.3s ease;
                }
                .hamburger.active span:nth-child(1) {
                    transform: translateY(8px) rotate(45deg);
                }
                .hamburger.active span:nth-child(2) {
                    opacity: 0;
                }
                .hamburger.active span:nth-child(3) {
                    transform: translateY(-8px) rotate(-45deg);
                }
                .nav-wrapper {
                    display: flex;
                    align-items: center;
                    gap: 2rem;
                }
                @media (max-width: 768px) {
                    .mobile-menu-btn {
                        display: block;
                    }
                    .nav-wrapper {
                        position: absolute;
                        top: 100%;
                        left: 0;
                        width: 100%;
                        background: rgba(10, 10, 10, 0.95);
                        backdrop-filter: blur(10px);
                        flex-direction: column;
                        padding: 0;
                        max-height: 0;
                        overflow: hidden;
                        transition: max-height 0.4s ease, padding 0.4s ease;
                        border-bottom: 1px solid transparent;
                    }
                    .nav-wrapper.open {
                        max-height: 400px;
                        padding: 2rem 0;
                        border-bottom: 1px solid var(--gold-border);
                        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
                    }
                    .nav-wrapper ul {
                        flex-direction: column;
                        gap: 1.5rem;
                        margin-bottom: 1.5rem;
                    }
                }
            `}</style>
        </nav>
    );
}
