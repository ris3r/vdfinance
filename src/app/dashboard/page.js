'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import GlassCard from '../../components/GlassCard';

export default function Dashboard() {
    const [student, setStudent] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const studentData = localStorage.getItem('vdf_student');
        if (!studentData) {
            window.location.href = '/login';
            return;
        }

        try {
            setStudent(JSON.parse(studentData));
        } catch {
            localStorage.removeItem('vdf_student');
            localStorage.removeItem('vdf_token');
            window.location.href = '/login';
        }
        setLoading(false);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('vdf_student');
        localStorage.removeItem('vdf_token');
        window.location.href = '/login';
    };

    const getCourseLevel = (course) => {
        if (course?.includes('Beginner')) return { level: 1, label: 'Beginner', color: 'var(--accent-green)', glow: 'rgba(0,230,118,0.15)' };
        if (course?.includes('Intermediate')) return { level: 2, label: 'Intermediate', color: 'var(--accent-blue)', glow: 'rgba(0,191,255,0.15)' };
        if (course?.includes('Advanced')) return { level: 3, label: 'Advanced', color: 'var(--accent-purple)', glow: 'rgba(157,0,255,0.15)' };
        return { level: 0, label: 'Unknown', color: '#888', glow: 'rgba(255,255,255,0.05)' };
    };

    const formatDate = (dateStr) => {
        if (!dateStr) return 'N/A';
        return new Date(dateStr).toLocaleDateString('en-IN', {
            day: 'numeric', month: 'long', year: 'numeric'
        });
    };

    if (loading) {
        return (
            <>
                <Navbar />
                <main style={{ paddingTop: '100px', background: 'var(--bg-darker)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{
                        width: '40px', height: '40px', border: '3px solid rgba(255,215,0,0.2)',
                        borderTop: '3px solid var(--gold-primary)', borderRadius: '50%',
                        animation: 'spin 0.8s linear infinite'
                    }}></div>
                </main>
                <style jsx>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
            </>
        );
    }

    if (!student) return null;

    const courseInfo = getCourseLevel(student.course);

    const stats = [
        { label: 'Course', value: courseInfo.label, sub: `Level ${courseInfo.level}`, icon: '📊', color: courseInfo.color },
        { label: 'Status', value: 'Active', sub: 'Application Received', icon: '✅', color: 'var(--accent-green)' },
        { label: 'Since', value: formatDate(student.enrolledAt), sub: 'Enrollment date', icon: '📅', color: 'var(--gold-primary)' },
    ];

    const modules = [
        { title: 'Market Fundamentals', status: 'unlocked', progress: 0 },
        { title: 'Technical Analysis', status: courseInfo.level >= 1 ? 'unlocked' : 'locked', progress: 0 },
        { title: 'Price Action Mastery', status: courseInfo.level >= 2 ? 'unlocked' : 'locked', progress: 0 },
        { title: 'Order Flow & Institutional Trading', status: courseInfo.level >= 3 ? 'unlocked' : 'locked', progress: 0 },
        { title: 'Risk Management & Psychology', status: courseInfo.level >= 2 ? 'unlocked' : 'locked', progress: 0 },
        { title: 'Live Market Sessions', status: courseInfo.level >= 3 ? 'unlocked' : 'locked', progress: 0 },
    ];

    return (
        <>
            <Navbar />
            <main className="main-content" style={{ paddingTop: '120px', background: 'var(--bg-darker)', minHeight: '100vh', paddingBottom: '4rem' }}>

                {/* Background grid */}
                <div style={{
                    position: 'fixed', inset: 0, opacity: 0.02, pointerEvents: 'none', zIndex: 0,
                    backgroundImage: 'linear-gradient(rgba(255,215,0,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,215,0,0.4) 1px, transparent 1px)',
                    backgroundSize: '80px 80px'
                }}></div>

                <div className="container" style={{ maxWidth: '1100px', padding: '0 20px', position: 'relative', zIndex: 1 }}>

                    {/* Header Section */}
                    <div className="animate-fade-in" style={{ marginBottom: '3rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                            <div>
                                <div style={{
                                    display: 'inline-block', padding: '5px 14px', borderRadius: '20px',
                                    border: `1px solid ${courseInfo.color}`, color: courseInfo.color, fontSize: '0.8rem',
                                    fontWeight: 600, letterSpacing: '0.05em', marginBottom: '1rem',
                                    background: courseInfo.glow
                                }}>
                                    {courseInfo.label.toUpperCase()} • LEVEL {courseInfo.level}
                                </div>
                                <h1 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: '0.5rem' }}>
                                    Welcome back, <span className="text-gradient-gold">{student.name?.split(' ')[0]}</span>
                                </h1>
                                <p className="text-muted" style={{ fontSize: '1rem' }}>
                                    Your academy dashboard • {student.email}
                                </p>
                            </div>

                            <button
                                onClick={handleLogout}
                                style={{
                                    padding: '10px 20px', background: 'rgba(255,23,68,0.08)',
                                    border: '1px solid rgba(255,23,68,0.3)', borderRadius: '10px',
                                    color: '#ff6b7a', fontSize: '0.85rem', fontWeight: 500, fontFamily: 'inherit',
                                    cursor: 'pointer', transition: 'all 0.3s ease',
                                    display: 'flex', alignItems: 'center', gap: '6px'
                                }}
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                    <polyline points="16 17 21 12 16 7"></polyline>
                                    <line x1="21" y1="12" x2="9" y2="12"></line>
                                </svg>
                                Logout
                            </button>
                        </div>
                    </div>

                    {/* Stats Cards */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                        {stats.map((stat, i) => (
                            <div key={i} className="glass-panel animate-fade-in" style={{
                                padding: '1.8rem', borderRadius: '16px',
                                borderLeft: `3px solid ${stat.color}`,
                                animationDelay: `${i * 0.1}s`,
                                position: 'relative', overflow: 'hidden'
                            }}>
                                <div style={{ position: 'absolute', top: '15px', right: '15px', fontSize: '1.5rem', opacity: 0.6 }}>{stat.icon}</div>
                                <p style={{ color: '#777', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>{stat.label}</p>
                                <p style={{ fontSize: '1.3rem', fontWeight: 600, color: stat.color, marginBottom: '0.3rem' }}>{stat.value}</p>
                                <p style={{ color: '#555', fontSize: '0.8rem' }}>{stat.sub}</p>
                            </div>
                        ))}
                    </div>

                    {/* Profile Card */}
                    <div className="glass-panel animate-fade-in" style={{
                        padding: '2rem', borderRadius: '16px', marginBottom: '3rem',
                        borderTop: '2px solid var(--gold-primary)',
                        boxShadow: '0 15px 40px rgba(0,0,0,0.4)'
                    }}>
                        <h2 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                            Your Profile
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
                            {[
                                { label: 'Full Name', value: student.name },
                                { label: 'Email', value: student.email },
                                { label: 'Phone', value: student.phone },
                                { label: 'Selected Course', value: student.course },
                            ].map((item, i) => (
                                <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                    <span style={{ color: '#666', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{item.label}</span>
                                    <span style={{ color: '#ddd', fontSize: '0.95rem', fontWeight: 500 }}>{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Course Modules */}
                    <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                        <h2 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                            </svg>
                            Course Modules
                        </h2>

                        <div style={{ display: 'grid', gap: '1rem' }}>
                            {modules.map((mod, i) => (
                                <div key={i} className="glass-panel" style={{
                                    padding: '1.3rem 1.5rem', borderRadius: '12px',
                                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                    opacity: mod.status === 'locked' ? 0.5 : 1,
                                    borderLeft: mod.status === 'unlocked' ? '3px solid var(--accent-green)' : '3px solid rgba(255,255,255,0.1)',
                                    transition: 'all 0.3s ease'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                                        <div style={{
                                            width: '36px', height: '36px', borderRadius: '8px',
                                            background: mod.status === 'unlocked' ? 'rgba(0,230,118,0.1)' : 'rgba(255,255,255,0.03)',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            border: `1px solid ${mod.status === 'unlocked' ? 'rgba(0,230,118,0.3)' : 'rgba(255,255,255,0.05)'}`,
                                            fontSize: '0.85rem', fontWeight: 700, color: mod.status === 'unlocked' ? 'var(--accent-green)' : '#555'
                                        }}>
                                            {i + 1}
                                        </div>
                                        <div>
                                            <p style={{ fontSize: '0.95rem', fontWeight: 500, color: mod.status === 'unlocked' ? '#eee' : '#666' }}>{mod.title}</p>
                                            <p style={{ fontSize: '0.75rem', color: mod.status === 'unlocked' ? 'var(--accent-green)' : '#555', marginTop: '2px' }}>
                                                {mod.status === 'unlocked' ? 'Available' : 'Locked — Upgrade required'}
                                            </p>
                                        </div>
                                    </div>
                                    {mod.status === 'locked' ? (
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                        </svg>
                                    ) : (
                                        <span style={{
                                            padding: '4px 12px', borderRadius: '6px', fontSize: '0.75rem',
                                            fontWeight: 600, color: 'var(--accent-green)',
                                            background: 'rgba(0,230,118,0.08)', border: '1px solid rgba(0,230,118,0.2)'
                                        }}>Coming Soon</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Upgrade CTA */}
                    {courseInfo.level < 3 && (
                        <div className="glass-panel-gold animate-fade-in" style={{
                            padding: '2rem', borderRadius: '16px', marginTop: '3rem',
                            textAlign: 'center', background: 'rgba(20,20,20,0.8)'
                        }}>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.8rem' }}>
                                Unlock More with <span className="text-gradient-gold">Level {courseInfo.level + 1}</span>
                            </h3>
                            <p className="text-muted" style={{ fontSize: '0.95rem', marginBottom: '1.5rem', maxWidth: '500px', margin: '0 auto 1.5rem' }}>
                                Upgrade your plan to access advanced modules, live sessions, and personal mentorship.
                            </p>
                            <Link href="/apply" style={{
                                display: 'inline-flex', alignItems: 'center', gap: '8px',
                                padding: '14px 28px', background: 'linear-gradient(135deg, var(--gold-primary), var(--gold-dark))',
                                color: 'var(--bg-darker)', borderRadius: '10px', fontWeight: 600,
                                fontSize: '0.95rem', textDecoration: 'none', transition: 'all 0.3s ease',
                                boxShadow: '0 4px 15px rgba(255,215,0,0.3)'
                            }}>
                                Explore Upgrade Options
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </Link>
                        </div>
                    )}
                </div>
            </main>
            <Footer />

            <style jsx>{`
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                button:hover {
                    background: rgba(255,23,68,0.15) !important;
                    border-color: rgba(255,23,68,0.5) !important;
                }
            `}</style>
        </>
    );
}
