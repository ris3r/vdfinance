'use client';
import React, { useState } from 'react';
import Button from './Button';
import AdvisorModal from './AdvisorModal';

export default function AdvisorCTA({ variant, style, children }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <Button
                variant={variant || 'secondary'}
                style={style}
                onClick={() => setIsModalOpen(true)}
            >
                {children || 'Speak to an Advisor'}
            </Button>
            <AdvisorModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}
