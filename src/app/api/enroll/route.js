import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, phone, course } = body;

        // Validation
        if (!name || !email || !phone || !course) {
            return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
        }

        // Create Transporter (Requires env vars in .env.local)
        // Set these dynamically based on the user's SMTP settings when we notify them.
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: process.env.SMTP_PORT || 587,
            secure: process.env.SMTP_SECURE === 'true' || false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const mailOptions = {
            from: process.env.SMTP_FROM || process.env.SMTP_USER || 'no-reply@vdfinancepedia.com',
            to: process.env.ADMIN_EMAIL || process.env.SMTP_USER || 'support@vinithdcosta.in', // Send to admin
            subject: `New Academy Lead: ${name} (${course})`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                    <h2 style="color: #b8860b;">New Academy Enrollment Lead</h2>
                    <p>A new prospective student has applied via the website.</p>
                    <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 30%;">Name:</td>
                            <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
                            <td style="padding: 10px; border-bottom: 1px solid #eee;">
                                <a href="mailto:${email}">${email}</a>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
                            <td style="padding: 10px; border-bottom: 1px solid #eee;">
                                <a href="tel:${phone}">${phone}</a>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Course Selected:</td>
                            <td style="padding: 10px; border-bottom: 1px solid #eee;">${course}</td>
                        </tr>
                    </table>
                    <p style="margin-top: 30px; font-size: 12px; color: #888;">This email was generated automatically by the VD Financepedia system.</p>
                </div>
            `,
        };

        // Standard response if env vars aren't setup so UI doesn't crash during dev/testing
        if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
            console.log("Mock Email Sent (No SMTP vars set in .env.local):", body);
            // In a real scenario, you might still want to return 500 or just pretend it passed for dev mode.
            // We'll return 200 so the UI succeeds.
            return NextResponse.json({ message: 'Dev mode: Lead captured.' }, { status: 200 });
        }

        // Send the actual email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Lead captured successfully' }, { status: 200 });

    } catch (error) {
        console.error("Email sending error:", error);
        return NextResponse.json({ error: 'Failed to send lead.' }, { status: 500 });
    }
}
