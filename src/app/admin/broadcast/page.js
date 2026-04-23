'use client';
import React, { useState, useEffect } from 'react';

const templates = {
    'Webinar Launch': `🔥 *VD Financepedia Masterclass — Seats Open*

You've been part of our community. Now it's time to go deeper.

Dr. Vinith Oscar D'Costa is hosting a live 90-minute Masterclass revealing the exact institutional framework behind our trading methodology.

📅 Date: [DATE]
⏰ Time: [TIME]
💰 Entry: Just ₹199

What you'll discover:
✅ How institutions map price before it moves
✅ The truth about support & resistance
✅ Financial astrology timing — the hidden edge
✅ The risk framework that protects capital

⚠️ Only [X] slots available.

👉 Register here: vdfinance.vercel.app/webinar

— Dr. Vinith & Team VD Financepedia`,
    'Last Chance Reminder': `⏳ *Final Hours — Masterclass Closes Tonight*

[X] seats left. Timer is running.

If you've been thinking about joining tonight's session with Dr. Vinith — this is your last chance before it fills.

₹199. 90 minutes. Could change everything.

👉 vdfinance.vercel.app/webinar

Don't let this one pass.`,
    'New Batch Open': `📢 *[MONTH] Batch — Enrollment Now Open*

Limited seats. Structured. Serious.

🟢 Beginner — ₹13,999 | 4 seats left
🟡 Intermediate — ₹44,999 | 6 seats left  
🔴 Advanced — ₹71,999 | 3 seats left

This is not a recorded course dump. This is a live structured mentorship program with Dr. Vinith Oscar D'Costa, SEBI RA INH000022367.

👉 View courses: vdfinance.vercel.app/courses

Enrollment closes [DATE]. After that, waitlist only.`,
    'Student Win': `📈 *Student Result — [NAME], [CITY]*

[TRADE DETAILS]

P&L: +₹[AMOUNT]

This is what structured trading looks like.

Want to learn the exact framework? The next batch starts [DATE].

👉 vdfinance.vercel.app/courses`,
    'Free Guide Promo': `🎁 *Free for our community — no catch*

We've put together a guide: "5 Institutional Secrets Most Retail Traders Will Never Know"

The same frameworks Dr. Vinith teaches in the program — distilled into a free download.

👉 Get it here: vdfinance.vercel.app/free-guide

Takes 30 seconds. Completely free.`,
};

function renderWhatsAppPreview(text) {
    let html = text
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        .replace(/\*([^*]+)\*/g, '<strong>$1</strong>')
        .replace(/_([^_]+)_/g, '<em>$1</em>')
        .replace(/\[([A-Z_\s]+)\]/g, '<span style="background:#ff9800;color:#000;padding:1px 4px;border-radius:3px;font-weight:600">[$1]</span>')
        .replace(/\n/g, '<br/>');
    return html;
}

export default function BroadcastPage() {
    const [messageType, setMessageType] = useState('Webinar Launch');
    const [message, setMessage] = useState(templates['Webinar Launch']);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        setMessage(templates[messageType]);
    }, [messageType]);

    const charCount = message.length;
    const charColor = charCount > 500 ? '#e53935' : charCount > 400 ? '#ff9800' : '#4caf50';

    const handleCopy = async () => {
        await navigator.clipboard.writeText(message);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', background: '#f5f5f5', minHeight: '100vh', padding: '2rem' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                <div style={{ marginBottom: '2rem' }}>
                    <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1a1a1a', margin: 0 }}>📨 WhatsApp Broadcast Composer</h1>
                    <p style={{ color: '#666', fontSize: '0.85rem', margin: '4px 0 0' }}>Internal tool — compose, preview, and copy WhatsApp broadcast messages.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    {/* LEFT: Composer */}
                    <div>
                        <div style={{ background: '#fff', borderRadius: '12px', padding: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.08)', marginBottom: '1rem' }}>
                            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#555', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Message Type</label>
                            <select
                                value={messageType}
                                onChange={(e) => setMessageType(e.target.value)}
                                style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '0.95rem', background: '#fafafa', cursor: 'pointer', outline: 'none' }}
                            >
                                {Object.keys(templates).map((t) => (
                                    <option key={t} value={t}>{t}</option>
                                ))}
                            </select>
                        </div>

                        <div style={{ background: '#fff', borderRadius: '12px', padding: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                <label style={{ fontSize: '0.8rem', fontWeight: 600, color: '#555', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Message</label>
                                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: charColor }}>{charCount} chars {charCount > 500 ? '⚠️' : '✓'}</span>
                            </div>
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                style={{ width: '100%', minHeight: '400px', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '0.9rem', lineHeight: 1.6, resize: 'vertical', fontFamily: 'inherit', outline: 'none' }}
                            />
                            <button
                                onClick={handleCopy}
                                style={{ marginTop: '10px', width: '100%', padding: '12px', background: copied ? '#4caf50' : '#1a1a1a', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '0.9rem', fontWeight: 600, cursor: 'pointer', transition: 'background 0.2s' }}
                            >
                                {copied ? '✓ Copied to Clipboard!' : '📋 Copy Message'}
                            </button>
                        </div>
                    </div>

                    {/* RIGHT: Preview + Checklist */}
                    <div>
                        <div style={{ background: '#fff', borderRadius: '12px', padding: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.08)', marginBottom: '1rem' }}>
                            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#555', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>WhatsApp Preview</label>
                            <div style={{ background: '#0b141a', borderRadius: '10px', padding: '16px', maxHeight: '450px', overflowY: 'auto' }}>
                                <div style={{ background: '#005c4b', borderRadius: '8px', padding: '10px 12px', maxWidth: '95%', marginLeft: 'auto' }}>
                                    <div
                                        style={{ color: '#e9edef', fontSize: '0.85rem', lineHeight: 1.6, wordBreak: 'break-word' }}
                                        dangerouslySetInnerHTML={{ __html: renderWhatsAppPreview(message) }}
                                    />
                                    <div style={{ textAlign: 'right', marginTop: '4px' }}>
                                        <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.65rem' }}>
                                            {new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })} ✓✓
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{ background: '#fff', borderRadius: '12px', padding: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
                            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#555', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Pre-Send Checklist</label>
                            {[
                                'Replace all [PLACEHOLDER] values with real data',
                                'Confirm link is live and tested',
                                'Check message length (under 500 chars for highest open rate)',
                                'Send to test number first',
                                'Schedule send time (recommended: 7–8pm IST for highest response)',
                            ].map((item, i) => (
                                <label key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px', cursor: 'pointer', fontSize: '0.85rem', color: '#333', lineHeight: 1.4 }}>
                                    <input type="checkbox" style={{ marginTop: '3px', accentColor: '#4caf50' }} />
                                    {item}
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
