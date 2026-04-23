import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="footer section-padding" style={{ backgroundColor: 'var(--bg-dark)' }}>
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <div style={{ position: 'relative', width: '200px', height: '100px', marginBottom: '1rem' }}>
                            <Image src="/logo.png" alt="VD Financepedia Logo" fill style={{ objectFit: 'contain', objectPosition: 'left' }} unoptimized />
                        </div>
                        <h3 className="text-gradient-gold" style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>VD Financepedia</h3>
                        <p className="text-muted mt-4" style={{ maxWidth: '300px' }}>
                            The Harvard of Structured Trading Education. Powered by Vinith D'Costa & Associates.
                        </p>
                    </div>
                    <div className="footer-links">
                        <h4 className="text-white mb-4">Quick Links</h4>
                        <ul>
                            <li><Link href="#programs" className="hover-gold text-muted">Courses</Link></li>
                            <li><Link href="https://vinithdcosta.in" target="_blank" className="hover-gold text-muted">VD & Associates</Link></li>
                            <li><Link href="#framework" className="hover-gold text-muted">Framework</Link></li>
                        </ul>
                    </div>
                    <div className="footer-contact">
                        <h4 className="text-white mb-4">Legal</h4>
                        <ul>
                            <li><Link href="/disclaimer" className="hover-gold text-muted">Disclaimer</Link></li>
                            <li><Link href="/terms" className="hover-gold text-muted">Terms of Service</Link></li>
                            <li><Link href="/privacy" className="hover-gold text-muted">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="text-muted text-center" style={{ fontSize: '0.9rem' }}>
                        &copy; {new Date().getFullYear()} VD Financepedia Trading Academy. All Rights Reserved.
                    </p>
                    <p className="text-muted text-center" style={{ fontSize: '0.75rem', marginTop: '0.5rem', color: '#555' }}>
                        Vinith D'Costa &amp; Associates | SEBI Registered Research Analyst | Registration No: INH000022367 | This platform is for educational purposes only.
                    </p>
                </div>
            </div>
        </footer>
    );
}
