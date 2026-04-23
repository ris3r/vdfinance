import { NextResponse } from 'next/server';
import { db } from '../../../lib/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

export async function POST(request) {
    try {
        const body = await request.json();
        const { credential } = body; // Can be email or phone

        if (!credential) {
            return NextResponse.json({ error: 'Please enter your email or phone number.' }, { status: 400 });
        }

        const normalizedCredential = credential.trim().toLowerCase().replace(/\s+/g, '');
        const studentsRef = collection(db, 'students');

        // Try to find by email first
        const emailQuery = query(studentsRef, where('email', '==', normalizedCredential));
        const emailSnapshot = await getDocs(emailQuery);

        let student = null;

        if (!emailSnapshot.empty) {
            const doc = emailSnapshot.docs[0];
            student = { id: doc.id, ...doc.data() };
        } else {
            // Try to find by phone
            const phoneToSearch = normalizedCredential.replace(/^\+91/, '');
            const phoneQuery = query(studentsRef, where('phone', '==', phoneToSearch));
            const phoneSnapshot = await getDocs(phoneQuery);

            // Also try with +91 prefix
            if (phoneSnapshot.empty) {
                const phoneQuery2 = query(studentsRef, where('phone', '==', '+91' + phoneToSearch));
                const phoneSnapshot2 = await getDocs(phoneQuery2);
                if (!phoneSnapshot2.empty) {
                    const doc = phoneSnapshot2.docs[0];
                    student = { id: doc.id, ...doc.data() };
                }
            } else {
                const doc = phoneSnapshot.docs[0];
                student = { id: doc.id, ...doc.data() };
            }
        }

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
