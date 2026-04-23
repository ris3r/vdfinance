import React from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata = {
    title: 'Terms of Service | VD Financepedia Trading Academy',
    description: 'Terms and conditions governing the use of VD Financepedia Trading Academy services, courses, and webinars.',
};

export default function Terms() {
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
                            Terms of <span className="text-gradient-gold">Service</span>
                        </h1>

                        <div style={sectionStyle}>
                            <h2 style={headingStyle}>1. Acceptance of Terms</h2>
                            <p style={textStyle}>
                                By accessing, browsing, or using the VD Financepedia website ("Platform") and any of its associated services, courses, webinars, or educational materials, you ("User," "you," or "your") acknowledge that you have read, understood, and agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you must not access or use the Platform.
                            </p>
                            <p style={textStyle}>
                                VD Financepedia is the educational and training arm of <strong style={{ color: '#fff' }}>Vinith D'Costa & Associates</strong>, operated under the supervision of Dr. Vinith Oscar D'Costa, SEBI-Registered Research Analyst (Registration No: INH000022367).
                            </p>
                        </div>

                        <div style={sectionStyle}>
                            <h2 style={headingStyle}>2. Description of Services</h2>
                            <p style={textStyle}>
                                VD Financepedia provides the following services:
                            </p>
                            <ul style={{ color: '#bbb', lineHeight: 2, paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                                <li>Structured trading education courses (Beginner, Intermediate, and Advanced levels)</li>
                                <li>Live and recorded masterclass sessions and webinars</li>
                                <li>Proprietary research frameworks including institutional price action analysis and financial astrology timing systems</li>
                                <li>Access to a student portal and dashboard for enrolled students</li>
                                <li>Community access via WhatsApp groups and other communication channels</li>
                            </ul>
                            <p style={textStyle}>
                                All services are educational in nature and do not constitute personalized investment advice, portfolio management, or any form of securities brokerage activity.
                            </p>
                        </div>

                        <div style={sectionStyle}>
                            <h2 style={headingStyle}>3. Payment and Refund Policy</h2>
                            <p style={textStyle}>
                                <strong style={{ color: '#fff' }}>Masterclass / Webinar Fee:</strong> The fee for the Masterclass session is ₹199 (Indian Rupees One Hundred and Ninety-Nine only). This fee is <strong style={{ color: 'var(--accent-red)' }}>non-refundable</strong> once access to the session or its recording has been granted. By completing payment, you acknowledge and accept this policy.
                            </p>
                            <p style={textStyle}>
                                <strong style={{ color: '#fff' }}>Course Fees:</strong> Fees for full courses (Beginner at ₹13,999, Intermediate at ₹44,999, and Advanced at ₹71,999) are payable in full at the time of enrollment unless an installment plan is explicitly agreed upon in writing. <strong style={{ color: 'var(--accent-red)' }}>No refunds will be issued after course commencement or after access to any course module has been granted.</strong>
                            </p>
                            <p style={textStyle}>
                                <strong style={{ color: '#fff' }}>Payment Processing:</strong> All payments are processed securely via Razorpay. VD Financepedia does not store your full credit/debit card details or banking credentials on its servers.
                            </p>
                        </div>

                        <div style={sectionStyle}>
                            <h2 style={headingStyle}>4. Intellectual Property</h2>
                            <p style={textStyle}>
                                All content, course materials, methodologies, astro-technical frameworks, slide decks, proprietary indicators, timing systems, branding elements, and any other intellectual property available through the Platform are the exclusive property of <strong style={{ color: '#fff' }}>Vinith D'Costa & Associates</strong> and are protected under applicable intellectual property laws of India.
                            </p>
                            <p style={textStyle}>
                                You may not reproduce, distribute, modify, create derivative works from, publicly display, transmit, sell, license, or otherwise exploit any content from VD Financepedia without prior written consent. Unauthorized recording, screen capture, or redistribution of any live session, course, or masterclass content is strictly prohibited and may result in immediate termination of access and legal action.
                            </p>
                        </div>

                        <div style={sectionStyle}>
                            <h2 style={headingStyle}>5. User Conduct</h2>
                            <p style={textStyle}>When using the Platform and its services, you agree to:</p>
                            <ul style={{ color: '#bbb', lineHeight: 2, paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                                <li>Provide accurate and truthful personal information during enrollment</li>
                                <li>Not share your account credentials, course access, or session links with third parties</li>
                                <li>Not engage in any activity that disrupts or interferes the Platform's functionality</li>
                                <li>Maintain respect and professionalism in all community interactions (WhatsApp groups, live sessions, etc.)</li>
                                <li>Not use the educational content provided to mislead or defraud others</li>
                            </ul>
                            <p style={textStyle}>
                                Violation of these conduct guidelines may result in immediate termination of your access without a refund.
                            </p>
                        </div>

                        <div style={sectionStyle}>
                            <h2 style={headingStyle}>6. Limitation of Liability</h2>
                            <p style={textStyle}>
                                To the maximum extent permitted by applicable law, VD Financepedia, Vinith D'Costa & Associates, Dr. Vinith Oscar D'Costa, and any affiliated parties shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to: loss of profits, loss of data, trading losses, or any financial loss arising from or in connection with your use of the Platform.
                            </p>
                            <p style={textStyle}>
                                The total aggregate liability of VD Financepedia shall not exceed the amount actually paid by you for the specific service giving rise to the claim. You acknowledge that trading involves inherent risk, and VD Financepedia assumes no liability for any trading decisions made based on the educational content provided.
                            </p>
                        </div>

                        <div style={sectionStyle}>
                            <h2 style={headingStyle}>7. Governing Law & Jurisdiction</h2>
                            <p style={textStyle}>
                                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of <strong style={{ color: '#fff' }}>Bengaluru, Karnataka, India</strong>.
                            </p>
                        </div>

                        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '2rem', marginTop: '1rem' }}>
                            <p style={{ color: '#666', fontSize: '0.85rem', textAlign: 'center' }}>
                                For questions regarding these terms, contact us at{' '}
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
