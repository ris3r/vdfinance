import React from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata = {
    title: 'Disclaimer | VD Financepedia Trading Academy',
    description: 'Important disclaimers regarding investment risks, SEBI registration, educational services, and forward-looking statements from VD Financepedia.',
};

export default function Disclaimer() {
    const sectionStyle = { marginBottom: '2.5rem' };
    const headingStyle = { fontSize: '1.3rem', color: 'var(--gold-primary)', marginBottom: '1rem', fontWeight: 600 };
    const textStyle = { color: '#bbb', fontSize: '1rem', lineHeight: 1.8, marginBottom: '1rem' };

    return (
        <>
            <Navbar />
            <main className="main-content" style={{ paddingTop: '120px', background: 'var(--bg-darker)', minHeight: '100vh', paddingBottom: '4rem' }}>
                <div className="container" style={{ maxWidth: '850px', position: 'relative', zIndex: 1 }}>

                    <div className="glass-panel" style={{ padding: 'clamp(2rem, 5vw, 3.5rem)', borderTop: '2px solid var(--gold-primary)', borderRadius: '20px' }}>

                        <p style={{ color: '#666', fontSize: '0.85rem', marginBottom: '0.5rem' }}>Last Updated: April 2026</p>
                        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '2rem' }}>
                            <span className="text-gradient-gold">Disclaimer</span>
                        </h1>

                        <div style={sectionStyle}>
                            <h2 style={headingStyle}>Investment Risk Disclaimer</h2>
                            <p style={textStyle}>
                                Trading and investing in financial markets, including but not limited to equities, derivatives, commodities, and currencies, involves substantial risk of loss and is not suitable for all investors. The value of investments can fluctuate, and investors may lose 100% of their invested capital. Past performance of any trading system, methodology, or strategy is not indicative of future results.
                            </p>
                            <p style={textStyle}>
                                You should carefully consider your investment objectives, level of experience, and risk appetite before making any investment decision. If you are unsure about the suitability of any investment, you should seek independent financial advice from a licensed professional. VD Financepedia and Vinith D'Costa & Associates do not guarantee any specific outcome or profit from the use of any information, tools, or strategies shared through our platform.
                            </p>
                        </div>

                        <div style={sectionStyle}>
                            <h2 style={headingStyle}>SEBI Research Analyst Disclaimer</h2>
                            <p style={textStyle}>
                                Dr. Vinith Oscar D'Costa is a SEBI-Registered Research Analyst. <strong style={{ color: '#fff' }}>Registration No: INH000022367</strong>. SEBI registration does not imply that SEBI has certified or endorsed the qualifications of the Research Analyst or endorsed the level of competence displayed in the research report/analysis.
                            </p>
                            <p style={textStyle}>
                                The research and analysis provided through VD Financepedia are intended for educational and informational purposes only. Any research reports, analytical observations, or market commentary should not be construed as personalized investment advice. The Research Analyst may hold positions in the securities discussed and expressly disclaims any obligation to disclose or update such holdings.
                            </p>
                        </div>

                        <div style={sectionStyle}>
                            <h2 style={headingStyle}>Education Disclaimer</h2>
                            <p style={textStyle}>
                                All courses, masterclasses, webinars, workshops, and educational content provided by VD Financepedia are strictly for <strong style={{ color: '#fff' }}>educational and informational purposes only</strong>. The content does not constitute and should not be interpreted as personalized investment advice, a recommendation to buy or sell any specific security, or an offer to enter into any financial transaction.
                            </p>
                            <p style={textStyle}>
                                The methodologies taught, including but not limited to institutional price action frameworks, financial astrology timing systems, and order flow analysis techniques, are proprietary research frameworks. Results achieved by students may vary significantly based on individual skill, dedication, market conditions, and capital allocation.
                            </p>
                        </div>

                        <div style={sectionStyle}>
                            <h2 style={headingStyle}>No Guarantee of Profit</h2>
                            <p style={textStyle}>
                                VD Financepedia expressly disclaims any guarantee or assurance of profit, income, or specific trading results. No representation is being made that any account will or is likely to achieve profits or losses similar to those discussed in any educational material or marketing content. The trading examples presented in our courses and masterclasses are used for illustrative purposes only and do not represent actual trading results.
                            </p>
                            <p style={textStyle}>
                                Hypothetical trading results have many inherent limitations, some of which are described below. No representation is being made that any account will or is likely to achieve profits or losses similar to those shown. In fact, there are frequently sharp differences between hypothetical trading results and the actual results subsequently achieved by any particular trading program.
                            </p>
                        </div>

                        <div style={sectionStyle}>
                            <h2 style={headingStyle}>Forward-Looking Statements</h2>
                            <p style={textStyle}>
                                Certain statements made on this website, in course materials, and during live sessions may constitute "forward-looking statements" within the meaning of applicable financial regulations. These include statements regarding expected market behavior, anticipated performance of trading strategies, expectations about timing cycles, and projected outcomes from the application of the taught frameworks.
                            </p>
                            <p style={textStyle}>
                                Forward-looking statements are inherently uncertain and are based on assumptions and expectations that may prove to be inaccurate. Actual results may differ materially from those expressed or implied by such forward-looking statements. VD Financepedia undertakes no obligation to publicly update or revise any forward-looking statements.
                            </p>
                        </div>

                        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '2rem', marginTop: '1rem' }}>
                            <p style={{ color: '#666', fontSize: '0.85rem', textAlign: 'center' }}>
                                For questions regarding this disclaimer, contact us at{' '}
                                <a href="mailto:vdassociates029@gmail.com" style={{ color: 'var(--gold-primary)', textDecoration: 'none' }}>vdassociates029@gmail.com</a>
                            </p>
                            <p style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                                <Link href="/" style={{ color: 'var(--gold-primary)', textDecoration: 'none', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                                    ← Back to Homepage
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
