import { useState } from 'react';
import { saveEmail } from '../utils/emailSaver.js';
import { CheckCircle } from 'lucide-react';
import './LaunchPreview.css';

const LaunchPreview = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) return;

        // Simulate network request
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
        }, 800);
    };

    return (
        <section className="launch-section">
            <div className="launch-container container">
                <div className="launch-content animate-fade-in">
                    <span className="launch-subtitle">Coming Soon</span>
                    <h2 className="launch-title">A New Chapter of Simplicity</h2>
                    <p className="launch-description">
                        We are preparing something special. The new Sadharan collection is on its way, bringing you the essence of timeless design and effortless style. Stay tuned for the reveal.
                    </p>
                    <div className="launch-newsletter">
                        <p>Be the first to know available.</p>

                        {status === 'success' ? (
                            <div className="success-message fade-in">
                                <CheckCircle size={20} className="success-icon" />
                                <span>Thank you! We'll keep you posted.</span>
                            </div>
                        ) : (
                            <form className="mini-form" onSubmit={handleSubmit}>
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    aria-label="Email for updates"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    disabled={status === 'loading'}
                                />
                                <button type="submit" disabled={status === 'loading'}>
                                    {status === 'loading' ? 'Sending...' : 'Notify Me'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
                <div className="launch-image-wrapper animate-fade-in delay-2">
                    <div className="image-backdrop"></div>
                    <img src="/hero2.jpg" alt="Sadharan Preview" className="launch-img" />
                </div>
            </div>
        </section>
    );
};

export default LaunchPreview;
