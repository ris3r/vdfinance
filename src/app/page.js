import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import GlassCard from '../components/GlassCard';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="main-content">

        {/* 1. HERO SECTION */}
        <section className="hero section-padding flex-center" style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
          {/* Lively Trading Animation Background */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(ellipse at top, rgba(255,215,0,0.08) 0%, transparent 60%)', zIndex: -1 }}></div>

          {/* Animated SVG Chart Line */}
          <div style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', height: '50%', zIndex: 0, opacity: 0.15, pointerEvents: 'none' }}>
            <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1000 400" className="animate-pulse-glow">
              <path d="M0 350 Q 150 250, 300 300 T 600 200 T 800 150 T 1000 100 L 1000 400 L 0 400 Z" fill="url(#hero-grad)" />
              <path d="M0 350 Q 150 250, 300 300 T 600 200 T 800 150 T 1000 100" fill="none" stroke="var(--gold-primary)" strokeWidth="3" />
              <defs>
                <linearGradient id="hero-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="var(--gold-primary)" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Floating Trading Elements */}
          <div className="animate-float" style={{ position: 'absolute', top: '15%', left: '8%', opacity: 0.15, color: 'var(--accent-green)', fontSize: '2rem', zIndex: 0, fontWeight: 'bold' }}>▲ 24,150.50</div>
          <div className="animate-float" style={{ animationDelay: '1.5s', position: 'absolute', bottom: '25%', right: '10%', opacity: 0.1, color: 'var(--accent-red)', fontSize: '1.5rem', zIndex: 0 }}>▼ 24,010.20</div>
          <div className="animate-float" style={{ animationDelay: '3s', position: 'absolute', top: '35%', right: '18%', width: '200px', height: '200px', borderRadius: '50%', border: '1px dashed var(--gold-border)', opacity: 0.15, zIndex: 0, animation: 'pulse-glow-elegant 10s infinite linear' }}></div>

          <div className="container text-center animate-fade-in" style={{ zIndex: 1 }}>
            <div className="glass-badge mb-6" style={{ display: 'inline-block', padding: '8px 24px', borderRadius: '30px', border: '1px solid var(--gold-border)', background: 'var(--bg-card)', backdropFilter: 'blur(8px)' }}>
              <span className="text-gold" style={{ fontSize: '0.9rem', fontWeight: 500, letterSpacing: '1px' }}>POWERED BY VINITH D’COSTA & ASSOCIATES</span>
            </div>

            <h1 className="mb-6" style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)' }}>
              Master the Markets <br />
              with <span className="text-gradient-gold">Institutional Precision</span>
            </h1>

            <h3 className="mb-6 text-muted" style={{ fontWeight: 400, fontSize: 'clamp(1.2rem, 2vw, 1.8rem)' }}>
              "Where Data Science meets Financial Astrology."
            </h3>

            <p className="mb-8" style={{ maxWidth: '700px', margin: '0 auto 2.5rem', fontSize: '1.1rem', color: '#aaa' }}>
              VD Financepedia Trading Academy is the structured education wing of Vinith D’Costa & Associates — empowering traders from beginner to professional level.
            </p>

            <div className="hero-ctas flex-center gap-6" style={{ flexWrap: 'wrap' }}>
              <a href="/courses">
                <Button variant="primary" style={{ padding: '16px 36px', fontSize: '1.1rem' }}>Explore Courses</Button>
              </a>
              <a href="/about">
                <Button variant="secondary" style={{ padding: '16px 36px', fontSize: '1.1rem' }}>Learn About the Academy</Button>
              </a>
            </div>

            {/* SEBI Trust Bar */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0', flexWrap: 'wrap', marginTop: '2.5rem' }}>
              {[
                { icon: '🛡️', text: 'SEBI Registered Research Analyst' },
                { icon: '📋', text: 'Registration No: INH000022367' },
                { icon: '⭐', text: '1,500+ Students Trained' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '0 18px', borderRight: i < 2 ? '1px solid rgba(255,255,255,0.12)' : 'none' }}>
                  <span style={{ fontSize: '0.85rem' }}>{item.icon}</span>
                  <span style={{ color: '#888', fontSize: '0.8rem', fontWeight: 500, whiteSpace: 'nowrap' }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. TRUST & AUTHORITY SECTION */}
        <section id="firm" className="authority-section section-padding" style={{ background: 'linear-gradient(to bottom, var(--bg-darker), var(--bg-dark))' }}>
          <div className="container">
            <GlassCard className="split-layout" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', padding: '4rem' }}>
              <div className="left-content flex-center" style={{ borderRight: '1px solid rgba(255,255,255,0.1)' }}>
                <h2 style={{ fontSize: '2.5rem', lineHeight: 1.3, maxWidth: '300px' }}>
                  Built on Research.<br />
                  <span className="text-gold">Backed by Experience.</span>
                </h2>
              </div>
              <div className="right-content" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <p className="text-muted mb-6" style={{ fontSize: '1.1rem' }}>
                  We don't just teach trading. We are active market participants. As a SEBI-licensed firm founded by Vinith Oscar D’Costa, our methodologies are forged in the real markets.
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', textAlign: 'center' }}>
                  <div>
                    <h3 className="text-gold" style={{ fontSize: '2rem' }}>1500+</h3>
                    <p className="text-muted" style={{ fontSize: '0.9rem' }}>Students Trained</p>
                  </div>
                  <div>
                    <h3 className="text-gold" style={{ fontSize: '2rem' }}>10+</h3>
                    <p className="text-muted" style={{ fontSize: '0.9rem' }}>Workshops</p>
                  </div>
                  <div>
                    <h3 className="text-gold" style={{ fontSize: '2rem' }}>3000+</h3>
                    <p className="text-muted" style={{ fontSize: '0.9rem' }}>Community Members</p>
                  </div>
                </div>
                <div>
                  <a href="/about">
                    <Button variant="secondary">Meet the Founder</Button>
                  </a>
                </div>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* 3. WHY VD FINANCEPEDIA? */}
        <section className="why-section section-padding">
          <div className="container">
            <div className="text-center mb-8">
              <h2 style={{ fontSize: '2.5rem' }}>The VD Financepedia Difference</h2>
            </div>
            <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
              {[
                { title: "Structured Curriculum", desc: "No random strategies. A psychological and technical progression from day zero to professional level." },
                { title: "Financial Astrology", desc: "Our unique edge: merging traditional technical analysis with time-tested financial astrology for hyper-accurate timing." },
                { title: "Trade Control Systems", desc: "Learn risk mechanics used by institutional desks to protect capital during drawdowns." },
                { title: "Real Market Application", desc: "Theory is useless without execution. We focus on real-world chart applications, not textbook hindsight." }
              ].map((item, idx) => (
                <GlassCard key={idx} style={{ padding: '2.5rem 2rem', textAlign: 'center' }}>
                  <div className="icon mb-4" style={{ fontSize: '2.5rem', color: 'var(--gold-primary)' }}>✦</div>
                  <h3 className="mb-4" style={{ fontSize: '1.4rem' }}>{item.title}</h3>
                  <p className="text-muted">{item.desc}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* 4. COURSE PATHWAY TEASER */}
        <section id="programs" className="pathway-section section-padding" style={{ background: 'var(--bg-dark)' }}>
          <div className="container">
            <div className="text-center mb-8">
              <h2 className="text-gradient-gold" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Your Trading Evolution Starts Here</h2>
              <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem' }}>A structured journey engineered to compress years of trial and error into months of accelerated growth.</p>
            </div>

            <div className="pathway-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '4rem' }}>

              {/* Beginner Card */}
              <GlassCard className="glass-panel-green" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ color: 'var(--accent-green)', fontWeight: 600, letterSpacing: '1px', marginBottom: '1rem', fontSize: '0.9rem' }}>BEGINNER COURSE</div>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Stock Market Foundations</h3>
                <div className="mb-6" style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
                  <span className="text-muted">Duration</span>
                  <span className="text-white">1.5 Months</span>
                </div>
                <div className="mb-6" style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
                  <span className="text-muted">Price</span>
                  <span className="text-white">₹13,999 + GST</span>
                </div>
                <div style={{ marginTop: 'auto' }}>
                  <a href="/courses/beginner" style={{ display: 'block' }}>
                    <Button variant="secondary" style={{ width: '100%' }}>Start Your Journey</Button>
                  </a>
                </div>
              </GlassCard>

              {/* Intermediate Card */}
              <GlassCard className="glass-panel-blue" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ color: 'var(--accent-blue)', fontWeight: 600, letterSpacing: '1px', marginBottom: '1rem', fontSize: '0.9rem' }}>INTERMEDIATE COURSE</div>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Professional Trading Framework</h3>
                <div className="mb-6" style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
                  <span className="text-muted">Duration</span>
                  <span className="text-white">2.5 Months</span>
                </div>
                <div className="mb-6" style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
                  <span className="text-muted">Price</span>
                  <span className="text-white">₹44,999 + GST</span>
                </div>
                <div style={{ marginTop: 'auto' }}>
                  <a href="/courses/intermediate" style={{ display: 'block' }}>
                    <Button variant="secondary" style={{ width: '100%' }}>Level Up Your Strategy</Button>
                  </a>
                </div>
              </GlassCard>

              {/* Advanced Card */}
              <GlassCard className="glass-panel-purple" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ color: 'var(--accent-purple)', fontWeight: 600, letterSpacing: '1px', marginBottom: '1rem', fontSize: '0.9rem' }}>ADVANCED COURSE</div>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Elite Trader Mastery</h3>
                <div className="mb-6" style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
                  <span className="text-muted">Duration</span>
                  <span className="text-white">3.5 Months</span>
                </div>
                <div className="mb-6" style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
                  <span className="text-muted">Price</span>
                  <span className="text-white">₹71,999 + GST</span>
                </div>
                <div style={{ marginTop: 'auto' }}>
                  <a href="/courses/advanced" style={{ display: 'block' }}>
                    <Button variant="secondary" style={{ width: '100%' }}>Become a Professional Trader</Button>
                  </a>
                </div>
              </GlassCard>

            </div>
          </div>
        </section>

        {/* 5. WHAT MAKES THIS DIFFERENT */}
        <section id="framework" className="framework-section section-padding" style={{ position: 'relative' }}>
          <div className="container flex-center flex-col" style={{ flexDirection: 'column', textAlign: 'center' }}>
            <h2 style={{ fontSize: '3rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
              This Is Not Just a Course. <br />
              This Is a <span className="text-gold">Trading Framework.</span>
            </h2>
            <div style={{ maxWidth: '700px', margin: '0 auto 4rem', fontSize: '1.2rem', color: '#ccc', lineHeight: 1.8 }}>
              Most courses give you lagging indicators and textbook patterns. We engineer a psychological and mathematical edge. By fusing structured risk management with our proprietary Astro-Technical methodologies, we instil institutional discipline into your execution.
            </div>
            <GlassCard className="animate-float" style={{ padding: '3rem', maxWidth: '800px', border: '1px solid var(--gold-primary)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem' }}>
                <div>
                  <h4 className="text-gold" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Strategy</h4>
                  <p className="text-muted">Astro + Technical Fusion</p>
                </div>
                <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
                <div>
                  <h4 className="text-gold" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Psychology</h4>
                  <p className="text-muted">Institutional Mindset</p>
                </div>
                <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
                <div>
                  <h4 className="text-gold" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Control</h4>
                  <p className="text-muted">Strict Risk Mechanics</p>
                </div>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* 6. SOCIAL PROOF */}
        <section className="proof-section section-padding" style={{ background: 'var(--bg-dark)' }}>
          <div className="container">
            <h2 className="text-center mb-8" style={{ fontSize: '2.5rem' }}>Built for <span className="text-gold">Serious Traders</span></h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {[
                { quote: "The incorporation of financial astrology completely changed how I look at timeframes and market turning points.", name: "Rahul M.", location: "Bangalore", course: "Advanced Graduate", initials: "RM", color: 'var(--accent-red)' },
                { quote: "Finally, a curriculum that structures everything practically instead of just dumping PDF theory on you.", name: "Priya S.", location: "Mangalore", course: "Intermediate Student", initials: "PS", color: 'var(--gold-primary)' },
                { quote: "The trade control systems are what save you. The strategy makes money, the control keeps it.", name: "Arjun K.", location: "Mumbai", course: "Professional Trader", initials: "AK", color: 'var(--accent-green)' },
              ].map((t, idx) => (
                <GlassCard key={idx} style={{ padding: '2rem', textAlign: 'left', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ color: 'var(--gold-primary)', fontSize: '1rem', letterSpacing: '2px', marginBottom: '1rem' }}>★★★★★</div>
                  <p style={{ fontSize: '1.05rem', fontStyle: 'italic', marginBottom: '1.5rem', lineHeight: 1.7, flexGrow: 1, color: '#ddd' }}>"{t.quote}"</p>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: `linear-gradient(135deg, ${t.color}, rgba(0,0,0,0.5))`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: '0.85rem', flexShrink: 0, border: `1px solid ${t.color}` }}>{t.initials}</div>
                    <div>
                      <p style={{ color: '#fff', fontWeight: 600, fontSize: '0.95rem', margin: 0 }}>{t.name}</p>
                      <p style={{ color: '#888', fontSize: '0.8rem', margin: 0 }}>{t.location} • {t.course}</p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        {/* STUDENT RESULTS TEASER */}
        <section className="section-padding" style={{ background: 'linear-gradient(to bottom, var(--bg-dark), var(--bg-darker))' }}>
          <div className="container">
            <div className="text-center mb-8">
              <h2 style={{ fontSize: '2.5rem', marginBottom: '0.8rem' }}>Real Results From <span className="text-gold">Real Students</span></h2>
              <p className="text-muted" style={{ fontSize: '1.1rem' }}>A small selection from our community's verified trades.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', maxWidth: '1000px', margin: '0 auto' }}>
              {[
                { instrument: 'NIFTY CE', entry: '24,150', exit: '24,680', pnl: '+₹12,500', note: 'Astro cycle reversal call', student: 'Rahul M.' },
                { instrument: 'BANKNIFTY PE', entry: '52,200', exit: '51,100', pnl: '+₹22,000', note: 'Liquidity grab setup', student: 'Priya S.' },
                { instrument: 'RELIANCE', entry: '₹1,240', exit: '₹1,318', pnl: '+₹7,800', note: 'Order block retest', student: 'Arjun K.' },
              ].map((trade, i) => (
                <GlassCard key={i} style={{ padding: '1.5rem', background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(0,230,118,0.1)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ color: '#fff', fontWeight: 700, fontFamily: 'monospace', fontSize: '1rem' }}>{trade.instrument}</span>
                    <span style={{ color: 'var(--accent-green)', fontWeight: 700, fontFamily: 'monospace', fontSize: '1.2rem' }}>{trade.pnl}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <div>
                      <span style={{ color: '#666', fontSize: '0.75rem', textTransform: 'uppercase', display: 'block' }}>Entry</span>
                      <span style={{ color: '#ccc', fontFamily: 'monospace', fontSize: '0.95rem' }}>{trade.entry}</span>
                    </div>
                    <div style={{ color: '#444', display: 'flex', alignItems: 'center' }}>→</div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ color: '#666', fontSize: '0.75rem', textTransform: 'uppercase', display: 'block' }}>Exit</span>
                      <span style={{ color: '#ccc', fontFamily: 'monospace', fontSize: '0.95rem' }}>{trade.exit}</span>
                    </div>
                  </div>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '0.8rem', marginTop: '0.5rem' }}>
                    <p style={{ color: '#888', fontSize: '0.8rem', fontStyle: 'italic', margin: 0 }}>{trade.note} — {trade.student}</p>
                  </div>
                </GlassCard>
              ))}
            </div>
            <p style={{ color: '#555', fontSize: '0.7rem', textAlign: 'center', marginTop: '1.5rem', maxWidth: '700px', margin: '1.5rem auto 0' }}>
              Results are illustrative of student-reported trades. Individual results vary. Trading involves risk.
            </p>
          </div>
        </section>

        {/* 7. WHO IS THIS FOR? */}
        <section className="audience-section section-padding">
          <div className="container text-center">
            <h2 className="mb-8" style={{ fontSize: '2.5rem' }}>Who We Train</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}>
              {["🎓 Students", "👔 Working Professionals", "🚀 Entrepreneurs", "💼 Investors", "📈 Serious Traders"].map((aud, i) => (
                <div key={i} style={{ padding: '15px 30px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '30px', background: 'rgba(20,20,20,0.5)', backdropFilter: 'blur(5px)' }}>
                  <span style={{ fontSize: '1.1rem', fontWeight: 500 }}>{aud}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. FINAL CTA */}
        <section className="cta-section section-padding" style={{ background: 'linear-gradient(to top, #000, var(--bg-dark))', borderTop: '1px solid var(--gold-border)' }}>
          <div className="container text-center">
            <h2 className="text-gradient-gold animate-pulse-glow" style={{ fontSize: '3.5rem', marginBottom: '1.5rem', display: 'inline-block', border: 'none' }}>
              Your Financial Evolution Begins Now
            </h2>
            <p className="mb-8 text-muted" style={{ fontSize: '1.5rem', letterSpacing: '4px', textTransform: 'uppercase' }}>
              Structured. Strategic. Powerful.
            </p>
            <div className="flex-center gap-6" style={{ flexWrap: 'wrap' }}>
              <a href="/courses">
                <Button variant="primary" style={{ padding: '18px 45px', fontSize: '1.2rem' }}>View Courses</Button>
              </a>
              <Button variant="secondary" style={{ padding: '18px 45px', fontSize: '1.2rem' }}>Apply for Enrollment</Button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
