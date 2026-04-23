'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import GlassCard from '../../components/GlassCard';
import Button from '../../components/Button';
import SalesCountdown from '../../components/SalesCountdown';

const courses = [
    {
        level: 'BEGINNER',
        name: 'Stock Market Foundations',
        duration: '1.5 Months',
        originalPrice: '₹13,999',
        salePrice: '₹11,899',
        color: 'var(--accent-green)',
        bg: 'rgba(0,230,118,0.05)',
        border: 'rgba(0,230,118,0.2)',
        popular: false,
        slug: 'beginner',
        inclusions: [
            'Complete Stock Market Foundations curriculum (1.5 months)',
            'Technical analysis fundamentals',
            'Introduction to price action reading',
            'Risk management basics',
            'Community WhatsApp group access',
        ],
    },
    {
        level: 'INTERMEDIATE',
        name: 'Professional Trading Framework',
        duration: '2.5 Months',
        originalPrice: '₹44,999',
        salePrice: '₹38,249',
        color: 'var(--gold-primary)',
        bg: 'rgba(255,215,0,0.05)',
        border: 'rgba(255,215,0,0.35)',
        popular: true,
        slug: 'intermediate',
        inclusions: [
            'Full Professional Trading Framework (2.5 months)',
            'Advanced institutional price action',
            'Introduction to Astro-Technical timing cycles',
            'Live session recordings',
            'Direct mentor Q&A access',
            'Community + priority support',
        ],
    },
    {
        level: 'ADVANCED',
        name: 'Elite Trader Mastery',
        duration: '3.5 Months',
        originalPrice: '₹71,999',
        salePrice: '₹61,199',
        color: 'var(--accent-red)',
        bg: 'rgba(255,23,68,0.05)',
        border: 'rgba(255,23,68,0.2)',
        popular: false,
        slug: 'advanced',
        inclusions: [
            'Elite Trader Mastery complete program (3.5 months)',
            'Full Astro-Technical methodology — planetary geometry + price structure',
            'Proprietary timing cycle systems',
            '1-on-1 mentor session with Dr. Vinith (1 session)',
            'Lifetime community access',
            'All future curriculum updates included',
        ],
    },
];

