import React from 'react';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Button from '../../../components/Button';
import GlassCard from '../../../components/GlassCard';
import FAQ from '../../../components/FAQ';
import AdvisorCTA from '../../../components/AdvisorCTA';

export const metadata = {
    title: "Intermediate Trading Course | VD Financepedia",
    description: "Develop your trading edge with our Intermediate Professional Framework. Learn indicator synergy, risk systems, and timing models.",
};

export default function IntermediateCourse() {
    return (
        <>
            <Navbar />
            <main className="main-content" style={{ background: 'var(--bg-darker)' }}>

                {/* 1. HERO SECTION */}
                <section className="hero section-padding flex-center" style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
                    {/* Subtle animated background specific to Intermediate (Blue glow) */}
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(ellipse at center, rgba(38,132,255,0.08) 0%, transparent 60%)', zIndex: -1, animation: 'pulse-glow-elegant 8s infinite alternate' }}></div>

                    {/* Decorative geometric patterns */}
                    <div className="animate-float" style={{ position: 'absolute', top: '15%', left: '10%', opacity: 0.15, border: '2px dashed var(--accent-blue)', width: '250px', height: '250px', borderRadius: '20px', transform: 'rotate(45deg)', zIndex: -1 }}></div>
                    <div className="animate-float" style={{ animationDelay: '3s', position: 'absolute', bottom: '10%', right: '5%', opacity: 0.1, border: '1px solid var(--accent-blue)', width: '400px', height: '100px', zIndex: -1, background: 'linear-gradient(90deg, rgba(38,132,255,0.2), transparent)' }}></div>

                    <div className="container text-center animate-fade-in" style={{ zIndex: 1, maxWidth: '900px' }}>
                        <div className="glass-badge mb-6" style={{ display: 'inline-block', padding: '8px 24px', borderRadius: '30px', border: '1px solid rgba(38,132,255,0.3)', background: 'rgba(38,132,255,0.05)', backdropFilter: 'blur(8px)' }}>
                            <span style={{ color: 'var(--accent-blue)', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '1px' }}>LEVEL 2: INTERMEDIATE PROGRAM</span>
                        </div>

                        <h1 className="mb-6" style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', lineHeight: 1.1 }}>
                            Professional <br />
                            <span style={{ color: 'var(--accent-blue)' }}>Trading Framework</span>
                        </h1>

                        <h3 className="mb-8 text-muted" style={{ fontWeight: 400, fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', lineHeight: 1.6 }}>
                            A completely comprehensive program starting from zero. We build your Level 1 foundation before fusing advanced technical indicators, probability models, and powerful timing systems to develop your quantifiable edge.
                        </h3>

                        <div className="flex-center gap-6" style={{ flexWrap: 'wrap' }}>
                            <Link href="/apply?course=intermediate">
                                <Button variant="primary" style={{ padding: '16px 40px', fontSize: '1.1rem', background: 'linear-gradient(45deg, var(--accent-blue), var(--gold-primary))', color: '#000', border: 'none' }}>Enroll in Level 2</Button>
                            </Link>
                            <AdvisorCTA variant="secondary" style={{ padding: '16px 40px', fontSize: '1.1rem', borderColor: 'rgba(0,102,255,0.3)', color: 'var(--accent-blue)' }}>Request Advisor Call</AdvisorCTA>
                        </div>

                        <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center', gap: '3rem', color: '#888', flexWrap: 'wrap' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ color: 'var(--accent-blue)' }}>⏱</span> 2.5 Months Duration
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ color: 'var(--accent-blue)' }}>₹</span> ₹44,999 + GST
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ color: 'var(--accent-blue)' }}>📈</span> Requires Basic Price Action
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. THE TRANSFORMATION SECTION */}
                <section className="transformation-section section-padding" style={{ background: 'var(--bg-dark)' }}>
                    <div className="container text-center">
                        <h2 className="mb-8" style={{ fontSize: '2.5rem' }}>The <span style={{ color: 'var(--accent-blue)' }}>Phase Shift</span></h2>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '2rem', alignItems: 'stretch' }}>
                            {/* Level 1 State */}
                            <GlassCard style={{ padding: '3rem', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1.5rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <h3 style={{ color: '#ccc', fontSize: '1.8rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>The Baseline Trader</h3>
                                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', color: '#888', fontSize: '1.1rem' }}>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>Trades basic breakouts (often fakeouts)</li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>Struggles with dynamic support/resistance</li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>Reacts to lagging indicators blindly</li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>Doesn't understand multi-timeframe alignment</li>
                                </ul>
                            </GlassCard>

                            {/* Arrow */}
                            <div className="flex-center" style={{ fontSize: '3rem', color: 'rgba(38,132,255,0.4)' }}>
                                ⟶
                            </div>

                            {/* Level 2 State */}
                            <GlassCard className="glass-panel-blue" style={{ padding: '3rem', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <h3 style={{ color: 'var(--accent-blue)', fontSize: '1.8rem', borderBottom: '1px solid rgba(38,132,255,0.2)', paddingBottom: '1rem' }}>The Strategic Operator</h3>
                                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', color: '#fff', fontSize: '1.1rem' }}>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><span style={{ color: 'var(--accent-blue)' }}>★</span> Identifies high-probability confluences</li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><span style={{ color: 'var(--accent-blue)' }}>★</span> Uses indicators to confirm, not dictate</li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><span style={{ color: 'var(--accent-blue)' }}>★</span> Masters volatility & momentum mechanics</li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><span style={{ color: 'var(--accent-blue)' }}>★</span> Executes with strict statistical risk parameters</li>
                                </ul>
                            </GlassCard>
                        </div>
                    </div>
                </section>

                {/* 3. STRATEGY BLUEPRINTS */}
                <section className="modules-section section-padding">
                    <div className="container">
                        <div className="text-center mb-12">
                            <h2 style={{ fontSize: '2.5rem' }}>The <span style={{ color: 'var(--accent-blue)' }}>Strategic Blueprints</span></h2>
                            <p className="text-muted mt-4 text-center mx-auto" style={{ maxWidth: '600px' }}>What exactly are you going to learn in the Intermediate Level 2 construct?</p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                            {[
                                { title: "Indicator Synergy", desc: "How to combine Oscillators (RSI, MACD) with Trend trackers (Moving Averages, Supertrend) to build a coherent system without chart clutter.", tool: "Technical Logic" },
                                { title: "Volatility Channels", desc: "Mastering Bollinger Bands and ATR to understand expansions, contractions, and impending breakouts before they occur.", tool: "Momentum Models" },
                                { title: "Harmonic Formations", desc: "Introduction to Fibonacci retracements, extensions, and structural geometric patterns within price action.", tool: "Geometric Analysis" },
                                { title: "Astro-Timing Confluence", desc: "Integrating Lunar cycles, Retrogrades, and planetary transits with technical structure to predict high-volatility turn dates.", tool: "Financial Astrology" }
                            ].map((mod, i) => (
                                <GlassCard key={i} style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
                                    <div style={{ position: 'absolute', top: 0, right: 0, padding: '5px 15px', background: 'rgba(38,132,255,0.1)', color: 'var(--accent-blue)', fontSize: '0.8rem', borderBottomLeftRadius: '10px', fontWeight: 'bold' }}>
                                        {mod.tool}
                                    </div>
                                    <h4 style={{ fontSize: '1.4rem', marginBottom: '1rem', marginTop: '1rem' }}>{mod.title}</h4>
                                    <p className="text-muted" style={{ fontSize: '1rem', lineHeight: 1.6 }}>{mod.desc}</p>
                                </GlassCard>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. DASHBOARD SIMULATION */}
                <section className="dashboard-section section-padding" style={{ background: 'var(--bg-dark)' }}>
                    <div className="container text-center">
                        <h2 className="mb-6" style={{ fontSize: '2.8rem' }}>The <span style={{ color: 'var(--accent-blue)' }}>Analytic Interface</span></h2>
                        <p className="text-muted mb-8" style={{ maxWidth: '700px', margin: '0 auto 4rem', fontSize: '1.1rem' }}>
                            In Level 2, we graduate from naked charts to complex, multi-variable dashboards where timing aligns with mathematical indicators.
                        </p>

                        <div className="glass-panel" style={{ padding: '20px', borderRadius: '15px', background: 'rgba(5,5,10,0.9)', border: '1px solid rgba(38,132,255,0.3)', boxShadow: '0 20px 60px rgba(0,0,0,0.8)', position: 'relative' }}>
                            {/* Complex Chart Visualization Mockup */}
                            <div style={{ height: '400px', width: '100%', position: 'relative', background: '#0a0a0f', borderRadius: '10px', overflow: 'hidden' }}>

                                {/* Grid */}
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

                                <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1000 400">
                                    {/* Bollinger Bands (Simulated) */}
                                    <path d="M0 250 Q 200 150, 400 250 T 800 150 T 1000 200 L 1000 300 Q 800 250, 400 350 T 0 350 Z" fill="rgba(38,132,255,0.05)" />
                                    <path d="M0 250 Q 200 150, 400 250 T 800 150 T 1000 200" fill="none" stroke="rgba(38,132,255,0.3)" strokeDasharray="4,4" />
                                    <path d="M0 350 Q 200 250, 400 350 T 800 250 T 1000 300" fill="none" stroke="rgba(38,132,255,0.3)" strokeDasharray="4,4" />

                                    {/* Moving Average */}
                                    <path d="M0 300 Q 200 200, 400 300 T 800 200 T 1000 250" fill="none" stroke="var(--gold-primary)" strokeWidth="2" opacity="0.8" />

                                    {/* Price Action Line */}
                                    <path d="M0 280 Q 100 240, 200 280 T 400 230 T 500 280 T 600 200 T 700 240 T 800 160 T 900 220 T 1000 180" fill="none" stroke="#fff" strokeWidth="2" />

                                    {/* Confluence Marker */}
                                    <circle cx="800" cy="160" r="8" fill="var(--accent-blue)" stroke="#fff" strokeWidth="2" className="animate-pulse-glow" />
                                    <text x="760" y="130" fill="var(--accent-blue)" fontSize="14" fontWeight="bold">Confluence Entry</text>

                                    {/* Oscillator Panel Background at Bottom */}
                                    <rect x="0" y="320" width="1000" height="80" fill="rgba(0,0,0,0.5)" borderTop="1px solid rgba(255,255,255,0.1)" />
                                    <path d="M0 360 Q 300 320, 600 380 T 1000 340" fill="none" stroke="rgba(38,132,255,0.8)" strokeWidth="2" />
                                    <line x1="0" y1="340" x2="1000" y2="340" stroke="rgba(255,255,255,0.2)" strokeDasharray="2,2" />
                                    <text x="10" y="335" fill="rgba(255,255,255,0.5)" fontSize="10">RSI 70 Oversold</text>
                                </svg>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. ASTROLOGY HIGHLIGHT */}
                <section className="astro-feature section-padding">
                    <div className="container">
                        <GlassCard className="split-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', padding: '0', overflow: 'hidden', border: '1px solid rgba(255,215,0,0.2)' }}>
                            <div style={{ padding: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'linear-gradient(135deg, rgba(0,0,0,0.8), rgba(20,20,30,0.9))' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--gold-primary)' }}>☾</div>
                                <h3 style={{ fontSize: '2.2rem', marginBottom: '1.5rem', color: '#fff' }}>Lunar & Planetary Cycles</h3>
                                <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                                    Intermediate students are taught how specific planetary alignments and lunar phases directly correlate with market sentiment shifts. We don't just rely on historical price patterns; we map cyclical time phenomena to probability curves.
                                </p>
                            </div>
                            <div style={{ background: 'url("data:image/svg+xml,%3Csvg width=\\"100%\\" height=\\"100%\\" xmlns=\\"http://www.w3.org/2000/svg\\"%3E%3Ccircle cx=\\"50%\\" cy=\\"50%\\" r=\\"150\\" fill=\\"none\\" stroke=\\"rgba(255,215,0,0.2)\\" stroke-width=\\"2\\" stroke-dasharray=\\"10,5\\"/%3E%3Ccircle cx=\\"50%\\" cy=\\"50%\\" r=\\"100\\" fill=\\"none\\" stroke=\\"rgba(38,132,255,0.3)\\" stroke-width=\\"1\\"/%3E%3C/svg%3E")', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '300px' }}></div>
                        </GlassCard>
                    </div>
                </section>

                {/* 6. CALL TO ACTION */}
                <section className="final-cta-section section-padding" style={{ background: 'linear-gradient(to top, rgba(38,132,255,0.05), var(--bg-darker))', borderTop: '1px solid rgba(38,132,255,0.2)' }}>
                    <div className="container text-center">
                        <h2 className="mb-6" style={{ fontSize: 'clamp(3rem, 4vw, 4rem)' }}>Secure Your <span style={{ color: 'var(--accent-blue)' }}>Strategic Edge</span></h2>
                        <div className="flex-center gap-6" style={{ flexWrap: 'wrap', marginTop: '3rem' }}>
                            <Link href="/apply?course=intermediate">
                                <Button variant="primary" style={{ padding: '18px 50px', fontSize: '1.2rem', background: 'var(--accent-blue)', color: '#fff', border: 'none' }}>
                                    Enroll Now — ₹44,999
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* 7. FAQ SECTION */}
                <FAQ faqs={[
                    { q: "Do I need to complete the Beginner course first?", a: "No. This program is completely comprehensive. We cover all the Level 1 Basics (candlesticks, support/resistance, market mechanics) before graduating you to the complex Level 2 indicator and timing frameworks." },
                    { q: "Which markets does this strategy apply to?", a: "The principles of indicator synergy, momentum channels, and financial astrology apply symmetrically to Equities, F&O, Forex, and Crypto markets." },
                    { q: "Is the software required expensive?", a: "We teach you how to set up professional-grade dashboards using standard charting software (like TradingView or your broker’s terminal) using free or minimal-cost plans." }
                ]} />

            </main >
            <Footer />
        </>
    );
}
