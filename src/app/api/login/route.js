import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const STUDENTS_FILE = path.join(process.cwd(), 'data', 'students.json');

function getStudents() {
    try {
        if (!fs.existsSync(STUDENTS_FILE)) {
            return [];
        }
        const data = fs.readFileSync(STUDENTS_FILE, 'utf-8');
        return JSON.parse(data);
    } catch {
        return [];
    }
}

export async function POST(request) {
    try {
        const body = await request.json();
        const { credential } = body; // Can be email or phone

        if (!credential) {
            return NextResponse.json({ error: 'Please enter your email or phone number.' }, { status: 400 });
        }

        const students = getStudents();
        const normalizedCredential = credential.trim().toLowerCase().replace(/\s+/g, '');

        // Search by email or phone
        const student = students.find(s => {
            const emailMatch = s.email.toLowerCase() === normalizedCredential;
            const phoneMatch = s.phone.replace(/\s+/g, '').replace(/^\+91/, '') === normalizedCredential.replace(/^\+91/, '');
            return emailMatch || phoneMatch;
        });

        if (!student) {
            return NextResponse.json({
                error: 'No account found with this email or phone number. Please enroll first.'
            }, { status: 404 });
        }

        if (student.status !== 'active') {
            return NextResponse.json({
                error: 'Your account is currently inactive. Please contact support.'
            }, { status: 403 });
        }

        // Generate a simple session token
        const sessionToken = Buffer.from(`${student.id}:${Date.now()}`).toString('base64');

        return NextResponse.json({
            message: 'Login successful',
            student: {
                id: student.id,
                name: student.name,
                email: student.email,
                phone: student.phone,
                course: student.course,
                enrolledAt: student.enrolledAt,
            },
            token: sessionToken,
        }, { status: 200 });

    } catch (error) {
        console.error("Login error:", error);
        return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
    }
}
