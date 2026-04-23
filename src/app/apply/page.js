'use client';
import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import GlassCard from '../../components/GlassCard';

export default function Apply() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        course: 'Beginner (Level 1)'
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Auto-select course based on URL parameter ?course=
        const searchParams = new URLSearchParams(window.location.search);
        const courseParam = searchParams.get('course');
        if (courseParam) {
            if (courseParam.toLowerCase() === 'beginner') setFormData(prev => ({ ...prev, course: 'Beginner (Level 1)' }));
            if (courseParam.toLowerCase() === 'intermediate') setFormData(prev => ({ ...prev, course: 'Intermediate (Level 2)' }));
            if (courseParam.toLowerCase() === 'advanced') setFormData(prev => ({ ...prev, course: 'Advanced (Level 3)' }));
        }
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch('/api/enroll', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (res.ok) {
                setStatus('success');
                setMessage('Your application has been received. Our advisory team will contact you shortly. You can now login to your Student Portal.');
                setFormData({ name: '', email: '', phone: '', course: 'Beginner (Level 1)' });
            } else if (res.status === 409) {
                setStatus('error');
                setMessage('You are already enrolled! Please login to your Student Portal instead.');
            } else {
                setStatus('error');
                setMessage(data.error || 'Something went wrong. Please try again or contact support.');
            }
        } catch (error) {
            setStatus('error');
            setMessage('Network error. Please try again.');
        }
    };

    return (
        <>
            <Navbar />
            <main className="main-content" style={{ paddingTop: '100px', background: 'var(--bg-darker)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

                <section className="apply-section flex-center" style={{ flexGrow: 1, position: 'relative', overflow: 'hidden', padding: '4rem 0' }}>
                    {/* Background Glow */}
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80vw', height: '80vh', background: 'radial-gradient(ellipse at center, rgba(255,215,0,0.05) 0%, transparent 60%)', zIndex: -1 }}></div>

                    <div className="container" style={{ maxWidth: '800px', width: '100%', zIndex: 1 }}>
                        <div className="text-center mb-8">
                            <div className="glass-badge mb-4" style={{ display: 'inline-block', padding: '6px 20px', borderRadius: '30px', border: '1px solid var(--gold-border)', color: 'var(--gold-primary)', fontSize: '0.9rem' }}>
                                ENROLLMENT DESK
                            </div>
                            <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', marginBottom: '1rem' }}>Apply for the <span className="text-gradient-gold">Academy</span></h1>
                            <p className="text-muted" style={{ fontSize: '1.2rem' }}>Please fill out the form below. Our advisory team will review your application and guide you.</p>
                        </div>

                        <GlassCard style={{ padding: '3rem', borderTop: '2px solid var(--gold-primary)', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
                            {status === 'success' ? (
                                <div className="text-center animate-fade-in" style={{ padding: '3rem 0' }}>
                                    <div style={{ fontSize: '4rem', color: 'var(--accent-green)', marginBottom: '1rem' }}>✓</div>
                                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Application Received</h2>
                                    <p className="text-muted" style={{ fontSize: '1.2rem', lineHeight: 1.6 }}>{message}</p>
                                    <Button onClick={() => setStatus('idle')} variant="secondary" style={{ marginTop: '2rem' }}>Submit Another Application</Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                                    {status === 'error' && (
                                        <div style={{ padding: '15px', background: 'rgba(255,23,68,0.1)', borderLeft: '4px solid var(--accent-red)', color: '#fff', borderRadius: '4px' }}>
                                            {message}
                                        </div>
                                    )}

                                    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                                        <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                            <label style={{ color: '#ccc', fontSize: '0.95rem', fontWeight: 500 }}>Full Name *</label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="e.g., John Doe"
                                                style={{ width: '100%', padding: '16px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', color: '#fff', fontSize: '1rem', outline: 'none', transition: 'border-color 0.3s' }}
                                            />
                                        </div>
                                        <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                            <label style={{ color: '#ccc', fontSize: '0.95rem', fontWeight: 500 }}>Email Address *</label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="john@example.com"
                                                style={{ width: '100%', padding: '16px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', color: '#fff', fontSize: '1rem', outline: 'none', transition: 'border-color 0.3s' }}
                                            />
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                        <label style={{ color: '#ccc', fontSize: '0.95rem', fontWeight: 500 }}>Phone/WhatsApp Number *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+91 98765 43210"
                                            style={{ width: '100%', padding: '16px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', color: '#fff', fontSize: '1rem', outline: 'none', transition: 'border-color 0.3s' }}
                                        />
                                    </div>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                        <label style={{ color: '#ccc', fontSize: '0.95rem', fontWeight: 500 }}>Select Your Desired Path *</label>
                                        <select
                                            name="course"
                                            value={formData.course}
                                            onChange={handleChange}
                                            style={{ width: '100%', padding: '16px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', color: '#fff', fontSize: '1rem', outline: 'none', appearance: 'none', cursor: 'pointer' }}>
                                            <option value="Beginner (Level 1)">Beginner Course (Level 1) - ₹13,999</option>
                                            <option value="Intermediate (Level 2)">Intermediate Course (Level 2) - ₹44,999</option>
                                            <option value="Advanced (Level 3)">Advanced Course (Level 3) - ₹71,999</option>
                                        </select>
                                    </div>

                                    <div style={{ marginTop: '1rem' }}>
                                        <Button
                                            type="submit"
                                            variant="primary"
                                            style={{ width: '100%', padding: '18px', fontSize: '1.2rem', opacity: status === 'loading' ? 0.7 : 1, pointerEvents: status === 'loading' ? 'none' : 'auto' }}
                                        >
                                            {status === 'loading' ? 'Submitting Application...' : 'Secure Your Spot'}
                                        </Button>
                                    </div>
                                    <p style={{ textAlign: 'center', fontSize: '0.85rem', color: '#666', marginTop: '1rem' }}>
                                        Your information is secure. Submitting this form does not lock you into a payment.
                                    </p>
                                </form>
                            )}
                        </GlassCard>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