export default function SalesPage() {
    const [offerExpired, setOfferExpired] = useState(false);

    return (
        <>
            <Navbar />
            <main className="main-content" style={{ background: 'var(--bg-darker)', paddingTop: '80px' }}>

                {/* SECTION 1: Urgency Hero */}
                <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center top, rgba(255,215,0,0.06) 0%, transparent 60%)', zIndex: 0 }}></div>
                    <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at bottom, rgba(255,23,68,0.04) 0%, transparent 50%)', zIndex: 0 }}></div>

                    <div className="container text-center" style={{ zIndex: 1, maxWidth: '850px', padding: '4rem 1rem' }}>
                        <div style={{ display: 'inline-block', padding: '8px 24px', borderRadius: '30px', border: '1px solid rgba(255,23,68,0.4)', background: 'rgba(255,23,68,0.08)', marginBottom: '2rem' }}>
                            <span style={{ color: 'var(--accent-red)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase' }}>For Masterclass Attendees Only</span>
                        </div>

                        <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', lineHeight: 1.15, marginBottom: '1.5rem' }}>
                            You've Seen The Framework.{' '}
                            <br />
                            <span className="text-gradient-gold">Now You Have 48 Hours To Act On It.</span>
                        </h1>

                        <p className="text-muted" style={{ fontSize: '1.15rem', maxWidth: '650px', margin: '0 auto 3rem', lineHeight: 1.7 }}>
                            This offer is exclusively available to tonight's attendees. It expires when the timer does.
                        </p>

                        <div style={{ marginBottom: '2rem' }}>
                            <SalesCountdown large onExpire={() => setOfferExpired(true)} />
                        </div>

                        <p style={{ color: '#666', fontSize: '0.85rem' }}>Offer expires and price returns to full rate</p>
                    </div>
                </section>

                {/* SECTION 2: Course Cards */}
                <section style={{ padding: '4rem 0', position: 'relative', zIndex: 1 }}>
                    <div className="container" style={{ maxWidth: '1100px' }}>
                        <h2 className="text-center" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: '3rem' }}>
                            Choose Your <span className="text-gradient-gold">Path</span>
                        </h2>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', alignItems: 'stretch' }}>
                            {courses.map((c, i) => (
                                <div key={i} style={{ position: 'relative' }}>
                                    {c.popular && (
                                        <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: 'var(--gold-primary)', color: '#000', padding: '5px 20px', borderRadius: '20px', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '1.5px', zIndex: 5, textTransform: 'uppercase' }}>
                                            Most Popular
                                        </div>
                                    )}
                                    <GlassCard style={{
                                        padding: '2.5rem 2rem',
                                        display: 'flex', flexDirection: 'column', height: '100%',
                                        border: c.popular ? '2px solid var(--gold-primary)' : `1px solid ${c.border}`,
                                        background: c.bg,
                                        boxShadow: c.popular ? '0 0 30px rgba(255,215,0,0.15)' : 'none',
                                    }}>
                                        <div style={{ color: c.color, fontWeight: 700, letterSpacing: '2px', fontSize: '0.8rem', marginBottom: '0.8rem' }}>{c.level}</div>
                                        <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: '#fff' }}>{c.name}</h3>
                                        <p className="text-muted" style={{ fontSize: '0.85rem', marginBottom: '1.5rem' }}>{c.duration}</p>

                                        <div style={{ marginBottom: '1.5rem' }}>
                                            <span style={{ color: '#666', textDecoration: 'line-through', fontSize: '1rem', marginRight: '10px' }}>{c.originalPrice}</span>
                                            <span style={{ color: c.color, fontSize: '1.8rem', fontWeight: 'bold' }}>{c.salePrice}</span>
                                        </div>

                                        <ul style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '2rem', padding: 0, listStyle: 'none' }}>
                                            {c.inclusions.map((item, j) => (
                                                <li key={j} style={{ color: '#ccc', fontSize: '0.88rem', display: 'flex', alignItems: 'flex-start', gap: '8px', lineHeight: 1.4 }}>
                                                    <span style={{ color: c.color, flexShrink: 0 }}>✓</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>

                                        <Link href={`/apply?course=${c.slug}`} style={{ display: 'block' }}>
                                            <Button variant="primary" style={{
                                                width: '100%', padding: '14px',
                                                background: c.popular ? 'var(--gold-primary)' : 'transparent',
                                                color: c.popular ? '#000' : c.color,
                                                border: c.popular ? 'none' : `1px solid ${c.border}`,
                                                fontWeight: 700, fontSize: '0.95rem',
                                            }}>
                                                Enroll at Attendee Price →
                                            </Button>
                                        </Link>
                                    </GlassCard>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECTION 3: Overcome Objections */}
                <section style={{ padding: '4rem 0', background: 'var(--bg-dark)' }}>
                    <div className="container" style={{ maxWidth: '1000px' }}>
                        <h2 className="text-center" style={{ fontSize: '1.5rem', marginBottom: '2.5rem', color: '#fff' }}>
                            Why Decide <span className="text-gradient-gold">Now</span>
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                            {[
                                { title: 'The discount disappears in 48 hours', desc: 'After that, full price applies. No exceptions, no extensions, no coupon codes.' },
                                { title: 'Batches fill fast', desc: 'Next batch begins soon. Seat count is limited. Waitlist applies after capacity is reached.' },
                                { title: 'You already know the framework works', desc: "You saw it live tonight. The only question is whether you act on it or watch others who do." },
                            ].map((item, i) => (
                                <GlassCard key={i} style={{ padding: '2rem', borderTop: '2px solid var(--gold-primary)' }}>
                                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.8rem', color: 'var(--gold-primary)' }}>{item.title}</h3>
                                    <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>{item.desc}</p>
                                </GlassCard>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECTION 4: Dr. Vinith Personal Close */}
                <section style={{ padding: '4rem 0' }}>
                    <div className="container" style={{ maxWidth: '800px' }}>
                        <GlassCard style={{
                            padding: 'clamp(2rem, 4vw, 3.5rem)',
                            borderLeft: '4px solid var(--gold-primary)',
                            background: 'linear-gradient(135deg, rgba(15,15,15,0.95), rgba(0,0,0,0.98))',
                        }}>
                            <h2 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: '#fff' }}>
                                A direct note from <span className="text-gradient-gold">Dr. Vinith</span>
                            </h2>
                            <p style={{ color: '#ccc', fontSize: '1.05rem', lineHeight: 1.8, fontStyle: 'italic', marginBottom: '1.5rem' }}>
                                "Most people who attend the masterclass leave inspired. Very few take the next step. The ones who do — they're the ones I see posting real results inside our community six months later.
                            </p>
                            <p style={{ color: '#ccc', fontSize: '1.05rem', lineHeight: 1.8, fontStyle: 'italic', marginBottom: '1.5rem' }}>
                                Tonight you understood something most retail traders never will. Don't let that understanding expire with the timer."
                            </p>
                            <p style={{ color: 'var(--gold-primary)', fontWeight: 600, fontSize: '0.95rem' }}>
                                — Dr. Vinith Oscar D'Costa, Founder
                            </p>
                        </GlassCard>
                    </div>
                </section>

                {/* SECTION 5: FAQ */}
                <section style={{ padding: '4rem 0', background: 'var(--bg-dark)' }}>
                    <div className="container" style={{ maxWidth: '750px' }}>
                        <h2 className="text-center" style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>
                            Quick <span className="text-gradient-gold">Answers</span>
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {[
                                { q: 'Can I pay in installments?', a: 'Yes. Contact us on WhatsApp at +91 97417 90219 and we\'ll structure a plan that works for you.' },
                                { q: 'What if I miss some sessions?', a: 'All live sessions are recorded and available in your student dashboard within 24 hours.' },
                                { q: 'Is this price only for tonight?', a: 'Yes. This exclusive attendee pricing expires exactly 48 hours after the masterclass ended. After that, standard enrollment pricing applies.' },
                            ].map((faq, i) => (
                                <GlassCard key={i} style={{ padding: '1.5rem 2rem' }}>
                                    <h4 style={{ color: 'var(--gold-primary)', fontSize: '1.05rem', marginBottom: '0.7rem' }}>{faq.q}</h4>
                                    <p className="text-muted" style={{ lineHeight: 1.6, fontSize: '0.95rem' }}>{faq.a}</p>
                                </GlassCard>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Spacer for sticky bar */}
                <div style={{ height: '80px' }}></div>

            </main>
            <Footer />

            {/* SECTION 6: Sticky Bottom Bar (desktop only) */}
            {!offerExpired && (
                <div id="sales-sticky-bar" style={{
                    position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 9998,
                    background: 'rgba(10,10,10,0.95)', backdropFilter: 'blur(12px)',
                    borderTop: '1px solid var(--gold-border)',
                    padding: '12px 2rem',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                        <span style={{ color: '#fff', fontWeight: 600, fontSize: '0.9rem' }}>
                            Attendee Offer: Advanced Course — <span style={{ color: 'var(--gold-primary)' }}>₹61,199</span>
                        </span>
                        <SalesCountdown inline />
                    </div>
                    <Link href="/apply?course=advanced">
                        <Button variant="primary" style={{ padding: '10px 28px', fontSize: '0.9rem', background: 'var(--gold-primary)', color: '#000', border: 'none', fontWeight: 700 }}>
                            Enroll Now →
                        </Button>
                    </Link>
                </div>
            )}

            <style jsx>{`
                @media (max-width: 768px) {
                    #sales-sticky-bar {
                        display: none !important;
                    }
                }
            `}</style>
        </>
    );
}
