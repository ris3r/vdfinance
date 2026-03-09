import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import GlassCard from '../../components/GlassCard';

export const metadata = {
    title: "The Firm | VD Financepedia",
    description: "Learn about Vinith D'Costa & Associates, the SEBI-licensed firm backing the VD Financepedia Trading Academy.",
};

export default function About() {
    return (
        <>
            <Navbar />
            <main className="main-content" style={{ paddingTop: '100px' }}>

                {/* HERO SECTION */}
                <section className="about-hero flex-center section-padding" style={{ minHeight: '60vh', position: 'relative', overflow: 'hidden' }}>
                    <div className="bg-glow-elegant" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(ellipse at top, rgba(255,215,0,0.08) 0%, transparent 70%)', zIndex: -1, animation: 'pulse-glow-elegant 8s infinite alternate' }}></div>
                    <div className="container text-center animate-fade-in" style={{ zIndex: 1 }}>
                        <div className="glass-badge mb-6" style={{ display: 'inline-block', padding: '6px 20px', borderRadius: '30px', border: '1px solid var(--gold-border)', background: 'var(--bg-card)', color: 'var(--gold-primary)', letterSpacing: '1px', fontSize: '0.9rem' }}>
                            THE INSTITUTION
                        </div>
                        <h1 className="mb-6" style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)' }}>
                            Behind The <span className="text-gradient-gold">Academy</span>
                        </h1>
                        <p className="mb-8 text-muted" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', lineHeight: 1.8 }}>
                            VD Financepedia is not just an educational platform. We are the training arm of Vinith D’Costa & Associates, a SEBI-licensed proprietary trading and research firm.
                        </p>
                    </div>
                </section>

                {/* THE FOUNDER SECTION */}
                <section className="founder-section section-padding" style={{ background: 'var(--bg-dark)' }}>
                    <div className="container">
                        <GlassCard className="split-layout" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', padding: '4rem', borderTop: '2px solid var(--gold-border)' }}>
                            <div className="left-content" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <h3 className="text-gold mb-2" style={{ fontSize: '1.2rem', letterSpacing: '2px', textTransform: 'uppercase' }}>Founder & Director</h3>
                                <h2 className="mb-6" style={{ fontSize: '2.5rem' }}>Dr. Vinith Oscar D’Costa</h2>
                                <p className="text-muted mb-4" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                                    Hailing from Karnataka, Dr. Vinith is a distinguished stock market expert and mentor with over 7 years of deep market experience. He pioneered the integration of quantitative data science with time-tested financial astrology in the Indian markets.
                                </p>
                                <p className="text-muted mb-6" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                                    As a SEBI-Registered professional, his vision was to create a sanctuary where traders could learn actual institutional mechanics—bypassing the noise of retail indicators. Over his remarkable journey, Dr. Vinith has mentored and guided more than 1,500 students worldwide towards financial independence.
                                </p>
                                <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                                    <div>
                                        <h4 className="text-gold" style={{ fontSize: '1.8rem' }}>7+</h4>
                                        <p style={{ color: '#888', fontSize: '0.9rem' }}>Years Experience</p>
                                    </div>
                                    <div>
                                        <h4 className="text-gold" style={{ fontSize: '1.8rem' }}>SEBI</h4>
                                        <p style={{ color: '#888', fontSize: '0.9rem' }}>Registered</p>
                                    </div>
                                    <div>
                                        <h4 className="text-gold" style={{ fontSize: '1.8rem' }}>1,500+</h4>
                                        <p style={{ color: '#888', fontSize: '0.9rem' }}>Students Mentored</p>
                                    </div>
                                </div>
                            </div>
                            <div className="right-content flex-center" style={{ position: 'relative' }}>
                                <div style={{ width: '100%', maxWidth: '400px', aspectRatio: '3/4', borderRadius: '10px', background: 'linear-gradient(135deg, rgba(255,215,0,0.1), rgba(0,0,0,0.8))', border: '1px solid var(--gold-border)', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                                    <img src="/founder.jpg" alt="Dr. Vinith Oscar D'Costa" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', width: '100px', height: '100px', background: 'var(--gold-primary)', filter: 'blur(50px)', zIndex: -1, opacity: 0.3 }}></div>
                                </div>
                            </div>
                        </GlassCard>

                        {/* EDUCATION & WORKSHOPS SECTION */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
                            <GlassCard style={{ padding: '3rem 2rem' }}>
                                <h3 className="mb-6" style={{ fontSize: '1.6rem', color: 'var(--gold-primary)' }}>Education & Credentials</h3>
                                <ul style={{ color: '#ccc', display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '1.05rem', lineHeight: 1.6 }}>
                                    <li style={{ display: 'flex', gap: '10px' }}><span style={{ color: 'var(--gold-primary)' }}>•</span> Doctorate in Financial Management from Kennedy University of Baptist</li>
                                    <li style={{ display: 'flex', gap: '10px' }}><span style={{ color: 'var(--gold-primary)' }}>•</span> Post Graduate Program in Management (PGPM) – Finance</li>
                                    <li style={{ display: 'flex', gap: '10px' }}><span style={{ color: 'var(--gold-primary)' }}>•</span> NISM Certified Research Analyst</li>
                                    <li style={{ display: 'flex', gap: '10px' }}><span style={{ color: 'var(--gold-primary)' }}>•</span> SEBI Investor Certified</li>
                                </ul>
                            </GlassCard>

                            <GlassCard style={{ padding: '3rem 2rem' }}>
                                <h3 className="mb-6" style={{ fontSize: '1.6rem', color: 'var(--gold-primary)' }}>Institutional Collaborations</h3>
                                <div style={{ color: '#ccc', fontSize: '1.05rem', lineHeight: 1.6 }}>
                                    <p className="mb-4">
                                        <strong style={{ color: '#fff' }}>St. Aloysius College, Mangalore</strong><br />
                                        Signed MOU to introduce a B.Com program with Investment Management specialization from the 2025 academic year.
                                    </p>
                                    <p className="mb-4">
                                        <strong style={{ color: '#fff' }}>College Workshops</strong><br />
                                        Conducted workshops in top colleges including: Padua, Yenepoya, St. Agnes, Alva's, St. Joseph Engineering College Mangalore.
                                    </p>
                                    <p>
                                        <strong style={{ color: '#fff' }}>Private Trading Workshops</strong><br />
                                        Conducted in Dubai, Bangalore, Goa & Mangalore.
                                    </p>
                                </div>
                            </GlassCard>
                        </div>
                    </div>
                </section>

                {/* THE FIRM'S PILLARS */}
                <section className="pillars-section section-padding">
                    <div className="container">
                        <div className="text-center mb-12">
                            <h2 style={{ fontSize: '2.5rem' }}>Our <span className="text-gold">Philosophy</span></h2>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                            {[
                                { title: "Data over Emotion", desc: "We eliminate emotional bias by relying purely on strict technical structures and probabilistic advantages." },
                                { title: "Time over Price", desc: "Price shows you what is happening. Time (Astrology) shows you when it will happen. We fuse both." },
                                { title: "Preservation First", desc: "Capital protection is our religion. We teach institutional risk mechanics before teaching how to make a profit." }
                            ].map((pillar, i) => (
                                <GlassCard key={i} style={{ padding: '3rem 2rem', textAlign: 'center' }}>
                                    <div className="mb-4" style={{ color: 'var(--gold-primary)', fontSize: '2rem' }}>0{i + 1}</div>
                                    <h3 className="mb-4" style={{ fontSize: '1.4rem' }}>{pillar.title}</h3>
                                    <p className="text-muted">{pillar.desc}</p>
                                </GlassCard>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FINAL CTA */}
                <section className="cta-section section-padding" style={{ background: 'linear-gradient(to top, #000, var(--bg-dark))', borderTop: '1px solid var(--gold-border)' }}>
                    <div className="container text-center">
                        <h2 className="text-gradient-gold" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Begin Your Journey</h2>
                        <p className="mb-8 text-muted" style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
                            Join 1500+ successful students who have transformed their trading from gambling to a structured, professional business.
                        </p>
                        <a href="/courses">
                            <Button variant="primary" style={{ padding: '18px 45px', fontSize: '1.2rem' }}>Explore the Academy</Button>
                        </a>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
