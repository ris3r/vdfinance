'use client';
import React, { useState } from 'react';

const badgeColors = {
    'Market Take': { bg: '#e3f2fd', color: '#1565c0' },
    'Education': { bg: '#e8f5e9', color: '#2e7d32' },
    'Student Win': { bg: '#fff3e0', color: '#e65100' },
    'Behind the Scenes': { bg: '#f3e5f5', color: '#7b1fa2' },
    'Webinar Promo': { bg: '#fce4ec', color: '#c62828' },
    'Batch Promo': { bg: '#fce4ec', color: '#c62828' },
};

const calendar = [
    // WEEK 1
    [
        {
            week: 1, day: 'Mon', type: 'Market Take',
            hook: 'The market is about to do something most traders won\'t see coming.',
            script: [
                'Open on chart. Point to a liquidity zone.',
                '"This is where smart money is hunting stops. Here\'s what happens next and why."',
                'Show the setup forming visually.',
                'End with: "This is what we teach at VD Financepedia."',
            ],
            caption: 'Institutions don\'t guess. They engineer. This liquidity zone on Nifty is textbook smart money positioning. If you know what to look for, the market tells you everything. Comment \'GUIDE\' and I\'ll send you our free institutional secrets breakdown. #NiftyAnalysis #TradingIndia',
            hashtags: '#NiftyAnalysis #TradingIndia #StockMarketIndia #TechnicalAnalysis #SmartMoney #InstitutionalTrading #VDFinancepedia #LearnToTrade #MarketAnalysis #NSEIndia #TradingTips #PriceAction #FinancialFreedom #TraderLife #StockMarket',
        },
        {
            week: 1, day: 'Wed', type: 'Education',
            hook: 'Why do 90% of traders lose? It\'s not what you think.',
            script: [
                '"It\'s not lack of knowledge. It\'s structural."',
                '"Retail traders react. Institutions anticipate."',
                '"Here\'s the one shift that changes everything."',
                'Explain liquidity traps in 30 seconds.',
                'End: "We teach this in our Masterclass. Link in bio."',
            ],
            caption: 'The market isn\'t random. It\'s engineered. And once you see the structure, you can\'t unsee it. Drop a \'📈\' if you want to learn this framework.',
            hashtags: '#TradingPsychology #RetailTrader #SmartMoneyTrading #TradingEducation #StockMarketIndia #LearnTrading #VDFinancepedia #MarketStructure #PriceAction #TradingMindset #NSETrader #OptionsTrading #NiftyTrader #FinancialLiteracy #WealthCreation',
        },
        {
            week: 1, day: 'Fri', type: 'Webinar Promo',
            hook: 'I\'m revealing our full institutional framework live. ₹199 only.',
            script: [
                'Dr. Vinith direct to camera.',
                '"For the first time, I\'m showing the complete system — institutional price action, financial astrology timing, risk control."',
                '"90 minutes. ₹199. Limited seats."',
                'Show webinar page briefly.',
                '"Link in bio."',
            ],
            caption: 'The Masterclass is live. ₹199 gets you 90 minutes with the complete institutional framework — the same one our 1,500+ students use. Seats are limited. Link in bio to register. 🔗',
            hashtags: '#TradingMasterclass #LearnToTrade #StockMarketIndia #VDFinancepedia #TradingCourse #FinancialAstrology #TechnicalAnalysis #NSETrader #TradingEducation #InstitutionalTrading #NiftyOptions #MarketAnalysis #TradeSmarter #WealthBuilding #FinancialFreedom',
        },
    ],
    // WEEK 2
    [
        {
            week: 2, day: 'Mon', type: 'Student Win',
            hook: 'Our student made ₹22,000 in one trade. Here\'s the exact setup.',
            script: [
                'Show the chart. Mark the entry point.',
                '"This is a liquidity grab setup — classic institutional pattern."',
                '"Our student Priya saw it, executed it, and banked ₹22,000."',
                '"This is what structured trading looks like."',
            ],
            caption: 'Liquidity grab → clean entry → ₹22,000. Not luck. Structure. This is what we teach. Want to learn this setup? Comment \'SETUP\' and I\'ll send you details. 📈',
            hashtags: '#TradingResults #StudentWin #BankNifty #OptionsTrading #TradingIndia #SmartMoneyTrading #VDFinancepedia #TradingEducation #LearnToTrade #ProofOfWork #TradingLife #NSEIndia #MarketStructure #WealthCreation #TraderMindset',
        },
        {
            week: 2, day: 'Wed', type: 'Education',
            hook: 'I predicted this market turn 3 days before it happened. Here\'s how.',
            script: [
                '"This isn\'t guesswork. Financial astrology maps planetary geometry to price cycles."',
                '"The turn on [date] — I flagged it 3 days prior."',
                '"Here\'s the cycle that called it."',
                'Brief explanation of one astro concept.',
                '"This is our unique edge."',
            ],
            caption: 'Financial astrology isn\'t superstition. It\'s pattern recognition across centuries of data. The market has cycles. Planetary geometry maps those cycles. And when you combine it with institutional price action — you get a timing edge most traders never see. 🪐📊',
            hashtags: '#FinancialAstrology #AstroTrading #MarketCycles #TradingEdge #VDFinancepedia #UniqueEdge #StockMarketIndia #TechnicalAnalysis #TradingIndia #NSEAnalysis #MarketTiming #PriceAction #TradingPhilosophy #WealthMindset #InstitutionalTrading',
        },
        {
            week: 2, day: 'Fri', type: 'Behind the Scenes',
            hook: 'A day in the life of a SEBI-registered Research Analyst.',
            script: [
                'Dr. Vinith at desk. Charts open.',
                '"6am — pre-market analysis. I\'m mapping liquidity zones before the session opens."',
                '"Here\'s what I\'m watching today."',
                'Show 2–3 real setups on screen.',
                '"This is the daily process."',
            ],
            caption: 'This is what actual market preparation looks like. Not tips. Not calls. Structure. Every. Single. Day. Follow for daily market insights. 📊',
            hashtags: '#DayInTheLife #SEBIRegistered #ResearchAnalyst #TradingRoutine #MarketPrep #VDFinancepedia #StockMarketIndia #TradingDiscipline #TraderLife #NSEIndia #MarketAnalysis #TradingMindset #FinancialEducation #WealthCreation #ProTrader',
        },
    ],
    // WEEK 3
    [
        {
            week: 3, day: 'Mon', type: 'Market Take',
            hook: 'This setup on BankNifty is screaming — but most traders can\'t see it.',
            script: [
                'Open on the BankNifty 15-min chart.',
                '"See this false breakout above resistance? That\'s institutions engineering a trap."',
                '"They swept the liquidity, now watch for the reversal."',
                'Mark the order block and the expected move.',
                '"This is how we read the market. Link in bio for the full framework."',
            ],
            caption: 'BankNifty liquidity sweep above the high → institutional trap → reversal incoming. Most traders see a breakout. Smart money sees an exit. Learn to read what\'s really happening. Comment \'FLOW\' for a free breakdown. 🔍',
            hashtags: '#BankNifty #LiquiditySweep #SmartMoney #TradingIndia #OptionsTrading #StockMarketIndia #VDFinancepedia #PriceAction #InstitutionalTrading #NSEIndia #TradingTips #MarketStructure #TechnicalAnalysis #LearnToTrade #TraderLife',
        },
        {
            week: 3, day: 'Wed', type: 'Education',
            hook: 'The one rule that separates surviving traders from extinct ones.',
            script: [
                '"Most traders blow up not because of bad entries — but because of no risk rules."',
                '"Here\'s the single rule we teach from Day 1: Never risk more than 1% of your capital on a single trade."',
                'Show a quick example: ₹5L capital = ₹5,000 max risk per trade.',
                '"This one rule would have saved 90% of accounts that blew up."',
                '"We teach a full risk framework in our course. Link in bio."',
            ],
            caption: 'The strategy makes money. Risk management keeps it. This 1% rule is non-negotiable in our program. How many of you follow a strict risk rule? Drop your % below. 👇',
            hashtags: '#RiskManagement #TradingRules #CapitalProtection #TradingEducation #StockMarketIndia #VDFinancepedia #MoneyManagement #TradingDiscipline #LearnToTrade #SmartTrading #NSEIndia #TraderMindset #OptionsTrading #FinancialFreedom #WealthProtection',
        },
        {
            week: 3, day: 'Fri', type: 'Student Win',
            hook: 'From confused beginner to ₹12,500 profit in his first month.',
            script: [
                '"Meet Rahul. Three months ago, he didn\'t know what an order block was."',
                'Show Rahul\'s Nifty CE trade setup on chart.',
                '"Entry at 24,150, exit at 24,680. Clean ₹12,500."',
                '"He followed the structure. That\'s all it takes."',
                '"Results like these aren\'t luck — they\'re the curriculum working."',
            ],
            caption: 'Rahul went from zero chart-reading ability to booking ₹12,500 on a single Nifty CE trade within 3 months. Not a tip. Not a signal. He learned the framework and executed it. Next batch starts soon. Comment \'BATCH\' for details. 📈🔥',
            hashtags: '#StudentSuccess #TradingResults #NiftyTrading #OptionsProfit #VDFinancepedia #TradingEducation #LearnToTrade #ProofOfWork #FromBeginner #TradingIndia #NSEIndia #SmartMoneyTrading #FinancialFreedom #TradingCommunity #TraderMindset',
        },
    ],
    // WEEK 4
    [
        {
            week: 4, day: 'Mon', type: 'Education',
            hook: 'Institutions don\'t trade patterns. They trade THIS.',
            script: [
                '"Forget head & shoulders. Forget double tops. Institutions don\'t trade patterns."',
                '"They trade order flow — where the real money is positioned."',
                'Show an order block on a live chart.',
                '"This zone right here? That\'s where institutional orders are sitting. When price returns, they defend it."',
                '"This is the foundation of everything we teach."',
            ],
            caption: 'Retail traders trade patterns. Institutions trade order flow. The difference between these two approaches is the difference between guessing and knowing. This is Level 1 of our curriculum. Want to see the full framework? Link in bio. 🧠',
            hashtags: '#OrderFlow #InstitutionalTrading #PriceAction #TradingIndia #StockMarketIndia #VDFinancepedia #SmartMoney #TechnicalAnalysis #LearnToTrade #MarketStructure #NSEIndia #TradingEducation #WealthCreation #ProTrader #FinancialLiteracy',
        },
        {
            week: 4, day: 'Wed', type: 'Behind the Scenes',
            hook: 'Preparing for tomorrow\'s live batch session. Here\'s what goes into it.',
            script: [
                'Dr. Vinith prepping slides and charts for the next day\'s live session.',
                '"Every session is built on current market conditions — not recycled content."',
                '"Tomorrow\'s topic: identifying institutional accumulation zones."',
                'Quick peek at the slide deck and chart annotations.',
                '"This is the difference between a course and a mentorship."',
            ],
            caption: 'Every session is custom-built on live market conditions. No recycled PDFs. No generic slides. Just real analysis, real charts, real structure. If you\'re serious about trading, this is the level of preparation that goes into your education. New batch starting soon. 📚',
            hashtags: '#BehindTheScenes #TradingMentorship #LiveSessions #VDFinancepedia #TradingEducation #CoursePrep #StockMarketIndia #MarketAnalysis #NSEIndia #TradingDiscipline #LearnToTrade #RealEducation #TradingCommunity #WealthBuilding #FinancialFreedom',
        },
        {
            week: 4, day: 'Fri', type: 'Batch Promo',
            hook: 'Enrollment closes in 48 hours. Here\'s what you\'re getting.',
            script: [
                'Dr. Vinith direct to camera. Urgent but composed.',
                '"The next batch closes in 48 hours. Let me tell you exactly what\'s inside."',
                '"Beginner: full stock market foundations, 1.5 months."',
                '"Intermediate: professional framework including astro timing, 2.5 months."',
                '"Advanced: the full system plus 1-on-1 mentoring. 3.5 months."',
                '"Seats are limited. We cap every batch. Link in bio."',
            ],
            caption: '⚠️ Final 48 hours. The next VD Financepedia batch closes for enrollment this week.\n\n🟢 Beginner — 4 seats left\n🟡 Intermediate — 6 seats left\n🔴 Advanced — 3 seats left\n\nThis is a structured, live mentorship program with a SEBI-registered Research Analyst. Not a course dump. Not recorded content.\n\nLink in bio. Don\'t wait for the next cycle. 🔗',
            hashtags: '#EnrollmentOpen #TradingCourse #VDFinancepedia #LimitedSeats #StockMarketIndia #TradingEducation #SEBIRegistered #LearnToTrade #InstitutionalTrading #TradingMentorship #NSEIndia #FinancialAstrology #WealthCreation #TraderLife #LastChance',
        },
    ],
];

