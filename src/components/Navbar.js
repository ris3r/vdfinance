import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';

export default function Navbar() {
    return (
        <nav className="navbar glass-panel">
            <div className="container flex-between align-center h-full">
                <div className="logo">
                    <Link href="/">
                        <div style={{ position: 'relative', width: '220px', height: '80px', display: 'flex', alignItems: 'center' }}>
                            <Image src="/logo.png" alt="VD Financepedia" fill style={{ objectFit: 'contain' }} priority sizes="(max-width: 768px) 150px, 220px" unoptimized />
                        </div>
                    </Link>
                </div>
                <ul className="nav-links flex-center gap-6">
                    <li><Link href="/courses" className="hover-gold text-white font-medium">Courses</Link></li>
                    <li><Link href="/webinar" className="hover-gold text-white font-medium" style={{ color: 'var(--gold-primary)' }}>Masterclass</Link></li>
                    <li><Link href="/about" className="hover-gold text-white font-medium">The Firm</Link></li>
                    <li><Link href="/contact" className="hover-gold text-white font-medium">Contact</Link></li>
                </ul>
                <div className="navbar-cta mt-4 md:mt-0">
                    <Link href="/apply">
                        <Button variant="primary">Enroll Now</Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
