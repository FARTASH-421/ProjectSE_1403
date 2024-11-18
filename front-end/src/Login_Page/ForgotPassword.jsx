import React, { useState } from 'react';
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./firebase";
import './ForgotPassword.css';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');

        try {
            await sendPasswordResetEmail(auth, email);
            setMessage(`لینک بازیابی به ${email} ارسال شد.`);
        } catch (err) {
            setError('خطایی رخ داد. لطفاً دوباره تلاش کنید.');
            console.error(err);
        }
    };

    return (
        <div className="forgot-password-container">
            <h2>فراموشی گذرواژه</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="ایمیل خود را وارد کنید"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">ارسال لینک بازیابی</button>
            </form>
            {message && <p className="message">{message}</p>}
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default ForgotPassword;
