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
    const comparisonFeatures = [
        { feature: 'Duration', beginner: '1.5 Months', intermediate: '2.5 Months', advanced: '3.5 Months' },
        { feature: 'Price', beginner: '₹13,999 + GST', intermediate: '₹44,999 + GST', advanced: '₹71,999 + GST' },
        { feature: 'Technical Analysis Foundations', beginner: true, intermediate: true, advanced: true },
        { feature: 'Institutional Price Action', beginner: false, intermediate: true, advanced: true },
        { feature: 'Astro-Technical Timing Systems', beginner: false, intermediate: 'Intro only', advanced: 'Full system' },
        { feature: 'Live Session Recordings', beginner: false, intermediate: true, advanced: true },
        { feature: 'Mentor Q&A Access', beginner: false, intermediate: true, advanced: true },
        { feature: '1-on-1 Session with Dr. Vinith', beginner: false, intermediate: false, advanced: '✓ (1 session)' },
        { feature: 'Lifetime Community Access', beginner: false, intermediate: false, advanced: true },
        { feature: 'Future Curriculum Updates', beginner: false, intermediate: false, advanced: true },
        { feature: 'Risk Management Curriculum', beginner: true, intermediate: true, advanced: true },
        { feature: 'Student Dashboard Access', beginner: true, intermediate: true, advanced: true },
    ];

    const renderCell = (val) => {
        if (val === true) return <span style={{ color: 'var(--accent-green)', fontWeight: 600 }}>✓</span>;
        if (val === false) return <span style={{ color: '#444' }}>—</span>;
        return <span style={{ color: '#ddd', fontSize: '0.85rem' }}>{val}</span>;
    };

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
                                        <div style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(0,230,118,0.1)', color: 'var(--accent-green)', borderRadius: '20px', fontWeight: 600, letterSpacing: '1px', fontSize: '0.9rem', marginBottom: '1rem' }}>LEVEL 1 &bull; 1 MONTH</div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.5rem' }}>
                                            <span style={{ display: 'inline-block', width: '8px', height: '8px', background: 'var(--accent-red)', borderRadius: '50%', animation: 'pulse-glow-elegant 1.5s infinite' }}></span>
                                            <span style={{ color: 'var(--accent-red)', fontSize: '0.8rem', fontWeight: 600 }}>May Batch: 4 seats remaining</span>
                                        </div>
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
                                        <div style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(255,215,0,0.1)', color: 'var(--gold-primary)', borderRadius: '20px', fontWeight: 600, letterSpacing: '1px', fontSize: '0.9rem', marginBottom: '1rem' }}>LEVEL 2 &bull; 2.5 MONTHS</div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.5rem' }}>
                                            <span style={{ display: 'inline-block', width: '8px', height: '8px', background: 'var(--accent-red)', borderRadius: '50%', animation: 'pulse-glow-elegant 1.5s infinite' }}></span>
                                            <span style={{ color: 'var(--accent-red)', fontSize: '0.8rem', fontWeight: 600 }}>May Batch: 6 seats remaining</span>
                                        </div>
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
                                        <div style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(255,23,68,0.1)', color: 'var(--accent-red)', borderRadius: '20px', fontWeight: 600, letterSpacing: '1px', fontSize: '0.9rem', marginBottom: '1rem' }}>LEVEL 3 &bull; 3.5 MONTHS</div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.5rem' }}>
                                            <span style={{ display: 'inline-block', width: '8px', height: '8px', background: 'var(--accent-red)', borderRadius: '50%', animation: 'pulse-glow-elegant 1.5s infinite' }}></span>
                                            <span style={{ color: 'var(--accent-red)', fontSize: '0.8rem', fontWeight: 600 }}>May Batch: 3 seats remaining — filling fast</span>
                                        </div>
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
                </section>

                {/* COMPARISON TABLE */}
                <section className="section-padding" style={{ background: 'var(--bg-darker)' }}>
                    <div className="container" style={{ maxWidth: '1000px' }}>
                        <h2 className="text-center" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: '3rem' }}>
                            What's Included <span className="text-gradient-gold">at Each Level</span>
                        </h2>

                        <div style={{ overflowX: 'auto', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '650px' }}>
                                <thead>
                                    <tr>
                                        <th style={{ padding: '16px 20px', textAlign: 'left', color: '#888', fontSize: '0.85rem', fontWeight: 500, background: 'rgba(0,0,0,0.4)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>Feature</th>
                                        <th style={{ padding: '16px 20px', textAlign: 'center', color: 'var(--accent-green)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '1px', background: 'rgba(0,0,0,0.4)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>BEGINNER</th>
                                        <th style={{ padding: '16px 20px', textAlign: 'center', color: 'var(--gold-primary)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '1px', background: 'rgba(0,0,0,0.4)', borderBottom: '1px solid rgba(255,255,255,0.08)', borderLeft: '1px solid rgba(255,215,0,0.15)', borderRight: '1px solid rgba(255,215,0,0.15)' }}>INTERMEDIATE</th>
                                        <th style={{ padding: '16px 20px', textAlign: 'center', color: 'var(--accent-red)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '1px', background: 'rgba(0,0,0,0.4)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>ADVANCED</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonFeatures.map((row, i) => (
                                        <tr key={i} style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.015)' : 'transparent' }}>
                                            <td style={{ padding: '14px 20px', color: '#ccc', fontSize: '0.9rem', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{row.feature}</td>
                                            <td style={{ padding: '14px 20px', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{renderCell(row.beginner)}</td>
                                            <td style={{ padding: '14px 20px', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.04)', borderLeft: '1px solid rgba(255,215,0,0.08)', borderRight: '1px solid rgba(255,215,0,0.08)' }}>{renderCell(row.intermediate)}</td>
                                            <td style={{ padding: '14px 20px', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{renderCell(row.advanced)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="text-center" style={{ marginTop: '2.5rem' }}>
                            <p className="text-muted" style={{ marginBottom: '1rem', fontSize: '1rem' }}>Not sure which level is right for you?</p>
                            <a
                                href="https://wa.me/919741790219?text=Hi%2C%20I%20need%20help%20choosing%20the%20right%20course%20level."
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                                    padding: '12px 24px', background: '#25D366', color: '#fff',
                                    borderRadius: '10px', fontWeight: 600, fontSize: '0.9rem',
                                    textDecoration: 'none', boxShadow: '0 4px 15px rgba(37,211,102,0.3)',
                                }}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                                Chat with us on WhatsApp
                            </a>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
