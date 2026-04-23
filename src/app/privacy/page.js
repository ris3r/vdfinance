import React from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata = {
    title: 'Privacy Policy | VD Financepedia Trading Academy',
    description: 'How VD Financepedia collects, uses, and protects your personal data. Our commitment to your privacy and data security.',
};

export default function Privacy() {
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
                            Privacy <span className="text-gradient-gold">Policy</span>
                        </h1>

                        <div style={sectionStyle}>
                            <h2 style={headingStyle}>1. Information We Collect</h2>
                            <p style={textStyle}>
                                When you interact with VD Financepedia, we may collect the following personal information:
                            </p>
                            <ul style={{ color: '#bbb', lineHeight: 2, paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                                <li><strong style={{ color: '#fff' }}>Personal Identification:</strong> Full name as provided during enrollment</li>
                                <li><strong style={{ color: '#fff' }}>Contact Information:</strong> Email address and WhatsApp/phone number</li>
                                <li><strong style={{ color: '#fff' }}>Payment Information:</strong> Transaction details processed via Razorpay (we do not store your full card or bank details)</li>
                                <li><strong style={{ color: '#fff' }}>Course Preferences:</strong> The course level and path selected during enrollment</li>
                                <li><strong style={{ color: '#fff' }}>Usage Data:</strong> Browser type, device information, pages visited, and session duration for analytics</li>
                            </ul>
                        </div>

                        <div style={sectionStyle}>
                            <h2 style={headingStyle}>2. How We Use Your Data</h2>
                            <p style={textStyle}>
                                Your personal information is used for the following purposes:
                            </p>
                            <ul style={{ color: '#bbb', lineHeight: 2, paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                                <li><strong style={{ color: '#fff' }}>Course Delivery:</strong> To provide access to courses, masterclass sessions, study materials, and your student dashboard</li>
                                <li><strong style={{ color: '#fff' }}>WhatsApp Communication:</strong> To send session reminders, pre-session resources, important announcements, and community updates via WhatsApp</li>
                                <li><strong style={{ color: '#fff' }}>Webinar and Masterclass Access:</strong> To confirm registration, provide session links, and deliver post-session resources</li>
                                <li><strong style={{ color: '#fff' }}>Email Notifications:</strong> To send enrollment confirmations, important updates regarding your enrollment, and periodic educational content</li>
                                <li><strong style={{ color: '#fff' }}>Service Improvement:</strong> To understand user behavior and improve the quality, content, and user experience of the Platform</li>
                                <li><strong style={{ color: '#fff' }}>Legal Compliance:</strong> To comply with applicable legal obligations, including SEBI regulations for Research Analysts</li>
                            </ul>
                        </div>

                        <div style={sectionStyle}>
                            <h2 style={headingStyle}>3. Data Sharing Policy</h2>
                            <p style={textStyle}>
                                <strong style={{ color: '#fff' }}>We do not sell, rent, or trade your personal information to any third parties.</strong> Your data is your data — we respect that completely.
                            </p>
                            <p style={textStyle}>Your information may be shared only in the following limited circumstances:</p>
                            <ul style={{ color: '#bbb', lineHeight: 2, paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                                <li><strong style={{ color: '#fff' }}>Payment Processor:</strong> Transaction data is shared with Razorpay solely for secure payment processing. Razorpay operates under its own privacy policy and PCI-DSS compliance.</li>
                                <li><strong style={{ color: '#fff' }}>Legal Requirements:</strong> If required by law, court order, or regulatory authority (including SEBI), we may disclose your information to comply with legal obligations.</li>
                                <li><strong style={{ color: '#fff' }}>Service Providers:</strong> We may use third-party tools (email delivery, analytics) under strict confidentiality agreements to deliver our services effectively.</li>
                            </ul>
                        </div>

                        <div style={sectionStyle}>
                            <h2 style={headingStyle}>4. WhatsApp Communication Consent</h2>
                            <p style={textStyle}>
                                By providing your WhatsApp number during enrollment or registration, you explicitly consent to receiving communications from VD Financepedia via WhatsApp. These communications may include:
                            </p>
                            <ul style={{ color: '#bbb', lineHeight: 2, paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                                <li>Session reminders and schedule updates</li>
                                <li>Pre-session study materials and preparation guides</li>
                                <li>Community group invitations</li>
                                <li>Important announcements regarding course or session changes</li>
                                <li>Occasional educational content and market insights</li>
                            </ul>
                            <p style={textStyle}>
                                You may opt out of non-essential WhatsApp communications at any time by messaging "STOP" to our WhatsApp number (+91 6363015791) or by contacting us via email. Please note that opting out of all communications may affect your ability to receive critical session access information.
                            </p>
                        </div>

                        <div style={sectionStyle}>
                            <h2 style={headingStyle}>5. Data Security</h2>
                            <p style={textStyle}>
                                We implement reasonable technical and organizational measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                            </p>
                        </div>

                        <div style={sectionStyle}>
                            <h2 style={headingStyle}>6. Data Retention</h2>
                            <p style={textStyle}>
                                We retain your personal data for as long as your student account remains active or as needed to provide our services. If you request account deletion, we will remove your personal data within 30 business days, unless retention is required for legal compliance, dispute resolution, or enforcement of agreements.
                            </p>
                        </div>

                        <div style={sectionStyle}>
                            <h2 style={headingStyle}>7. Your Rights & Contact for Data Requests</h2>
                            <p style={textStyle}>
                                You have the right to access, correct, or request deletion of your personal data. To exercise any of these rights, please contact us at:
                            </p>
                            <div style={{ background: 'rgba(255,215,0,0.05)', border: '1px solid var(--gold-border)', borderRadius: '12px', padding: '1.5rem', marginTop: '1rem' }}>
                                <p style={{ color: '#fff', fontSize: '1rem', fontWeight: 500, marginBottom: '0.5rem' }}>Data Protection Contact</p>
                                <p style={{ color: '#bbb', fontSize: '0.95rem' }}>
                                    Email: <a href="mailto:vdassociates029@gmail.com" style={{ color: 'var(--gold-primary)', textDecoration: 'none' }}>vdassociates029@gmail.com</a>
                                </p>
                                <p style={{ color: '#bbb', fontSize: '0.95rem' }}>
                                    WhatsApp: <a href="https://wa.me/916363015791" style={{ color: 'var(--gold-primary)', textDecoration: 'none' }}>+91 6363015791</a>
                                </p>
                                <p style={{ color: '#888', fontSize: '0.85rem', marginTop: '0.5rem' }}>
                                    We will respond to all data requests within 15 business days.
                                </p>
                            </div>
                        </div>

                        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '2rem', marginTop: '1rem' }}>
                            <p style={{ color: '#666', fontSize: '0.85rem', textAlign: 'center' }}>
                                This privacy policy may be updated periodically. Continued use of the Platform constitutes acceptance of any changes.
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
