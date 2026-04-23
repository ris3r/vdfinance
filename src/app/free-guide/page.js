'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import GlassCard from '../../components/GlassCard';
import Button from '../../components/Button';

export default function FreeGuidePage() {
    const [name, setName] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        if (!name.trim() || !whatsapp.trim()) {
            setError('Please fill in both fields.');
            return;
        }
        if (whatsapp.replace(/\D/g, '').length < 10) {
            setError('Please enter a valid 10-digit WhatsApp number.');
            return;
        }
        localStorage.setItem('vdf_lead', JSON.stringify({
            name: name.trim(),
            whatsapp: whatsapp.trim(),
            timestamp: new Date().toISOString(),
        }));
        setSubmitted(true);
    };

    const insidePoints = [
        'Why 90% of retail traders lose — and the one structural shift that changes everything',
        'How institutions map liquidity zones before the market opens',
        'The truth about support and resistance (and why retail traders draw them wrong)',
        'Introduction to timing: why WHEN you enter matters as much as WHERE',
        'The single risk rule that keeps professionals alive through losing streaks',
    ];

    return (
        <>
            <Navbar />
            <main className="main-content" style={{ background: 'var(--bg-darker)', paddingTop: '100px', minHeight: '100vh' }}>

                {/* SECTION 1: Hero */}
                <section style={{ padding: '4rem 0 2rem' }}>
                    <div className="container" style={{ maxWidth: '1000px' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '3rem', alignItems: 'center' }}>

                            {/* Left: Copy */}
                            <div>
                                <div style={{ display: 'inline-block', padding: '6px 18px', borderRadius: '20px', border: '1px solid rgba(0,230,118,0.3)', background: 'rgba(0,230,118,0.06)', marginBottom: '1.5rem' }}>
                                    <span style={{ color: 'var(--accent-green)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>Free Download — No Cost, No Catch</span>
                                </div>

                                <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', lineHeight: 1.2, marginBottom: '1.5rem' }}>
                                    5 Institutional Secrets Most Retail Traders{' '}
                                    <span className="text-gradient-gold">Will Never Know</span>
                                </h1>

                                <p className="text-muted" style={{ fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                                    The same frameworks Dr. Vinith has used to train 1,500+ students — distilled into a free guide. Enter your details and get it instantly on WhatsApp.
                                </p>
                            </div>

                            {/* Right: PDF Mockup */}
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <div style={{
                                    width: '260px', height: '340px',
                                    background: 'linear-gradient(145deg, #0a0a0a 0%, #151515 50%, #0a0a0a 100%)',
                                    border: '2px solid var(--gold-border)',
                                    borderRadius: '8px',
                                    position: 'relative',
                                    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                                    padding: '2rem',
                                    boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(255,215,0,0.08)',
                                    overflow: 'hidden',
                                }}>
                                    {/* Top badge */}
                                    <div style={{
                                        position: 'absolute', top: '12px', right: '-28px',
                                        background: 'var(--accent-green)', color: '#000',
                                        padding: '4px 40px', fontSize: '0.65rem', fontWeight: 800,
                                        transform: 'rotate(45deg)', letterSpacing: '1px',
                                    }}>FREE</div>
                                    {/* Corner fold */}
                                    <div style={{
                                        position: 'absolute', top: 0, right: 0,
                                        width: 0, height: 0,
                                        borderTop: '30px solid var(--bg-darker)',
                                        borderLeft: '30px solid transparent',
                                    }}></div>
                                    {/* Logo area */}
                                    <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>📊</div>
                                    <p style={{ color: 'var(--gold-primary)', fontSize: '0.65rem', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '1.5rem', fontWeight: 600 }}>VD Financepedia</p>
                                    <h3 style={{ fontSize: '1.1rem', textAlign: 'center', color: '#fff', lineHeight: 1.3, marginBottom: '1rem' }}>
                                        5 Institutional Secrets
                                    </h3>
                                    <p style={{ color: '#888', fontSize: '0.75rem', textAlign: 'center', lineHeight: 1.5 }}>
                                        Most Retail Traders Will Never Know
                                    </p>
                                    {/* Bottom line */}
                                    <div style={{ position: 'absolute', bottom: '16px', width: '60%', height: '2px', background: 'linear-gradient(90deg, transparent, var(--gold-primary), transparent)' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 2: What's Inside */}
                <section style={{ padding: '3rem 0' }}>
                    <div className="container" style={{ maxWidth: '750px' }}>
                        <h2 style={{ fontSize: '1.4rem', marginBottom: '2rem', color: '#fff' }}>
                            What's <span className="text-gradient-gold">inside</span>
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {insidePoints.map((point, i) => (
                                <div key={i} style={{
                                    display: 'flex', gap: '14px', alignItems: 'flex-start',
                                    padding: '14px 18px',
                                    background: 'rgba(255,255,255,0.02)',
                                    borderRadius: '10px',
                                    border: '1px solid rgba(255,255,255,0.04)',
                                }}>
                                    <span style={{
                                        color: 'var(--gold-primary)', fontWeight: 700, fontSize: '1.1rem',
                                        width: '28px', flexShrink: 0, textAlign: 'center',
                                    }}>
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    <p style={{ color: '#ccc', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>{point}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECTION 3: Capture Form */}
                <section style={{ padding: '3rem 0' }}>
                    <div className="container" style={{ maxWidth: '500px' }}>
                        <GlassCard style={{
                            padding: '2.5rem',
                            borderTop: '3px solid var(--gold-primary)',
                            background: 'linear-gradient(135deg, rgba(15,15,15,0.95), rgba(0,0,0,0.98))',
                        }}>
                            {submitted ? (
                                <div className="text-center" style={{ padding: '2rem 0' }}>
                                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                                    <h3 style={{ fontSize: '1.3rem', color: 'var(--accent-green)', marginBottom: '1rem' }}>Sent!</h3>
                                    <p className="text-muted" style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                                        Check your WhatsApp in the next 2 minutes.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: '#fff', textAlign: 'center' }}>
                                        Get The Free Guide
                                    </h3>

                                    <div style={{ marginBottom: '1rem' }}>
                                        <input
                                            type="text"
                                            placeholder="Full Name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            style={{
                                                width: '100%', padding: '14px 16px',
                                                background: 'rgba(255,255,255,0.08)',
                                                border: '1px solid rgba(255,255,255,0.15)',
                                                borderRadius: '10px', color: '#fff',
                                                fontSize: '1rem', outline: 'none',
                                            }}
                                        />
                                    </div>

                                    <div style={{ marginBottom: '1rem' }}>
                                        <div style={{ position: 'relative' }}>
                                            <span style={{
                                                position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)',
                                                color: '#888', fontSize: '0.9rem', fontWeight: 500, pointerEvents: 'none',
                                            }}>+91</span>
                                            <input
                                                type="tel"
                                                placeholder="WhatsApp Number"
                                                value={whatsapp}
                                                onChange={(e) => setWhatsapp(e.target.value)}
                                                style={{
                                                    width: '100%', padding: '14px 16px 14px 50px',
                                                    background: 'rgba(255,255,255,0.08)',
                                                    border: '1px solid rgba(255,255,255,0.15)',
                                                    borderRadius: '10px', color: '#fff',
                                                    fontSize: '1rem', outline: 'none',
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {error && (
                                        <p style={{ color: 'var(--accent-red)', fontSize: '0.85rem', marginBottom: '1rem' }}>{error}</p>
                                    )}

                                    <Button variant="primary" style={{
                                        width: '100%', padding: '16px', fontSize: '1.05rem',
                                        background: 'var(--gold-primary)', color: '#000',
                                        border: 'none', fontWeight: 700, borderRadius: '10px',
                                        cursor: 'pointer',
                                    }}>
                                        Send Me The Free Guide →
                                    </Button>

                                    <p style={{ color: '#666', fontSize: '0.75rem', textAlign: 'center', marginTop: '1rem', lineHeight: 1.5 }}>
                                        We send it directly to your WhatsApp. No spam, ever. Unsubscribe anytime.
                                    </p>
                                </form>
                            )}
                        </GlassCard>
                    </div>
                </section>

                {/* SECTION 4: Transition to Webinar */}
                <section style={{ padding: '3rem 0 4rem' }}>
                    <div className="container text-center" style={{ maxWidth: '600px' }}>
                        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,215,0,0.15), transparent)', marginBottom: '2rem' }}></div>
                        <p className="text-muted" style={{ fontSize: '1rem', marginBottom: '1rem' }}>
                            Want to go deeper?
                        </p>
                        <Link href="/webinar">
                            <Button variant="secondary" style={{
                                padding: '14px 32px', fontSize: '0.95rem',
                                border: '1px solid var(--gold-border)', color: 'var(--gold-primary)',
                                background: 'transparent', borderRadius: '10px',
                            }}>
                                Join the Live Masterclass for just ₹199 →
                            </Button>
                        </Link>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
