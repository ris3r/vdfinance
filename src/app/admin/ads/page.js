'use client';
import React, { useState } from 'react';

const tabs = ['Webinar Ads', 'Free Guide Ads', 'Course Ads'];

const adData = {
    'Webinar Ads': [
        {
            label: 'Pain-Based (Cold Audience)',
            headline: 'Why Are You Still Losing Trades?',
            body: `You've read the books. You've watched the YouTube videos. You've drawn the lines. And you're still hitting a wall.

There's a reason for that — and it has nothing to do with your intelligence. It has everything to do with what you're not being shown.

Dr. Vinith Oscar D'Costa, SEBI-registered analyst with 7+ years of institutional experience, is hosting a 90-minute live Masterclass revealing the exact framework institutions use to move price.

₹199. One session. Could change everything.

👉 vdfinance.vercel.app/webinar`,
            cta: 'Learn More',
            audience: 'Age 22–45 · Interests: Stock market India, NSE, Zerodha, Groww, Angel One, technical analysis, trading · Location: Karnataka, Maharashtra, Kerala, Tamil Nadu, Andhra Pradesh, Telangana',
            objective: 'Conversions to /webinar',
        },
        {
            label: 'Curiosity-Based (Warm Retargeting)',
            headline: 'What Institutions Know That You Don\'t',
            body: `Institutions don't react to price. They anticipate it. They map liquidity zones before the market opens. They use timing cycles that retail traders have never heard of.

Dr. Vinith D'Costa has spent 7 years decoding this system — and he's teaching it live. One session. ₹199. Seats are limited.

👉 vdfinance.vercel.app/webinar`,
            cta: 'Sign Up',
            audience: 'Retarget: Website visitors (last 30 days), Instagram/Facebook engagers',
            objective: 'Conversions to /webinar',
        },
        {
            label: 'Social Proof (Retarget /webinar visitors)',
            headline: '1,500+ Students. One Framework.',
            body: `"The incorporation of financial astrology completely changed how I look at market turning points." — Rahul M., Bangalore, Advanced Graduate.

Join the Masterclass and see the framework for yourself. ₹199.

👉 vdfinance.vercel.app/webinar`,
            cta: 'Sign Up',
            audience: 'Retarget: Visited /webinar but did NOT visit /thank-you (didn\'t pay)',
            objective: 'Conversions to /webinar',
        },
    ],
    'Free Guide Ads': [
        {
            label: 'Lead Gen (Top of Funnel)',
            headline: 'Free Guide: 5 Secrets Institutions Don\'t Want Retail Traders To Know',
            body: `Most retail traders lose because they're playing a different game than institutions — without knowing it.

This free guide breaks down 5 institutional frameworks that Dr. Vinith has used to train 1,500+ students.

No cost. Straight to your WhatsApp.

👉 vdfinance.vercel.app/free-guide`,
            cta: 'Download',
            audience: 'Broad: Age 20–50 · Interests: stock market, trading, mutual funds, investing, personal finance · All India',
            objective: 'Lead generation to /free-guide · Lower CPL expected',
        },
    ],
    'Course Ads': [
        {
            label: 'Post-Webinar Retarget',
            headline: 'You Saw The Framework. Here\'s The Full Program.',
            body: `If you attended the VD Financepedia Masterclass and you're ready to go all in — the full mentorship program is now open.

3 levels. Structured curriculum. Live sessions with Dr. Vinith. SEBI-registered. Real methodology.

👉 vdfinance.vercel.app/courses`,
            cta: 'Enroll Now',
            audience: 'Retarget: Visited /webinar AND /thank-you (paid attendees)',
            objective: 'Conversions to /courses or /sales',
        },
    ],
};

