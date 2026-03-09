import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import GlassCard from '../../components/GlassCard';

export const metadata = {
    title: "Contact | VD Financepedia",
    description: "Get in touch with VD Financepedia Trading Academy.",
};

export default function Contact() {
    return (
        <>
            <Navbar />
            <main className="main-content" style={{ paddingTop: '100px' }}>

                {/* HERO SECTION */}
                <section className="contact-hero section-padding" style={{ minHeight: '40vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
                    <div className="bg-glow-elegant" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at center, rgba(255,215,0,0.05) 0%, transparent 70%)', zIndex: -1 }}></div>
                    <div className="container text-center animate-fade-in" style={{ zIndex: 1 }}>
                        <h1 className="mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                            Get In <span className="text-gradient-gold">Touch</span>
                        </h1>
                        <p className="text-muted" style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
                            Whether you have questions about the curriculum or need help choosing the right tier, our advisory team is here to assist you.
                        </p>
                    </div>
                </section>

                {/* CONTACT INFO & FORM SECTION */}
                <section className="contact-section section-padding" style={{ background: 'var(--bg-dark)' }}>
                    <div className="container">
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>

                            {/* Left: Contact Info */}
                            <div className="contact-info" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <div>
                                    <h3 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Reach <span className="text-gold">Out</span></h3>
                                    <p className="text-muted mb-8" style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
                                        We operate a premium educational desk. Please allow up to 24 hours for a response from our support team.
                                    </p>
                                </div>

                                <GlassCard style={{ padding: '2rem', borderLeft: '4px solid var(--gold-primary)' }}>
                                    <h4 style={{ color: 'var(--gold-primary)', marginBottom: '0.5rem', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Support Email</h4>
                                    <p className="text-white" style={{ fontSize: '1.2rem' }}>support@vinithdcosta.in</p>
                                </GlassCard>

                                <GlassCard style={{ padding: '2rem', borderLeft: '4px solid var(--gold-primary)' }}>
                                    <h4 style={{ color: 'var(--gold-primary)', marginBottom: '0.5rem', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Phone / WhatsApp</h4>
                                    <p className="text-white" style={{ fontSize: '1.2rem' }}>+91 98765 43210</p>
                                </GlassCard>

                                <GlassCard style={{ padding: '2rem', borderLeft: '4px solid var(--gold-primary)' }}>
                                    <h4 style={{ color: 'var(--gold-primary)', marginBottom: '0.5rem', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Headquarters</h4>
                                    <p className="text-white" style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>Mumbai, Maharashtra, India<br />(Appointments Only)</p>
                                </GlassCard>
                            </div>

                            {/* Right: Contact Form */}
                            <div className="contact-form-wrapper">
                                <GlassCard style={{ padding: '3rem', borderTop: '2px solid var(--gold-border)' }}>
                                    <h3 className="mb-6" style={{ fontSize: '1.8rem' }}>Send a Message</h3>
                                    <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                            <label style={{ color: '#aaa', fontSize: '0.9rem' }}>Full Name</label>
                                            <input type="text" placeholder="John Doe" style={{ width: '100%', padding: '15px', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', fontSize: '1rem', outline: 'none' }} />
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                            <label style={{ color: '#aaa', fontSize: '0.9rem' }}>Email Address</label>
                                            <input type="email" placeholder="john@example.com" style={{ width: '100%', padding: '15px', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', fontSize: '1rem', outline: 'none' }} />
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                            <label style={{ color: '#aaa', fontSize: '0.9rem' }}>Interested Course Tier</label>
                                            <select style={{ width: '100%', padding: '15px', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', fontSize: '1rem', outline: 'none', appearance: 'none' }}>
                                                <option>Beginner (Level 1)</option>
                                                <option>Intermediate (Level 2)</option>
                                                <option>Advanced (Level 3)</option>
                                                <option>General Inquiry</option>
                                            </select>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                            <label style={{ color: '#aaa', fontSize: '0.9rem' }}>Message</label>
                                            <textarea rows="5" placeholder="How can we help you?" style={{ width: '100%', padding: '15px', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', fontSize: '1rem', outline: 'none', resize: 'vertical' }}></textarea>
                                        </div>
                                        <Button variant="primary" type="button" style={{ width: '100%', padding: '15px', marginTop: '1rem' }}>Submit Inquiry</Button>
                                    </form>
                                </GlassCard>
                            </div>

                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
