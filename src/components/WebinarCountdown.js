'use client';
import React, { useState, useEffect, useRef } from 'react';

function getSessionSeed() {
    let seed = localStorage.getItem('vdf_session_seed');
    if (!seed) {
        seed = Math.random().toString(36).substring(2, 10);
        localStorage.setItem('vdf_session_seed', seed);
    }
    return seed;
}

function seedToNumber(seed, min, max) {
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
        const char = seed.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash |= 0;
    }
    return min + (Math.abs(hash) % (max - min + 1));
}

export default function WebinarCountdown() {
    const [timeLeft, setTimeLeft] = useState({ hours: '00', mins: '00', secs: '00' });
    const [expired, setExpired] = useState(false);
    const [reservedPct, setReservedPct] = useState(92);
    const [slotsLeft, setSlotsLeft] = useState(8);
    const ctaRef = useRef(null);

    useEffect(() => {
        const seed = getSessionSeed();
        setReservedPct(seedToNumber(seed, 89, 94));
        setSlotsLeft(seedToNumber(seed + 'slots', 6, 11));

        let deadline = localStorage.getItem('vdf_webinar_deadline');
        if (!deadline) {
            deadline = (Date.now() + 27 * 60 * 1000).toString();
            localStorage.setItem('vdf_webinar_deadline', deadline);
        }

        const deadlineMs = parseInt(deadline, 10);

        function tick() {
            const now = Date.now();
            const diff = deadlineMs - now;

            if (diff <= 0) {
                setExpired(true);
                setTimeLeft({ hours: '00', mins: '00', secs: '00' });
                return;
            }

            const totalSecs = Math.floor(diff / 1000);
            const h = Math.floor(totalSecs / 3600);
            const m = Math.floor((totalSecs % 3600) / 60);
            const s = totalSecs % 60;

            setTimeLeft({
                hours: h.toString().padStart(2, '0'),
                mins: m.toString().padStart(2, '0'),
                secs: s.toString().padStart(2, '0'),
            });
        }

        tick();
        const interval = setInterval(tick, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleExpiredClick = () => {
        const ctaButton = document.querySelector('#webinar-main-cta');
        if (ctaButton) {
            ctaButton.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    const timerBoxStyle = {
        background: 'rgba(0,0,0,0.5)',
        border: '1px solid rgba(255,23,68,0.3)',
        padding: '10px 15px',
        borderRadius: '8px',
        minWidth: '70px',
        textAlign: 'center',
    };

    return (
        <>
            {/* Urgency Bar */}
            <div className="urgency-bar mb-6 text-left" style={{ margin: '0 auto 2rem', maxWidth: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', alignItems: 'center' }}>
                    <span style={{ color: '#fff', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span className="pulse-dot" style={{ display: 'inline-block', width: '8px', height: '8px', background: 'var(--accent-red)', borderRadius: '50%', animation: 'pulse-glow-elegant 1s infinite' }}></span>
                        WARNING: {slotsLeft} slots remaining
                    </span>
                    <span style={{ color: 'var(--accent-red)', fontWeight: 'bold', fontSize: '1.1rem' }}>{reservedPct}% Reserved</span>
                </div>
                <div style={{ width: '100%', height: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <div style={{ width: `${reservedPct}%`, height: '100%', background: 'linear-gradient(90deg, #ff8a65, var(--accent-red))', borderRadius: '10px', boxShadow: '0 0 10px var(--accent-red)', transition: 'width 0.5s ease' }}></div>
                </div>
            </div>

            {/* Countdown Timer */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '3rem' }}>
                {expired ? (
                    <div
                        onClick={handleExpiredClick}
                        style={{
                            cursor: 'pointer',
                            padding: '16px 28px',
                            background: 'rgba(255,23,68,0.08)',
                            border: '1px solid rgba(255,23,68,0.3)',
                            borderRadius: '12px',
                            color: '#ff6b7a',
                            fontSize: '1rem',
                            fontWeight: 600,
                            textAlign: 'center',
                            animation: 'fade-in-up 0.5s ease',
                        }}
                    >
                        Registration closed for this session. Join waitlist ↓
                    </div>
                ) : (
                    <>
                        <div style={timerBoxStyle}>
                            <span style={{ display: 'block', fontSize: '1.8rem', fontWeight: 'bold', color: '#fff', lineHeight: 1 }}>{timeLeft.hours}</span>
                            <span style={{ fontSize: '0.7rem', color: '#888', textTransform: 'uppercase' }}>Hours</span>
                        </div>
                        <span style={{ fontSize: '2rem', color: 'var(--accent-red)', fontWeight: 'bold', lineHeight: '45px' }}>:</span>
                        <div style={timerBoxStyle}>
                            <span style={{ display: 'block', fontSize: '1.8rem', fontWeight: 'bold', color: '#fff', lineHeight: 1 }}>{timeLeft.mins}</span>
                            <span style={{ fontSize: '0.7rem', color: '#888', textTransform: 'uppercase' }}>Mins</span>
                        </div>
                        <span style={{ fontSize: '2rem', color: 'var(--accent-red)', fontWeight: 'bold', lineHeight: '45px' }}>:</span>
                        <div style={timerBoxStyle}>
                            <span style={{ display: 'block', fontSize: '1.8rem', fontWeight: 'bold', color: '#fff', lineHeight: 1 }}>{timeLeft.secs}</span>
                            <span style={{ fontSize: '0.7rem', color: '#888', textTransform: 'uppercase' }}>Secs</span>
                        </div>
                    </>
                )}
            </div>

            <style jsx>{`
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </>
    );
}
