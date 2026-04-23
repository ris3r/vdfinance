'use client';
import React, { useEffect } from 'react';
import Button from './Button';

export default function RazorpayButton({ children, style, className, variant }) {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    const handlePayment = () => {
        if (!window.Razorpay) {
            alert('Razorpay SDK failed to load. Are you online?');
            return;
        }

        const options = {
            key: "rzp_test_SgyvgS5PY5frGz", // User's API key
            amount: "19900", // ₹199 in paise
            currency: "INR",
            name: "VD Financepedia",
            description: "Masterclass: The Hidden Mechanics",
            image: "https://via.placeholder.com/150/000000/FFD700?text=VD", // Fallback logo
            handler: function (response) {
                // In a production app, verify payment signature on the server here.
                window.location.href = '/thank-you'; 
            },
            prefill: {
                name: "",
                email: "",
                contact: ""
            },
            theme: {
                color: "#D4AF37"
            }
        };

        const rzp1 = new window.Razorpay(options);
        rzp1.on('payment.failed', function (response) {
            alert("Payment failed: " + response.error.description);
        });
        rzp1.open();
    };

    return (
        <Button 
            variant={variant} 
            style={style} 
            className={className} 
            onClick={handlePayment}
        >
            {children}
        </Button>
    );
}
