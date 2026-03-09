import React from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import GlassCard from '../../components/GlassCard';

export const metadata = {
    title: "Programs | VD Financepedia Trading Academy",
    description: "Explore our structured trading education programs designed to take you from beginner to professional.",
};

export default function Programs() {
    return (
        <>
            <Navbar />
            <main className="main-content" style={{ paddingTop: '100px' }}>

                {/* HERO SECTION */}
                <section className="programs-hero flex-center" style={{ minHeight: '60vh', position: 'relative', overflow: 'hidden' }}>
                    <div className="bg-glow-elegant" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(ellipse at top, rgba(255,215,0,0.08) 0%, transparent 60%)', zIndex: -1, animation: 'pulse-glow-elegant 8s infinite alternate' }}></div>
                    <div className="container text-center animate-fade-in" style={{ zIndex: 1 }}>
                        <h1 className="mb-6" style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)' }}>
                            The Pathway to <span className="text-gradient-gold">Mastery</span>
                        </h1>
                        <p className="mb-8" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', color: '#ccc' }}>
                            A structured, psychological, and analytical journey engineered to compress years of trial and error into months of accelerated, consistent growth.
                        </p>
                        {/* Scroll Indicator */}
                        <div style={{ marginTop: '3rem', opacity: 0.8, animation: 'bounce-gentle 2s infinite' }}>
                            <span style={{ display: 'block', fontSize: '0.9rem', color: 'var(--gold-primary)', letterSpacing: '2px', marginBottom: '10px', textTransform: 'uppercase' }}>Explore Curriculum</span>
                            <div style={{ width: '1px', height: '50px', background: 'linear-gradient(to bottom, var(--gold-primary), transparent)', margin: '0 auto' }}></div>
                        </div>
                    </div>
                </section>

                {/* PROGRAMS LAYOUT */}
                <section className="pathway-section section-padding" style={{ background: 'var(--bg-dark)' }}>
                    <div className="container">
                        <div className="pathway-container" style={{ display: 'flex', flexDirection: 'column', gap: '4rem', maxWidth: '1000px', margin: '0 auto' }}>

                            {/* Beginner */}
                            <GlassCard color="green" className="animate-float" style={{ padding: '4rem', position: 'relative', borderLeft: '4px solid var(--accent-green)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '3rem' }}>
                                    <div style={{ flex: 1, minWidth: '300px' }}>
                                        <div style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(0,230,118,0.1)', color: 'var(--accent-green)', borderRadius: '20px', fontWeight: 600, letterSpacing: '1px', fontSize: '0.9rem', marginBottom: '1.5rem' }}>LEVEL 1 &bull; 1 MONTH</div>
                                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Beginner Foundation</h2>
                                        <p className="text-muted mb-6" style={{ fontSize: '1.1rem' }}>
                                            Master the language of the markets. Build absolute clarity on price action and order flow before putting capital at risk.
                                        </p>
                                        <ul style={{ color: '#eee', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem', fontSize: '1.1rem' }}>
                                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: 'var(--accent-green)' }}>▹</span> Market Basics & Order Flow Architecture</li>
                                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: 'var(--accent-green)' }}>▹</span> Structural Support, Resistance & Volume</li>
                                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: 'var(--accent-green)' }}>▹</span> Introduction to Financial Astrology</li>
                                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: 'var(--accent-green)' }}>▹</span> Baseline Trade Mechanics</li>
                                        </ul>
                                        <div style={{ display: 'flex', gap: '1rem' }}>
                                            <Link href="/courses/beginner" style={{ flex: 1 }}>
                                                <Button variant="secondary" style={{ width: '100%', padding: '16px', background: 'rgba(0,230,118,0.1)', borderColor: 'var(--accent-green)', color: '#fff', boxShadow: 'inset 0 0 10px rgba(0,230,118,0.2), 0 0 15px rgba(0,230,118,0.1)', transition: 'all 0.3s ease' }}>
                                                    View Details <span style={{ color: 'var(--accent-green)', marginLeft: '8px' }}>→</span>
                                                </Button>
                                            </Link>
                                            <Link href="/apply?course=beginner" style={{ flex: 1 }}>
                                                <Button variant="primary" style={{ width: '100%', padding: '16px', background: 'var(--accent-green)', color: '#000', border: 'none' }}>Enroll</Button>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="icon-glow" style={{ position: 'absolute', top: '10%', right: '5%', fontSize: '12rem', opacity: 0.05, textShadow: '0 0 50px var(--accent-green)' }}>🟢</div>
                                </div>
                            </GlassCard>

                            {/* Intermediate */}
                            <GlassCard color="gold" className="animate-float" style={{ padding: '4rem', position: 'relative', borderLeft: '4px solid var(--gold-primary)', animationDelay: '1s' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '3rem' }}>
                                    <div style={{ flex: 1, minWidth: '300px' }}>
                                        <div style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(255,215,0,0.1)', color: 'var(--gold-primary)', borderRadius: '20px', fontWeight: 600, letterSpacing: '1px', fontSize: '0.9rem', marginBottom: '1.5rem' }}>LEVEL 2 &bull; 2.5 MONTHS</div>
                                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Intermediate Tactics</h2>
                                        <p className="text-muted mb-6" style={{ fontSize: '1.1rem' }}>
                                            A cumulative program: We build your Level 1 foundation from scratch, before graduating you to intermediate timing cycles and high-probability indicator setups.
                                        </p>
                                        <ul style={{ color: '#eee', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem', fontSize: '1.1rem' }}>
                                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: 'var(--gold-primary)' }}>▹</span> Includes all Level 1 Foundation material</li>
                                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: 'var(--gold-primary)' }}>▹</span> Indicator Synergy (MA, Bands, Oscillators)</li>
                                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: 'var(--gold-primary)' }}>▹</span> Intermediate Financial Astrology Applications</li>
                                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: 'var(--gold-primary)' }}>▹</span> Risk & Money Management Systems</li>
                                        </ul>
                                        <div style={{ display: 'flex', gap: '1rem' }}>
                                            <Link href="/courses/intermediate" style={{ flex: 1 }}>
                                                <Button variant="secondary" style={{ width: '100%', padding: '16px', background: 'rgba(255,215,0,0.1)', borderColor: 'var(--gold-primary)', color: '#fff', boxShadow: 'inset 0 0 10px rgba(255,215,0,0.2), 0 0 15px rgba(255,215,0,0.1)', transition: 'all 0.3s ease' }}>
                                                    View Details <span style={{ color: 'var(--gold-primary)', marginLeft: '8px' }}>→</span>
                                                </Button>
                                            </Link>
                                            <Link href="/apply?course=intermediate" style={{ flex: 1 }}>
                                                <Button variant="primary" style={{ width: '100%', padding: '16px', background: 'var(--gold-primary)', color: '#000', border: 'none' }}>Enroll</Button>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="icon-glow" style={{ position: 'absolute', top: '10%', right: '5%', fontSize: '12rem', opacity: 0.05, textShadow: '0 0 50px var(--gold-primary)' }}>🟡</div>
                                </div>
                            </GlassCard>

                            {/* Advanced */}
                            <GlassCard color="red" className="animate-float" style={{ padding: '4rem', position: 'relative', borderLeft: '4px solid var(--accent-red)', animationDelay: '2s' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '3rem' }}>
                                    <div style={{ flex: 1, minWidth: '300px' }}>
                                        <div style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(255,23,68,0.1)', color: 'var(--accent-red)', borderRadius: '20px', fontWeight: 600, letterSpacing: '1px', fontSize: '0.9rem', marginBottom: '1.5rem' }}>LEVEL 3 &bull; 3.5 MONTHS</div>
                                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Advanced Professional</h2>
                                        <p className="text-muted mb-6" style={{ fontSize: '1.1rem' }}>
                                            The ultimate masterclass. We cover all Level 1 and Level 2 material, before escalating to deep timing analytics and institutional risk mechanics.
                                        </p>
                                        <ul style={{ color: '#eee', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem', fontSize: '1.1rem' }}>
                                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: 'var(--accent-red)' }}>▹</span> Includes all Level 1 & Level 2 material</li>
                                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: 'var(--accent-red)' }}>▹</span> Complex Multi-Timeframe Arbitrage</li>
                                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: 'var(--accent-red)' }}>▹</span> Super Advanced Astro-Technical Fusion</li>
                                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ color: 'var(--accent-red)' }}>▹</span> Institutional Trade Control & Psychology</li>
                                        </ul>
                                        <div style={{ display: 'flex', gap: '1rem' }}>
                                            <Link href="/courses/advanced" style={{ flex: 1 }}>
                                                <Button variant="secondary" style={{ width: '100%', padding: '16px', background: 'rgba(255,23,68,0.1)', borderColor: 'var(--accent-red)', color: '#fff', boxShadow: 'inset 0 0 10px rgba(255,23,68,0.2), 0 0 15px rgba(255,23,68,0.1)', transition: 'all 0.3s ease' }}>
                                                    View Details <span style={{ color: 'var(--accent-red)', marginLeft: '8px' }}>→</span>
                                                </Button>
                                            </Link>
                                            <Link href="/apply?course=advanced" style={{ flex: 1 }}>
                                                <Button variant="primary" style={{ background: 'var(--accent-red)', color: '#fff', boxShadow: '0 4px 15px rgba(255,51,102,0.3)', width: '100%', padding: '16px' }}>Enroll</Button>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="icon-glow" style={{ position: 'absolute', top: '10%', right: '5%', fontSize: '12rem', opacity: 0.05, textShadow: '0 0 50px var(--accent-red)' }}>🔴</div>
                                </div>
                            </GlassCard>

                        </div>
                    </div>
                </section >

            </main >
            <Footer />
        </>
    );
}
