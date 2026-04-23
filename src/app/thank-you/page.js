'use client';
import React from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import GlassCard from '../../components/GlassCard';

export default function ThankYou() {
    return (
        <>
            <Navbar />
            <main className="main-content" style={{ paddingTop: '120px', background: 'var(--bg-darker)', minHeight: '100vh' }}>

                {/* Background grid */}
                <div style={{
                    position: 'fixed', inset: 0, opacity: 0.02, pointerEvents: 'none', zIndex: 0,
                    backgroundImage: 'linear-gradient(rgba(0,230,118,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,230,118,0.4) 1px, transparent 1px)',
                    backgroundSize: '80px 80px'
                }}></div>

                {/* SECTION 1: Confirmation Hero */}
                <section style={{ padding: '4rem 0', position: 'relative', zIndex: 1 }}>
                    <div className="container text-center" style={{ maxWidth: '800px' }}>

                        {/* Animated Check Icon */}
                        <div style={{ margin: '0 auto 2rem', width: '100px', height: '100px', position: 'relative' }}>
                            <svg width="100" height="100" viewBox="0 0 100 100" style={{ overflow: 'visible' }}>
                                <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(0,230,118,0.2)" strokeWidth="3" />
                                <circle
                                    cx="50" cy="50" r="45" fill="none" stroke="var(--accent-green)" strokeWidth="3"
                                    strokeDasharray="283" strokeDashoffset="283"
                                    style={{ animation: 'draw-circle 0.8s ease-out forwards 0.2s' }}
                                />
                                <polyline
                                    points="30,52 45,66 72,38"
                                    fill="none" stroke="var(--accent-green)" strokeWidth="4"
                                    strokeLinecap="round" strokeLinejoin="round"
                                    strokeDasharray="60" strokeDashoffset="60"
                                    style={{ animation: 'draw-check 0.5s ease-out forwards 0.8s' }}
                                />
                            </svg>
                        </div>

                        <h1 className="animate-fade-in" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem', animationDelay: '0.5s' }}>
                            You're In. Your Trading Journey <span className="text-gradient-gold">Changes Today.</span>
                        </h1>
                        <p className="text-muted animate-fade-in" style={{ fontSize: '1.15rem', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto', animationDelay: '0.7s' }}>
                            Your seat for the VD Financepedia Masterclass has been confirmed. Here's everything you need.
                        </p>
                    </div>
                </section>

                {/* SECTION 2: What happens next — 3 steps */}
                <section style={{ padding: '3rem 0', position: 'relative', zIndex: 1 }}>
                    <div className="container" style={{ maxWidth: '1000px' }}>
                        <h2 className="text-center" style={{ fontSize: '1.5rem', marginBottom: '2.5rem', color: '#fff' }}>
                            What Happens <span className="text-gradient-gold">Next</span>
                        </h2>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>

                            {/* Step 1: WhatsApp Group */}
                            <GlassCard style={{ padding: '2rem', borderTop: '3px solid #25D366', textAlign: 'center' }}>
                                <div style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#25D366', fontWeight: 700 }}>01</div>
                                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.8rem', color: '#fff' }}>Join the Exclusive WhatsApp Group</h3>
                                <p className="text-muted" style={{ fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                                    Get pre-session resources, live updates, and connect with fellow participants.
                                </p>
                                <a
                                    href="#whatsapp-group-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                                        padding: '12px 24px', background: '#25D366', color: '#fff',
                                        borderRadius: '8px', fontWeight: 600, fontSize: '0.9rem',
                                        textDecoration: 'none', transition: 'all 0.3s ease',
                                        boxShadow: '0 4px 15px rgba(37,211,102,0.3)'
                                    }}
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    Join WhatsApp Group
                                </a>
                            </GlassCard>

                            {/* Step 2: Calendar */}
                            <GlassCard style={{ padding: '2rem', borderTop: '3px solid var(--gold-primary)', textAlign: 'center' }}>
                                <div style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--gold-primary)', fontWeight: 700 }}>02</div>
                                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.8rem', color: '#fff' }}>Add to Your Calendar</h3>
                                <p className="text-muted" style={{ fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                                    Block your schedule. This isn't optional viewing—it's your financial lifeline.
                                </p>
                                <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
                                    <a
                                        href="#gcal-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            padding: '10px 18px', borderRadius: '8px',
                                            border: '1px solid var(--gold-border)', color: 'var(--gold-primary)',
                                            textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500,
                                            transition: 'all 0.3s ease', background: 'rgba(255,215,0,0.05)',
                                            display: 'inline-flex', alignItems: 'center', gap: '6px'
                                        }}
                                    >
                                        📅 Google Calendar
                                    </a>
                                    <a
                                        href="#apple-cal-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            padding: '10px 18px', borderRadius: '8px',
                                            border: '1px solid rgba(255,255,255,0.15)', color: '#ccc',
                                            textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500,
                                            transition: 'all 0.3s ease', background: 'rgba(255,255,255,0.03)',
                                            display: 'inline-flex', alignItems: 'center', gap: '6px'
                                        }}
                                    >
                                        🍎 Apple Calendar
                                    </a>
                                </div>
                            </GlassCard>

                            {/* Step 3: Come Prepared */}
                            <GlassCard style={{ padding: '2rem', borderTop: '3px solid var(--accent-blue)', textAlign: 'center' }}>
                                <div style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-blue)', fontWeight: 700 }}>03</div>
                                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.8rem', color: '#fff' }}>Come Prepared</h3>
                                <p className="text-muted" style={{ fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                                    Maximize your session output with this simple checklist.
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    <li style={{ color: '#ddd', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <span style={{ color: 'var(--accent-blue)' }}>✓</span> Keep a notebook ready
                                    </li>
                                    <li style={{ color: '#ddd', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <span style={{ color: 'var(--accent-blue)' }}>✓</span> Join 10 mins early for setup
                                    </li>
                                    <li style={{ color: '#ddd', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <span style={{ color: 'var(--accent-blue)' }}>✓</span> Have TradingView open on a second screen
                                    </li>
                                </ul>
                            </GlassCard>
                        </div>
                    </div>
                </section>

                {/* SECTION 3: Pre-webinar Primer */}
                <section style={{ padding: '3rem 0', position: 'relative', zIndex: 1 }}>
                    <div className="container" style={{ maxWidth: '800px' }}>
                        <GlassCard style={{
                            padding: 'clamp(2rem, 4vw, 3rem)',
                            borderLeft: '4px solid var(--gold-primary)',
                            background: 'linear-gradient(135deg, rgba(15,15,15,0.9), rgba(0,0,0,0.95))',
                            boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
                        }}>
                            <h2 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: '#fff' }}>
                                While you wait — understand <span className="text-gradient-gold">this one thing.</span>
                            </h2>
                            <p className="text-muted" style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                                Most retail traders lose because they <strong style={{ color: '#fff' }}>react</strong>. Institutions don't react — they <strong style={{ color: 'var(--gold-primary)' }}>anticipate</strong>.
                            </p>
                            <p className="text-muted" style={{ fontSize: '1.05rem', lineHeight: 1.8, marginTop: '1rem' }}>
                                In Saturday's session, Dr. Vinith will show you the exact framework institutions use to map price <em>before</em> it moves. Come with one question:
                            </p>
                            <p style={{
                                fontSize: '1.15rem', fontWeight: 600, color: 'var(--gold-primary)',
                                marginTop: '1.5rem', fontStyle: 'italic', lineHeight: 1.5
                            }}>
                                "Where is price most likely to go next, and why?"
                            </p>
                            <p className="text-muted" style={{ fontSize: '1rem', marginTop: '0.5rem' }}>
                                That's it. We'll answer it completely.
                            </p>
                        </GlassCard>
                    </div>
                </section>

                {/* SECTION 4: Soft Upsell */}
                <section style={{ padding: '3rem 0 4rem', position: 'relative', zIndex: 1 }}>
                    <div className="container text-center" style={{ maxWidth: '600px' }}>
                        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,215,0,0.2), transparent)', marginBottom: '2rem' }}></div>
                        <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
                            Already certain you want the full program?
                        </p>
                        <Link
                            href="/courses"
                            style={{
                                display: 'inline-flex', alignItems: 'center', gap: '8px',
                                padding: '12px 28px', border: '1px solid var(--gold-border)',
                                borderRadius: '10px', color: 'var(--gold-primary)', textDecoration: 'none',
                                fontSize: '0.95rem', fontWeight: 500, transition: 'all 0.3s ease',
                                background: 'transparent'
                            }}
                        >
                            View Full Course Options
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />

            <style jsx>{`
                @keyframes draw-circle {
                    to { stroke-dashoffset: 0; }
                }
                @keyframes draw-check {
                    to { stroke-dashoffset: 0; }
                }
            `}</style>
        </>
    );
}
