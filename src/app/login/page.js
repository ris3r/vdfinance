'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Login() {
    const [credential, setCredential] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [message, setMessage] = useState('');
    const [focusField, setFocusField] = useState(false);

    // Check if already logged in
    useEffect(() => {
        const studentData = localStorage.getItem('vdf_student');
        if (studentData) {
            window.location.href = '/dashboard';
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setMessage('');

        try {
            const res = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ credential: credential.trim() })
            });

            const data = await res.json();

            if (res.ok) {
                setStatus('success');
                setMessage(`Welcome back, ${data.student.name}!`);

                // Store session in localStorage
                localStorage.setItem('vdf_student', JSON.stringify(data.student));
                localStorage.setItem('vdf_token', data.token);

                // Redirect to dashboard after brief delay
                setTimeout(() => {
                    window.location.href = '/dashboard';
                }, 1500);
            } else {
                setStatus('error');
                setMessage(data.error || 'Login failed. Please try again.');
            }
        } catch (error) {
            setStatus('error');
            setMessage('Network error. Please check your connection and try again.');
        }
    };

    return (
        <>
            <Navbar />
            <main className="main-content" style={{ paddingTop: '100px', background: 'var(--bg-darker)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

                <section className="login-section flex-center" style={{ flexGrow: 1, position: 'relative', overflow: 'hidden', padding: '4rem 0' }}>

                    {/* Animated Background Elements */}
                    <div style={{ position: 'absolute', top: '10%', left: '5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(255,215,0,0.04) 0%, transparent 70%)', borderRadius: '50%', animation: 'float 8s ease-in-out infinite', pointerEvents: 'none' }}></div>
                    <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(0,191,255,0.03) 0%, transparent 70%)', borderRadius: '50%', animation: 'float 10s ease-in-out infinite reverse', pointerEvents: 'none' }}></div>

                    {/* Grid pattern overlay */}
                    <div style={{
                        position: 'absolute', inset: 0, opacity: 0.03, pointerEvents: 'none',
                        backgroundImage: 'linear-gradient(rgba(255,215,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,215,0,0.3) 1px, transparent 1px)',
                        backgroundSize: '60px 60px'
                    }}></div>

                    <div className="container" style={{ maxWidth: '520px', width: '100%', zIndex: 1, padding: '0 20px' }}>

                        {/* Lock Icon */}
                        <div className="text-center" style={{ marginBottom: '2rem' }}>
                            <div style={{
                                width: '80px', height: '80px', margin: '0 auto 1.5rem',
                                background: 'linear-gradient(135deg, rgba(255,215,0,0.15), rgba(255,215,0,0.05))',
                                borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                border: '1px solid var(--gold-border)',
                                boxShadow: '0 0 40px rgba(255,215,0,0.1)',
                                animation: 'pulse-glow-elegant 4s infinite alternate'
                            }}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--gold-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                    <circle cx="12" cy="16" r="1"></circle>
                                </svg>
                            </div>
                            <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '0.8rem', letterSpacing: '-0.02em' }}>
                                Student <span className="text-gradient-gold">Portal</span>
                            </h1>
                            <p className="text-muted" style={{ fontSize: '1.05rem', lineHeight: 1.6 }}>
                                Sign in with the email or phone you used during enrollment
                            </p>
                        </div>

                        {/* Login Card */}
                        <div className="glass-panel" style={{
                            padding: 'clamp(2rem, 4vw, 3rem)',
                            borderTop: '2px solid var(--gold-primary)',
                            boxShadow: '0 20px 60px rgba(0,0,0,0.6), 0 0 80px rgba(255,215,0,0.03)',
                            borderRadius: '20px'
                        }}>
                            {status === 'success' ? (
                                <div className="text-center animate-fade-in" style={{ padding: '2rem 0' }}>
                                    <div style={{
                                        width: '70px', height: '70px', margin: '0 auto 1.5rem',
                                        background: 'rgba(0,230,118,0.1)', borderRadius: '50%',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        border: '2px solid var(--accent-green)'
                                    }}>
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </div>
                                    <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{message}</h2>
                                    <p className="text-muted" style={{ fontSize: '0.95rem' }}>Redirecting to your dashboard...</p>

                                    {/* Loading bar */}
                                    <div style={{
                                        width: '200px', height: '3px', background: 'rgba(255,255,255,0.1)',
                                        borderRadius: '2px', margin: '1.5rem auto 0', overflow: 'hidden'
                                    }}>
                                        <div style={{
                                            width: '100%', height: '100%',
                                            background: 'linear-gradient(90deg, var(--gold-primary), var(--accent-green))',
                                            animation: 'loading-bar 1.5s ease-in-out',
                                            transformOrigin: 'left'
                                        }}></div>
                                    </div>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                                    {status === 'error' && (
                                        <div className="animate-fade-in" style={{
                                            padding: '14px 18px', background: 'rgba(255,23,68,0.08)',
                                            borderLeft: '3px solid var(--accent-red)', color: '#ff6b7a',
                                            borderRadius: '0 8px 8px 0', fontSize: '0.9rem', lineHeight: 1.5
                                        }}>
                                            {message}
                                        </div>
                                    )}

                                    {/* Input group */}
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                        <label htmlFor="login-credential" style={{ color: '#e0e0e0', fontSize: '0.9rem', fontWeight: 500, letterSpacing: '0.03em' }}>
                                            EMAIL OR PHONE NUMBER
                                        </label>
                                        <div style={{
                                            position: 'relative',
                                            borderRadius: '12px',
                                            border: focusField ? '1px solid var(--gold-primary)' : '1px solid rgba(255,255,255,0.15)',
                                            background: 'rgba(255,255,255,0.05)',
                                            transition: 'all 0.3s ease',
                                            boxShadow: focusField ? '0 0 20px rgba(255,215,0,0.15)' : 'none'
                                        }}>
                                            <div style={{
                                                position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)',
                                                color: focusField ? 'var(--gold-primary)' : '#888', transition: 'color 0.3s ease'
                                            }}>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                    <circle cx="12" cy="7" r="4"></circle>
                                                </svg>
                                            </div>
                                            <input
                                                id="login-credential"
                                                type="text"
                                                required
                                                value={credential}
                                                onChange={(e) => setCredential(e.target.value)}
                                                onFocus={() => setFocusField(true)}
                                                onBlur={() => setFocusField(false)}
                                                placeholder="john@example.com or 9876543210"
                                                autoComplete="email"
                                                style={{
                                                    width: '100%', padding: '18px 16px 18px 48px',
                                                    background: 'transparent', border: 'none',
                                                    color: '#fff', fontSize: '1rem', outline: 'none',
                                                    fontFamily: 'inherit'
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={status === 'loading'}
                                        style={{
                                            width: '100%', padding: '18px', fontSize: '1.05rem',
                                            fontWeight: 600, fontFamily: 'inherit',
                                            background: status === 'loading'
                                                ? 'rgba(255,215,0,0.5)'
                                                : 'linear-gradient(135deg, var(--gold-primary), var(--gold-dark))',
                                            color: 'var(--bg-darker)',
                                            border: 'none', borderRadius: '12px', cursor: status === 'loading' ? 'wait' : 'pointer',
                                            transition: 'all 0.3s ease',
                                            boxShadow: status === 'loading'
                                                ? 'none'
                                                : '0 4px 20px rgba(255,215,0,0.3)',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                                            letterSpacing: '0.02em'
                                        }}
                                    >
                                        {status === 'loading' ? (
                                            <>
                                                <div style={{
                                                    width: '20px', height: '20px', border: '2px solid rgba(0,0,0,0.2)',
                                                    borderTop: '2px solid var(--bg-darker)', borderRadius: '50%',
                                                    animation: 'spin 0.8s linear infinite'
                                                }}></div>
                                                Verifying...
                                            </>
                                        ) : (
                                            <>
                                                Access Dashboard
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                                    <polyline points="12 5 19 12 12 19"></polyline>
                                                </svg>
                                            </>
                                        )}
                                    </button>

                                    {/* Divider */}
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '0.5rem 0' }}>
                                        <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)' }}></div>
                                        <span style={{ color: '#555', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Not enrolled yet?</span>
                                        <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)' }}></div>
                                    </div>

                                    {/* Enroll CTA */}
                                    <Link href="/apply" style={{
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                                        width: '100%', padding: '16px', fontSize: '0.95rem', fontWeight: 500,
                                        background: 'rgba(255,255,255,0.03)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        borderRadius: '12px', color: '#ccc', transition: 'all 0.3s ease',
                                        textDecoration: 'none'
                                    }}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="8.5" cy="7" r="4"></circle>
                                            <line x1="20" y1="8" x2="20" y2="14"></line>
                                            <line x1="23" y1="11" x2="17" y2="11"></line>
                                        </svg>
                                        Enroll in the Academy
                                    </Link>
                                </form>
                            )}
                        </div>

                        {/* Security note */}
                        <div className="text-center" style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            </svg>
                            <p style={{ fontSize: '0.8rem', color: '#555' }}>Secured by VD Financepedia</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

            <style jsx>{`
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes loading-bar {
                    0% { transform: scaleX(0); }
                    100% { transform: scaleX(1); }
                }
                form button[type="submit"]:not(:disabled):hover {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 25px rgba(255,215,0,0.5) !important;
                }
                a[href="/apply"]:hover {
                    border-color: var(--gold-primary) !important;
                    color: var(--gold-primary) !important;
                    background: rgba(255,215,0,0.05) !important;
                }
            `}</style>
        </>
    );
}
