'use client';
import React, { useState } from 'react';
import Button from './Button';

export default function AdvisorModal({ isOpen, onClose }) {
    const [formData, setFormData] = useState({ name: '', phone: '' });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            // Re-using the enroll endpoint or just simulating it if needed.
            // But since the enroll endpoint expects more fields, we'll send dummy ones for email/course
            // or we can adjust the endpoint to handle 'Advisor Request'.
            const res = await fetch('/api/enroll', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    phone: formData.phone,
                    email: 'No email provided',
                    course: 'Requested Advisor Callback'
                })
            });

            if (res.ok) {
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
            background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(5px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999
        }}>
            <div style={{
                background: 'rgba(20,20,20,0.95)', border: '1px solid var(--gold-border)',
                borderRadius: '16px', padding: '2.5rem', width: '90%', maxWidth: '450px',
                position: 'relative', boxShadow: '0 20px 50px rgba(0,0,0,0.8)'
            }}>
                <button
                    onClick={onClose}
                    style={{ position: 'absolute', top: '15px', right: '15px', background: 'none', border: 'none', color: '#fff', fontSize: '1.5rem', cursor: 'pointer' }}
                >
                    &times;
                </button>

                {status === 'success' ? (
                    <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                        <div style={{ fontSize: '3rem', color: 'var(--accent-green)', marginBottom: '1rem' }}>✓</div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Request Received</h3>
                        <p style={{ color: '#aaa', lineHeight: 1.5 }}>
                            We will contact you within the next 24 hours. Keep an eye on your phone for a call from our advisory team!
                        </p>
                        <Button variant="secondary" onClick={onClose} style={{ marginTop: '2rem', width: '100%' }}>Close</Button>
                    </div>
                ) : (
                    <>
                        <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Speak to an Advisor</h2>
                        <p style={{ color: '#aaa', marginBottom: '2rem', fontSize: '0.95rem' }}>
                            Leave your details below and a senior advisor will call you within 24 hours.
                        </p>
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                            <input
                                type="text"
                                placeholder="Your Name"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                style={{ width: '100%', padding: '14px', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '8px', fontSize: '1rem' }}
                            />
                            <input
                                type="tel"
                                placeholder="Phone/WhatsApp Number"
                                required
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                style={{ width: '100%', padding: '14px', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '8px', fontSize: '1rem' }}
                            />

                            {status === 'error' && <p style={{ color: 'var(--accent-red)', fontSize: '0.9rem' }}>Error sending request. Please try again.</p>}

                            <Button
                                type="submit"
                                variant="primary"
                                style={{ width: '100%', padding: '15px', fontSize: '1.1rem', marginTop: '1rem', opacity: status === 'loading' ? 0.7 : 1 }}
                            >
                                {status === 'loading' ? 'Sending...' : 'Request Callback'}
                            </Button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}
