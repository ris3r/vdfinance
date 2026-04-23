import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

const STUDENTS_FILE = path.join(process.cwd(), 'data', 'students.json');

function getStudents() {
    try {
        if (!fs.existsSync(STUDENTS_FILE)) {
            // Ensure the directory exists
            const dir = path.dirname(STUDENTS_FILE);
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }
            fs.writeFileSync(STUDENTS_FILE, '[]', 'utf-8');
            return [];
        }
        const data = fs.readFileSync(STUDENTS_FILE, 'utf-8');
        return JSON.parse(data);
    } catch {
        return [];
    }
}

function saveStudents(students) {
    const dir = path.dirname(STUDENTS_FILE);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(STUDENTS_FILE, JSON.stringify(students, null, 2), 'utf-8');
}

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, phone, course } = body;

        // Validation
        if (!name || !email || !phone || !course) {
            return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
        }

        // Save student to local JSON store
        const students = getStudents();

        // Check if student already exists (by email or phone)
        const existingByEmail = students.find(s => s.email.toLowerCase() === email.toLowerCase());
        const existingByPhone = students.find(s => s.phone.replace(/\s+/g, '') === phone.replace(/\s+/g, ''));

        if (existingByEmail || existingByPhone) {
            return NextResponse.json({ error: 'A student with this email or phone number is already enrolled.' }, { status: 409 });
        }

        const newStudent = {
            id: Date.now().toString(36) + Math.random().toString(36).substring(2, 8),
            name,
            email: email.toLowerCase(),
            phone: phone.replace(/\s+/g, ''),
            course,
            enrolledAt: new Date().toISOString(),
            status: 'active'
        };

        students.push(newStudent);
        saveStudents(students);

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

        const studentMailOptions = {
            from: process.env.SMTP_FROM || process.env.SMTP_USER || 'no-reply@vdfinancepedia.com',
            to: email, // Send to the student
            subject: `Enrollment Confirmation: ${course} at VD Financepedia`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #eee; border-radius: 10px; background-color: #0A0A0A; color: #ffffff;">
                    <div style="text-align: center; margin-bottom: 20px;">
                        <h1 style="color: #FFD700; font-family: Georgia, serif;">VD Financepedia</h1>
                    </div>
                    <h2 style="color: #FFD700;">Welcome to the Academy!</h2>
                    <p style="color: #CCCCCC;">Hi ${name},</p>
                    <p style="color: #CCCCCC;">Thank you for securing your spot in the <strong>${course}</strong>. We are thrilled to have you onboard.</p>
                    <p style="color: #CCCCCC;">Your enrollment has been successfully processed. You can now access your Student Portal to view your curriculum, track your progress, and get ready for your journey into institutional trading.</p>
                    <div style="text-align: center; margin: 30px 0;">
                        <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/login" style="display: inline-block; padding: 12px 28px; background: linear-gradient(135deg, #FFD700, #B39700); color: #050505; text-decoration: none; border-radius: 8px; font-weight: bold;">Access Student Portal</a>
                    </div>
                    <p style="color: #CCCCCC;">You can log in using your email address (<strong>${email}</strong>) or phone number.</p>
                    <hr style="border-color: rgba(255, 255, 255, 0.1); margin: 30px 0;" />
                    <p style="font-size: 12px; color: #888; text-align: center;">This is an automated message from VD Financepedia Academy. Please do not reply directly to this email.</p>
                </div>
            `,
        };

        // Standard response if env vars aren't setup so UI doesn't crash during dev/testing
        if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
            console.log("Mock Email Sent to Admin and Student (No SMTP vars set in .env.local):", body);
            // In a real scenario, you might still want to return 500 or just pretend it passed for dev mode.
            // We'll return 200 so the UI succeeds.
            return NextResponse.json({ message: 'Dev mode: Lead captured & student registered.' }, { status: 200 });
        }

        // Send the actual email
        await transporter.sendMail(mailOptions); // to admin
        await transporter.sendMail(studentMailOptions); // to student

        return NextResponse.json({ message: 'Lead captured successfully' }, { status: 200 });

    } catch (error) {
        console.error("Enrollment error:", error);
        return NextResponse.json({ error: 'Failed to process enrollment.' }, { status: 500 });
    }
}
