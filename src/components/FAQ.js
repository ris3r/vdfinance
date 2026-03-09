import React from 'react';

export default function FAQ({ faqs }) {
    return (
        <section className="faq-section section-padding" style={{ background: 'var(--bg-dark)' }}>
            <div className="container">
                <div className="text-center mb-12">
                    <h2 style={{ fontSize: '2.5rem' }}>Frequently Asked <span className="text-gold">Questions</span></h2>
                    <p className="text-muted mt-4">Everything you need to know about the enrollment and curriculum.</p>
                </div>

                <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {faqs.map((faq, index) => (
                        <div key={index} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', padding: '1.5rem 2rem' }}>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#fff', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <span style={{ color: 'var(--gold-primary)' }}>Q.</span> {faq.q}
                            </h4>
                            <p className="text-muted" style={{ lineHeight: 1.6, paddingLeft: '28px' }}>
                                A: {faq.a}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
