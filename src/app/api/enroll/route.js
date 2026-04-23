import { NextResponse } from 'next/server';
import { db } from '../../../lib/firebase';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

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

        if (!emailSnapshot.empty) {
            return NextResponse.json({ error: 'A student with this email is already enrolled.' }, { status: 409 });
        }

        // Check if student already exists (by phone)
        const normalizedPhone = phone.replace(/\s+/g, '');
        const phoneQuery = query(studentsRef, where('phone', '==', normalizedPhone));
        const phoneSnapshot = await getDocs(phoneQuery);

        if (!phoneSnapshot.empty) {
            return NextResponse.json({ error: 'A student with this phone number is already enrolled.' }, { status: 409 });
        }

        // Save student to Firestore
        const newStudent = {
            name,
            email: email.toLowerCase(),
            phone: normalizedPhone,
            course,
            enrolledAt: new Date().toISOString(),
            status: 'active'
        };

        const docRef = await addDoc(studentsRef, newStudent);
        console.log('Student enrolled with ID:', docRef.id);

        return NextResponse.json({ message: 'Application received! Welcome to VD Financepedia.' }, { status: 200 });

    } catch (error) {
        console.error("Enrollment error:", error);
        return NextResponse.json({ error: 'Failed to process enrollment. Please try again.' }, { status: 500 });
    }
}