function CopyBtn({ text }) {
    const [copied, setCopied] = useState(false);
    return (
        <button
            onClick={async () => { await navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 1500); }}
            style={{ padding: '6px 14px', background: copied ? '#4caf50' : '#f0f0f0', color: copied ? '#fff' : '#333', border: '1px solid #ddd', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s' }}
        >
            {copied ? '✓ Copied' : '📋 Copy Caption'}
        </button>
    );
}

export default function ContentPage() {
    const [expanded, setExpanded] = useState(null);

    return (
        <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', background: '#f5f5f5', minHeight: '100vh', padding: '2rem' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ marginBottom: '2rem' }}>
                    <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1a1a1a', margin: 0 }}>📅 Instagram Reels Content Calendar</h1>
                    <p style={{ color: '#666', fontSize: '0.85rem', margin: '4px 0 0' }}>4-week posting plan — 3 Reels per week. Click any card to expand.</p>
                </div>

                {calendar.map((week, wi) => (
                    <div key={wi} style={{ marginBottom: '1.5rem' }}>
                        <h2 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#999', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.8rem' }}>Week {wi + 1}</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                            {week.map((post, pi) => {
                                const key = `${wi}-${pi}`;
                                const isExpanded = expanded === key;
                                const badge = badgeColors[post.type] || { bg: '#f0f0f0', color: '#333' };

                                return (
                                    <div
                                        key={key}
                                        onClick={() => setExpanded(isExpanded ? null : key)}
                                        style={{
                                            background: '#fff', borderRadius: '12px', padding: '1.2rem',
                                            boxShadow: isExpanded ? '0 4px 20px rgba(0,0,0,0.12)' : '0 1px 3px rgba(0,0,0,0.08)',
                                            cursor: 'pointer', transition: 'all 0.2s',
                                            border: isExpanded ? '2px solid #1a1a1a' : '2px solid transparent',
                                            gridColumn: isExpanded ? '1 / -1' : 'auto',
                                        }}
                                    >
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                            <span style={{ fontSize: '0.65rem', fontWeight: 700, color: badge.color, background: badge.bg, padding: '3px 10px', borderRadius: '12px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{post.type}</span>
                                            <span style={{ fontSize: '0.7rem', color: '#bbb', fontWeight: 500 }}>{post.day}</span>
                                        </div>

                                        <p style={{ fontSize: '0.9rem', fontWeight: 600, color: '#1a1a1a', lineHeight: 1.4, marginBottom: isExpanded ? '1rem' : '0', margin: isExpanded ? '0 0 1rem' : 0 }}>
                                            🎬 "{post.hook}"
                                        </p>

                                        {isExpanded && (
                                            <div onClick={(e) => e.stopPropagation()} style={{ marginTop: '0.5rem' }}>
                                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                                    <div>
                                                        <h4 style={{ fontSize: '0.75rem', fontWeight: 600, color: '#999', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>Script Outline</h4>
                                                        <ul style={{ padding: '0 0 0 18px', margin: 0 }}>
                                                            {post.script.map((s, si) => (
                                                                <li key={si} style={{ fontSize: '0.85rem', color: '#444', lineHeight: 1.6, marginBottom: '4px' }}>{s}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                                            <h4 style={{ fontSize: '0.75rem', fontWeight: 600, color: '#999', textTransform: 'uppercase', letterSpacing: '0.5px', margin: 0 }}>Caption</h4>
                                                            <CopyBtn text={post.caption + '\n\n' + post.hashtags} />
                                                        </div>
                                                        <div style={{ background: '#fafafa', borderRadius: '8px', padding: '10px', border: '1px solid #eee', marginBottom: '8px' }}>
                                                            <p style={{ fontSize: '0.82rem', color: '#333', lineHeight: 1.6, margin: 0, whiteSpace: 'pre-wrap' }}>{post.caption}</p>
                                                        </div>
                                                        <div style={{ background: '#f5f5f5', borderRadius: '8px', padding: '8px' }}>
                                                            <p style={{ fontSize: '0.72rem', color: '#1565c0', lineHeight: 1.6, margin: 0, wordBreak: 'break-all' }}>{post.hashtags}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
