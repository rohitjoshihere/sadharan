import { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { saveEmail } from '../utils/emailSaver.js';
import './Newsletter.css';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) return;

        setStatus('loading');
        setTimeout(() => {
            const success = saveEmail(email);
            if (success) {
                setStatus('success');
                setEmail('');
            } else {
                setStatus('idle');
                alert('Something went wrong. Please try again.');
            }
        }, 600);
    };

    return (
        <section className="newsletter-section">
            <div className="newsletter-container container">
                <div className="newsletter-content">
                    <h2 className="newsletter-title">Join the Sadharan Circle</h2>
                    <p className="newsletter-desc">
                        Subscribe for early access to new collections, exclusive offers, and stories from our journal.
                    </p>

                    {status === 'success' ? (
                        <div className="success-message fade-in" style={{ justifyContent: 'center', marginTop: '1rem', color: 'green' }}>
                            <CheckCircle size={20} />
                            <span>Successfully subscribed!</span>
                        </div>
                    ) : (
                        <form className="newsletter-form" onSubmit={handleSubmit}>
                            <div className="input-group">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    required
                                    className="newsletter-input"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={status === 'loading'}
                                />
                                <button type="submit" className="newsletter-btn" disabled={status === 'loading'}>
                                    {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                                </button>
                            </div>
                        </form>
                    )}
                    <p className="newsletter-note">Minimal emails, maximum value. No spam, ever.</p>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
