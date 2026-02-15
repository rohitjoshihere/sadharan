import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Newsletter.css';

const Newsletter = () => {
    return (
        <section className="newsletter-section">
            <div className="newsletter-container container">
                <div className="newsletter-content">
                    <h2 className="newsletter-title">Join the Sadharan Circle</h2>
                    <p className="newsletter-desc">
                        Subscribe for early access to new collections, exclusive offers, and stories from our journal.
                    </p>
                    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="input-group">
                            <input
                                type="email"
                                placeholder="Your email address"
                                required
                                className="newsletter-input"
                            />
                            <button type="submit" className="newsletter-btn">
                                Subscribe
                            </button>
                        </div>
                    </form>
                    <p className="newsletter-note">Minimal emails, maximum value. No spam, ever.</p>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