function CopyBtn({ text, label }) {
    const [copied, setCopied] = useState(false);
    return (
        <button
            onClick={async () => { await navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 1500); }}
            style={{ padding: '6px 14px', background: copied ? '#4caf50' : '#f0f0f0', color: copied ? '#fff' : '#333', border: '1px solid #ddd', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s' }}
        >
            {copied ? '✓ Copied' : label}
        </button>
    );
}

export default function AdsPage() {
    const [activeTab, setActiveTab] = useState('Webinar Ads');

    return (
        <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', background: '#f5f5f5', minHeight: '100vh', padding: '2rem' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <div style={{ marginBottom: '1.5rem' }}>
                    <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1a1a1a', margin: 0 }}>📣 Meta Ad Copy & Creative Specs</h1>
                    <p style={{ color: '#666', fontSize: '0.85rem', margin: '4px 0 0' }}>Ready-to-use ad copy for Meta Ads Manager. Copy and paste directly.</p>
                </div>

                {/* Tabs */}
                <div style={{ display: 'flex', gap: '4px', background: '#fff', borderRadius: '10px', padding: '4px', marginBottom: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            style={{
                                flex: 1, padding: '10px', border: 'none', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s',
                                background: activeTab === tab ? '#1a1a1a' : 'transparent',
                                color: activeTab === tab ? '#fff' : '#666',
                            }}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Ad Cards */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {adData[activeTab].map((ad, i) => (
                        <div key={i} style={{ background: '#fff', borderRadius: '12px', padding: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                <div>
                                    <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#fff', background: activeTab === 'Webinar Ads' ? '#1565c0' : activeTab === 'Free Guide Ads' ? '#2e7d32' : '#e65100', padding: '3px 10px', borderRadius: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{ad.label}</span>
                                </div>
                                <span style={{ fontSize: '0.7rem', color: '#999' }}>CTA: {ad.cta}</span>
                            </div>

                            <div style={{ marginBottom: '1rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                                    <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#999', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Headline</span>
                                    <CopyBtn text={ad.headline} label="Copy Headline" />
                                </div>
                                <p style={{ fontSize: '1.15rem', fontWeight: 700, color: '#1a1a1a', margin: 0, lineHeight: 1.3 }}>{ad.headline}</p>
                            </div>

                            <div style={{ marginBottom: '1rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                                    <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#999', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Primary Text</span>
                                    <CopyBtn text={ad.body} label="Copy Body" />
                                </div>
                                <div style={{ background: '#fafafa', borderRadius: '8px', padding: '12px', border: '1px solid #eee' }}>
                                    <pre style={{ fontSize: '0.85rem', color: '#333', lineHeight: 1.6, margin: 0, whiteSpace: 'pre-wrap', fontFamily: 'inherit' }}>{ad.body}</pre>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                                <span style={{ fontSize: '0.7rem', color: '#666', background: '#f0f0f0', padding: '4px 10px', borderRadius: '6px' }}>🎯 {ad.objective}</span>
                                <span style={{ fontSize: '0.7rem', color: '#666', background: '#f0f0f0', padding: '4px 10px', borderRadius: '6px' }}>👥 {ad.audience}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Budget Recommendations */}
                <div style={{ background: '#fff', borderRadius: '12px', padding: '1.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.08)', marginTop: '1.5rem' }}>
                    <h2 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '1rem' }}>💰 Budget Recommendations</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                        {[
                            { label: 'Starting Budget', value: '₹500/day', sub: 'on webinar ads' },
                            { label: 'Expected CPL', value: '₹80–150', sub: 'for ₹199 webinar reg' },
                            { label: 'Expected ROAS', value: '15–25x', sub: 'at 20% course conversion' },
                            { label: 'Scaling Trigger', value: 'CPL < ₹120', sub: 'for 3 days → double budget' },
                        ].map((item, i) => (
                            <div key={i} style={{ background: '#fafafa', borderRadius: '8px', padding: '12px', border: '1px solid #eee' }}>
                                <p style={{ fontSize: '0.7rem', fontWeight: 600, color: '#999', textTransform: 'uppercase', letterSpacing: '0.5px', margin: '0 0 4px' }}>{item.label}</p>
                                <p style={{ fontSize: '1.3rem', fontWeight: 700, color: '#1a1a1a', margin: '0 0 2px' }}>{item.value}</p>
                                <p style={{ fontSize: '0.75rem', color: '#888', margin: 0 }}>{item.sub}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
