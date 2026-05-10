import { NextResponse } from 'next/server';
import { db } from '../../../lib/firebase';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { sendConfirmationEmail } from '../../../lib/mailer';
export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, phone, course } = body;

        // Validation
        if (!name || !email || !phone || !course) {
            return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
        }

        const studentsRef = collection(db, 'students');

        // Check if student already exists (by email)
        const emailQuery = query(studentsRef, where('email', '==', email.toLowerCase()));
        const emailSnapshot = await getDocs(emailQuery);

        let studentExists = !emailSnapshot.empty;

        if (studentExists && course !== 'Requested Advisor Callback') {
            return NextResponse.json({ error: 'A student with this email is already enrolled.' }, { status: 409 });
        }

        // Check if student already exists (by phone)
        const normalizedPhone = phone.replace(/\s+/g, '');
        const phoneQuery = query(studentsRef, where('phone', '==', normalizedPhone));
        const phoneSnapshot = await getDocs(phoneQuery);

        if (!phoneSnapshot.empty && course !== 'Requested Advisor Callback') {
            return NextResponse.json({ error: 'A student with this phone number is already enrolled.' }, { status: 409 });
        }

        // Save student to Firestore if they don't exist, OR if it's an advisor callback we can still save a new record or skip
        // Actually, for advisor callback, if they exist we might want to just send the email and skip DB insert, or insert it.
        // Let's insert it so the admin can see the new request.
        const newStudent = {
            name,
            email: email.toLowerCase(),
            phone: normalizedPhone,
            course,
            enrolledAt: new Date().toISOString(),
            status: 'active'
        };

        const docRef = await addDoc(studentsRef, newStudent);
        console.log('Student enrolled/requested with ID:', docRef.id);

        // Send confirmation email
        try {
            await sendConfirmationEmail(email.toLowerCase(), name, course);
            console.log('Confirmation email sent to:', email);
        } catch (emailError) {
            console.error("Failed to send confirmation email:", emailError);
            // We don't fail the overall request if the email fails to send
        }

        return NextResponse.json({ message: 'Application received! Welcome to VD Financepedia.' }, { status: 200 });

    } catch (error) {
        console.error("Enrollment error:", error);
        return NextResponse.json({ error: 'Failed to process enrollment. Please try again.' }, { status: 500 });
    }
}
