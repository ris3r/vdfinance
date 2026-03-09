import React from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import GlassCard from '../../components/GlassCard';

export const metadata = {
    title: "Masterclass: The Hidden Mechanics of Profitable Trading | VD Financepedia",
    description: "Register for the ₹199 Live Masterclass with Dr. Vinith Oscar D'Costa. Discover the institutional frameworks and financial astrology systems behind high-accuracy market timing.",
};

export default function WebinarLanding() {
    return (
        <>
            <Navbar />
            <main className="main-content" style={{ background: 'var(--bg-darker)', overflowX: 'hidden' }}>

                {/* 1. CINEMATIC HERO SECTION (REDESIGNED FOR "LIFELINE/WINNING" VIBE) */}
                <section className="webinar-hero flex-center" style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden', borderBottom: '1px solid rgba(255,215,0,0.1)', background: 'var(--bg-darker)', paddingTop: '100px', paddingBottom: '100px' }}>

                    {/* Live Ticker Tape (Simulated Profits) */}
                    <div style={{ position: 'absolute', top: '80px', left: 0, width: '100%', height: '40px', background: 'rgba(0, 230, 118, 0.05)', borderBottom: '1px solid rgba(0, 230, 118, 0.2)', borderTop: '1px solid rgba(0, 230, 118, 0.2)', display: 'flex', alignItems: 'center', overflow: 'hidden', zIndex: 10 }}>
                        <div style={{ display: 'flex', whiteSpace: 'nowrap', animation: 'marquee-left 30s linear infinite', width: '200%' }}>
                            {/* Duplicate content to make seamless loop */}
                            <div style={{ display: 'flex', width: '50%', justifyContent: 'space-around' }}>
                                <span style={{ color: 'var(--accent-green)', fontWeight: 600, fontSize: '0.9rem', padding: '0 20px' }}>NIFTY +450pts (Institutional Buy)</span>
                                <span style={{ color: 'var(--accent-green)', fontWeight: 600, fontSize: '0.9rem', padding: '0 20px' }}>BANKNIFTY +1200pts (Liquidity Grab)</span>
                                <span style={{ color: 'var(--accent-green)', fontWeight: 600, fontSize: '0.9rem', padding: '0 20px' }}>RELIANCE +3.2% (Order Block cleared)</span>
                                <span style={{ color: 'var(--accent-green)', fontWeight: 600, fontSize: '0.9rem', padding: '0 20px' }}>GOLD +$45 (Astro-Cycle Reversal)</span>
                            </div>
                            <div style={{ display: 'flex', width: '50%', justifyContent: 'space-around' }}>
                                <span style={{ color: 'var(--accent-green)', fontWeight: 600, fontSize: '0.9rem', padding: '0 20px' }}>NIFTY +450pts (Institutional Buy)</span>
                                <span style={{ color: 'var(--accent-green)', fontWeight: 600, fontSize: '0.9rem', padding: '0 20px' }}>BANKNIFTY +1200pts (Liquidity Grab)</span>
                                <span style={{ color: 'var(--accent-green)', fontWeight: 600, fontSize: '0.9rem', padding: '0 20px' }}>RELIANCE +3.2% (Order Block cleared)</span>
                                <span style={{ color: 'var(--accent-green)', fontWeight: 600, fontSize: '0.9rem', padding: '0 20px' }}>GOLD +$45 (Astro-Cycle Reversal)</span>
                            </div>
                        </div>
                    </div>

                    {/* Dark/Gold Gradient Background */}
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(ellipse at center, rgba(255,215,0,0.08) 0%, var(--bg-darker) 70%)', zIndex: -3 }}></div>
                    <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '100vw', height: '50vh', background: 'radial-gradient(ellipse at bottom, rgba(0, 230, 118, 0.05) 0%, transparent 60%)', zIndex: -3 }}></div>

                    {/* Animated "Lifeline" Chart Vector (Jackpot Breakout) */}
                    <div style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', height: '70%', zIndex: -1, pointerEvents: 'none', display: 'flex', alignItems: 'flex-end' }}>
                        <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1000 400" style={{ overflow: 'visible' }}>
                            <defs>
                                <linearGradient id="lifeline-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="var(--accent-green)" stopOpacity="0.4" />
                                    <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                                </linearGradient>
                                <linearGradient id="lifeline-stroke" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="var(--gold-primary)" />
                                    <stop offset="100%" stopColor="var(--accent-green)" />
                                </linearGradient>
                            </defs>
                            {/* Fill */}
                            <path d="M0 380 L 100 370 L 250 380 L 300 350 L 400 360 L 500 250 L 550 280 L 600 200 L 700 220 L 850 50 L 1000 20 L 1000 400 L 0 400 Z" fill="url(#lifeline-grad)" style={{ animation: 'pulse-fill 4s ease-in-out infinite' }} />
                            {/* Animated Stroke */}
                            <path d="M0 380 L 100 370 L 250 380 L 300 350 L 400 360 L 500 250 L 550 280 L 600 200 L 700 220 L 850 50 L 1000 20" fill="none" stroke="url(#lifeline-stroke)" strokeWidth="4" filter="drop-shadow(0 0 12px var(--accent-green))" strokeDasharray="2000" strokeDashoffset="2000" style={{ animation: 'draw-line 3s cubic-bezier(0.4, 0, 0.2, 1) forwards 0.5s' }} />
                            {/* Breakout Data Points */}
                            <circle cx="850" cy="50" r="6" fill="#fff" filter="drop-shadow(0 0 10px #fff)" style={{ animation: 'pulse-glow-elegant 2s infinite' }} />
                            <circle cx="1000" cy="20" r="8" fill="var(--accent-green)" filter="drop-shadow(0 0 15px var(--accent-green))" style={{ animation: 'pulse-glow-elegant 1.5s infinite' }} />
                        </svg>
                    </div>

                    {/* Floating Wealth/Lifeline Elements */}
                    <div className="animate-float" style={{ position: 'absolute', top: '25%', left: '10%', padding: '10px 15px', background: 'rgba(0, 230, 118, 0.1)', border: '1px solid rgba(0, 230, 118, 0.3)', borderRadius: '8px', backdropFilter: 'blur(5px)', color: '#fff', fontSize: '1.2rem', fontWeight: 'bold', zIndex: 0, boxShadow: '0 0 20px rgba(0,230,118,0.2)' }}>
                        <span style={{ color: 'var(--accent-green)' }}>+₹1,24,500</span> <br /><span style={{ fontSize: '0.8rem', fontWeight: 'normal', color: '#aaa' }}>1:4 Risk/Reward Secured</span>
                    </div>

                    <div className="animate-float" style={{ animationDelay: '1.5s', position: 'absolute', bottom: '35%', right: '10%', padding: '10px 15px', background: 'rgba(255, 215, 0, 0.1)', border: '1px solid rgba(255, 215, 0, 0.3)', borderRadius: '8px', backdropFilter: 'blur(5px)', color: '#fff', fontSize: '1.2rem', fontWeight: 'bold', zIndex: 0, boxShadow: '0 0 20px rgba(255,215,0,0.2)' }}>
                        <span style={{ color: 'var(--gold-primary)' }}>Breakout Confirmed</span><br /><span style={{ fontSize: '0.8rem', fontWeight: 'normal', color: '#aaa' }}>Institutional Volume ▲</span>
                    </div>

                    {/* Massive Floating Energy Orbs */}
                    <div style={{ position: 'absolute', top: '10%', right: '20%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,215,0,0.1) 0%, transparent 70%)', filter: 'blur(60px)', zIndex: -2, animation: 'pulse-glow-elegant 5s infinite alternate' }}></div>
                    <div style={{ position: 'absolute', bottom: '10%', left: '20%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,230,118,0.08) 0%, transparent 70%)', filter: 'blur(80px)', zIndex: -2, animation: 'pulse-glow-elegant 7s infinite alternate-reverse' }}></div>

                    {/* Core Content Container */}
                    <div className="container text-center animate-fade-in" style={{ zIndex: 1, maxWidth: '900px', position: 'relative', marginTop: '60px' }}>

                        <div className="glass-badge mb-6" style={{ display: 'inline-block', padding: '8px 24px', borderRadius: '30px', border: '1px solid var(--accent-green)', background: 'rgba(0,230,118,0.05)', backdropFilter: 'blur(8px)', boxShadow: '0 0 15px rgba(0,230,118,0.2)' }}>
                            <span style={{ color: 'var(--accent-green)', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span className="pulse-dot" style={{ display: 'inline-block', width: '8px', height: '8px', background: 'var(--accent-green)', borderRadius: '50%', animation: 'pulse-glow-elegant 1.5s infinite' }}></span>
                                Your Financial Lifeline
                            </span>
                        </div>

                        <h1 className="mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.15 }}>
                            Stop Guessing. Start <br />
                            <span className="text-gradient-gold" style={{ filter: 'drop-shadow(0 0 10px rgba(255,215,0,0.3))' }}>Extracting Wealth.</span>
                        </h1>

                        <h3 className="mb-8 text-muted" style={{ fontWeight: 400, fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', lineHeight: 1.6, maxWidth: '750px', margin: '0 auto 2rem' }}>
                            You are overwhelmed. The market feels rigged. But there is a <strong style={{ color: '#fff' }}>hidden mechanical framework</strong> used by institutions to secure high-accuracy entries. Discover it in this live 90-minute Masterclass.
                        </h3>

                        <div className="host-info mb-8" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
                            <img src="/founder.jpg" alt="Dr. Vinith Oscar D'Costa" style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--gold-primary)', boxShadow: '0 0 15px rgba(255,215,0,0.3)' }} />
                            <div style={{ textAlign: 'left' }}>
                                <p style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem', margin: 0 }}>Hosted by Dr. Vinith Oscar D'Costa</p>
                                <p className="text-muted" style={{ fontSize: '0.9rem', margin: 0 }}>Founder — Vinith D’Costa & Associates</p>
                            </div>
                        </div>

                        <div className="flex-center gap-6 mb-8" style={{ flexWrap: 'wrap', flexDirection: 'column' }}>
                            <Link href="/apply?course=webinar">
                                <Button variant="primary" style={{ padding: '22px 60px', fontSize: '1.5rem', background: 'var(--gold-primary)', color: '#000', boxShadow: '0 0 40px rgba(255,215,0,0.4), inset 0 0 15px rgba(255,255,255,0.6)', transition: 'all 0.3s ease', cursor: 'pointer', borderRadius: '12px', border: 'none', fontWeight: 'bold' }}>
                                    Unlock The Blueprint For ₹199
                                </Button>
                            </Link>

                            <p style={{ color: 'var(--accent-red)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255,23,68,0.1)', padding: '8px 16px', borderRadius: '20px', border: '1px solid rgba(255,23,68,0.3)' }}>
                                <span className="pulse-dot" style={{ display: 'inline-block', width: '10px', height: '10px', background: 'var(--accent-red)', borderRadius: '50%', animation: 'pulse-glow-elegant 2s infinite' }}></span>
                                Warning: Only a few live slots remaining today.
                            </p>
                        </div>

                    </div>
                </section>

                {/* 2. THE PROBLEM SECTION */}
                <section className="problem-section section-padding" style={{ background: 'var(--bg-dark)' }}>
                    <div className="container">
                        <div className="text-center mb-12">
                            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.5rem' }}>Why Most Retail Traders <span style={{ color: 'var(--accent-red)' }}>Never Become Consistently Profitable</span></h2>
                            <p className="text-muted" style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 3rem' }}>You've read the books. You've watched the videos. You've drawn the lines. Yet, you're still hitting a wall. Why?</p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
                            {[
                                { icon: "📉", title: "Following Random Tips", desc: "Relying on Telegram channels or unverified 'experts' without understanding the actual market structure behind the trade." },
                                { icon: "😰", title: "Emotional Decisions", desc: "Letting fear and greed dictate entries and exits, resulting in cutting winners short and letting losers run wild." },
                                { icon: "🧩", title: "No Structured Strategy", desc: "Jumping perfectly from one 'holy grail' indicator to another, never allowing a probabilistic edge to play out over a sample size." },
                                { icon: "💸", title: "Zero Risk Management", desc: "Betting the farm on a single trade. Mathematical ruin is guaranteed without institutional sizing logic." }
                            ].map((item, idx) => (
                                <GlassCard key={idx} color="red" style={{ padding: '2.5rem', textAlign: 'center', borderTop: '2px solid rgba(255,23,68,0.4)', background: 'linear-gradient(to bottom, rgba(255,23,68,0.03), transparent)' }}>
                                    <div style={{ fontSize: '3rem', marginBottom: '1rem', filter: 'drop-shadow(0 0 10px rgba(255,23,68,0.2))' }}>{item.icon}</div>
                                    <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: '#fff' }}>{item.title}</h3>
                                    <p className="text-muted" style={{ lineHeight: 1.6 }}>{item.desc}</p>
                                </GlassCard>
                            ))}
                        </div>

                        <div className="text-center">
                            <h3 className="text-gold" style={{ fontSize: '1.8rem', letterSpacing: '1px' }}>There is a completely different way to approach the markets.</h3>
                        </div>
                    </div>
                </section>

                {/* 3. THE PROMISE (SYLLABUS) */}
                <section className="promise-section section-padding" style={{ position: 'relative' }}>
                    <div className="container">
                        <div className="text-center mb-12">
                            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.5rem' }}>What You Will Discover <span className="text-gradient-gold">Inside This Masterclass</span></h2>
                            <p className="text-muted" style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 3rem' }}>For ₹199, we're pulling back the curtain on the institutional mechanisms that actually drive price.</p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                            {[
                                { title: "Professional Market Analysis", desc: "Learn exactly how institutions map out support, resistance, and liquidity zones before the market even opens. Stop reacting, start anticipating." },
                                { title: "The Truth About Price Action", desc: "Forget lagging retail indicators. Discover how raw price action and volume reveal hidden institutional footsteps and genuine market intent." },
                                { title: "The Secret Role of Timing Cycles", desc: "Price shows you what. Time shows you WHEN. Learn the preliminary foundations of predicting market turning points using profound cyclical data." },
                                { title: "Astrology & Market Alignment", desc: "Get an exclusive glimpse into how planetary geometry and time-tested financial astrology correlate with major financial market swings." },
                                { title: "Capital Protection Systems", desc: "The exact risk control framework used by hedge funds to ensure that even through a losing streak, your portfolio remains structurally indestructible." }
                            ].map((item, idx) => (
                                <GlassCard key={idx} color="gold" className="glass-panel" style={{ display: 'flex', gap: '20px', padding: '2.5rem', position: 'relative', overflow: 'hidden' }}>
                                    <div style={{ position: 'absolute', left: 0, top: 0, width: '4px', height: '100%', background: 'var(--gold-primary)', boxShadow: '0 0 15px var(--gold-primary)' }}></div>
                                    <div style={{ color: 'var(--gold-primary)', fontSize: '2.5rem', fontWeight: 'bold', width: '50px', textShadow: '0 0 20px rgba(255,215,0,0.3)' }}>0{idx + 1}</div>
                                    <div>
                                        <h3 style={{ fontSize: '1.4rem', marginBottom: '10px', color: '#fff' }}>{item.title}</h3>
                                        <p className="text-muted" style={{ lineHeight: 1.6, fontSize: '1.05rem' }}>{item.desc}</p>
                                    </div>
                                </GlassCard>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. WHO IS THIS FOR? */}
                <section className="audience-section section-padding" style={{ background: 'linear-gradient(135deg, var(--bg-dark), #000)' }}>
                    <div className="container">
                        <div className="text-center mb-12">
                            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '1rem' }}>Is This Masterclass <span className="text-gold">Right For You?</span></h2>
                            <p className="text-muted" style={{ margin: '0 auto 3rem', maxWidth: '800px' }}>This system fundamentally works for anyone severely serious about treating the markets like a professional operation, not a casino.</p>
                        </div>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
                            {["Aspiring Traders", "Working Professionals", "College Students", "Homemakers", "Retirees Managing Portfolios", "Struggling Retail Traders"].map((aud, idx) => (
                                <div key={idx} style={{ padding: '15px 30px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '30px', color: '#eee', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <span style={{ color: 'var(--gold-primary)' }}>✓</span> {aud}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5. MEET YOUR MENTOR */}
                <section className="mentor-section section-padding" style={{ position: 'relative' }}>
                    <div className="container">
                        <GlassCard className="split-layout" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', padding: '4rem', borderTop: '2px solid var(--gold-border)', background: 'rgba(255,215,0,0.02)' }}>
                            <div className="right-content flex-center" style={{ position: 'relative' }}>
                                <div style={{ width: '100%', maxWidth: '350px', aspectRatio: '1/1', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(255,215,0,0.2), rgba(0,0,0,0))', border: '2px solid var(--gold-border)', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                                    <img src="/founder.jpg" alt="Dr. Vinith Oscar D'Costa" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', width: '100px', height: '100px', background: 'var(--gold-primary)', filter: 'blur(50px)', zIndex: -1, opacity: 0.3 }}></div>
                                </div>
                            </div>
                            <div className="left-content" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <h3 className="text-gold mb-2" style={{ fontSize: '1.2rem', letterSpacing: '2px', textTransform: 'uppercase' }}>Meet Your Mentor</h3>
                                <h2 className="mb-4" style={{ fontSize: '2.5rem' }}>Dr. Vinith Oscar D’Costa</h2>
                                <h4 className="text-muted mb-6" style={{ fontSize: '1.1rem', fontWeight: 500 }}>Founder of Vinith D’Costa & Associates | SEBI-Registered</h4>
                                <p className="text-muted mb-4" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                                    An active, relentless market participant with over 7 years of deep quantitative experience. Dr. Vinith isn't just a theorist; he is fundamentally executing the very frameworks he teaches.
                                </p>
                                <p className="text-muted mb-8" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                                    He pioneered the highly controversial but mathematically undeniable integration of financial astrology with hardcore technical price action—creating a trading edge so unique, it bypasses traditional retail noise entirely.
                                </p>

                                <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#fff' }}><span style={{ color: 'var(--gold-primary)' }}>✦</span> Expert in Technical Structure Analysis</li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#fff' }}><span style={{ color: 'var(--gold-primary)' }}>✦</span> Financial Astrology Timing Pioneer</li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#fff' }}><span style={{ color: 'var(--gold-primary)' }}>✦</span> Institutional Risk Control Mentor</li>
                                </ul>
                            </div>
                        </GlassCard>
                    </div>
                </section>

                {/* 6. WHAT HAPPENS IN THE SESSION (TIMELINE) */}
                <section className="timeline-section section-padding" style={{ background: '#000' }}>
                    <div className="container">
                        <h2 className="text-center mb-12" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Inside The <span className="text-gold">Live Masterclass</span></h2>

                        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
                            <div style={{ position: 'absolute', left: '30px', top: 0, bottom: 0, width: '2px', background: 'linear-gradient(to bottom, var(--gold-primary), transparent)' }}></div>

                            {[
                                { step: "Step 1", title: "Indoctrination", desc: "Introduction to the strict mathematical framework of true market operations." },
                                { step: "Step 2", title: "Institutional Anatomy", desc: "Understanding how smart money moves price and engineers retail liquidity traps." },
                                { step: "Step 3", title: "The Timing Edge", desc: "The grand reveal. A stunning introduction to mapping astronomical geometry to predict market turnaways." },
                                { step: "Step 4", title: "Strategy Implementation", desc: "Putting it together. A direct walkthrough of the strategy logic on a live chart." },
                                { step: "Step 5", title: "The Next Level", desc: "An exclusive, closed-door opportunity to elevate and join our elite mentorship programs." }
                            ].map((item, idx) => (
                                <div key={idx} style={{ display: 'flex', marginBottom: '3rem', width: '100%', position: 'relative', alignItems: 'center' }}>
                                    <div className="icon-glow" style={{ width: '70px', height: '70px', background: 'var(--bg-dark)', borderRadius: '50%', border: '2px solid var(--gold-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2, marginRight: '30px', flexShrink: 0, boxShadow: '0 0 20px rgba(255,215,0,0.3), inset 0 0 10px rgba(255,215,0,0.1)' }}>
                                        <span style={{ color: 'var(--gold-primary)', fontWeight: 'bold', fontSize: '1.2rem' }}>{item.step.replace('Step ', '')}</span>
                                    </div>
                                    <GlassCard color="gold" style={{ padding: '2.5rem', flex: 1 }}>
                                        <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#fff' }}>{item.title}</h3>
                                        <p className="text-muted" style={{ lineHeight: 1.6, fontSize: '1.1rem' }}>{item.desc}</p>
                                    </GlassCard>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 7. HIGH-CONVERTING OFFER BLOCK (URGENCY) */}
                <section className="offer-section section-padding" style={{ position: 'relative', background: 'var(--bg-darker)' }}>
                    <div className="container">
                        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>

                            {/* Urgent Badge */}
                            <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', background: 'var(--accent-red)', color: '#fff', padding: '8px 25px', borderRadius: '30px', fontWeight: 'bold', fontSize: '0.9rem', zIndex: 10, letterSpacing: '2px', textTransform: 'uppercase', boxShadow: '0 0 20px rgba(255,23,68,0.6)', animation: 'pulse-glow-elegant 1s infinite' }}>
                                Limited Time Offer
                            </div>

                            <GlassCard style={{ padding: '5rem 4rem 4rem', background: 'linear-gradient(135deg, rgba(20,0,0,0.8), rgba(0,0,0,0.95))', border: '2px solid rgba(255,23,68,0.5)', textAlign: 'center', animation: 'pulse-urgent 3s infinite', borderRadius: '20px', position: 'relative', overflow: 'hidden' }}>

                                {/* Background Red Glow */}
                                <div style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', width: '300px', height: '100px', background: 'var(--accent-red)', filter: 'blur(80px)', opacity: 0.2, zIndex: -1 }}></div>

                                <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem', color: '#fff' }}>The Masterclass <span className="text-gold">Blueprint</span></h2>
                                <p className="text-muted mb-8" style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>Everything you need to restructure your market psychology and execute strictly mechanical setups.</p>

                                {/* Value Stack */}
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2.5rem', textAlign: 'left', background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                    <div style={{ borderRight: '1px solid rgba(255,255,255,0.05)', paddingRight: '10px' }}>
                                        <h4 style={{ color: '#888', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '1px' }}>Format</h4>
                                        <p style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 600 }}>Intensive Strategy Video Masterclass</p>
                                    </div>
                                    <div style={{ borderRight: '1px solid rgba(255,255,255,0.05)', paddingRight: '10px' }}>
                                        <h4 style={{ color: '#888', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '1px' }}>Total Value</h4>
                                        <p style={{ color: 'var(--accent-red)', fontSize: '1.2rem', fontWeight: 600, textDecoration: 'line-through' }}>₹4,999</p>
                                    </div>
                                    <div>
                                        <h4 style={{ color: '#888', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '1px' }}>Today's Price</h4>
                                        <p style={{ color: 'var(--gold-primary)', fontSize: '2rem', fontWeight: 'bold', lineHeight: 1 }}>₹199</p>
                                    </div>
                                </div>

                                {/* Aggressive Urgency Bar */}
                                <div className="urgency-bar mb-6 text-left" style={{ margin: '0 auto 2rem', maxWidth: '100%' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', alignItems: 'center' }}>
                                        <span style={{ color: '#fff', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <span className="pulse-dot" style={{ display: 'inline-block', width: '8px', height: '8px', background: 'var(--accent-red)', borderRadius: '50%', animation: 'pulse-glow-elegant 1s infinite' }}></span>
                                            WARNING: Capacity Reached
                                        </span>
                                        <span style={{ color: 'var(--accent-red)', fontWeight: 'bold', fontSize: '1.1rem' }}>92% Reserved</span>
                                    </div>
                                    <div style={{ width: '100%', height: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                                        <div style={{ width: '92%', height: '100%', background: 'linear-gradient(90deg, #ff8a65, var(--accent-red))', borderRadius: '10px', boxShadow: '0 0 10px var(--accent-red)' }}></div>
                                    </div>
                                </div>

                                {/* Simulated Countdown Timer */}
                                <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '3rem' }}>
                                    <div style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,23,68,0.3)', padding: '10px 15px', borderRadius: '8px', minWidth: '70px' }}>
                                        <span style={{ display: 'block', fontSize: '1.8rem', fontWeight: 'bold', color: '#fff', lineHeight: 1 }}>00</span>
                                        <span style={{ fontSize: '0.7rem', color: '#888', textTransform: 'uppercase' }}>Hours</span>
                                    </div>
                                    <span style={{ fontSize: '2rem', color: 'var(--accent-red)', fontWeight: 'bold', lineHeight: '45px' }}>:</span>
                                    <div style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,23,68,0.3)', padding: '10px 15px', borderRadius: '8px', minWidth: '70px' }}>
                                        <span style={{ display: 'block', fontSize: '1.8rem', fontWeight: 'bold', color: '#fff', lineHeight: 1 }}>14</span>
                                        <span style={{ fontSize: '0.7rem', color: '#888', textTransform: 'uppercase' }}>Mins</span>
                                    </div>
                                    <span style={{ fontSize: '2rem', color: 'var(--accent-red)', fontWeight: 'bold', lineHeight: '45px' }}>:</span>
                                    <div style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,23,68,0.3)', padding: '10px 15px', borderRadius: '8px', minWidth: '70px' }}>
                                        <span style={{ display: 'block', fontSize: '1.8rem', fontWeight: 'bold', color: '#fff', lineHeight: 1 }}>38</span>
                                        <span style={{ fontSize: '0.7rem', color: '#888', textTransform: 'uppercase' }}>Secs</span>
                                    </div>
                                </div>

                                <Link href="/apply?course=webinar" style={{ display: 'block' }}>
                                    <Button variant="primary" style={{ width: '100%', padding: '25px', fontSize: '1.6rem', background: 'linear-gradient(to right, var(--gold-primary), var(--gold-light), var(--gold-primary))', backgroundSize: '200% auto', color: '#000', border: 'none', animation: 'pulse-button 2s infinite, stripe-shine 3s linear infinite', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '1px', borderRadius: '12px' }}>
                                        Get Instant Access for ₹199
                                    </Button>
                                </Link>
                                <p style={{ color: '#888', fontSize: '0.85rem', marginTop: '15px' }}>Secure checkout. Instant delivery to your dashboard.</p>
                            </GlassCard>
                        </div>
                    </div>
                </section>

                {/* 8. FAQ */}
                <section className="faq-section section-padding" style={{ background: '#000' }}>
                    <div className="container" style={{ maxWidth: '800px' }}>
                        <h2 className="text-center mb-10" style={{ fontSize: '2.5rem' }}>Frequently Asked <span className="text-gold">Questions</span></h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {[
                                { q: "Do I need prior trading experience?", a: "No. This masterclass is designed to provide massive value whether you've been trading for 5 years or 5 minutes. We build the conceptual framework straight from the ground up." },
                                { q: "Will the webinar be recorded?", a: "To ensure maximum attendance, engagement, and to protect the proprietary nature of the astrological systems discussed, recordings are NOT provided. It is absolutely crucial you attend live." },
                                { q: "Is this just basic indicator training?", a: "Absolutely not. We actively discourage the reliance on standard retail indicators. We teach raw institutional price mechanics synced with cyclical planetary geometry." },
                                { q: "What tools do I need?", a: "A laptop, a stable internet connection, a notebook, and a completely open mind to unlearn retail trading habits." }
                            ].map((faq, idx) => (
                                <GlassCard key={idx} style={{ padding: '2rem' }}>
                                    <h4 style={{ fontSize: '1.2rem', color: 'var(--gold-primary)', marginBottom: '15px' }}>{faq.q}</h4>
                                    <p className="text-muted" style={{ lineHeight: 1.6 }}>{faq.a}</p>
                                </GlassCard>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 9. DRAMATIC CLOSING CTA */}
                <section className="final-cta section-padding" style={{ position: 'relative', borderTop: '1px solid var(--gold-border)' }}>
                    <div className="bg-glow-elegant" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(ellipse at bottom, rgba(255,215,0,0.08) 0%, transparent 70%)', zIndex: -1 }}></div>
                    <div className="container text-center">
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem' }}>This Could Be the Moment Your <br /><span className="text-gradient-gold">Trading Journey Changes.</span></h2>
                        <p className="text-muted mb-10" style={{ fontSize: '1.3rem', maxWidth: '700px', margin: '0 auto 3rem' }}>One powerful session. One profound paradigm shift. Stop gambling blindly and start executing with mathematical and universal structure.</p>

                        <Link href="/apply?course=webinar">
                            <Button variant="primary" style={{ padding: '22px 60px', fontSize: '1.5rem', background: 'transparent', color: 'var(--gold-primary)', border: '2px solid var(--gold-primary)', boxShadow: '0 0 20px rgba(255,215,0,0.2), inset 0 0 10px rgba(255,215,0,0.1)', transition: 'all 0.3s ease', cursor: 'pointer' }}>
                                Unlock the Blueprint
                            </Button>
                        </Link>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
