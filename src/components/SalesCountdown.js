'use client';
import React, { useState, useEffect } from 'react';

export default function SalesCountdown({ large = false, inline = false, onExpire }) {
    const [timeLeft, setTimeLeft] = useState({ hours: '48', mins: '00', secs: '00' });
    const [expired, setExpired] = useState(false);

    useEffect(() => {
        let deadline = localStorage.getItem('vdf_sales_deadline');
        if (!deadline) {
            deadline = (Date.now() + 48 * 60 * 60 * 1000).toString();
            localStorage.setItem('vdf_sales_deadline', deadline);
        }
        const deadlineMs = parseInt(deadline, 10);

        function tick() {
            const diff = deadlineMs - Date.now();
            if (diff <= 0) {
                setExpired(true);
                setTimeLeft({ hours: '00', mins: '00', secs: '00' });
                if (onExpire) onExpire();
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
    }, [onExpire]);

    if (expired) {
        return (
            <div style={{
                padding: inline ? '8px 16px' : '20px 30px',
                background: 'rgba(255,23,68,0.08)',
                border: '1px solid rgba(255,23,68,0.3)',
                borderRadius: '12px',
                color: '#ff6b7a',
                fontSize: inline ? '0.85rem' : '1rem',
                fontWeight: 600,
                textAlign: 'center',
            }}>
                Offer expired. Standard pricing applies.
            </div>
        );
    }

    const boxStyle = {
        background: inline ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.6)',
        border: '1px solid rgba(255,215,0,0.25)',
        padding: large ? '16px 22px' : inline ? '6px 10px' : '12px 18px',
        borderRadius: large ? '12px' : '8px',
        minWidth: large ? '90px' : inline ? '45px' : '70px',
        textAlign: 'center',
    };

    const numStyle = {
        display: 'block',
        fontSize: large ? 'clamp(2rem, 5vw, 3.5rem)' : inline ? '1rem' : '1.8rem',
        fontWeight: 'bold',
        color: '#fff',
        lineHeight: 1,
        fontFamily: 'monospace',
    };

    const labelStyle = {
        fontSize: large ? '0.8rem' : '0.6rem',
        color: '#888',
        textTransform: 'uppercase',
        display: inline ? 'none' : 'block',
    };

    const colonStyle = {
        fontSize: large ? 'clamp(1.5rem, 4vw, 3rem)' : inline ? '1rem' : '2rem',
        color: 'var(--gold-primary)',
        fontWeight: 'bold',
        lineHeight: large ? '70px' : '45px',
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', gap: inline ? '6px' : '12px', alignItems: 'center' }}>
            <div style={boxStyle}>
                <span style={numStyle}>{timeLeft.hours}</span>
                <span style={labelStyle}>Hours</span>
            </div>
            <span style={colonStyle}>:</span>
            <div style={boxStyle}>
                <span style={numStyle}>{timeLeft.mins}</span>
                <span style={labelStyle}>Mins</span>
            </div>
            <span style={colonStyle}>:</span>
            <div style={boxStyle}>
                <span style={numStyle}>{timeLeft.secs}</span>
                <span style={labelStyle}>Secs</span>
            </div>
        </div>
    );
}
