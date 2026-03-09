import React from 'react';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Button from '../../../components/Button';
import GlassCard from '../../../components/GlassCard';
import FAQ from '../../../components/FAQ';
import AdvisorCTA from '../../../components/AdvisorCTA';

export const metadata = {
    title: "Advanced Trader Mastery | VD Financepedia",
    description: "The elite institutional trading program. Master complex multi-timeframe arbitrage, advanced psychology, and profound financial astrology.",
};

export default function AdvancedCourse() {
    return (
        <>
            <Navbar />
            <main className="main-content" style={{ background: '#000' }}> {/* Deepest black for Advanced */}

                {/* 1. HERO SECTION */}
                <section className="hero section-padding flex-center" style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
                    {/* Dark, cosmic purple/gold theme */}
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(ellipse at top, rgba(144,19,254,0.1) 0%, transparent 80%)', zIndex: -1, animation: 'pulse-glow-elegant 10s infinite alternate' }}></div>

                    {/* Elite abstract elements */}
                    <div style={{ position: 'absolute', top: '10%', right: '15%', opacity: 0.15, border: '1px solid var(--accent-purple)', width: '400px', height: '400px', borderRadius: '50%', zIndex: -1, transform: 'rotateX(70deg)', boxShadow: '0 0 50px var(--accent-purple)' }}></div>
                    <div style={{ position: 'absolute', bottom: '0', left: '0', opacity: 0.05, borderTop: '1px solid var(--gold-primary)', width: '100vw', height: '20vh', zIndex: -1, background: 'linear-gradient(to top, rgba(255,215,0,0.2), transparent)' }}></div>

                    <div className="container text-center animate-fade-in" style={{ zIndex: 1, maxWidth: '900px' }}>
                        <div className="glass-badge mb-6" style={{ display: 'inline-block', padding: '8px 24px', borderRadius: '30px', border: '1px solid rgba(144,19,254,0.4)', background: 'rgba(144,19,254,0.08)', backdropFilter: 'blur(8px)', boxShadow: '0 0 20px rgba(144,19,254,0.2)' }}>
                            <span style={{ color: '#d08cff', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '2px' }}>LEVEL 3: ELITE MASTERY</span>
                        </div>

                        <h1 className="mb-6" style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', lineHeight: 1.1, textTransform: 'uppercase', letterSpacing: '2px' }}>
                            Institutional <br />
                            <span style={{ background: 'linear-gradient(to right, var(--gold-primary), var(--accent-purple))', WebkitBackgroundClip: 'text', color: 'transparent' }}>Execution Mechanics</span>
                        </h1>

                        <h3 className="mb-8 text-muted" style={{ fontWeight: 400, fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', lineHeight: 1.6, maxWidth: '750px', margin: '0 auto 2rem' }}>
                            The ultimate A-Z mastery program. We cover everything from Level 1 Basics and Level 2 Tactics, before graduating you to deep timing analytics, algorithmic architecture, and high-tier structural risk control.
                        </h3>

                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem', gap: '1rem', flexWrap: 'wrap' }}>
                            <Link href="/apply?course=advanced">
                                <Button variant="primary" style={{ padding: '20px 50px', fontSize: '1.2rem', background: 'transparent', color: '#fff', border: '2px solid var(--accent-purple)', boxShadow: '0 0 30px rgba(144,19,254,0.4)' }}>
                                    Request Enrollment Access
                                </Button>
                            </Link>
                            <AdvisorCTA variant="secondary" style={{ padding: '20px 50px', fontSize: '1.2rem', borderColor: 'rgba(255,255,255,0.2)' }}>
                                Request Callback
                            </AdvisorCTA>
                        </div>

                        <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center', gap: '3rem', color: '#888', flexWrap: 'wrap', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ color: 'var(--accent-purple)' }}>⏱</span> 3.5 Months Intensive
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ color: 'var(--accent-purple)' }}>₹</span> ₹71,999 + GST
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ color: 'var(--accent-purple)' }}>🔒</span> Pre-requisite Approval Required
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. THE INSTITUTIONAL MINDSET */}
                <section className="mindset-section section-padding" style={{ position: 'relative' }}>
                    <div className="container">
                        <div className="text-center mb-12">
                            <h2 style={{ fontSize: '2.5rem', letterSpacing: '1px', textTransform: 'uppercase' }}>Entering <span style={{ color: 'var(--accent-purple)' }}>The Matrix</span></h2>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                            <div style={{ borderLeft: '2px solid var(--accent-purple)', paddingLeft: '2rem' }}>
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: '#fff' }}>Beyond Retail Logic</h3>
                                <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                                    Retail traders look for patterns to predict the future. Institutional traders map liquidity zones, structural mathematical advantages, and deep timing cycles to engineer high-probability asymmetric bets.
                                </p>
                            </div>
                            <div style={{ borderLeft: '2px solid var(--gold-primary)', paddingLeft: '2rem' }}>
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: '#fff' }}>The Apex Predator</h3>
                                <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                                    The Level 3 curriculum is designed to strip away the remaining emotional noise, replacing it with cold, calculated execution parameters and advanced Astro-Technical timing logic.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. MULTI-VARIABLE DASHBOARD MOCKUP */}
                <section className="advanced-dashboard-section section-padding" style={{ background: '#050505' }}>
                    <div className="container text-center">
                        <h2 className="mb-8" style={{ fontSize: '2.5rem' }}>Elite <span style={{ color: 'var(--accent-purple)' }}>Analytic Architecture</span></h2>

                        <div className="glass-panel" style={{ padding: '0', borderRadius: '10px', background: '#000', border: '1px solid rgba(144,19,254,0.3)', boxShadow: '0 20px 80px rgba(144,19,254,0.1)', position: 'relative', overflow: 'hidden' }}>
                            {/* Toolbar Simulated */}
                            <div style={{ background: '#111', padding: '15px 25px', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #333' }}>
                                <div style={{ display: 'flex', gap: '20px', color: '#aaa', fontSize: '0.9rem' }}>
                                    <span style={{ color: '#fff' }}>BANKNIFTY (FUT)</span>
                                    <span>5M</span>
                                    <span>1H</span>
                                    <span>1D</span>
                                    <span style={{ color: 'var(--gold-primary)' }}>Astro-Harmonic Confluence Active</span>
                                </div>
                                <div style={{ color: 'var(--accent-red)', fontWeight: 'bold', fontSize: '0.9rem' }}>
                                    SHORT BIAS CONFIRMED
                                </div>
                            </div>

                            {/* Multi-Pane Layout */}
                            <div style={{ display: 'flex', height: '500px' }}>
                                {/* Main Window */}
                                <div style={{ flex: 3, position: 'relative', borderRight: '1px solid #333' }}>
                                    <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1000 600">
                                        {/* Grid lines */}
                                        <g stroke="rgba(255,255,255,0.05)" strokeWidth="1">
                                            <line x1="0" y1="100" x2="1000" y2="100" />
                                            <line x1="0" y1="200" x2="1000" y2="200" />
                                            <line x1="0" y1="300" x2="1000" y2="300" />
                                            <line x1="0" y1="400" x2="1000" y2="400" />
                                            <line x1="0" y1="500" x2="1000" y2="500" />
                                        </g>

                                        {/* Liquidity Zones */}
                                        <rect x="0" y="50" width="1000" height="80" fill="rgba(255,23,68,0.05)" />
                                        <text x="20" y="95" fill="rgba(255,23,68,0.5)" fontSize="14" letterSpacing="5">INSTITUTIONAL DISTRIBUTION BLOCK</text>

                                        <rect x="0" y="450" width="1000" height="80" fill="rgba(0,230,118,0.05)" />
                                        <text x="20" y="495" fill="rgba(0,230,118,0.5)" fontSize="14" letterSpacing="5">INSTITUTIONAL ACCUMULATION BLOCK</text>

                                        {/* Advanced Geometry/Lines */}
                                        <path d="M100 500 L 900 100" stroke="rgba(144,19,254,0.4)" strokeWidth="2" strokeDasharray="15,5" />
                                        <circle cx="900" cy="100" r="10" fill="none" stroke="var(--gold-primary)" strokeWidth="2" />
                                        <circle cx="900" cy="100" r="20" fill="none" stroke="rgba(255,215,0,0.3)" strokeWidth="1" className="animate-pulse-glow" />

                                        {/* Astro Time Overlay Markers (Vertical Lines) */}
                                        <line x1="300" y1="0" x2="300" y2="600" stroke="rgba(255,215,0,0.2)" strokeWidth="2" />
                                        <text x="310" y="30" fill="rgba(255,215,0,0.5)" fontSize="12">Lunar Transit Point</text>

                                        <line x1="850" y1="0" x2="850" y2="600" stroke="rgba(144,19,254,0.3)" strokeWidth="3" />
                                        <text x="860" y="30" fill="rgba(144,19,254,0.5)" fontSize="12">Synodic Cycle Pivot</text>

                                        {/* Price Action Path */}
                                        <path d="M0 400 L 150 450 L 300 350 L 450 380 L 600 250 L 750 300 L 850 150 L 900 100 L 1000 300" fill="none" stroke="#fff" strokeWidth="3" opacity="0.9" />
                                    </svg>
                                </div>
                                {/* Sidebar Info */}
                                <div style={{ flex: 1, padding: '20px', background: '#0a0a0f', textAlign: 'left' }}>
                                    <h4 style={{ color: 'var(--accent-purple)', borderBottom: '1px solid #222', paddingBottom: '10px', marginBottom: '15px' }}>Terminal Logic</h4>
                                    <ul style={{ color: '#888', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                        <li><strong style={{ color: '#ccc' }}>Delta Divergence:</strong> Negative alignment detected in 5M frame.</li>
                                        <li><strong style={{ color: '#ccc' }}>Astro Pivot:</strong> Mercury Retrograde zone overlapping with 0.618 Fib extension.</li>
                                        <li><strong style={{ color: '#ccc' }}>Risk Parameter:</strong> 0.5% capital exposure authorized based on current volatility index.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. CURRICULUM HIGHLIGHTS */}
                <section className="advanced-curriculum section-padding">
                    <div className="container">
                        <div className="text-center mb-12">
                            <h2 style={{ fontSize: '2.5rem' }}>Master <span style={{ color: 'var(--gold-primary)' }}>Architecture</span></h2>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                            <div style={{ background: 'rgba(20,20,20,0.8)', padding: '2.5rem', border: '1px solid #333', borderRadius: '15px' }}>
                                <h3 style={{ color: 'var(--gold-primary)', fontSize: '1.4rem', marginBottom: '1rem' }}>Multi-Timeframe Arbitrage</h3>
                                <p className="text-muted">Analyze weekly, daily, and intraday fractal structures simultaneously to identify major algorithmic injection points.</p>
                            </div>
                            <div style={{ background: 'rgba(20,20,20,0.8)', padding: '2.5rem', border: '1px solid #333', borderRadius: '15px' }}>
                                <h3 style={{ color: 'var(--accent-purple)', fontSize: '1.4rem', marginBottom: '1rem' }}>Synodic Astro Cycles</h3>
                                <p className="text-muted">Applying profound astrological measurements (e.g., Gann models, planetary ingresses) specifically tailored to the Indian and US indices.</p>
                            </div>
                            <div style={{ background: 'rgba(20,20,20,0.8)', padding: '2.5rem', border: '1px solid #333', borderRadius: '15px' }}>
                                <h3 style={{ color: 'var(--accent-red)', fontSize: '1.4rem', marginBottom: '1rem' }}>Risk Math & Recovery</h3>
                                <p className="text-muted">Stop blowing accounts. Learn complex hedging, portfolio scaling, and mathematical frameworks to survive devastating market drawdowns.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. CALL TO ACTION */}
                <section className="cta-section section-padding" style={{ borderTop: '1px solid rgba(144,19,254,0.3)', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(144,19,254,0.1), transparent)', zIndex: -1 }}></div>
                    <div className="container text-center">
                        <h2 className="mb-6" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', textTransform: 'uppercase', letterSpacing: '4px' }}>
                            Become The <span style={{ color: 'var(--gold-primary)' }}>1%</span>
                        </h2>
                        <div className="flex-center gap-6" style={{ marginTop: '3rem' }}>
                            <Link href="/apply?course=advanced">
                                <Button variant="primary" style={{ padding: '20px 60px', fontSize: '1.2rem', background: 'transparent', color: '#fff', border: '2px solid var(--accent-purple)' }}>
                                    Execute Enrollment — ₹71,999
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* 6. FAQ SECTION */}
                <FAQ faqs={[
                    { q: "Do I need to complete the lower levels first?", a: "No. While this program covers highly complex institutional and astrological concepts, it actually starts from absolute zero. We build your foundation through Levels 1 and 2 before introducing you to the Elite Level 3 syllabus." },
                    { q: "Is the Financial Astrology extremely complex?", a: "To a layman, yes. But we distil down decades of research into systematic, actionable checklists that dictate exact dates and timing zones without you needing a degree in astronomy." },
                    { q: "Do I get direct access to institutional setups?", a: "Yes. The curriculum includes the exact proprietary setups, risk frameworks, and Astro-confluence models used internally by our proprietary desk." }
                ]} />

            </main>
            <Footer />
        </>
    );
}
