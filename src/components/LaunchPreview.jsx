import './LaunchPreview.css';

const LaunchPreview = () => {
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
                        <form className="mini-form" onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="Your email address" aria-label="Email for updates" />
                            <button type="submit">Notify Me</button>
                        </form>
                    </div>
                </div>
                <div className="launch-image-wrapper animate-fade-in delay-2">
                    <div className="image-backdrop"></div>
                    <img src="/about.JPG" alt="Sadharan Preview" className="launch-img" />
                </div>
            </div>
        </section>
    );
};

export default LaunchPreview;
