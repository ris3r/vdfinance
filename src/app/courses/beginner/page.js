import React from 'react';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Button from '../../../components/Button';
import GlassCard from '../../../components/GlassCard';
import FAQ from '../../../components/FAQ';
import AdvisorCTA from '../../../components/AdvisorCTA';

export default function BeginnerCourse() {
    return (
        <>
            <Navbar />
            <main className="main-content" style={{ background: 'var(--bg-darker)' }}>

                {/* 1. HERO SECTION */}
                <section className="hero section-padding flex-center" style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
                    {/* Subtle animated background specific to Beginner (Green glow) */}
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at center, rgba(0,230,118,0.05) 0%, transparent 70%)', zIndex: -1, animation: 'pulse-glow-elegant 8s infinite alternate' }}></div>

                    {/* Decorative floating particles/charts */}
                    <div className="animate-float" style={{ position: 'absolute', top: '20%', right: '10%', opacity: 0.2, border: '1px solid var(--accent-green)', width: '300px', height: '150px', borderRadius: '10px', background: 'linear-gradient(180deg, rgba(0,230,118,0.1) 0%, transparent 100%)', zIndex: -1 }}></div>
                    <div className="animate-float" style={{ animationDelay: '2s', position: 'absolute', bottom: '20%', left: '5%', opacity: 0.1, border: '1px solid var(--accent-green)', width: '200px', height: '200px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,230,118,0.2) 0%, transparent 70%)', zIndex: -1 }}></div>

                    <div className="container text-center animate-fade-in" style={{ zIndex: 1, maxWidth: '900px' }}>
                        <div className="glass-badge mb-6" style={{ display: 'inline-block', padding: '8px 24px', borderRadius: '30px', border: '1px solid rgba(0,230,118,0.3)', background: 'rgba(0,230,118,0.05)', backdropFilter: 'blur(8px)' }}>
                            <span style={{ color: 'var(--accent-green)', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '1px' }}>LEVEL 1: BEGINNER PROGRAM</span>
                        </div>

                        <h1 className="mb-6" style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', lineHeight: 1.1 }}>
                            Master the Foundations of <br />
                            <span style={{ color: 'var(--accent-green)' }}>Financial Markets</span>
                        </h1>

                        <h3 className="mb-8 text-muted" style={{ fontWeight: 400, fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', lineHeight: 1.6 }}>
                            Move from complete beginner to confident market participant. Learn price action, risk management, and the core principles of institutional trading.
                        </h3>

                        <div className="flex-center gap-6" style={{ flexWrap: 'wrap' }}>
                            <Link href="/apply?course=beginner">
                                <Button variant="primary" style={{ padding: '18px 45px', fontSize: '1.2rem', background: 'var(--accent-green)', color: '#000', boxShadow: '0 4px 20px rgba(0,230,118,0.4)', transition: 'all 0.3s ease', cursor: 'pointer' }}>
                                    Enroll in This Program
                                </Button>
                            </Link>
                        </div>

                        <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center', gap: '3rem', color: '#888', flexWrap: 'wrap' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ color: 'var(--accent-green)' }}>⏱</span> 1.5 Months Duration
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ color: 'var(--accent-green)' }}>₹</span> ₹13,999 + GST
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ color: 'var(--accent-green)' }}>🎓</span> Zero Prior Experience Needed
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. THE TRANSFORMATION SECTION */}
                <section className="transformation-section section-padding" style={{ background: 'var(--bg-dark)' }}>
                    <div className="container text-center">
                        <h2 className="mb-8" style={{ fontSize: '2.5rem' }}>What This Course Will <span style={{ color: 'var(--accent-green)' }}>Turn You Into</span></h2>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '2rem', alignItems: 'stretch' }}>
                            {/* Before Card */}
                            <GlassCard className="glass-panel-red" style={{ padding: '3rem', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <h3 style={{ color: 'var(--accent-red)', fontSize: '1.8rem', borderBottom: '1px solid rgba(255,23,68,0.2)', paddingBottom: '1rem' }}>Before The Academy</h3>
                                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', color: '#ccc', fontSize: '1.1rem' }}>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><span style={{ color: 'var(--accent-red)' }}>✕</span> Confused about market movements</li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><span style={{ color: 'var(--accent-red)' }}>✕</span> Following random tips & news</li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><span style={{ color: 'var(--accent-red)' }}>✕</span> Emotional and revenge trading</li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><span style={{ color: 'var(--accent-red)' }}>✕</span> Charts look like random lines</li>
                                </ul>
                            </GlassCard>

                            {/* Arrow */}
                            <div className="flex-center" style={{ fontSize: '3rem', color: 'rgba(255,255,255,0.2)' }}>
                                ⟶
                            </div>

                            {/* After Card */}
                            <GlassCard className="glass-panel-green" style={{ padding: '3rem', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <h3 style={{ color: 'var(--accent-green)', fontSize: '1.8rem', borderBottom: '1px solid rgba(0,230,118,0.2)', paddingBottom: '1rem' }}>After The Academy</h3>
                                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', color: '#fff', fontSize: '1.1rem' }}>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><span style={{ color: 'var(--accent-green)' }}>✓</span> Structured, disciplined strategy</li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><span style={{ color: 'var(--accent-green)' }}>✓</span> Independent market analysis</li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><span style={{ color: 'var(--accent-green)' }}>✓</span> Strict risk management control</li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><span style={{ color: 'var(--accent-green)' }}>✓</span> Read price action like a professional</li>
                                </ul>
                            </GlassCard>
                        </div>
                    </div>
                </section>

                {/* 3. COURSE JOURNEY TIMELINE */}
                <section className="timeline-section section-padding" style={{ position: 'relative' }}>
                    <div className="container">
                        <h2 className="text-center mb-8" style={{ fontSize: '2.5rem' }}>Your <span style={{ color: 'var(--accent-green)' }}>Evolution Timeline</span></h2>

                        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
                            {/* Vertical Line */}
                            <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '2px', background: 'linear-gradient(to bottom, rgba(0,230,118,0.5), transparent)' }}></div>

                            {[
                                { week: "Phase 1", title: "Market Foundations", desc: "Understanding the ecosystem. Differences between Equity, Futures, Options, and Commodities." },
                                { week: "Phase 2", title: "Price Action Understanding", desc: "Learning the language of the market. Decoding candlesticks and basic trend structures." },
                                { week: "Phase 3", title: "Strategy Development", desc: "Building your primary framework. Support/Resistance, Volume, and introductory indicators." },
                                { week: "Phase 4", title: "Risk & Psychology", desc: "The shield. Mastering capital preservation, position sizing, and institutional trade discipline." }
                            ].map((item, idx) => (
                                <div key={idx} style={{ display: 'flex', alignItems: 'center', marginBottom: '4rem', width: '100%', flexDirection: idx % 2 === 0 ? 'row' : 'row-reverse' }}>
                                    <div style={{ flex: 1, textAlign: idx % 2 === 0 ? 'right' : 'left', padding: idx % 2 === 0 ? '0 3rem 0 0' : '0 0 0 3rem' }}>
                                        <div style={{ color: 'var(--accent-green)', fontWeight: 600, letterSpacing: '2px', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{item.week}</div>
                                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{item.title}</h3>
                                        <p className="text-muted">{item.desc}</p>
                                    </div>

                                    {/* Glowing Node */}
                                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--accent-green)', boxShadow: '0 0 20px var(--accent-green-glow)', zIndex: 2, position: 'relative', left: idx % 2 === 0 ? '12px' : '-12px' }}></div>

                                    <div style={{ flex: 1 }}></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. MODULE BREAKDOWN */}
                <section className="modules-section section-padding" style={{ background: 'var(--bg-dark)' }}>
                    <div className="container">
                        <div className="text-center mb-8">
                            <h2 style={{ fontSize: '2.5rem' }}>Curriculum <span style={{ color: 'var(--accent-green)' }}>Architecture</span></h2>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                            {[
                                { icon: "📈", title: "Price Action", desc: "Understand market sentiment purely through price movement without lagging indicators." },
                                { icon: "🕯️", title: "Candlestick Systems", desc: "Read institutional footprints and entry triggers through specific candlestick structures." },
                                { icon: "🚧", title: "Support & Resistance", desc: "Identify high-probability reaction zones and the principle of polarity." },
                                { icon: "📊", title: "Volume Analysis", desc: "Confirm price movements with institutional volume footprints." },
                                { icon: "🎯", title: "Indicator Logic", desc: "How to actually use Moving Averages and Bollinger Bands for trend confirmation." },
                                { icon: "🪐", title: "Financial Astrology", desc: "Introduction to planetary cycles and their historical correlation with market timing." },
                                { icon: "🛡️", title: "Risk Mechanics", desc: "Mathematical models to ensure capital preservation during losing streaks." },
                                { icon: "🧠", title: "Trading Psychology", desc: "Overcome fear, greed, and FOMO to execute flawlessly like a machine." }
                            ].map((mod, i) => (
                                <GlassCard key={i} className="glass-panel-green" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--accent-green)' }}>{mod.icon}</div>
                                    <h4 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>{mod.title}</h4>
                                    <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>{mod.desc}</p>
                                    {/* Decorative chart visualization */}
                                    <div style={{ marginTop: '1.5rem', height: '60px', borderRadius: '8px', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'flex-end', padding: '10px', gap: '5px' }}>
                                        <div style={{ width: '15%', height: '40%', background: 'var(--accent-red)', opacity: 0.5 }}></div>
                                        <div style={{ width: '15%', height: '30%', background: 'var(--accent-red)', opacity: 0.5 }}></div>
                                        <div style={{ width: '15%', height: '60%', background: 'var(--accent-green)', opacity: 0.8 }}></div>
                                        <div style={{ width: '15%', height: '80%', background: 'var(--accent-green)', opacity: 0.8 }}></div>
                                        <div style={{ width: '15%', height: '50%', background: 'var(--accent-red)', opacity: 0.5 }}></div>
                                        <div style={{ width: '15%', height: '100%', background: 'var(--accent-green)', opacity: 0.9 }}></div>
                                    </div>
                                </GlassCard>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5. VISUAL STRATEGY EXAMPLES / DASHBOARD */}
                <section className="dashboard-section section-padding" style={{ position: 'relative' }}>
                    <div className="container text-center">
                        <h2 className="mb-6" style={{ fontSize: '2.8rem' }}>Train on <span style={{ color: 'var(--accent-green)' }}>Real Dashboards</span></h2>
                        <p className="text-muted mb-8" style={{ maxWidth: '700px', margin: '0 auto 4rem', fontSize: '1.1rem' }}>
                            We don't teach from theoretical textbooks. You will learn to analyze complex market structures on live terminal layouts.
                        </p>

                        {/* Mockup Dashboard Interface */}
                        <div className="glass-panel" style={{ padding: '20px', borderRadius: '20px', background: 'rgba(10,10,10,0.8)', border: '1px solid rgba(0,230,118,0.3)', boxShadow: '0 20px 60px rgba(0,0,0,0.8)', position: 'relative', overflow: 'hidden' }}>
                            {/* Header */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '15px', marginBottom: '15px' }}>
                                <div style={{ display: 'flex', gap: '15px', color: '#888' }}>
                                    <span style={{ color: '#fff', fontWeight: 'bold' }}>NIFTY 50</span>
                                    <span>1D</span>
                                    <span>Vol</span>
                                    <span>Indicators</span>
                                </div>
                                <div style={{ display: 'flex', gap: '8px' }}>
                                    <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f56' }}></div>
                                    <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e' }}></div>
                                    <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#27c93f' }}></div>
                                </div>
                            </div>
                            {/* Main Chart Area Simulated */}
                            <div style={{ height: '400px', width: '100%', position: 'relative', background: 'repeating-linear-gradient(rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 40px)' }}>
                                {/* SVG for fake chart line/candles */}
                                <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1000 400">
                                    <path d="M0 300 Q 150 250, 300 350 T 600 200 T 800 100 T 1000 150" fill="none" stroke="rgba(0,230,118,0.6)" strokeWidth="3" />
                                    <path d="M0 300 Q 150 250, 300 350 T 600 200 T 800 100 T 1000 150 L 1000 400 L 0 400 Z" fill="url(#grad)" opacity="0.2" />
                                    <defs>
                                        <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stopColor="var(--accent-green)" />
                                            <stop offset="100%" stopColor="transparent" />
                                        </linearGradient>
                                    </defs>

                                    {/* Candlesticks & Zones */}
                                    <rect x="580" y="150" width="100" height="30" fill="rgba(255,215,0,0.1)" stroke="var(--gold-border)" strokeDasharray="5,5" />
                                    <text x="690" y="170" fill="var(--gold-primary)" fontSize="14">Key Resistance Zone</text>

                                    <line x1="300" y1="350" x2="800" y2="100" stroke="rgba(255,255,255,0.3)" strokeDasharray="10,5" strokeWidth="2" />
                                    <text x="500" y="270" fill="rgba(255,255,255,0.6)" fontSize="14" transform="rotate(-26, 500, 270)">Dynamic Trendline</text>
                                </svg>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. THE FINANCIAL ASTROLOGY EDGE */}
                <section className="astro-section section-padding" style={{ background: 'linear-gradient(to bottom, var(--bg-dark), #000)', position: 'relative', overflow: 'hidden' }}>
                    {/* Cosmic Background Elements */}
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px', height: '800px', border: '1px solid rgba(255,215,0,0.05)', borderRadius: '50%', zIndex: 0 }}></div>
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', border: '1px solid rgba(255,215,0,0.1)', borderRadius: '50%', zIndex: 0 }}></div>
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '400px', height: '400px', border: '1px dashed rgba(255,215,0,0.2)', borderRadius: '50%', zIndex: 0, animation: 'pulse-glow-elegant 20s infinite linear' }}></div>

                    <div className="container flex-center flex-col" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                        <h2 className="mb-6 text-gradient-gold" style={{ fontSize: '3rem' }}>The Financial Astrology Edge</h2>
                        <p className="text-muted mb-8" style={{ maxWidth: '700px', fontSize: '1.2rem', lineHeight: 1.8 }}>
                            Technical analysis tells you <span style={{ color: '#fff', fontWeight: 'bold' }}>what</span> price is doing. Financial Astrology tells you <span style={{ color: 'var(--gold-primary)', fontWeight: 'bold' }}>when</span> it will happen. Even in our beginner program, you will be introduced to the powerful correlation between planetary cycles and market turning points.
                        </p>
                        <GlassCard className="glass-panel-gold" style={{ padding: '2rem 4rem', display: 'inline-block' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--gold-primary)' }}>Timing is Everything</h3>
                            <p className="text-muted">Discover the hidden dimensions of market movements that algorithms and retail traders completely ignore.</p>
                        </GlassCard>
                    </div>
                </section>

                {/* 7. REAL WORLD APPLICATION */}
                <section className="application-section section-padding">
                    <div className="container">
                        <h2 className="text-center mb-8" style={{ fontSize: '2.5rem' }}>Strategies Built For The <span style={{ color: 'var(--accent-green)' }}>Real World</span></h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                            {[
                                { title: "Intraday Trading", desc: "Capitalize on daily volatility safely." },
                                { title: "Swing Trading", desc: "Capture multi-day/week momentum." },
                                { title: "Index Trading", desc: "Master NIFTY and BankNIFTY basics." },
                                { title: "Options Essentials", desc: "Understand high-leverage instruments." }
                            ].map((app, i) => (
                                <div key={i} style={{ borderLeft: '4px solid var(--accent-green)', padding: '1.5rem', background: 'rgba(255,255,255,0.02)' }}>
                                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{app.title}</h4>
                                    <p className="text-muted">{app.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 8. STUDENT TRANSFORMATION */}
                <section className="testimonials-section section-padding" style={{ background: 'var(--bg-dark)' }}>
                    <div className="container">
                        <h2 className="text-center mb-8" style={{ fontSize: '2.5rem' }}>Real <span style={{ color: 'var(--accent-green)' }}>Transformations</span></h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                            {[
                                { name: "Rahul S.", role: "Student", text: "Before this course, charts looked like random lines. Now I understand exactly how to read price action." },
                                { name: "Priya M.", role: "Working Professional", text: "The structured approach fits perfectly with my 9-5 job. I finally have a logical side-income system." },
                                { name: "Anita V.", role: "Homemaker", text: "I never thought I could understand finance. The beginner progression is incredibly smooth and supportive." },
                                { name: "Suresh P.", role: "Retiree", text: "Taking control of my own capital instead of relying on mutual funds. Risk management module is gold." }
                            ].map((t, idx) => (
                                <GlassCard key={idx} style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
                                    <p style={{ fontStyle: 'italic', color: '#ccc', marginBottom: '1.5rem', flexGrow: 1, lineHeight: 1.6 }}>"{t.text}"</p>
                                    <div>
                                        <h4 style={{ color: '#fff', fontSize: '1.1rem' }}>{t.name}</h4>
                                        <p style={{ color: 'var(--accent-green)', fontSize: '0.9rem' }}>{t.role}</p>
                                    </div>
                                </GlassCard>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 9. COURSE COMPARISON */}
                <section className="comparison-section section-padding">
                    <div className="container">
                        <h2 className="text-center mb-8" style={{ fontSize: '2.5rem' }}>Pathway <span style={{ color: 'var(--gold-primary)' }}>Comparison</span></h2>
                        <div style={{ overflowX: 'auto' }}>
                            <table style={{ width: '100%', minWidth: '700px', borderCollapse: 'collapse', textAlign: 'left' }}>
                                <thead>
                                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                                        <th style={{ padding: '1.5rem', fontSize: '1.2rem', color: '#888' }}>Features</th>
                                        <th style={{ padding: '1.5rem', fontSize: '1.2rem', color: 'var(--accent-green)' }}>Beginner</th>
                                        <th style={{ padding: '1.5rem', fontSize: '1.2rem', color: 'var(--accent-blue)' }}>Intermediate</th>
                                        <th style={{ padding: '1.5rem', fontSize: '1.2rem', color: 'var(--accent-purple)' }}>Advanced</th>
                                    </tr>
                                </thead>
                                <tbody style={{ color: '#ccc' }}>
                                    {[
                                        { feature: "Market Mechanics", b: "✓", i: "✓", a: "✓" },
                                        { feature: "Price Action Logic", b: "Basic", i: "Advanced", a: "Mastery" },
                                        { feature: "Risk Architecture", b: "Foundations", i: "Systems", a: "Institutional" },
                                        { feature: "Financial Astrology", b: "Introduction", i: "Predictive Cycles", a: "Synodic Timing" },
                                        { feature: "Proprietary Setups", b: "1 Strategy", i: "Multiple Systems", a: "High-Stake Algo Logic" }
                                    ].map((row, i) => (
                                        <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                            <td style={{ padding: '1.5rem', fontWeight: 500, color: '#fff' }}>{row.feature}</td>
                                            <td style={{ padding: '1.5rem' }}>{row.b}</td>
                                            <td style={{ padding: '1.5rem' }}>{row.i}</td>
                                            <td style={{ padding: '1.5rem' }}>{row.a}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* 10. FINAL CALL TO ACTION */}
                <section className="final-cta-section section-padding" style={{ background: 'linear-gradient(to top, rgba(0,230,118,0.05), var(--bg-darker))', borderTop: '1px solid rgba(0,230,118,0.2)' }}>
                    <div className="container text-center">
                        <h2 className="mb-6" style={{ fontSize: 'clamp(3rem, 4vw, 4rem)' }}>Your Trading Journey <span style={{ color: 'var(--accent-green)' }}>Starts Here</span></h2>
                        <p className="text-muted mb-8" style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 3rem' }}>Stop guessing. Start executing with precision. Join the Level 1 Beginners framework today.</p>
                        <div className="flex-center gap-6" style={{ flexWrap: 'wrap' }}>
                            <Link href="/apply?course=beginner">
                                <Button variant="primary" style={{ padding: '18px 50px', fontSize: '1.2rem', background: 'var(--accent-green)', color: '#000' }}>
                                    Enroll Now — ₹13,999
                                </Button>
                            </Link>
                            <AdvisorCTA variant="secondary" style={{ padding: '18px 50px', fontSize: '1.2rem' }}>
                                Speak to an Advisor
                            </AdvisorCTA>
                        </div>
                    </div>
                </section>

                {/* 11. FAQ SECTION */}
                <FAQ faqs={[
                    { q: "Do I need prior trading experience?", a: "No. This program is built from the ground up assuming zero knowledge. We teach you everything from what a candlestick is, to executing your first controlled trade." },
                    { q: "Is this course recorded or live?", a: "This is a hybrid program with structured pre-recorded modules for theory, and live alignment sessions for practical application." },
                    { q: "How much capital do I need to start?", a: "We recommend starting with just paper trading or a very small capital (e.g., ₹10,000) simply to understand the mechanics. Capital preservation is our first lesson." }
                ]} />

            </main>
            <Footer />
        </>
    );
}
